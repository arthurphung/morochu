import styles from './footer.module.scss';
import { translate } from '../../anim';
import { motion } from 'framer-motion';

export default function Footer() {
	return (
		<div className={styles.footer}>
			<ul>
				<motion.li
					custom={[0.3, 0]}
					variants={translate}
					initial='initial'
					animate='enter'
					exit='exit'
				>
					<span>Developer:</span> Arthur Phung
				</motion.li>
			</ul>
			<ul>
				<motion.li
					custom={[0.3, 0]}
					variants={translate}
					initial='initial'
					animate='enter'
					exit='exit'
				>
					<span>Location:</span> Boston, MA
				</motion.li>
			</ul>
			<ul>
				<motion.li
					custom={[0.3, 0]}
					variants={translate}
					initial='initial'
					animate='enter'
					exit='exit'
				>
					<span>Company:</span> Morochu
				</motion.li>
			</ul>
			<ul>
				<motion.li
					custom={[0.3, 0]}
					variants={translate}
					initial='initial'
					animate='enter'
					exit='exit'
				>
					Privacy Policy
				</motion.li>
				<motion.li
					custom={[0.3, 0]}
					variants={translate}
					initial='initial'
					animate='enter'
					exit='exit'
				>
					Terms & Conditions
				</motion.li>
			</ul>
		</div>
	);
}
