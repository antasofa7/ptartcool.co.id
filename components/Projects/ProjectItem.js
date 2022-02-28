import Link from 'next/link';
import styles from './Projects.module.css';

export default function ProjectItem({ home }) {
  return (
    <div className={styles.row}>
        <div className={styles.wrapperImage}>
            <Link href="projects">
                <a>
                    <h1 className={styles.heading}>Chiller Instalation Project</h1>
                    <div className={styles.gradient} />
                    <img src="/images/project-image.png" alt="header" />
                </a>
            </Link>
        </div>
        {!home
        && (
            <p className={styles.keterangan}>
                Keterangan:
            </p>
        )}
    </div>
  );
}
