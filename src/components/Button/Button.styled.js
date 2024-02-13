import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  justify-content: center;
`;

export const LoadMoreButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;

  border: transparent;
  color: #3470ff;
  background-color: transparent;
  margin-top: 30px;
  margin-bottom: 30px;
  width: 100px;
  height: 24px;
  font-size: 16px;
  font-weight: 500;
  font-family: 'Manrope', sans-serif;
  &:hover:active {
    color: #0b44cd;
  }
`;
