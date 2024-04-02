import { Field, Form, ErrorMessage } from 'formik';
import styled from 'styled-components';

export const Forma = styled(Form)`
  margin: 0 auto;

  @media screen and (max-width: 480px) {
    max-width: 216px;
  }

  @media screen and (min-width: 768px) {
    width: 248px;
  }

  @media screen and (min-width: 1280px) {
    width: 397px;
  }
`;

export const ContainerInput = styled.div`
  display: flex;
  align-items: centr;
  justify-content: center;
`;

export const Input = styled(Field)`
  color: var(--light-text-color);
  font-size: 12px;
  line-height: calc(14 / 12);
  width: 100%;
  height: 46px;
  padding: 0;
  padding-left: 24px;
  margin-bottom: 16px;
  background-color: transparent;
  border: 1px solid var(--light-text-color);
  border-radius: 0 8px 8px 0;
  transition: var(--transition);

  &::placeholder {
    color: var(--placeholder-color);
    font-size: 12px;
    line-height: auto;
  }

  &:not(:placeholder-shown):invalid {
    border: 1px solid var(--accent-color);
    color: var(--accent-color);
  }

  @media screen and (min-width: 1280px) {
    margin-bottom: 24px;
    height: 62px;
    font-size: 16px;
    line-height: calc(19 / 16);
  }
`;

export const Error = styled(ErrorMessage)`
  text-align: right;
  font-size: 10px;
  line-height: calc(12 / 10);
  color: var(--accent-color);
  margin-top: -16px;
  transition: opacity 200ms cubic-bezier(0.4, 0, 0.2, 1) 0ms,
    transform 133ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;

  @media screen and (min-width: 1280px) {
    font-size: 12px;
    line-height: calc(14 / 12);
  }
`;

export const IconButton = styled.button`
  min-width: 48px;
  height: 48px;
  display: block;
  margin: 0 auto;
  background-color: var(--dark-text-color);
  border: none;
  border-radius: 8px 0 0 8px;

  @media screen and (min-width: 1280px) {
    min-width: 64px;
    height: 64px;
  }
`;

export const SubmitButton = styled.button`
  width: 100%;
  min-height: 41px;
  font-family: var(--heading-font-family);
  text-transform: uppercase;
  font-size: 16px;
  line-height: calc(19 / 16);
  border-radius: 8px;
  color: var(--light-text-color);
  background-color: var(--accent-color);
  padding: 0;
  display: block;
  border: none;
  transition: var(--transition);

  &:hover,
  &:focus {
    color: var(--dark-text-col);
  }

  @media screen and (min-width: 1280px) {
    font-size: 28px;
    line-height: calc(34 / 28);
    height: 70px;
  }
`;
