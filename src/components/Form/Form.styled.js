import { Field, Form, ErrorMessage } from 'formik';
import styled from 'styled-components';
import { ReactComponent as IconDiscord } from '../../img/discord.svg';
import { ReactComponent as IconMetamask } from '../../img/MetaMask.svg';

export const Forma = styled(Form)`
  max-width: 335px;
  /* display: flex; */
  /* align-items: left; */
  /* justify-content: center; */
  /* flex-direction: column; */
  @media screen and (min-width: 768px) {
    max-width: 364px;
  }

  @media screen and (min-width: 1440px) {
    max-width: 496px;
  }
`;

export const ContainerInput = styled.div`
  width: 100%;
  position: relative;
  margin-bottom: 28px;
  @media screen and (min-width: 768px) {
    margin-bottom: 64px;
  }
`;

export const Input = styled(Field)`
  font-size: 16px;
  line-height: calc(24 / 18);
  width: 100%;
  height: 48px;
  /* opacity: 0.3; */
  padding: 0 0 0 72px;
  margin-bottom: 18px;
  background-color: transparent;
  border: 1px solid var(--dark-text-color);
  border-radius: 8px;
  /* outline: none; */
  transition: var(--transition);
  &::placeholder {
    color: var(--light-text-color);
    font-size: 12px;
    line-height: calc(12 / 12);
    letter-spacing: 0.02em;
  }
  &:hover,
  &:focus {
    /* border-color: var(--accent-color); */
  }

  &:not(:placeholder-shown):valid {
    border: 1px solid #3cbf61;
  }
  &:not(:placeholder-shown):invalid {
    border: 1px solid #d80027;
  }

  @media screen and (min-width: 768px) {
    height: 48px;
    margin-bottom: 20px;
  }
`;

export const Error = styled(ErrorMessage)`
  color: red;
  opacity: 0.6;
  font-weight: 400;
  font-size: 0.8rem;
  margin-top: -18px;
  transition: opacity 200ms cubic-bezier(0.4, 0, 0.2, 1) 0ms,
    transform 133ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
`;

// export const StyledAuthButton = styled(StyledButton)`
//   padding: 12px 40px;

//   @media screen and (min-width: 768px) {
//     padding: 16px 60px;
//   }
// `;

// export const ShowPassButton = styled.button`
//   z-index: 10;
//   position: absolute;
//   top: 40%;
//   left: 95%;
//   transform: translate(-50%, -50%);
//   background-color: transparent;
//   border: none;

//   &:hover,
//   &:focus {
//     & > svg {
//       fill: var(--accent-color);
//       transform: scale(1.1);
//     }
//   }
// `;

// export const ShowPassSVG = styled.svg`
//   fill: ${({ theme }) => theme.palette.text.primary};
//   transition: var(--transition);
// `;

export const SubmitButton = styled.button`
  font-family: var(--heading-font-family);
  font-size: 16px;
  border-radius: 12px;
  color: var(--light-text-color);
  background-color: var(--accent-color);
  padding: 12px 91.5px;
  display: block;
  border: none;
  transition: var(--transition);
  line-height: calc(19 / 16);

  &:hover,
  &:focus {
    color: var(--dark-text-col);
  }
`;

// export const SvgButton = styled.button`
//   border-radius: 12px;
//   color: var(--light-text-color);
//   background-color: var(--accent-color);
//   padding: 12px 91.5px;
//   display: block;
//   border: none;
//   transition: var(--transition);
//   line-height: calc(19 / 16);

//   &:hover,
//   &:focus {
//     color: var(--dark-text-col);
//   }
// `;

export const Discord = styled(IconDiscord)`
  width: 48px;
  height: 48px;
  fill: #5a65f2;
  background-color: var(--dark-text-color);
  border: 1px solid var(--dark-text-color);
  border-radius: 8px 0 0 8px;
  position: absolute;
`;

export const Metamask = styled(IconMetamask)`
  width: 48px;
  height: 48px;
  fill: #5a65f2;
  background-color: var(--dark-text-color);
  border: 1px solid var(--dark-text-color);
  border-radius: 8px 0 0 8px;
  position: absolute;
`;
