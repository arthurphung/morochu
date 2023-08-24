'use client';

import styles from './events.module.scss';
import { db } from '@/config/firebase';
import { collection, getDocs, addDoc } from 'firebase/firestore';
import { useEffect, useState } from 'react';

interface Guest {
	firstName: string;
	lastName: string;
	email: string;
	id?: string;
}

export default function Events() {
	const [guestList, setGuestList] = useState<Guest[]>([]);
	const [formData, setFormData] = useState<Guest>({
		firstName: '',
		lastName: '',
		email: '',
	});
	const [isVisible, setIsVisible] = useState<boolean>(true);

	const guestsCollectionRef = collection(db, 'guests');

	const getGuestList = async () => {
		try {
			const data = await getDocs(guestsCollectionRef);
			const filteredData = data.docs.map((doc) => ({
				...doc.data(),
				id: doc.id,
			})) as Guest[];
			console.log(filteredData);
			setGuestList(filteredData);
		} catch (error) {
			console.error(error);
		}
	};

	useEffect(() => {
		// getGuestList();
	}, []);

	const handleSubmit = async (e: React.FormEvent) => {
		e.preventDefault();
		try {
			await addDoc(guestsCollectionRef, {
				firstName: formData.firstName,
				lastName: formData.lastName,
				email: formData.email,
			});
			setIsVisible(false);
		} catch (error) {
			console.error(error);
		}
	};

	const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		const { name, value } = e.target;
		setFormData((prevFormData) => ({ ...prevFormData, [name]: value }));
	};

	const renderForm = () => {
		return (
			<>
				<header>
					<h1 className={styles.title}>Register</h1>
					<p className={styles.subTitle}>September 2, 2023 Event</p>
				</header>
				<form
					className={styles.form}
					onSubmit={handleSubmit}
				>
					<div>
						<div className={styles.formGroup}>
							<input
								placeholder='First name'
								id='firstName'
								className={styles.formInput}
								name='firstName'
								value={formData.firstName}
								onChange={handleChange}
								type='text'
							/>
						</div>
						<div className={styles.formGroup}>
							<input
								placeholder='Last name'
								id='lastName'
								className={styles.formInput}
								name='lastName'
								value={formData.lastName}
								onChange={handleChange}
								type='text'
							/>
						</div>
						<div className={styles.formGroup}>
							<input
								placeholder='Email'
								id='email'
								className={styles.formInput}
								name='email'
								value={formData.email}
								onChange={handleChange}
								type='email'
							/>
						</div>
					</div>
					<button
						type='submit'
						className={styles.btn}
					>
						Submit
					</button>
				</form>
			</>
		);
	};

	const renderPostMsg = () => {
		return (
			<div className={styles.postMsg}>
				Thank you for registering, {formData.firstName}! See you soon.
			</div>
		);
	};

	return (
		<div className={`${styles.container} navPadding`}>
			{isVisible ? renderForm() : renderPostMsg()}
		</div>
	);
}
