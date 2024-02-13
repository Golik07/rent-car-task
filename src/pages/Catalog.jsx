import { useDispatch, useSelector } from 'react-redux';
import React, { useCallback, useEffect, useState } from 'react';
import { fetchAllCars } from '../redux/catalog/catalogOperations';
import ImageGallery from '../components/ImageGallery/ImageGallery';
import Form from 'components/Form/Form';
import Button from 'components/Button/Button';
import { getCatalog, getIsLoading } from '../redux/catalog/catalogSelectors';
import { clearCatalog } from '../redux/catalog/catalogSlice';
import { clearFilter } from '../redux/filter/filterSlice';
import { filteredCatalog } from '../redux/filter/filterSelectors';
import { Hourglass } from 'react-loader-spinner';
import { ContainerLoader } from './Catalog.styled';

const Catalog = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector(getIsLoading);
  const quantity = useSelector(getCatalog);
  const filtered = useSelector(filteredCatalog);

  const [page, setPage] = useState(1);

  useEffect(() => {
    if (page === 1) {
      dispatch(clearCatalog());
      dispatch(clearFilter());
    }
    dispatch(fetchAllCars({ page, limit: 12 }));
  }, [dispatch, page]);

  const LoadMoreclick = useCallback(() => {
    setPage(prevState => prevState + 1);
  }, []);

  return (
    <section>
      <Form></Form>
      {filtered.length > 0 && <ImageGallery />}
      {quantity.length < 40 && filtered.length >= 12 && !isLoading && (
        <Button click={LoadMoreclick} />
      )}
      {isLoading && (
        <ContainerLoader>
          <Hourglass
            visible={true}
            height="80"
            width="80"
            ariaLabel="hourglass-loading"
            wrapperStyle={{}}
            wrapperClass=""
            colors={['#306cce', '#72a1ed']}
          />
        </ContainerLoader>
      )}
    </section>
  );
};

export default Catalog;
