import { useState } from 'react';
import { ArtsSection } from './Arts.styled';
// import img from '../../img/Mask group-1.png';

const Arts = () => {
  const [index, setIndex] = useState(1);

  const handleCounterIncrement = () => {
    if (index === 13) {
      setIndex(1);
      return;
    }
    setIndex(index + 1);
  };

  const handleCounterDecrement = () => {
    if (index === 1) {
      setIndex(13);
      return;
    }
    setIndex(index - 1);
  };

  return (
    <ArtsSection>
      <h2>Colection</h2>
      <img src={require(`../../img/Mask group-${index}.png`)} alt="Ape" />
      <div>
        <button onClick={handleCounterDecrement}>Prev</button>
        <button onClick={handleCounterIncrement}>Next</button>
      </div>
    </ArtsSection>
  );
};

export default Arts;
