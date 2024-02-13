import React from 'react';
import {
  ContainerAboute,
  Img,
  TitleWhy,
  Text,
  Title,
  LintButton,
  ContainerButton,
} from './Home.styled';
import homeImg from '../images/18tdieu-helios317.jpg';

const Home = () => {
  return (
    <section>
      <Title>Home Page</Title>
      <ContainerAboute>
        <div>
          <Img src={homeImg} alt="Nissan GTR" />
        </div>
        <div>
          <Text>
            Welcome to Rental Cars - Your Reliable Partner in Mobility! At
            Rental Cars, we strive to make your journey comfortable, convenient,
            and memorable. Our company offers a wide range of high-quality
            rental cars to suit various needs and budgets.
          </Text>
          <TitleWhy>Why Choose Us?</TitleWhy>
          <Text>
            Diverse Fleet: We provide a variety of cars, from economical models
            to premium-class vehicles, catering to your preferences and
            standards. Easy Rental Process: Our rental process is quick and
            straightforward, allowing you to get the keys to your perfect car
            swiftly and embark on your adventure. Transparent Rates: We value
            your time and money. Our rates are transparent, with no hidden fees,
            and include all necessary insurances. Customer Service: Our team is
            ready to answer your questions and assist you at any time. We value
            each customer and aim to provide exceptional service. Flexible
            Options: We offer flexible rental options, including long-term
            rentals, corporate packages, and more.
          </Text>
          <Text>
            Make your next journey unforgettable with Rental Cars. Reserve your
            car now and enjoy the freedom of mobility!
          </Text>
          <ContainerButton>
            <LintButton to="/catalog">Rent Car</LintButton>
          </ContainerButton>
        </div>
      </ContainerAboute>
    </section>
  );
};

export default Home;
