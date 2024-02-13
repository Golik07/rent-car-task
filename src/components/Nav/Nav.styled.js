import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Link = styled(NavLink)`
  padding: 8px 16px;
  border-radius: 12px;
  text-decoration: none;
  border: none;
  font-weight: 500;
  color: black;
  background-color: rgba(52, 112, 255, 1);
  color: rgba(255, 255, 255, 1);

  font-size: 14px;
  font-weight: 600;
  font-family: 'Manrope';
  line-height: 20px;

  &.active {
    background-color: rgba(11, 68, 205, 1);
  }
`;

export const NavContainer = styled.nav`
  gap: 30px;
  margin-right: 100px;
`;
