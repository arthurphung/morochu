import styles from './about.module.scss';
import ProfileCard from '@/components/ProfileCard/ProfileCard';

export default function About() {
	const members = [
		{
			name: 'Mohammed Al Saleh',
			description: 'Head manager',
			src: 'mo-propic.jpg',
		},
		{
			name: 'Moin Khwaja',
			description: 'Barista',
			src: 'moin-propic.jpg',
		},
		{
			name: 'Tim Chu',
			description: 'Barista',
			src: 'tim-propic.jpg',
		},
		{
			name: 'Roshun Menon',
			description: 'Event planner',
			src: 'roshun-propic.jpg',
		},
		{
			name: 'Arthur Phung',
			description: 'Lead web engineer',
			src: 'arthur-propic.jpg',
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
					/>
				))}
			</div>
		</>
	);
}
