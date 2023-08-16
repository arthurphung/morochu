import styles from './nav.module.scss';
import { motion } from 'framer-motion';
import { height } from '../anim';
import Body from './Body/Body';

export default function Nav() {
	const links = [
		{
			title: 'Home',
			href: '/',
			src: 'home.png',
		},
		{
			title: 'Shop',
			href: '/shop',
			src: 'shop.png',
		},
		{
			title: 'About Us',
			href: '/about',
			src: 'about.png',
		},
		{
			title: 'Events',
			href: '/events',
			src: 'events.png',
		},
		{
			title: 'Merchandise',
			href: '/merch',
			src: 'merch.png',
		},
		{
			title: 'Contact',
			href: '/contact',
			src: 'contact.png',
		},
	];

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
					<Body links={links} />
					{/* <Footer /> */}
				</div>
				{/* <Image /> */}
			</div>
		</motion.div>
	);
}
