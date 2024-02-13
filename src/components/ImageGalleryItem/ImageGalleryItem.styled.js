import styled from 'styled-components';
import Checkbox from '@mui/material/Checkbox';
import FavoriteBorder from '@mui/icons-material/FavoriteBorder';
import Favorite from '@mui/icons-material/Favorite';

export const Img = styled.img`
  object-fit: cover;
  width: 100%;
  height: 100%;
  border-radius: 24px;

  margin-bottom: 14px;
`;

export const Container = styled.div`
  width: 274px;
  height: 426px;
  position: relative;
`;

export const Span = styled.span`
  color: rgb(52, 112, 255);
`;

export const ItemContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 8px;
`;

export const ItemPrice = styled.p`
  margin-right: 9px;
  font-size: 16px;
  font-weight: 500;
`;

export const ItemTitle = styled.h3`
  font-size: 16px;
  font-weight: 500;
  line-height: 24px;
  color: rgb(18, 20, 23);
  max-width: 200px;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
`;

export const ItemListTitle = styled.ul`
  display: flex;
  flex-wrap: wrap;

  gap: 6px 4px;
  width: 270px;
  & > li {
    &:not(:last-child)::after {
      content: '';
      display: block;
      width: 1px;
      height: 16px;
      background-color: rgba(18, 20, 23, 0.1);
    }
  }
`;

export const ItemList = styled.li`
  display: flex;
  font-weight: 400;
  gap: 6px;
  font-size: 12px;
  font-family: 'Manrope';
  color: rgba(18, 20, 23, 0.5);
`;

export const Button = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;

  border-radius: 12px;
  border: transparent;
  color: rgb(255, 255, 255);
  background-color: rgb(52, 112, 255);
  margin-top: 28px;
  width: 274px;
  height: 44px;
  font-size: 14px;
  font-weight: 600;

  &:hover,
  :active {
    background-color: rgb(11, 68, 205);
  }
`;

export const ContainerCheckBox = styled.div`
  position: absolute;
  top: 16px;
  right: 16px;
`;

export const StyleCheckBox = styled(Checkbox)({
  width: '18px',
  height: '18px',
  fill: '#FFFFFFCC',
});

export const StyleFavorite = styled(Favorite)({
  color: '#3470FF',
});

export const StyleFavoriteBorder = styled(FavoriteBorder)({
  color: '#FFFFFFCC',
});

export const ContainerImg = styled.div`
  width: 274px;
  height: 268px;
`;
