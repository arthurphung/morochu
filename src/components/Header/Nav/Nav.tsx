import styles from './nav.module.scss';
import { motion } from 'framer-motion';
import { height } from '../anim';
import Body from './Body/Body';
import Img from './Image/Img';
import Footer from './Footer/Footer';
import { useState } from 'react';

interface SelectedLink {
	isActive: boolean;
	index: number;
}

export default function Nav() {
	const links = [
		{
			title: 'Home',
			href: '/',
			src: 'morochu.jpg',
		},
		{
			title: 'About Us',
			href: '/about',
			src: 'about.jpg',
		},
		{
			title: 'Events',
			href: '/events',
			src: 'events.jpg',
		},
		{
			title: 'Shop',
			href: '/shop',
			src: 'merch.jpg',
		},
		{
			title: 'Contact',
			href: '/contact',
			src: 'contact.jpg',
		},
	];

	const [selectedLink, setSelectedLink] = useState<SelectedLink>({
		isActive: false,
		index: 0,
	});

	return (
		<motion.div
			className={styles.nav}
			variants={height}
			initial='initial'
			animate='enter'
			exit='exit'
		>
			<div className={styles.wrapper}>
				<div className={styles.container}>
					<Body
						links={links}
						selectedLink={selectedLink}
						setSelectedLink={setSelectedLink}
					/>
					<Footer />
				</div>
				<Img
					src={links[selectedLink.index].src}
					isActive={selectedLink.isActive}
				/>
			</div>
		</motion.div>
	);
}
