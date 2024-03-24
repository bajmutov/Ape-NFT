import { Section } from 'components/Arts/Arts.styled';
import { faqInfo } from '../../constants/faq';
import { Heading } from 'components/Contacts/Contacts.styled';
import { useState } from 'react';
import {
  FaqAnsver,
  FaqButton,
  FaqImg,
  FaqList,
  FaqListItem,
  FaqQuestion,
  FaqQuestionWrapper,
} from './FAQ.styled';

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(0);

  const handleToggle = index => {
    setOpenIndex(prevIndex => (prevIndex === index ? -1 : index));
  };

  return (
    <Section>
      <Heading>faq</Heading>
      <FaqList>
        {faqInfo.map(({ numbering, question, answer, picture }, index) => (
          <FaqListItem
            key={index}
            $active={openIndex === index ? 'active' : 'not active'}
          >
            <FaqImg
              src={picture}
              alt="Monkey style"
              $active={openIndex === index ? 'active' : 'not active'}
              loading="lazy"
            />
            <FaqButton
              type="button"
              aria-label="Answer"
              onClick={() => handleToggle(index)}
              $active={openIndex === index ? 'active' : 'not active'}
            >
              {numbering}
            </FaqButton>
            <FaqQuestionWrapper>
              <FaqQuestion onClick={() => handleToggle(index)}>
                {question}
              </FaqQuestion>
              {openIndex === index && <FaqAnsver>{answer}</FaqAnsver>}
            </FaqQuestionWrapper>
          </FaqListItem>
        ))}
      </FaqList>
    </Section>
  );
};

export default FAQ;
