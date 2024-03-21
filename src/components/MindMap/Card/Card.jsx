import { CardText, CardWrapper, Headline } from '../MindMap.styled';

const Card = ({ text, heading }) => {
  return (
    <CardWrapper>
      <CardText>{text}</CardText>
      <Headline>{heading}</Headline>
    </CardWrapper>
  );
};

export default Card;
