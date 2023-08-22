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

	const guestsCollectionRef = collection(db, 'guests');

	useEffect(() => {
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

		getGuestList();
	}, []);

	const handleSubmit = async (e: React.FormEvent) => {
		e.preventDefault();
		try {
			await addDoc(guestsCollectionRef, {
				firstName: formData.firstName,
				lastName: formData.lastName,
				email: formData.email,
			});
		} catch (error) {
			console.error(error);
		}
	};

	const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		const { name, value } = e.target;
		setFormData((prevFormData) => ({ ...prevFormData, [name]: value }));
	};

	return (
		<div className={`${styles.formContainer} navPadding`}>
			<form
				className={styles.form}
				onSubmit={handleSubmit}
			>
				<label htmlFor='firstName'>First Name:</label>
				<input
					id='firstName'
					name='firstName'
					value={formData.firstName}
					onChange={handleChange}
					type='text'
				/>
				<label htmlFor='lastName'>Last Name:</label>
				<input
					id='lastName'
					name='lastName'
					value={formData.lastName}
					onChange={handleChange}
					type='text'
				/>
				<label>Email:</label>
				<input
					id='email'
					name='email'
					value={formData.email}
					onChange={handleChange}
					type='email'
				/>
				<button type='submit'>Submit</button>
			</form>
		</div>
	);
}
