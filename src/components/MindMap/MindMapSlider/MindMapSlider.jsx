import 'swiper/css';
import { Swiper } from 'swiper/react';
import SlideButton from 'components/Arts/SlideButton';
import { ReactComponent as IconArrow } from '../../../img/up-left-arrow.svg';
import { StyledSwiper, StyledSwiperSlide } from '../MindMap.styled';
import mindmap from '../../../data/mindmap.json';
import { MindMapSliderDiv } from '../MindMap.styled';
import Card from '../Card/Card';

const MindMapSlider = () => {
  return (
    <MindMapSliderDiv>
      <Swiper slidesPerView={1}>
        {mindmap.map((card, index) => (
          <StyledSwiperSlide key={index}>
            <Card text={card.text} heading={card.title} />
          </StyledSwiperSlide>
        ))}

        <StyledSwiperSlide>
          <StyledSwiper
            href="https://github.com/bajmutov"
            target="_blank"
            rel="noopener noreferrer nofollow"
          >
            <Card text={<IconArrow />} heading={'Learn more in mind map'} />
          </StyledSwiper>
        </StyledSwiperSlide>

        <SlideButton />
      </Swiper>
    </MindMapSliderDiv>
  );
};

export default MindMapSlider;
