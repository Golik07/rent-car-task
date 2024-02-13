import { extractCityAndCountry } from 'helpers/CityAndCountry';
import {
  Img,
  ItemList,
  ItemListTitle,
  Container,
  Overlay,
  Section,
  ItemTitleText,
  Text,
  ItemListTitleText,
  ItemListCoditions,
  ItemListCoditionsList,
  Button,
  ContainerButton,
  ButtonSvg,
  ContainerImg,
} from './Modal.styled';
import { useEffect } from 'react';
import {
  ItemContainer,
  ItemPrice,
  ItemTitle,
  Span,
} from 'components/ImageGalleryItem/ImageGalleryItem.styled';

const ModalWindow = ({ click, car }) => {
  useEffect(() => {
    const handleKeydown = e => {
      if (e.code === 'Escape' || e.target.tagName === 'DIV') {
        click();
      }
    };
    window.removeEventListener('keydown', handleKeydown);
    window.removeEventListener('click', handleKeydown);

    window.addEventListener('keydown', handleKeydown);
    window.addEventListener('click', handleKeydown);
  }, [click]);

  return (
    <Overlay>
      <Section>
        <Container>
          <div>
            <div>
              <ButtonSvg onClick={click}>
                <svg width="24px" height="24px" viewBox="0 0 36 32">
                  <path
                    strokeLinejoin="round"
                    strokeLinecap="round"
                    strokeMiterlimit="4"
                    strokeWidth="2.4"
                    d="M24 8l-16 16"
                  ></path>
                  <path
                    strokeLinejoin="round"
                    strokeLinecap="round"
                    strokeMiterlimit="4"
                    strokeWidth="2.4"
                    d="M8 8l16 16"
                  ></path>
                </svg>
              </ButtonSvg>
            </div>
            <ContainerImg>
              <Img src={car.img} alt={car.make} />
            </ContainerImg>

            <ItemContainer>
              <ItemTitle>
                {car.make} <Span>{car.model}</Span>, {car.year}
              </ItemTitle>
              <ItemPrice>{car.rentalPrice}</ItemPrice>
            </ItemContainer>
          </div>
          <div>
            <ItemListTitle>
              <ItemList>{extractCityAndCountry(car.address).country}</ItemList>
              <ItemList>{extractCityAndCountry(car.address).city}</ItemList>
              <ItemList>Id:{car.id}</ItemList>
              <ItemList>Year:{car.year}</ItemList>
              <ItemList>Type:{car.type}</ItemList>
              <ItemList>Fuel Consumption{car.fuelConsumption}</ItemList>
              <ItemList>Engine Size{car.id}</ItemList>
              {/* <ItemList>{car.accessories[0]}</ItemList> */}
            </ItemListTitle>
            <Text>{car.description}</Text>
            <ItemContainer>
              <div>
                <ItemTitleText>Accessories and functionalities:</ItemTitleText>
                <ItemListTitleText>
                  <ItemList>{car.accessories[0]}</ItemList>
                  <ItemList>{car.accessories[1]}</ItemList>
                  <ItemList>{car.functionalities[0]}</ItemList>
                  <ItemList>{car.accessories[2]}</ItemList>
                  <ItemList>{car.functionalities[1]}</ItemList>
                  <ItemList>{car.functionalities[2]}</ItemList>
                </ItemListTitleText>
              </div>
            </ItemContainer>
            <div>
              <p>Rental Conditions:</p>
              <ItemListCoditions>
                <ItemListCoditionsList>Minimum age:25</ItemListCoditionsList>
                <ItemListCoditionsList>
                  Valid driver’s license
                </ItemListCoditionsList>
                <ItemListCoditionsList>
                  Security deposite required
                </ItemListCoditionsList>
                <ItemListCoditionsList>
                  Mileage:<Span>{car.mileage}</Span>
                </ItemListCoditionsList>
                <ItemListCoditionsList>
                  Price:<Span>{car.rentalPrice}</Span>
                </ItemListCoditionsList>
              </ItemListCoditions>
            </div>
            <ContainerButton>
              <Button href="tel:+380730000000">Rental car</Button>
            </ContainerButton>
          </div>
        </Container>
      </Section>
    </Overlay>
  );
};

export default ModalWindow;
