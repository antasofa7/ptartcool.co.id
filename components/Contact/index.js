import { useState } from 'react';
import emailjs from '@emailjs/browser';
import { toast } from 'react-toastify';
import styles from './Contact.module.css';

export default function ContactComponent() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [message, setMessage] = useState('');

  const _handleSubmit = async (e) => {
    e.preventDefault();

    const data = {
      name,
      email,
      phoneNumber,
      message,
    };

    try {
      emailjs.send('service_wpbf6xq', 'template_eayealg', data, 'GEH9FBa_G3oabaQs-')
        .then((res) => {
          if (res.status === 200) {
            toast.success('Message sent!');
            setName('');
            setEmail('');
            setPhoneNumber('');
            setMessage('');
          }
        }, (error) => {
          toast.error(error.text);
        });
    } catch (error) {
      toast.error('error >> ', error);
    }
  };

  return (
    <section className={styles.contact} id="contact">
        <div className="container">
            <div className="wrapper-title">
                <h1 className="title">
                    Contact Us
                </h1>
            </div>
            <div className={styles.wrapper}>
                <div className={styles.row}>
                    <label htmlFor="name">Name</label>
                    <input type="text" placeholder="Please enter your name" value={name} onChange={(e) => setName(e.target.value)} name={name} />
                </div>
                <div className={styles.row}>
                    <label htmlFor="email">Email</label>
                    <input type="email" placeholder="Please enter your email" value={email} onChange={(e) => setEmail(e.target.value)} name={email} />
                </div>
                <div className={styles.row}>
                    <label htmlFor="phoneNumber">Phone Number</label>
                    <input type="tel" placeholder="Please enter your phone number" value={phoneNumber} onChange={(e) => setPhoneNumber(e.target.value)} name={phoneNumber} />
                </div>
                <div className={styles.row}>
                    <label htmlFor="message">Message</label>
                    <textarea cols="30" rows="10" placeholder="Please enter your message" value={message} onChange={(e) => setMessage(e.target.value)} name={message} />
                </div>
                <div className={`${styles.row} ${styles.wrapperBtn}`}>
                    {name && email && phoneNumber && message
                      ? (
                        <button type="submit" className={styles.btn} onClick={(e) => _handleSubmit(e)}>
                            Send Message
                            <div className={styles.icon}>
                                <svg width="6" height="12" viewBox="0 0 7 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M1 1L5.5 7L1 13" stroke="#F5FFFE" strokeWidth="3" strokeLinecap="round" />
                                </svg>
                            </div>
                        </button>
                      )
                      : (
                        <button type="submit" className={styles.btnDisabled} disabled>
                            Send Message
                            <div className={styles.icon}>
                                <svg width="6" height="12" viewBox="0 0 7 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M1 1L5.5 7L1 13" stroke="#F5FFFE" strokeWidth="3" strokeLinecap="round" />
                                </svg>
                            </div>
                        </button>
                      )}
                </div>
            </div>
        </div>
    </section>
  );
}
