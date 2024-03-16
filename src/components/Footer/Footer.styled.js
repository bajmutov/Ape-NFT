import styled from 'styled-components';
// import { ReactComponent as IconTwitter } from '../../images/twitter.svg';

export const StyledFooter = styled.footer`
  padding-bottom: 50px;
  padding-top: 50px;
  background-color: var(--main-bg-color);
`;

export const StyledFooterContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const StyledFooterList = styled.ul`
  display: flex;
  align-items: center;
  gap: 16px;
`;

export const StyledFooterLink = styled.a`
  color: var(--main-text-color);
  font-weight: 600;
  transition: var(--transition);

  &:hover,
  &:focus {
    color: var(--light-blue-color);
  }
`;

// export const Twitter = styled(IconTwitter)`
//   width: 48px;
//   height: 48px;
//   fill: #03a9f4;
//   transition: var(--transition);

//   &:hover,
//   &:focus {
//     fill: var(--light-blue-color);
//   }
// `;
