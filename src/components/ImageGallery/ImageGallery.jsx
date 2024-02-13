import ImageGalleryItem from '../ImageGalleryItem/ImageGalleryItem';
import { Gallery, Item, Container } from './ImageGallery.styled';
import { filteredCatalog } from '../../redux/filter/filterSelectors';
import { useSelector } from 'react-redux';

const ImageGallery = () => {
  const filtered = useSelector(filteredCatalog);

  return (
    <Container>
      <Gallery>
        {filtered.map(car => (
          <Item key={car.id}>
            <ImageGalleryItem car={car} />
          </Item>
        ))}
      </Gallery>
    </Container>
  );
};

export default ImageGallery;
