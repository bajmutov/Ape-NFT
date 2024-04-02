import { Section, StyledImg } from './Arts.styled';
import 'swiper/css';
import { useMediaQuery } from 'react-responsive';
import { Swiper, SwiperSlide } from 'swiper/react';
import slides from '../../data/slides.json';
import SlideButton from './SlideButton';
import { Heading } from 'components/Contacts/Contacts.styled';
import Container from 'components/Container';

const Arts = () => {
  let slidesNumber = 4;
  const isMobile = useMediaQuery({ maxWidth: 767 });
  const isTab = useMediaQuery({ maxWidth: 1279 });

  if (isMobile) {
    slidesNumber = 1;
  } else if (isTab) {
    slidesNumber = 2;
  }

  return (
    <Section id="arts">
      <Container>
        <Heading>Colection</Heading>
        <Swiper spaceBetween={24} slidesPerView={slidesNumber}>
          {slides.map(slide => (
            <SwiperSlide key={slide.image}>
              <StyledImg
                src={require(`../../img/${slide.image}`)}
                alt={slide.title}
              />
            </SwiperSlide>
          ))}
          <SlideButton />
          ``
        </Swiper>
      </Container>
    </Section>
  );
};

export default Arts;
