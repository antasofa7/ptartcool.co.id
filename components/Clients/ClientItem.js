import Image from 'next/image';
import styles from './Clients.module.css';

export default function ClientItem({ client }) {
  return (
    <div className={styles.col}>
      <Image width="100%" height="100%" src={`/images/${client.logo}`} alt={client.name} layout="" objectFit="contain" />
    </div>
  );
}
