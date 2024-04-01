import scrollLock from 'scroll-lock';
import Burger from './Burger';
import { StyledHeader, StyledHeaderContainer } from './Header.styled';
import Logo from './Logo';

import { useEffect, useState } from 'react';
import MobileMenu from './MobileMenu';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollNavigate = window.scrollY;
      setIsScrolled(scrollNavigate > 4);
    };
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleModalOpen = () => {
    setIsMobileMenuOpen(true);
    scrollLock.disablePageScroll(document.body);
  };

  return (
    <StyledHeader>
      <StyledHeaderContainer $scroll={isScrolled ? 'true' : 'false'}>
        {!isScrolled && <Logo />}
        <Burger isScrolled={isScrolled} handleModalOpen={handleModalOpen} />
      </StyledHeaderContainer>
      <MobileMenu
        isMobileMenuOpen={isMobileMenuOpen}
        setIsMobileMenuOpen={setIsMobileMenuOpen}
      />
    </StyledHeader>
  );
};

export default Header;
