'use client';

import styles from './header.module.scss';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { background, opacity } from './anim';
import { useState, useEffect } from 'react';
import Nav from './Nav/Nav';
import { usePathname } from 'next/navigation';
import Image from 'next/image';

export default function Header() {
	const [isActive, setIsActive] = useState<boolean>(false);
	const pathName = usePathname();

	useEffect(() => {
		setIsActive(false);
	}, [pathName]);

	return (
		<div className={styles.header}>
			<div className={styles.bar}>
				<Link
					href='/'
					className={styles.logo}
				>
					<div className={styles.imageContainer}>
						<Image
							src={'/images/morochu-logo.png'}
							alt='morochu-logo'
							fill={true}
							sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw'
						/>
					</div>
				</Link>

				<div
					onMouseDown={() => {
						setIsActive(!isActive);
					}}
					className={styles.el}
				>
					<div
						className={`${styles.burger} ${
							isActive ? styles.burgerActive : ''
						}`}
					></div>
					<div className={styles.label}>
						<motion.p
							variants={opacity}
							animate={isActive ? 'closed' : 'open'}
						>
							Menu
						</motion.p>
						<motion.p
							variants={opacity}
							animate={!isActive ? 'closed' : 'open'}
						>
							Close
						</motion.p>
					</div>
				</div>

				<motion.div
					variants={opacity}
					animate={isActive ? 'closed' : 'open'}
					className={styles.ctaContainer}
				>
					<div>
						<a
							href='/events'
							className={styles.ctaBtn}
						>
							Sign Up
						</a>
					</div>
				</motion.div>
			</div>
			<motion.div
				variants={background}
				initial='initial'
				animate={isActive ? 'open' : 'closed'}
				className={styles.background}
			></motion.div>
			<AnimatePresence mode='wait'>{isActive && <Nav />}</AnimatePresence>
		</div>
	);
}
