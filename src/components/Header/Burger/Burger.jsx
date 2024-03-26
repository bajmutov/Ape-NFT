import { useState } from 'react';
import { ReactComponent as Discord } from '../../../img/discord.svg';
import { ReactComponent as Ship } from '../../../img/ship.svg';
import { ReactComponent as Twitter } from '../../../img/twitter.svg';
import {
  MenuBtn,
  MenuItem,
  MenuList,
  NavMenu,
  BurgerItem,
  BurgerList,
} from './Burger.styled';

function BurgerMenu({ isScrolled }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleMenuToggle = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <NavMenu $scroll={isScrolled ? 'true' : 'false'}>
      {!isScrolled && (
        <BurgerList
          $isOpen={isMenuOpen ? 'open' : 'close'}
          // $scroll={isScrolled ? 'true' : 'false'}
        >
          <BurgerItem>
            <a
              href="#about"
              aria-label="link scroll to the About section"
              onClick={handleMenuToggle}
            >
              ABOUT
            </a>
          </BurgerItem>
          <BurgerItem>
            <a
              href="#m-map"
              aria-label="link scroll to the M-map section"
              onClick={handleMenuToggle}
            >
              M-MAP
            </a>
          </BurgerItem>
          <BurgerItem>
            <a
              href="#faq"
              aria-label="link scroll to the FAQ section"
              onClick={handleMenuToggle}
            >
              FAQ
            </a>
          </BurgerItem>
          <BurgerItem>
            <a
              href="#arts"
              aria-label="link scroll to the Arts section"
              onClick={handleMenuToggle}
            >
              ARTS
            </a>
          </BurgerItem>
          <BurgerItem>
            <a
              href="#mint"
              aria-label="link scroll to the Mint section"
              onClick={handleMenuToggle}
            >
              MINT
            </a>
          </BurgerItem>
        </BurgerList>
      )}

      <MenuList $isOpen={isMenuOpen ? 'open' : 'close'}>
        <MenuItem>
          <MenuBtn type="button" onClick={handleMenuToggle}>
            {isMenuOpen && !isScrolled ? 'CLOSE' : ' MENU'}
          </MenuBtn>
        </MenuItem>
        <MenuItem>
          <a
            href="https://discord.com/"
            target="_blank"
            rel="noopener noreferrer nofollow"
            aria-label=" link to Discord"
          >
            <Discord />
          </a>
        </MenuItem>
        <MenuItem>
          <a
            href="https://opensea.io/"
            target="_blank"
            rel="noopener noreferrer nofollow"
            aria-label="link to Opensea "
          >
            <Ship />
          </a>
        </MenuItem>
        <MenuItem>
          <a
            href="https://twitter.com/"
            target="_blank"
            rel="noopener noreferrer nofollow"
            aria-label="link to Twitter"
          >
            <Twitter />
          </a>
        </MenuItem>
      </MenuList>
    </NavMenu>
  );
}

export default BurgerMenu;