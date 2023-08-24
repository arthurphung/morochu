import styles from './shop.module.scss';
import Image from 'next/image';

export default function Merch() {
	return (
		<div className={`${styles.container} navPadding`}>
			<h1>Launching soon</h1>
			<a
				href='/'
				className={styles.btn}
			>
				Home
			</a>
		</div>
	);
}
