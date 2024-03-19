import { MindMapSection } from './MindMap.styled';
import 'swiper/css';
import { Swiper, SwiperSlide } from 'swiper/react';
import Card from './Card/Card';
import SlideButton from 'components/Arts/SlideButton';
import { ReactComponent as IconArrow } from '../../img/up-left-arrow.svg';

const MindMap = () => {
  const windowWidth = window.innerWidth;
  const slidesNumber = () => {
    if (windowWidth >= 480) return 4;
    else return 1;
  };

  return (
    <MindMapSection>
      <h1>Mind Map</h1>
      <Swiper spaceBetween={24} slidesPerView={slidesNumber()}>
        <SwiperSlide>
          <Card
            text={
              'All owners of APE NFTs and all future collections will receive a percentage of sales based on the number of NFTs they own'
            }
            heading={'YAPE DROP'}
          />
        </SwiperSlide>
        <SwiperSlide>
          <Card
            text={
              'Launch of the 2nd YACHT Collection Releasing the first version of the Ape Slam Game'
            }
            heading={'New Collection'}
          />
        </SwiperSlide>
        <SwiperSlide>
          <Card
            text={
              'Launch your own token, the proceeds of which will go to a global fund to LAUNCH YACHT CLUB AND PROMOTE it'
            }
            heading={'TOKEN'}
          />
        </SwiperSlide>
        <SwiperSlide style={{ backgroundColor: 'var(--accent-color)' }}>
          <a href="https://github.com/bajmutov">
            <Card text={<IconArrow />} heading={'Learn more in mind map'} />
          </a>
        </SwiperSlide>

        <SlideButton />
      </Swiper>
    </MindMapSection>
  );
};

export default MindMap;

{
  /* const Arts = () => {
  const windowWidth = window.innerWidth;

  const slidesNumber = () => {
    if (windowWidth >= 1280) return 4;
    else if (windowWidth > 767 && windowWidth < 1280) return 2;
    else return 1;
  };

  return (
    <ArtsSection>
      <h2>Colection</h2>
      <Swiper spaceBetween={24} slidesPerView={slidesNumber()}>
        {slides.map(slide => (
          <SwiperSlide key={slide.image}>
            <img src={require(`../../img/${slide.image}`)} alt={slide.title} />
          </SwiperSlide>
        ))}
        <SlideButton />
      </Swiper>
    </ArtsSection>
  );
}; */
}
