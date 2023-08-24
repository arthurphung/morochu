import Image from 'next/image';
import styles from './profileCard.module.scss';

interface ProfileCardProps {
	name: string;
	description: string;
	src: string;
	social: string;
}

export default function ProfileCard({
	name,
	description,
	src,
	social,
}: ProfileCardProps) {
	return (
		<div className={styles.profileCard}>
			<div className={styles.profileColor}></div>
			<div className={styles.profile}>
				<Image
					src={`/images/${src}`}
					alt='profile-picture'
					width={150}
					height={150}
				/>
				<div className={styles.profileTitle}>{name}</div>
				<div className={styles.profileDescription}>{description}</div>
				<div>
					<a
						className={styles.profileButton}
						href={social}
						target='_blank'
					>
						Contact me
					</a>
				</div>
			</div>
		</div>
	);
}
