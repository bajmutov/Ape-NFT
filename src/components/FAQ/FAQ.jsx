import { FAQSection } from './FAQ.styled';

const FAQ = () => {
  return (
    <FAQSection>
      <h2>FAQ</h2>
      <ul>
        <li>
          <img src={require(`../../img/FAQ-ape1.png`)} alt="Hero Ape" />
          <span>[1]</span>
          <h2>WHAT IS AN NFT COLLECTION?</h2>
          <p>
            To purchase nfts from a collection, you typically need to use
            cryptocurrency on a blockchain0based marketplace.
          </p>
        </li>
        <li>
          <img src={require(`../../img/FAQ-ape2.png`)} alt="Hero Ape" />
          <span>[2]</span>
          <h2>HOW DO I PURCHASE NFTS FROM A COLLECTION?</h2>
          <p>
            To purchase nfts from a collection, you typically need to use
            cryptocurrency on a blockchain0based marketplace.
          </p>
        </li>
        <li>
          <img src={require(`../../img/FAQ-ape3.png`)} alt="Hero Ape" />
          <span>[3]</span>
          <h2>CAN I SELL OR TRADE NFTS FROM A COLLECTION?</h2>
          <p>
            To purchase nfts from a collection, you typically need to use
            cryptocurrency on a blockchain0based marketplace.
          </p>
        </li>
        <li>
          <img src={require(`../../img/FAQ-ape4.png`)} alt="Hero Ape" />
          <span>[4]</span>
          <h2>WHAT RIGHTS DO I HAVE AS AN OWNER OF AN NFT?</h2>
          <p>
            To purchase nfts from a collection, you typically need to use
            cryptocurrency on a blockchain0based marketplace.
          </p>
        </li>
      </ul>
    </FAQSection>
  );
};

export default FAQ;
