import { dataClients } from '../../data/clients';
import Title from '../Title';
import ClientItem from './ClientItem';
import styles from './Clients.module.css';

export default function Clients() {
  return (
    <section className={styles.clients} id="clients">
        <div className="container">
            <Title title="Clients" />
            <div className={styles.row}>
                {dataClients.map((client) => <ClientItem key={client.id} client={client} />)}
            </div>
        </div>
    </section>
  );
}
