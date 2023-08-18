import styles from './home.module.scss';

export default function Home() {
	return (
		<main>
			<div className={styles.heroContainer}>
				<div className={styles.headline}>
					<h1>Boston Born Concept</h1>
				</div>
				<p className={styles.subHeadline}>
					Morochu was founded as a basis for creating connections
					between people. Here, we believe that the simple act of
					sharing a cup of coffee has the power to transcend
					boundaries, unite diverse souls, and create lifelong
					friendships.
				</p>
				<a
					href='/events'
					className={styles.btn}
				>
					Reserve
				</a>
			</div>
		</main>
	);
}
