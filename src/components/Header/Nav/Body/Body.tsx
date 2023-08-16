import styles from './body.module.scss';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { translate } from '../../anim';

interface Links {
	title: string;
	href: string;
	src: string;
}

interface BodyProps {
	links: Links[];
}

export default function Body({ links }: BodyProps) {
	const getChar = (title: string) => {
		let chars: React.ReactElement[] = [];
		title.split('').forEach((char, index) => {
			chars.push(
				<motion.span
					key={`c_${index}`}
					custom={[index * 0.02, (title.length - index) * 0.01]}
					variants={translate}
					initial='initial'
					animate='enter'
					exit='exit'
				>
					{char}
				</motion.span>
			);
		});

		return chars;
	};

	return (
		<div className={styles.body}>
			{links.map((link, index) => {
				const { title, href } = link;
				return (
					<Link
						key={`1_${index}`}
						href={href}
					>
						<p>{getChar(title)}</p>
					</Link>
				);
			})}
		</div>
	);
}
