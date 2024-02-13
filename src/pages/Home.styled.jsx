import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const ContainerButton = styled.div`
  display: flex;
  justify-content: end;
`;

export const LintButton = styled(NavLink)`
  padding: 8px 16px;
  border-radius: 12px;
  text-decoration: none;
  border: none;
  background-color: rgba(52, 112, 255, 1);
  color: rgba(255, 255, 255, 1);

  font-size: 25px;
  font-weight: 600;
  font-family: 'Manrope';
  line-height: 20px;
  margin-right: 100px;

  &:hover,
  :active {
    background-color: rgba(11, 68, 205, 1);
  }
`;

export const Title = styled.h1`
  display: flex;
  justify-content: center;
  margin-top: 30px;
  margin-bottom: 30px;
  font-weight: 600;
  font-family: 'Manrope';
  line-height: 20px;
  color: #121417;
`;

export const ContainerAboute = styled.div`
  display: flex;
  padding: 30px;
`;

export const Img = styled.img`
  width: 100%;
`;

export const Text = styled.p`
  font-size: 20px;
  font-weight: 400;
  font-family: 'Manrope';
  width: 600px;
  margin-bottom: 30px;
  color: rgba(18, 20, 23, 0.8);
`;

export const TitleWhy = styled.h2`
  margin-left: 10px;
  margin-bottom: 20px;
`;
