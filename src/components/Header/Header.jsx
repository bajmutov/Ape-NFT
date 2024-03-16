import Navigation from 'components/UI/Navigation';
import Logo from 'components/UI/Logo';

import { StyledHeader, StyledHeaderContainer } from './Header.styled';

const Header = () => {
  return (
    <StyledHeader>
      <StyledHeaderContainer>
        <Logo text />
        <Navigation />
      </StyledHeaderContainer>
    </StyledHeader>
  );
};

export default Header;
