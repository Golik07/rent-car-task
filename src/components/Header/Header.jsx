import Nav from 'components/Nav/Nav';
import React from 'react';
import { Container } from './Header.styled';
import { Link } from 'react-router-dom';
import IconHomePage from '../../images/car.png';
const Header = () => {
  return (
    <Container>
      <div style={{ marginLeft: '50px' }}>
        <Link
          style={{
            display: 'flex',
            gap: '10px',
            textDecoration: 'none',
            alignItems: 'center',
          }}
          to={'/'}
        >
          <div>
            <img
              src={IconHomePage}
              alt="HomePage"
              style={{ fill: 'red', width: '50px', height: '50px' }}
            />
          </div>
          <div>
            <p
              style={{
                fontSize: '25px',
                fontWeight: '600',
                color: ' rgba(11, 68, 205, 1)',
              }}
            >
              Rental Cars
            </p>
          </div>
        </Link>
      </div>
      <Nav></Nav>
    </Container>
  );
};

export default Header;
