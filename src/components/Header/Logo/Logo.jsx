import { Link } from 'react-router-dom';
import { StyledLogoLink, LogoApe } from './Logo.styled';

const Logo = () => {
  return (
    <Link to="/">
      <LogoApe />
    </Link>
  );
};

export default Logo;
