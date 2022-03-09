import Link from 'next/link';
import styles from './Projects.module.css';

export default function ProjectItem({ project }) {
  return (
    <div className={styles.row}>
        <div className={styles.wrapperImage}>
            <Link href="projects">
                <a>
                    <h1 className={styles.heading}>{project.name}</h1>
                    <div className={styles.gradient} />
                    <img src={`/images/${project.image}`} alt={project.name} />
                </a>
            </Link>
        </div>
    </div>
  );
}
