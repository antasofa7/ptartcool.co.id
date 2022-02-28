import Link from 'next/link';
import styles from './Products.module.css';

export default function ProductItem({ id, name, image }) {
  return (
    <div className={styles.col}>
      <Link href={`/detail/${id}`}>
        <a>
          <img src={`/images/${image}`} alt="" />
          <p className={styles.name}>
              {name}
          </p>
        </a>
      </Link>
    </div>
  );
}
