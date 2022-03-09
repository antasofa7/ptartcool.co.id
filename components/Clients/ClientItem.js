import styles from './Clients.module.css';

export default function ClientItem({ client }) {
  return (
    <div className={styles.col}>
        <img src={`/images/${client.logo}`} alt={client.name} />
    </div>
  );
}
