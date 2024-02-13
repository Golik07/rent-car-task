import React from 'react';
import { useDispatch } from 'react-redux';
import makes from '../../makes.json';
import { prices } from 'helpers/CreatePrice';
import { clearCatalog } from '../../redux/catalog/catalogSlice';
import { setFilter } from '../../redux/filter/filterSlice';
import { fetchAllCars } from '../../redux/catalog/catalogOperations';
import CreatableSelect from 'react-select/creatable';
import {
  ButtonForm,
  ContainerInputRight,
  ContainerSelector,
  InputLeft,
  InputRight,
  Label,
  Span,
  Title,
} from './Form.styled';

const Form = () => {
  const createPrices = prices();
  const dispatch = useDispatch();
  const makeOptions = makes.map(make => ({ value: make, label: make }));
  const priceOptions = createPrices.map(price => ({
    value: price,
    label: price,
  }));

  const formSubmit = e => {
    e.preventDefault();

    const { brand, price, car_min_mileage, car_max_mileage } =
      e.target.elements;
    if (
      !brand.value &&
      !price.value &&
      !car_min_mileage.value &&
      !car_max_mileage.value
    ) {
      return alert('Sorry');
    }

    const min_mileage = Number(car_min_mileage.value);
    const max_mileage = Number(car_max_mileage.value);
    const all_price = price.value === 'all' ? '' : Number(price.value);
    const all_cars =
      brand.value.toLowerCase() === 'all' ? '' : brand.value.toLowerCase();

    if (min_mileage < 0 || max_mileage < 0) {
      return console.log('Sorry');
    }
    if (min_mileage > max_mileage) {
      return alert('sorry');
    }

    const filter = {
      carBrand: all_cars,
      price: all_price,
      min: min_mileage,
      max: max_mileage,
    };

    dispatch(clearCatalog());
    dispatch(fetchAllCars({ page: 1, limit: 40 }));
    dispatch(setFilter(filter));
  };

  return (
    <div>
      <Title>Catalog Cars</Title>
      <form
        style={{
          display: 'flex',
          justifyContent: 'center',
          marginBottom: '20px',
        }}
        onSubmit={formSubmit}
      >
        <div style={{ marginRight: '10px' }}>
          {' '}
          <Label htmlFor="Car brand">Car brand</Label>
          <ContainerSelector>
            <CreatableSelect
              classNamePrefix="custom-select"
              isClearable
              name="brand"
              placeholder="Enter the text"
              id="carBrand"
              defaultValue=""
              options={[{ value: 'All', label: 'All' }, ...makeOptions]}
            />
          </ContainerSelector>
        </div>
        <div>
          <Label style={{ fontSize: '14px' }} htmlFor="Price/1hour">
            Price/ 1hour
          </Label>
          <ContainerSelector>
            <CreatableSelect
              name="price"
              classNamePrefix="custom-select-price"
              isClearable
              placeholder="To $"
              id="price"
              defaultValue=""
              options={priceOptions}
            />
          </ContainerSelector>
        </div>
        <div>
          <Label htmlFor="car_mileage/km">Car mileage/km</Label>
          <ContainerSelector>
            <Span>From</Span>
            <InputLeft
              type="number"
              name="car_min_mileage"
              id="car_min_mileage"
            />
            <ContainerInputRight>
              <Span>To</Span>
              <InputRight
                type="number"
                name="car_max_mileage"
                id="car_max_mileage"
              />
            </ContainerInputRight>

            <ButtonForm type="submit">Search</ButtonForm>
          </ContainerSelector>
        </div>
      </form>
    </div>
  );
};

export default Form;
