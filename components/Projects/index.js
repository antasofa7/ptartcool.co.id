import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

// import required modules
import { Autoplay, Pagination } from 'swiper';
import Title from '../Title';
import styles from './Projects.module.css';
import ProjectItem from './ProjectItem';

export default function ProjectComponent() {
  return (
    <section className={styles.projects} id="projects">
        <div className="container">
            <Title title="Projects" />
            <Swiper
              spaceBetween={30}
              centeredSlides
              pagination={{
                clickable: true,
              }}
              autoplay={{
                delay: 2500,
                disableOnInteraction: false,
              }}
              loop
              modules={[Autoplay, Pagination]}
              className={styles.projectSwiper}
            >
                <SwiperSlide>
                    <ProjectItem home />
                </SwiperSlide>
                <SwiperSlide>
                    <ProjectItem home />
                </SwiperSlide>
                <SwiperSlide>
                    <ProjectItem home />
                </SwiperSlide>
                <SwiperSlide>
                    <ProjectItem home />
                </SwiperSlide>
            </Swiper>
        </div>
    </section>
  );
}
