import { Discord, Ship, Twitter } from './Social.styled';

const Social = () => {
  return (
    <ul>
      <li>
        <a href="https://discord.com/" uk-scroll="true">
          <Discord />
        </a>
      </li>
      <li>
        <a href="https://www.binance.com/" uk-scroll="true">
          <Ship />
        </a>
      </li>
      <li>
        <a href="https://twitter.com/" uk-scroll="true">
          <Twitter />
        </a>
      </li>
      <li>
        <a href={'/'} uk-scroll="true">
          <svg>
            <use href="/public/svg/logo-hover.svg"></use>
          </svg>
        </a>
      </li>
    </ul>
  );
};

export default Social;
