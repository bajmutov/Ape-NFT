import { Formik } from 'formik';
import * as yup from 'yup';
import { useState } from 'react';
import toast, { Toaster } from 'react-hot-toast';
import { ReactComponent as Discord } from '../../img/discord.svg';
import { ReactComponent as Metamask } from '../../img/MetaMask.svg';
import {
  ContainerInput,
  Error,
  Forma,
  IconButton,
  Input,
  SubmitButton,
} from './Form.styled';

const schema = yup.object().shape({
  username: yup
    .string()
    .matches(/^@[\w]+$/, 'WRONG DISCORD')
    .min(3, 'Must be exactly 3 digits')
    .required('DISCORD is required'),
  walletaddress: yup
    .string()
    .matches(/^[\w]+$/, 'WRONG ADRESS')
    .min(20, 'Must be exactly 20 digits')
    .required('ADRESS is required'),
});

const initialValues = {
  username: '',
  walletaddress: '',
};

const Form = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [buttonText, setButtonText] = useState('mint');

  const [username, setUsername] = useState(
    () => JSON.parse(window.localStorage.getItem('username')) || ''
  );
  const [walletaddress, setWalletaddress] = useState(
    () => JSON.parse(window.localStorage.getItem('walletaddress')) ?? ''
  );

  const handleChange = event => {
    const { name, value } = event.target;
    switch (name) {
      case 'username':
        setUsername(value);
        break;
      case 'walletaddress':
        setWalletaddress(value);
        break;
      default:
        return;
    }
  };

  const handleSubmit = ({ username, walletaddress }, { resetForm }) => {
    try {
      localStorage.setItem('username', JSON.stringify(username));
      localStorage.setItem('walletaddress', JSON.stringify(walletaddress));

      setIsSubmitting(true);
      setButtonText('minted');
      toast.success(`Thank you, ${username} submitted successfully!`);
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
        <Forma>
          <ContainerInput>
            <IconButton>
              <Discord fill={'#5a65f2'} width={24} height={24} />
            </IconButton>
            <Input
              type="text"
              name="username"
              placeholder="@USERNAME"
              value={username}
              onChange={handleChange}
              disabled={isSubmitting}
            />
          </ContainerInput>
          <Error name="username" component="div" />
          <ContainerInput>
            <IconButton>
              <Metamask width={24} height={24} />
            </IconButton>
            <Input
              type="text"
              name="walletaddress"
              placeholder="WALLET ADRESS"
              disabled={isSubmitting}
              value={walletaddress}
              onChange={handleChange}
            />
          </ContainerInput>
          <Error name="walletaddress" component="div" />
          <SubmitButton type="submit" aria-label="Send form">
            {buttonText}
          </SubmitButton>
        </Forma>
      </Formik>
      <Toaster theme="dark" />
    </>
  );
};

export default Form;
