// import Navigation from 'components/UI/Navigation';
// import Logo from 'components/UI/Logo';

import Button from 'components/Button';
import Burger from './Burger';
import { StyledHeader, StyledHeaderContainer } from './Header.styled';
import Logo from './Logo';
// import Navigation from './Navigation';
import Social from './Social';

const Header = () => {
  return (
    <StyledHeader>
      <StyledHeaderContainer>
        <Burger />
        <Logo />
        {/* <Navigation /> */}
        <Button pady={17} padx={3.5}>
          CLOSE
        </Button>
        <Social />
      </StyledHeaderContainer>
    </StyledHeader>
  );
};

export default Header;
