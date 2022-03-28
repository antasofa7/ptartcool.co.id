import styles from './Footer.module.css';

export default function Footer() {
  return (
    <footer className={styles.footer}>
        <div className="container">
            <div className={styles.row1}>
                <div className={styles.col}>
                  <div className={styles.map}>
                    <h4 className={styles.heading}>Find Us On Map</h4>
                    <div className={styles.gmap_canvas}>
                        <iframe
                          title="map"
                          width="100%"
                          height="100%"
                          id="gmap_canvas"
                          src="https://maps.google.com/maps?q=PT%20art%20cool&t=&z=11&ie=UTF8&iwloc=&output=embed"
                          frameBorder={0}
                          scrolling="no"
                          marginHeight={0}
                          marginWidth={0}
                        />
                    </div>
                  </div>
                  <div className={styles.product}>
                    <h4 className={styles.heading}>Products</h4>
                    <p>
                      <a href="/files/CATALOG-ART-COOL.pdf" target="_blank" rel="noreferrer">
                        Download Catalog All Product
                      </a>
                    </p>
                    <p>
                      <a href="/files/CATALOG-DEHUMIDIFIRE.pdf" target="_blank" rel="noreferrer">
                        Download Catalog Dehumidifier
                      </a>
                    </p>
                    <p>
                      <a href="/files/CATALOG-LG-AIR-COOLED-INVERTER-SCROLL-CHILLER.pdf" target="_blank" rel="noreferrer">
                        Download Catalog LG Air Cooled Inverter
                      </a>
                    </p>
                  </div>
                </div>
                <div className={styles.col}>
                  <div className={styles.contact}>
                    <h4 className={styles.heading}>Contact Us</h4>
                    <p>
                      <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAABu0lEQVRIS7WVzVECQRCFu3dPAlVqBGIESgRCBhqBZCBGIEYgRCBmoBEIGSwRSAgcQE9M+5qdoWb/cAcLLksNw/u63/SbZTryh4+sT6UAETn7JvlUeIO4x8zLQwspADzxayua/AeSAeTE5xZwhefBkAxgJWaKhRsIzlF1VwGwaorHwZAMYC1GrO/nznfb1Q7S5KgTch6lAIjs1vO24Td3NrU4pRZFmJwTZq2a0FViLdraFjpRuQ42EyK+Z+LHBvPIAhZ4XvjQWqXbTbkOpM8krziIaYujXgpIoUIybnE8CBHXvYUxXZMssHiKii9h0+JHpG1IvgBdxsQdXQuBFILmKiaStybHfRVbyWYE2x7wNQH4zkHqJL4AcBWrsPM9N6oEu0YxRR/o7AXb9ia+9C5CF0O49+TbopA1maHtxHdpb+Irb1Mv1RlbtMMNmQFAt6As/0p8JcC3xXai3m+zUfapSvze90Fqi7zb+wm6Mokoei6bpKrE13rhuDNxlWtOMAAKTgCb5cX9xNcCqHA6XWYo8F5zUuFU4TqpDdhVv7WNADFdwNrOPnQ1ayo89/YLBoSkuHBVhP65zv6jd/ALOgn5Gf/TjVEAAAAASUVORK5CYII=" alt="telephone" />
                      {' '}
                      021 8984 1241 / 42
                    </p>
                    <p>
                      <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAAoUlEQVRIS2NkoDFgpLH5DFgt+P7/v8M/hv/zgZYrEOmAB0wMjImcjIwH0NVjteDr/38PgArliTQcpuwBNyOTIrEW/CfRcLByoAUYDsblA7AF2DRgsxjoY5zqRy0Ah9hoEBFMsaNBNBpEmCEASxUEwwZNAcmF3dC14Mv/fx+AxSw/iT54CAwijBoQX5W5gIRa7SGwykwgusok0eV4ldO8VQEA0NuKGfB0l0kAAAAASUVORK5CYII=" alt="whatsapp" />
                      {' '}
                      0813 1756 6970
                    </p>
                    <p>
                      <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAABF0lEQVRIS+2VzRGCMBCFs9yUg1iB2IkdSAlQGZYAHVgKVCDOiN5YX5Aw4SdOhOHCyMXBZPO995IsJBZ+aOH1xYoAL+ZTJThGZP7M2DJHULQhusp12ohKrjK8H2Yursozl5xjH8DNaIrf80RQWwtALV53UAPkQMkcsOALBnc2IBTeSVDoEiVIol1nFLAVtCeigpm9JyAWblLUhFrNTQkdBQBfQE0k1cgJJje6am1eDNfeV4AWSQJlkcFNX7U8fYEep3EP9Eljbj7qOu5a1T8DxtzI/5r9GaieAxDKTQ3AhVRZm06ZVUQ2R/QPmJzSYA8eXOGC2bUGC2oOgN+5yU27lq1hbkfN0a7DQbu2UDVpyoo+mZP8WxS9ATYcpBkczaTkAAAAAElFTkSuQmCC" alt="email" />
                      {' '}
                      artcool.mkt@gmail.com
                    </p>
                    <p className={styles.address}>
                      <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAACJElEQVRIS7VV21XCQBCdSb4EzhErECsQKiBWIFYgVABUIlQAVKBWIFZAOhA7gHNAv8h4J8mSJU/8YL90M3vvzL0zA9OFD18YnyoJfkVaBwqGTOwhmXackC8kS5ec6RXzuizJUoKdHCYAHpYBgGjSYHdcFFNIsJfAx6P76KEshBwAsd7RTqTNFIyI+NlUVGenk0eSS2AyF6ItQDwDnAZQIpAvAXKNSqaoBKSnJ0OgmgckX2HexB0Fj+9ebA8c4rHqH1UjK43H3V3akwxBkn2UUWSyrBDYtHNDdRsXCSjgXg5zlSuvigyB0d5kj//fAPwIwE8A9pUEhHM87OLPd2jfs6rw017kEQCLCIHht50EG9XYLt+ScY24O41DIifvTLVnE9SIb5h5ow8tgm8QtP5FgIy1K7o5EmGweBBLNEOMZyQCoYfG+FAZG+zo/fHkVBAZhgEb15gnscm+ypQyeQvCtpr8IzKCwegyWdTZDX0qkUh6CHxFwFHfWJIJ7o6rAp6MTEtC/zW+3SKxpzqzNkUxQaxn+AAyDTAHqKj4oIP6mIMZIo5+nEEQVaG9XsfwGHPTNCLS3GMooxnJZq/xhbsoMZuWMO4hr4ZkZrLmFnpgPsTZrSNzZQ7zwg4yJ5le2qLKVlGVFes6WWY2iQ1etgxLJTKZ2htTSQCoO6lXtWkrJbLlOCXRLVu+xiu7KM/QeKGFLYv27Rf9RqTfVv4ml83AOd8uTvAHGNs4KKgjV7QAAAAASUVORK5CYII=" alt="address" />
                      {' '}
                        Jl. Industri Selatan Blok LL 4-5
                        Kawasan Industri Indocargo
                        Mas Persada Pasir Sari
                        Cikarang Selatan - Kab. Bekasi
                    </p>
                  </div>
                </div>
            </div>
            <div className={styles.row2}>
                <div className={styles.logo}>
                    <a href="">
                        <img src="/icons/logo-artcool-white.png" alt="logo pt art cool" />
                    </a>
                </div>
                <p className={styles.copyright}>© PT. Art Cool - 2022</p>
            </div>
            <div className={styles.row3}>
                <p>designed by antasofa</p>
            </div>
        </div>
    </footer>
  );
}
