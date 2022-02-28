import Link from 'next/link';
import styles from '../styles/NotFound.module.css';

export default function Custom404() {
  return (
    <div className={styles.notFound}>
        <div className="container">
            <h1>404</h1>
            <div className={styles.wrapper}>
                <h4>Something Went Wrong</h4>
                <p>Error 404 Page Not Found</p>
                <Link href="/">
                    <a>GO TO HOME</a>
                </Link>
            </div>
        </div>
    </div>
  );
}
