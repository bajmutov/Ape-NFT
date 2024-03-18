import { Formik } from 'formik';
import * as yup from 'yup';
import { ContainerInput, Error, Forma, Input } from './Form.styled';

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
            <button>svg</button>
            <Input
              type="text"
              name="discord"
              minLength="3"
              placeholder="@Jcksprrw"
              pattern="@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$"
              required
            />
            <Error name="discord" component="div" />

            <button>svg</button>
            <Input
              type="text"
              name="metamask"
              minLength="10"
              placeholder="1x28601vsdfg31543cs"
              pattern="^[^\s]+(\s.*)?$"
              required
            />
            <Error name="metamask" component="div" />
          </ContainerInput>
          <button type="submit">MINT</button>
        </Forma>
      </Formik>
    </>
  );
};

export default Form;
