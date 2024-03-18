import { Formik } from 'formik';
import * as yup from 'yup';
import {
  ContainerInput,
  Discord,
  Error,
  Forma,
  Input,
  Metamask,
  SubmitButton,
} from './Form.styled';

const schema = yup.object().shape({
  discord: yup
    .string()
    .matches(/@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/, 'WRONG DISCORD')
    .required('DISCORD is required'),
  metamask: yup
    .string()
    .matches(/@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/, 'WRONG ADRESS')
    .required('ADRESS is required'),
});

const initialValues = {
  discord: '',
  metamask: '',
};

const Form = () => {
  return (
    <>
      <Formik initialValues={initialValues} validationSchema={schema}>
        <Forma autoComplete="off">
          <ContainerInput>
            <Discord />
            <Input
              type="text"
              name="discord"
              minLength="3"
              placeholder="@USERNAME"
              pattern="@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$"
              required
            />
            <Error name="discord" component="div" />
          </ContainerInput>
          <ContainerInput>
            <Metamask />
            <Input
              type="text"
              name="metamask"
              minLength="10"
              placeholder="WALLET ADRESS"
              pattern="^[^\s]+(\s.*)?$"
              required
            />
            <Error name="metamask" component="div" />
          </ContainerInput>
          <SubmitButton>MINT</SubmitButton>
        </Forma>
      </Formik>
    </>
  );
};

export default Form;
