import { useSwiper } from 'swiper/react';

function SlideButton() {
  const swiper = useSwiper();

  return (
    <>
      <button onClick={() => swiper.slidePrev()}>Prev</button>
      <button onClick={() => swiper.slideNext()}>Next</button>
    </>
  );
}

export default SlideButton;
