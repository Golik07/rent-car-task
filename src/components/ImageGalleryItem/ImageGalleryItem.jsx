import ModalWindow from 'components/Modal/Modal';
import React, { useState } from 'react';

import {
  Img,
  Container,
  Span,
  ItemPrice,
  ItemContainer,
  ItemTitle,
  ItemListTitle,
  Button,
  ItemList,
  ContainerImg,
  StyleCheckBox,
  StyleFavoriteBorder,
  StyleFavorite,
  ContainerCheckBox,
} from './ImageGalleryItem.styled';
import { extractCityAndCountry } from 'helpers/CityAndCountry';
import { useDispatch, useSelector } from 'react-redux';
import { selectFavorites } from '../../redux/favorites/favoritesSelectors';
import {
  setFavorite,
  deleteFavorite,
} from '../../redux/favorites/favoritesSlice';

const ImageGalleryItem = ({ car }) => {
  const [isModal, setIsModal] = useState(false);
  const favorites = useSelector(selectFavorites);
  const dispatch = useDispatch();

  const isFavorite = favorites.some(({ id }) => id === car.id);

  const addFavorites = () => {
    if (!isFavorite) {
      dispatch(setFavorite(car));
    } else {
      dispatch(deleteFavorite(car));
    }
  };

  const handleModalOpen = () => {
    setIsModal(true);
  };

  const handleModalClose = () => {
    setIsModal(false);
  };

  return (
    <Container>
      <ContainerCheckBox>
        <StyleCheckBox
          icon={<StyleFavoriteBorder />}
          checkedIcon={<StyleFavorite />}
          onChange={addFavorites}
          checked={isFavorite}
        />
      </ContainerCheckBox>
      <ContainerImg>
        <Img src={car.img} alt={car.make}></Img>
      </ContainerImg>
      <ItemContainer>
        <ItemTitle>
          {car.make} <Span>{car.model}</Span>, {car.year}
        </ItemTitle>
        <ItemPrice>{car.rentalPrice}</ItemPrice>
      </ItemContainer>
      <div>
        <ItemListTitle>
          <ItemList>{extractCityAndCountry(car.address).country}</ItemList>
          <ItemList>{extractCityAndCountry(car.address).city}</ItemList>
          <ItemList>{car.rentalCompany}</ItemList>
          <ItemList>Premium</ItemList>
          <ItemList>{car.type}</ItemList>
          <ItemList>{car.model}</ItemList>
          <ItemList>{car.id}</ItemList>
        </ItemListTitle>
      </div>
      <div>
        <Button type="button" onClick={handleModalOpen}>
          Loard More
        </Button>
      </div>
      {isModal && <ModalWindow car={car} click={handleModalClose} />}
    </Container>
  );
};

export default ImageGalleryItem;
