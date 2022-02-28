import React from 'react';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import ProductComponent from '../components/Products';
import Spacing from '../components/Spacing';
import { dataProducts } from '../data';

export default function Products({ products }) {
  return (
    <>
        <Navbar />
        <Spacing />
        <ProductComponent dataProducts={products} />
        <Footer />
    </>
  );
}

export async function getStaticProps() {
  const products = await dataProducts;
  return {
    props: {
      products,
    },
  };
}
