import { Heading } from 'components/Contacts/Contacts.styled';
import { Section } from 'components/Arts/Arts.styled';
import MindMapSlider from './MindMapSlider';
import MindMapCards from './MindMapCards';
import Container from 'components/Container';

const MindMap = () => {
  return (
    <Section id="mindmap">
      <Container>
        <Heading>Mind Map</Heading>
        <MindMapSlider />
        <MindMapCards />
      </Container>
    </Section>
  );
};

export default MindMap;
