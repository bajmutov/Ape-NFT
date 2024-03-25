import Burger from './Burger';
import { StyledHeader, StyledHeaderContainer } from './Header.styled';
import Logo from './Logo';

import { useEffect, useState } from 'react';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollNavigate = window.scrollY;
      setIsScrolled(scrollNavigate > 48);
    };
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <StyledHeader>
      <StyledHeaderContainer $scroll={isScrolled ? 'true' : 'false'}>
        {!isScrolled && <Logo />}
        <Burger isScrolled={isScrolled} />
      </StyledHeaderContainer>
    </StyledHeader>
  );
};

export default Header;
