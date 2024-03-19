import { ArtsSection } from './Arts.styled';
import 'swiper/css';
import { Swiper, SwiperSlide } from 'swiper/react';
import slides from '../slides.json';
import SlideButton from 'components/SlideButton';

const Arts = () => {
  return (
    <ArtsSection>
      <h2>Colection</h2>
      <Swiper spaceBetween={50} slidesPerView={3}>
        {slides.map(slide => (
          <SwiperSlide key={slide.image}>
            <img src={require(`../../img/${slide.image}`)} alt={slide.title} />
          </SwiperSlide>
        ))}
        <SlideButton />
      </Swiper>
    </ArtsSection>
  );
};

export default Arts;
