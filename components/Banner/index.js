import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

// import required modules
import { Autoplay, Pagination } from 'swiper';

import styles from './Banner.module.css';

function Banner() {
  return (
    <div className="container">
      <Swiper
        spaceBetween={30}
        centeredSlides
        pagination={{
          clickable: true,
        }}
        autoplay={{
          delay: 3500,
          disableOnInteraction: false,
        }}
        loop
        modules={[Autoplay, Pagination]}
        className={`${styles.headerSwiper} headerSwiper`}
      >
          <SwiperSlide>
            <div className={styles.swiperWrapper}>
              <div className={`${styles.headingWrapper} headingWrapper`}>
                  <h1 className={styles.heading}>AC Floor Standing 5~20HP</h1>
                  <a href="/products" className={styles.btnCta}>
                      More Detail
                      {' '}
                      <div className={styles.icon}>
                        <svg width="100%" height="100%" viewBox="0 0 7 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path fillRule="evenodd" clipRule="evenodd" d="M4.08721 0.202057C3.97566 0.00883684 3.72859 -0.0573653 3.53537 0.0541903C3.34215 0.165746 3.27595 0.412815 3.3875 0.606035L5.92437 5.00002L3.38754 9.39396C3.27598 9.58718 3.34218 9.83425 3.5354 9.9458C3.72862 10.0574 3.97569 9.99116 4.08725 9.79794L6.7131 5.24982C6.75851 5.17116 6.77447 5.08359 6.76439 4.99986C6.7744 4.91622 6.75843 4.82875 6.71307 4.75018L4.08721 0.202057Z" fill="#F5FFFE" />
                          <path fillRule="evenodd" clipRule="evenodd" d="M0.753901 0.202057C0.642346 0.00883684 0.395276 -0.0573653 0.202057 0.0541903C0.00883672 0.165746 -0.0573652 0.412815 0.0541903 0.606035L2.59106 5.00002L0.0542224 9.39396C-0.0573332 9.58718 0.00886873 9.83425 0.202089 9.9458C0.395308 10.0574 0.642377 9.99116 0.753933 9.79794L3.37979 5.24982C3.4252 5.17116 3.44116 5.08359 3.43108 4.99986C3.44109 4.91622 3.42512 4.82875 3.37976 4.75018L0.753901 0.202057Z" fill="#F5FFFE" />
                        </svg>
                      </div>
                  </a>
              </div>
              <div className={styles.gradient} />
              <img src="/images/standing-AC.png" alt="header" />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className={styles.swiperWrapper}>
              <div className={`${styles.headingWrapper} headingWrapper`}>
                  <h1 className={styles.heading}>Chiller 5~30HP</h1>
                  <a href="/products" className={styles.btnCta}>
                      More Detail
                      {' '}
                      <div className={styles.icon}>
                        <svg width="100%" height="100%" viewBox="0 0 7 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path fillRule="evenodd" clipRule="evenodd" d="M4.08721 0.202057C3.97566 0.00883684 3.72859 -0.0573653 3.53537 0.0541903C3.34215 0.165746 3.27595 0.412815 3.3875 0.606035L5.92437 5.00002L3.38754 9.39396C3.27598 9.58718 3.34218 9.83425 3.5354 9.9458C3.72862 10.0574 3.97569 9.99116 4.08725 9.79794L6.7131 5.24982C6.75851 5.17116 6.77447 5.08359 6.76439 4.99986C6.7744 4.91622 6.75843 4.82875 6.71307 4.75018L4.08721 0.202057Z" fill="#F5FFFE" />
                          <path fillRule="evenodd" clipRule="evenodd" d="M0.753901 0.202057C0.642346 0.00883684 0.395276 -0.0573653 0.202057 0.0541903C0.00883672 0.165746 -0.0573652 0.412815 0.0541903 0.606035L2.59106 5.00002L0.0542224 9.39396C-0.0573332 9.58718 0.00886873 9.83425 0.202089 9.9458C0.395308 10.0574 0.642377 9.99116 0.753933 9.79794L3.37979 5.24982C3.4252 5.17116 3.44116 5.08359 3.43108 4.99986C3.44109 4.91622 3.42512 4.82875 3.37976 4.75018L0.753901 0.202057Z" fill="#F5FFFE" />
                        </svg>
                      </div>
                  </a>
              </div>
              <div className={styles.gradient} />
              <img src="/images/chiller5-30.png" alt="header" />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className={styles.swiperWrapper}>
              <div className={`${styles.headingWrapper} headingWrapper`}>
                  <h1 className={styles.heading}>LG Air Cooled Inverter Scroll Chiller 25 & 50HP</h1>
                  <a href="/products" className={styles.btnCta}>
                      More Detail
                      {' '}
                      <div className={styles.icon}>
                        <svg width="100%" height="100%" viewBox="0 0 7 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path fillRule="evenodd" clipRule="evenodd" d="M4.08721 0.202057C3.97566 0.00883684 3.72859 -0.0573653 3.53537 0.0541903C3.34215 0.165746 3.27595 0.412815 3.3875 0.606035L5.92437 5.00002L3.38754 9.39396C3.27598 9.58718 3.34218 9.83425 3.5354 9.9458C3.72862 10.0574 3.97569 9.99116 4.08725 9.79794L6.7131 5.24982C6.75851 5.17116 6.77447 5.08359 6.76439 4.99986C6.7744 4.91622 6.75843 4.82875 6.71307 4.75018L4.08721 0.202057Z" fill="#F5FFFE" />
                          <path fillRule="evenodd" clipRule="evenodd" d="M0.753901 0.202057C0.642346 0.00883684 0.395276 -0.0573653 0.202057 0.0541903C0.00883672 0.165746 -0.0573652 0.412815 0.0541903 0.606035L2.59106 5.00002L0.0542224 9.39396C-0.0573332 9.58718 0.00886873 9.83425 0.202089 9.9458C0.395308 10.0574 0.642377 9.99116 0.753933 9.79794L3.37979 5.24982C3.4252 5.17116 3.44116 5.08359 3.43108 4.99986C3.44109 4.91622 3.42512 4.82875 3.37976 4.75018L0.753901 0.202057Z" fill="#F5FFFE" />
                        </svg>
                      </div>
                  </a>
              </div>
              <div className={styles.gradient} />
              <img src="/images/lg-air-cooled-50hp.png" alt="header" />
            </div>
          </SwiperSlide>
      </Swiper>
    </div>
  );
}

export default Banner;
