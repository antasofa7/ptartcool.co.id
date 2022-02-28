import Banner from '../components/Banner';
import Chat from '../components/Chat';
import Clients from '../components/Clients';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import ProductComponent from '../components/Products';
import Projects from '../components/Projects';
import WhyUs from '../components/WhyUs';
import { dataProducts } from '../data';

export default function Home({ products }) {
  return (
    <>
      <header id="home">
          <Navbar />
          <Banner />
      </header>

      <Chat />
      <WhyUs />
      <ProductComponent otherProducts dataProducts={products} />
      <Projects />
      <Clients />
      <Footer />
    </>
  );
}

export async function getStaticProps() {
  dataProducts.length = 4;
  const products = await dataProducts;
  return {
    props: {
      products,
    },
  };
}
