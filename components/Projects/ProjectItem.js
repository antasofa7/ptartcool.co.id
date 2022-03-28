import Image from 'next/image';
import Link from 'next/link';
import styles from './Projects.module.css';

export default function ProjectItem({ project }) {
  return (
    <div className={styles.row}>
        <div className={styles.wrapperImage}>
            <Link href="/projects">
                <a>
                    <h1 className={styles.heading}>{project.name}</h1>
                    <div className={styles.gradient} />
                    <Image src={`/images/${project.image}`} alt={project.name} layout="fill" objectFit="cover" />
                </a>
            </Link>
        </div>
    </div>
  );
}
