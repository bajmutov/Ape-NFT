import { ReactComponent as Cross } from '../../../img/cross.svg';
import { MovingLine, StyledBanContainer } from './Banner.styled';
import banner from '../../../data/banner.json';

const Banner = () => {
  const handleRenderBanner = () => {
    return banner.map(({ text }, index) => (
      <li key={index}>
        <p>{text}</p>
        <Cross />
      </li>
    ));
  };

  const movingBanner = count => {
    const lineBanerArr = [];
    for (let i = 0; i < count; i += 1) {
      lineBanerArr.push(
        <MovingLine key={i} aria-hidden={true}>
          {handleRenderBanner()}
        </MovingLine>
      );
    }
    return lineBanerArr;
  };

  return <StyledBanContainer>{movingBanner(3)}</StyledBanContainer>;
};

export default Banner;
