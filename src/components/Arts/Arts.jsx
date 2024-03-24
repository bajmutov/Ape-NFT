import { Section } from './Arts.styled';
import 'swiper/css';
import { Swiper, SwiperSlide } from 'swiper/react';
import slides from '../data/slides.json';
import SlideButton from './SlideButton';
import { Heading } from 'components/Contacts/Contacts.styled';

const Arts = () => {
  const windowWidth = window.innerWidth;

  const slidesNumber = () => {
    if (windowWidth >= 1280) return 4;
    else if (windowWidth > 768 && windowWidth < 1280) return 2;
    else return 1;
  };

  return (
    <Section>
      <Heading>Colection</Heading>
      <Swiper spaceBetween={24} slidesPerView={slidesNumber()}>
        {slides.map(slide => (
          <SwiperSlide key={slide.image}>
            <img src={require(`../../img/${slide.image}`)} alt={slide.title} />
          </SwiperSlide>
        ))}
        <SlideButton />
        ``
      </Swiper>
    </Section>
  );
};

export default Arts;
