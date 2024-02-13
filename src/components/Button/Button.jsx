import React from 'react';
import { Container, LoadMoreButton } from './Button.styled';

const Button = ({ click }) => {
  return (
    <Container>
      <LoadMoreButton onClick={click} type="button">
        Load More
      </LoadMoreButton>
    </Container>
  );
};

export default Button;
