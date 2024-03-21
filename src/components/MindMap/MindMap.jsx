import 'swiper/css';
import { Swiper } from 'swiper/react';
import Card from './Card/Card';
import SlideButton from 'components/Arts/SlideButton';
import { ReactComponent as IconArrow } from '../../img/up-left-arrow.svg';
import { Heading } from 'components/Contacts/Contacts.styled';
import { Section } from 'components/Arts/Arts.styled';
import { StyledSwiper, StyledSwiperSlide } from './MindMap.styled';

const MindMap = () => {
  const windowWidth = window.innerWidth;
  const slidesNumber = () => {
    if (windowWidth >= 768) return 4;
    else return 1;
  };

  return (
    <Section>
      <Heading>Mind Map</Heading>
      <Swiper spaceBetween={24} slidesPerView={slidesNumber()}>
        <StyledSwiperSlide>
          <Card
            text={
              'All owners of APE NFTs and all future collections will receive a percentage of sales based on the number of NFTs they own'
            }
            heading={'YAPE DROP'}
          />
        </StyledSwiperSlide>
        <StyledSwiperSlide>
          <Card
            text={
              'Launch of the 2nd YACHT Collection Releasing the first version of the Ape Slam Game'
            }
            heading={'New Collection'}
          />
        </StyledSwiperSlide>
        <StyledSwiperSlide>
          <Card
            text={
              'Launch your own token, the proceeds of which will go to a global fund to LAUNCH YACHT CLUB AND PROMOTE it'
            }
            heading={'TOKEN'}
          />
        </StyledSwiperSlide>
        <StyledSwiperSlide>
          <StyledSwiper href="https://github.com/bajmutov">
            <Card text={<IconArrow />} heading={'Learn more in mind map'} />
          </StyledSwiper>
        </StyledSwiperSlide>

        <SlideButton />
      </Swiper>
    </Section>
  );
};

export default MindMap;
