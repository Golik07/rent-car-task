import styled from 'styled-components';

export const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.8);
  z-index: 1200;
`;

export const Section = styled.div`
  background: white;
  width: 540px;
  height: 752px;
  border-radius: 24px;
`;

export const Img = styled.img`
  border-radius: 14px;

  object-fit: cover;
  width: 100%;
  height: 100%;
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

export const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
  padding: 40px;
  position: relative;
`;

export const ContainerImg = styled.div`
  width: 460px;
  height: 248px;
  margin-bottom: 14px;
`;

export const Text = styled.p`
  font-family: 'Manrope';
  font-size: 14px;
  line-height: 20px;
  font-weight: 400;
  color: rgb(18, 20, 23);
  margin-top: 14px;
  margin-bottom: 24px;
`;

export const ItemTitleText = styled.p`
  font-family: 'Manrope', sans-serif;
  font-size: 14px;
  line-height: 20px;
  font-weight: 500;
  color: rgb(18, 20, 23);
`;

export const ItemListTitleText = styled.ul`
  display: flex;
  flex-wrap: wrap;

  gap: 4px 6px;
  width: 370px;
  margin-top: 8px;

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

export const ItemListCoditions = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  font-family: 'Montserrat';
  font-weight: 400;
  font-size: 12px;
  color: rgb(54, 53, 53);
  line-height: 18px;
  margin-top: 8px;
`;

export const ItemListCoditionsList = styled.li`
  padding: 7px 14px;
  background-color: rgb(249, 249, 249);
  border-radius: 35px;
`;

export const Button = styled.a`
  border-radius: 12px;
  border: transparent;
  color: rgb(255, 255, 255);
  background-color: rgb(52, 112, 255);
  margin-top: 28px;
  width: 168px;
  height: 40px;
  font-size: 14px;
  font-weight: 600;
  padding: 12px 50px;
  text-decoration: none;

  &:hover,
  :active {
    background-color: rgb(11, 68, 205);
  }
`;

export const ContainerButton = styled.div`
  margin-top: 24px;
`;

export const ButtonSvg = styled.button`
  position: absolute;
  top: 16px;
  right: 16px;

  padding: 0px;
  line-height: 0;
  background-color: transparent;
  border: none;
  stroke: black;
`;

export const ReactIconSvg = styled.svg`
  width: 24px;
  height: 24px;
`;
