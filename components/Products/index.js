import Image from 'next/image';
import Link from 'next/link';
import Title from '../Title';
import ProductItem from './ProductItem';
import styles from './Products.module.css';

export default function ProductComponent({ dataProducts, otherProducts }) {
  return (
    <section className={styles.products} id="products">
        <div className="container">
            <Title title="Products" />
            <div className={styles.row}>
                {dataProducts.map((product) => <ProductItem key={product.id} name={product.name} image={product.image} id={product.id} />)}
                {otherProducts
                && (
                    <div className={styles.col}>
                        <Link href="/products">
                            <a className={styles.other}>
                                <div className={styles.gradient} />
                                <Image src="/images/CATALOGUE ART COOL-5.jpg" alt="other image" className={styles.image} layout="fill" objectFit="contain" />
                                <div className={styles.name}>
                                    Other Products
                                    {' '}
                                    <div className={styles.icon}>
                                        <svg width="100%" height="100%" viewBox="0 0 7 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M1 1L5.5 7L1 13" stroke="#01322C" strokeWidth="2" strokeLinecap="round" />
                                        </svg>
                                    </div>
                                </div>
                            </a>
                        </Link>
                    </div>
                )}
            </div>
        </div>
    </section>
  );
}
