import styles from './Products.module.css';

export default function ProductDetail({ product }) {
  let download;
  let file;
  switch (product.id) {
    case 2:
      download = 'Download Catalog Dehumidifier';
      file = '/files/CATALOG-DEHUMIDIFIRE.pdf';
      break;
    case 4:
      download = 'Download Catalog LG Air Cooled Inverter';
      file = '/files/CATALOG-LG-AIR-COOLED-INVERTER-SCROLL-CHILLER.pdf';
      break;
    default:
      download = 'Download Catalog All Product';
      file = '/files/CATALOG-ART-COOL.pdf';
      break;
  }
  return (
    <section className={styles.products} id="products">
        <div className="container">
            <div className="wrapper-title">
                <h1 className="title">
                    {product.name}
                </h1>
            </div>
            <div className={styles.wrapperDetail}>
                <h5>
                    <a href={file} target="_blank" rel="noreferrer">
                        {download}
                    </a>
                </h5>
                {product.detail
                  ? <img src={`/images/${product.detail}`} alt="" />
                  : (
                  <img src={`/images/${product.image}`} alt="" />
                  )}
            </div>
        </div>
    </section>
  );
}
