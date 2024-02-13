import styled from 'styled-components';

export const Label = styled.label`
  width: 65px;
  height: 18px;

  font-size: 14px;
  font-family: 'Manrope';
  font-weight: 500;
  line-height: 18px;
  color: rgba(138, 138, 137, 1);
  margin-bottom: 8;
`;

export const ContainerSelector = styled.div`
  display: flex;
  margin-top: 8px;
  margin-right: 8px;
`;

export const InputLeft = styled.input`
  display: block;

  width: 155px;
  height: 46px;

  border-radius: 14px 0px 0px 14px;
  border: none;
  border-right: 1px solid rgba(138, 138, 137, 0.2);

  color: #121417;
  background-color: rgba(247, 247, 251, 1);
  font-size: 18px;
  text-indent: 70px;
  font-family: 'Manrope';
  font-weight: 500;

  &:focus {
    outline: none;
    border: 1px solid rgba(52, 112, 255, 1);
  }
`;

export const InputRight = styled.input`
  display: block;

  width: 156px;
  height: 46px;

  border-radius: 0px 14px 14px 0px;
  border: none;

  background-color: rgba(247, 247, 251, 1);
  font-size: 18px;
  text-indent: 50px;
  font-family: 'Manrope';
  font-weight: 500;

  &:focus {
    outline: none;
    border: 1px solid rgba(52, 112, 255, 1);
  }
`;

export const ContainerInputRight = styled.div`
  position: relative;
`;

export const Span = styled.span`
  display: block;
  position: absolute;

  color: #121417;
  margin-top: 14px;
  margin-left: 24px;
  font-family: 'Manrope';
  font-weight: 500;
  font-size: 18px;
  line-height: 20px;
`;

export const ButtonForm = styled.button`
  width: 136px;
  height: 48px;
  padding: 14px 44px;
  margin-left: 18px;
  background-color: rgba(52, 112, 255, 1);
  color: rgba(255, 255, 255, 1);
  border: none;
  border-radius: 12px;

  font-size: 14px;
  font-weight: 600;
  font-family: 'Manrope';
  line-height: 20px;

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
