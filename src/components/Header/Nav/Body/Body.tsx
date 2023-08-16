import styles from './body.module.scss';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { translate } from '../../anim';
import { Dispatch, SetStateAction } from 'react';
import { blur } from '../../anim';

interface Links {
    title: string;
    href: string;
    src: string;
}

interface SelectedLink {
    isActive: boolean;
    index: number;
}

interface BodyProps {
    links: Links[];
    selectedLink: SelectedLink;
    setSelectedLink: Dispatch<SetStateAction<SelectedLink>>;
}

export default function Body({
    links,
    selectedLink,
    setSelectedLink,
}: BodyProps) {
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
                        onMouseOver={() => {
                            setSelectedLink({ isActive: true, index });
                        }}
                        onMouseLeave={() => {
                            setSelectedLink({ isActive: false, index });
                        }}
                    >
                        <motion.p
                            variants={blur}
                            initial='initial'
                            animate={
                                selectedLink.isActive &&
                                selectedLink.index != index
                                    ? 'open'
                                    : 'closed'
                            }
                        >
                            {getChar(title)}
                        </motion.p>
                    </Link>
                );
            })}
        </div>
    );
}
