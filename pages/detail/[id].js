import Chat from '../../components/Chat';
import Footer from '../../components/Footer';
import Navbar from '../../components/Navbar';
import ProductDetail from '../../components/Products/ProductDetail';
import Spacing from '../../components/Spacing';
import { dataProducts } from '../../data';

export default function index({ product }) {
  return (
    <>
        <Navbar />
        <Spacing />
        <Chat />
        <ProductDetail product={product} />
        <Footer />
    </>
  );
}

export async function getStaticPaths() {
  const products = await dataProducts;

  const paths = products.map((product) => ({
    params: {
      id: `${product.id}`,
    },
  }));
  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps(context) {
  const { id } = context.params;
  const product = await dataProducts[id - 1];
  return {
    props: {
      product,
    },
  };
}
