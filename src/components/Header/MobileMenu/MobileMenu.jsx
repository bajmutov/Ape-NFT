import scrollLock from 'scroll-lock';
import { ReactComponent as Discord } from '../../../img/discord.svg';
import { ReactComponent as Ship } from '../../../img/ship.svg';
import { ReactComponent as Twitter } from '../../../img/twitter.svg';
import {
  Backdrop,
  BottomPart,
  MobileMenuBtn,
  ModalContent,
  ModalHeader,
  ModalItem,
  ModalList,
  MenuItem,
  MenuList,
} from './MobileMenu.styled';
import Footer from 'components/Footer';
import Logo from '../Logo';

function MobileMenu({ isMobileMenuOpen, setIsMobileMenuOpen }) {
  const handleModalClose = () => {
    setIsMobileMenuOpen(false);
    scrollLock.clearQueueScrollLocks();
    scrollLock.enablePageScroll();
  };

  return (
    <Backdrop $isOpen={isMobileMenuOpen ? 'open' : 'close'}>
      <ModalContent>
        <ModalHeader>
          <Logo onClick={handleModalClose} />
          <MenuList>
            <MenuItem>
              <MobileMenuBtn
                onClick={handleModalClose}
                aria-label="button for closing menu"
              >
                CLOSE
              </MobileMenuBtn>
            </MenuItem>
            <MenuItem>
              <a
                href="https://discord.com/"
                target="_blank"
                rel="noopener noreferrer nofollow"
                aria-label="a link to the company's Discord page"
              >
                <Discord />
              </a>
            </MenuItem>
            <MenuItem>
              <a
                href="https://opensea.io/"
                target="_blank"
                rel="noopener noreferrer nofollow"
                aria-label="a link to the company's Opensea page"
              >
                <Ship />
              </a>
            </MenuItem>
            <MenuItem>
              <a
                href="https://twitter.com/"
                target="_blank"
                rel="noopener noreferrer nofollow"
                aria-label="a link to the company's Twitter page"
              >
                <Twitter />
              </a>
            </MenuItem>
          </MenuList>
        </ModalHeader>
        <ModalList>
          <ModalItem>
            <a href="#about" onClick={handleModalClose}>
              ABOUT
            </a>
          </ModalItem>
          <ModalItem>
            <a href="#mindmap" onClick={handleModalClose}>
              M-MAP
            </a>
          </ModalItem>
          <ModalItem>
            <a href="#faq" onClick={handleModalClose}>
              FAQ
            </a>
          </ModalItem>
          <ModalItem>
            <a href="#arts" onClick={handleModalClose}>
              ARTS
            </a>
          </ModalItem>
          <ModalItem>
            <a href="#mint" onClick={handleModalClose}>
              MINT
            </a>
          </ModalItem>
        </ModalList>

        <Footer />
      </ModalContent>
    </Backdrop>
  );
}

export default MobileMenu;
