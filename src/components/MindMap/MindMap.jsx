import { Heading } from 'components/Contacts/Contacts.styled';
import { Section } from 'components/Arts/Arts.styled';
import MindMapSlider from './MindMapSlider';
import MindMapCards from './MindMapCards';

const MindMap = () => {
  return (
    <Section>
      <Heading>Mind Map</Heading>
      <MindMapSlider />
      <MindMapCards />
    </Section>
  );
};

export default MindMap;
