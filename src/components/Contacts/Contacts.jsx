import Form from 'components/Form';
import { ContactsSection } from './Contacts.styled';

const Contacts = () => {
  return (
    <ContactsSection>
      <h2>ARE YOU IN?</h2>
      <button>svg</button>
      <p>
        Join the YACHT APE community to be one of the first to receive our
        limited edition NFT
      </p>
      <Form />
    </ContactsSection>
  );
};

export default Contacts;
