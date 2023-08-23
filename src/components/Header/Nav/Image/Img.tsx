import styles from './img.module.scss';
import { opacity } from '../../anim';
import { motion } from 'framer-motion';
import Image from 'next/image';

interface ImageProps {
	src: string;
	isActive: boolean;
}

export default function Img({ src, isActive }: ImageProps) {
	return (
		<motion.div
			className={styles.imageContainer}
			variants={opacity}
			initial='initial'
			animate={isActive ? 'open' : 'closed'}
		>
			<Image
				src={`/images/${src}`}
				fill={true}
				alt='image'
				sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw'
			/>
		</motion.div>
	);
}
