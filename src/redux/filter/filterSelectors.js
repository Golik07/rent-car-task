import { createSelector } from '@reduxjs/toolkit';
import { getCatalog } from '../catalog/catalogSelectors';

export const getFilter = state => state.filter;

export const filteredCatalog = createSelector(
  [getCatalog, getFilter],
  (catalog, { carBrand, price, min, max }) => {
    let filterCatalog = [];

    filterCatalog = catalog.filter(car =>
      car.make.toLowerCase().includes(carBrand)
    );

    if (price > 0) {
      filterCatalog = filterCatalog.filter(car => {
        const normalizedlPrice = Number(
          car.rentalPrice.split('').splice(1, 3).join('')
        );
        return normalizedlPrice === price;
      });
    }

    if (min > 0 && max === 0) {
      filterCatalog = filterCatalog.filter(car => car.mileage >= min);
    }

    if (max > 0 && min === 0) {
      filterCatalog = filterCatalog.filter(car => car.mileage <= max);
    }

    if (min > 0 && max > 0) {
      filterCatalog = filterCatalog.filter(
        car => car.mileage >= min && car.mileage <= max
      );
    }
    return filterCatalog;
  }
);
