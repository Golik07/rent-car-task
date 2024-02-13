import React from 'react';

import { Link, NavContainer } from './Nav.styled';

const Nav = () => {
  return (
    <NavContainer>
      <Link to="/">Home</Link>
      <Link to="/catalog">Catalog</Link>
      <Link to="/favorites">Favorites</Link>
    </NavContainer>
  );
};

export default Nav;
