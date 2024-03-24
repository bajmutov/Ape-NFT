import { ReactComponent as IconArrow } from '../../../img/up-left-arrow.svg';
import {
  GridContainer,
  StyledSwiper,
  StyledSwiperSlide,
} from '../MindMap.styled';
import mindmap from '../../../data/mindmap.json';
import Card from '../Card/Card';

const MindMapCards = () => {
  return (
    <GridContainer>
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
    </GridContainer>
  );
};

export default MindMapCards;
