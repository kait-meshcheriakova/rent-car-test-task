import {
  AdvantagesItem,
  AdvantagesList,
  AdvantagesWrap,
  DataImg,
  TitleWrap,
} from './Home.styled';

const Home = () => {
  return (
    <main>
      <TitleWrap>
        <DataImg>
          <h1>Welcome to Rentalcars.com </h1>
        </DataImg>
      </TitleWrap>
      <AdvantagesWrap>
        <AdvantagesList>
          <AdvantagesItem>
            <h2>Lease with flexible terms</h2>
            <p>
              Cancel or change most reservations for free 48 hours before
              pickup.
            </p>
          </AdvantagesItem>
          <AdvantagesItem>
            <h2>No hidden fees</h2>
            <p>Know exactly what you're paying for.</p>
          </AdvantagesItem>
          <AdvantagesItem>
            <h2>Price match guarantee</h2>
            <p>
              Found the same offer cheaper? We will refund the difference in
              price.
            </p>
          </AdvantagesItem>
        </AdvantagesList>
      </AdvantagesWrap>
    </main>
  );
};

export default Home;
