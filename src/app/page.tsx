import styles from './home.module.scss';

export default function Home() {
	return (
		<main>
			<div className={styles.heroContainer}>
				<div className={styles.headline}>
					<h1>Boston Born Concept</h1>
				</div>
				<p className={styles.subHeadline}>Join an upcoming event</p>
				<a
					href='/events'
					className={styles.btn}
				>
					Sign Up
				</a>
			</div>
		</main>
	);
}
