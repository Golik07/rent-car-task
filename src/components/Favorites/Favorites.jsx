import React from 'react';
import { useSelector } from 'react-redux';
import { selectFavorites } from '../../redux/favorites/favoritesSelectors';
import { Container } from '@mui/material';
import { Gallery, Item } from 'components/ImageGallery/ImageGallery.styled';
import ImageGalleryItem from 'components/ImageGalleryItem';
import { Title } from 'components/Form/Form.styled';
import { ContainerText } from './Favorites.styled';

const FavoritesCars = () => {
  const favorites = useSelector(selectFavorites);

  return (
    <div>
      <Title>Favorites</Title>
      {favorites.length > 0 ? (
        <Container>
          <Gallery>
            {favorites.map(value => (
              <Item key={value.id}>
                <ImageGalleryItem car={value} />
              </Item>
            ))}
          </Gallery>
        </Container>
      ) : (
        <ContainerText>
          <p>Your collection of favorite cars is empty!</p>
        </ContainerText>
      )}
    </div>
  );
};

export default FavoritesCars;
