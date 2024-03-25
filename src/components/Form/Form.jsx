import { Formik } from 'formik';
import toast, { Toaster } from 'react-hot-toast';
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
import { useState } from 'react';

const schema = yup.object().shape({
  discord: yup
    .string()
    .matches(/^@[\w]+$/, 'WRONG DISCORD')
    .required('DISCORD is required'),
  metamask: yup
    .string()
    .matches(/^[\w]+$/, 'WRONG ADRESS')
    .required('ADRESS is required'),
});

const initialValues = {
  discord: '',
  metamask: '',
};

const Form = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [buttonText, setButtonText] = useState('mint');

  const handleSubmit = (values, { resetForm }) => {
    try {
      setIsSubmitting(true);
      setButtonText('minted');
      toast.success(`Thank you, ${values.discord} submitted successfully!`);
      setIsSubmitting(false);
    } catch (error) {
      setIsSubmitting(false);
      setButtonText('error');
    } finally {
      setTimeout(() => {
        setIsSubmitting(false);
        setButtonText('mint');
      }, 1000);
      resetForm();
    }
  };

  return (
    <>
      <Formik
        initialValues={initialValues}
        validationSchema={schema}
        onSubmit={handleSubmit}
      >
        <Forma autoComplete="off">
          <ContainerInput>
            <IconButton>
              <Discord fill={'#5a65f2'} width={24} height={24} />
            </IconButton>
            <Input
              type="text"
              name="discord"
              pattern="^@[\w]+$"
              minLength="3"
              placeholder="@USERNAME"
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
              pattern="^[\w]+$"
              minLength="10"
              placeholder="WALLET ADRESS"
              disabled={isSubmitting}
              required
            />
          </ContainerInput>
          <Error name="metamask" component="div" />
          <SubmitButton type="submit">{buttonText}</SubmitButton>
        </Forma>
      </Formik>
      <Toaster theme="dark" />
    </>
  );
};

export default Form;
