import styles from './about.module.scss';
import ProfileCard from '@/components/ProfileCard/ProfileCard';

export default function About() {
	const members = [
		{
			name: 'Mohammed Al Saleh',
			description: 'Head manager',
			src: 'mo-propic.jpg',
			social: 'https://www.instagram.com/amouni_saleh/',
		},
		{
			name: 'Moin Khwaja',
			description: 'Barista',
			src: 'moin-propic.jpg',
			social: 'https://www.instagram.com/mointokyo_/',
		},
		{
			name: 'Tim Chu',
			description: 'Barista',
			src: 'tim-propic.jpg',
			social: 'https://www.instagram.com/chudrinkscoffee/',
		},
		{
			name: 'Roshun Menon',
			description: 'Event planner',
			src: 'roshun-propic.jpg',
			social: 'https://www.instagram.com/rocean_12/',
		},
		{
			name: 'Arthur Phung',
			description: 'Lead web engineer',
			src: 'arthur-propic.jpg',
			social: 'https://www.linkedin.com/in/arthur-phung/',
		},
	];

	return (
		<>
			<div className={`${styles.container} navPadding`}>
				<header>
					<h1>A Boston Born Concept</h1>
					<p>
						Morochu was founded as a basis for creating connections
						between people. Here, we believe that the simple act of
						sharing a cup of coffee has the power to transcend
						boundaries, unite diverse souls, and create lifelong
						friendships.
					</p>
				</header>
			</div>
			<div className={styles.profilesContainer}>
				{members.map((member, index) => (
					<ProfileCard
						key={`m_${index}`}
						name={member.name}
						description={member.description}
						src={member.src}
						social={member.social}
					/>
				))}
			</div>
		</>
	);
}
