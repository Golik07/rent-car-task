import { Route, Routes } from 'react-router';
import Layout from './Layout/Layout';
import Home from '../pages/Home';
import Catalog from '../pages/Catalog';
import Favorites from '../pages/Favorites';
import './Form/selectorStyle/selectStyle.scss';

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="catalog" element={<Catalog />} />
        <Route path="favorites" element={<Favorites />} />
      </Route>
    </Routes>
  );
};
