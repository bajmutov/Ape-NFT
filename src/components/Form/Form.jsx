import { Formik } from 'formik';
import * as yup from 'yup';
import {
  ContainerInput,
  Error,
  Forma,
  IconButton,
  Input,
  SubmitButton,
} from './Form.styled';
import { ReactComponent as Discord } from '../../img/discord.svg';
import { ReactComponent as Metamask } from '../../img/MetaMask.svg';

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
            <IconButton>
              <Discord fill={'#5a65f2'} width={24} height={24} />
            </IconButton>
            <Input
              type="text"
              name="discord"
              minLength="3"
              placeholder="@USERNAME"
              pattern="@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$"
              required
            />
          </ContainerInput>
          <Error name="discord" component="div" />
          <ContainerInput>
            <IconButton>
              <Metamask width={24} height={24} />
            </IconButton>
            <Input
              type="text"
              name="metamask"
              minLength="10"
              placeholder="WALLET ADRESS"
              pattern="^[^\s]+(\s.*)?$"
              required
            />
          </ContainerInput>
          <Error name="metamask" component="div" />
          <SubmitButton>mint</SubmitButton>
        </Forma>
      </Formik>
    </>
  );
};

export default Form;
