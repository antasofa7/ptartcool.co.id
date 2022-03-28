import Image from 'next/image';
import Link from 'next/link';
import styles from './Products.module.css';

export default function ProductItem({ id, name, image }) {
  return (
    <div className={styles.col}>
      <Link href={`/detail/${id}`}>
        <a>
          <Image width="100%" height="100%" src={`/images/${image}`} alt={name} layout="responsive" objectFit="contain" />
          <p className={styles.name}>
              {name}
          </p>
        </a>
      </Link>
    </div>
  );
}
