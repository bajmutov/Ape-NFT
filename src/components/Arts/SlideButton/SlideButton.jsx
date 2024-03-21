import { useSwiper } from 'swiper/react';
import { PaginationButton, SlideWrapper } from '../Arts.styled';

function SlideButton() {
  const swiper = useSwiper();

  return (
    <SlideWrapper>
      <PaginationButton onClick={() => swiper.slidePrev()}>
        Prev
      </PaginationButton>
      <PaginationButton onClick={() => swiper.slideNext()}>
        Next
      </PaginationButton>
    </SlideWrapper>
  );
}

export default SlideButton;
