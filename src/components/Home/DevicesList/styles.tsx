import styled from 'styled-components';

export const List = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  width: 100%;
`;

export const Card = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 250px;
  height: 250px;
  margin: 16px 8px 0px 8px;
  padding: 15px;
  border-radius: 10px;
  box-shadow: 0px 0px 10px 2px rgba(0,0,0,0.1);
  background-color: #fff;
  cursor: pointer;
`;

export const ImageBox = styled.div`
  position: relative;
  width: 150px;
  height: 50px;
  min-height: 50px;
`;

export const Title = styled.h1`
  font-size: 16px;
  text-align: center;
  line-height: 1.2;
  margin: 10px 0px;
`;

export const Description = styled.p`
  font-size: 14px;
  text-align: justify;
`;
