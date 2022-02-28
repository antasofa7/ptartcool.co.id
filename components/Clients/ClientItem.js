import styles from './Clients.module.css';

export default function ClientItem({ logo }) {
  return (
    <div className={styles.col}>
        <img src={`/images/${logo}`} alt="clients" />
    </div>
  );
}
