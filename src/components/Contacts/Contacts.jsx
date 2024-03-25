import Form from 'components/Form';
import { Section, Wrapper, SvgButton, Heading, Text } from './Contacts.styled';
import { ReactComponent as Cross } from '../../img/cross.svg';
import Container from 'components/Container';

const Contacts = () => {
  return (
    <Section id="mint">
      <Container>
        <Heading>ARE YOU IN?</Heading>
        <Wrapper>
          <SvgButton>
            <Cross style={{ textAlign: 'center' }} />
          </SvgButton>
          <Text>
            Join the YACHT APE community to be one of the first to receive our
            limited edition NFT
          </Text>
          <Form />
        </Wrapper>
      </Container>
    </Section>
  );
};

export default Contacts;
