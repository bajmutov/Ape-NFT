// import Navigation from 'components/UI/Navigation';
// import Logo from 'components/UI/Logo';

import Burger from 'components/Burger';
import { StyledHeader, StyledHeaderContainer } from './Header.styled';

const Header = () => {
  return (
    <StyledHeader>
      <StyledHeaderContainer>
        <Burger />
        {/* <Logo text />
        <Navigation /> */}
      </StyledHeaderContainer>
    </StyledHeader>
  );
};

export default Header;
