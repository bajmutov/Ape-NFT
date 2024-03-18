import { Field, Form, ErrorMessage } from 'formik';
// import { StyledButton } from 'components/Button/Button.styled';
import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: 100%;
  padding: 90px 0px 35px 0px;

  @media screen and (min-width: 768px) {
    width: 496px;
    padding: 150px 0px 100px 0px;
  }
`;

export const TitleWrapper = styled.div`
  margin-bottom: 14px;

  @media screen and (min-width: 768px) {
    margin-bottom: 16px;
  }
`;

export const Info = styled.p`
  font-weight: 400;
  font-size: 14px;
  margin: 0;
  margin-bottom: 28px;
  line-height: calc(18 / 14);
  letter-spacing: -0.02em;
  opacity: 0.3;

  @media screen and (min-width: 768px) {
    font-size: 16px;
    line-height: calc(24 / 16);
    margin-bottom: 32px;
  }
`;

export const InfoLink = styled.p`
  font-weight: 400;
  font-size: 12px;
  margin: 0;
  margin-top: 12px;
  line-height: calc(18 / 12);
  letter-spacing: 0.02em;
  opacity: 0.6;
`;

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
  font-size: 18px;
  line-height: calc(24 / 18);
  width: 100%;
  height: 46px;
  /* opacity: 0.3; */
  padding: 0 0 0 14px;
  margin-bottom: 18px;
  background-color: transparent;

  border-radius: 12px;
  outline: none;
  transition: var(--transition);
  &::placeholder {
    color: var(--light-text-color);
    font-size: 16px;
    line-height: calc(18 / 16);
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
    height: 52px;
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
