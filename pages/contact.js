import Head from 'next/head';
import ContactComponent from '../components/Contact';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import Spacing from '../components/Spacing';

export default function Contact() {
  return (
    <>
        <Head>
          <title>Contact | PT Art Cool</title>
        </Head>
        <Navbar />
        <Spacing />
        <ContactComponent />
        <Footer />
    </>
  );
}
