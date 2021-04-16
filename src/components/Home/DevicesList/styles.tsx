import styled from 'styled-components';

export const List = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
`;

export const Card = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 200px;
  height: 250px;
  background-color: pink;
  margin: 16px 8px 0px 8px;
  padding: 5px;
  border-radius: 10px;
  cursor: pointer;
  /* white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis; */
`;

export const ImageBox = styled.div`
  position: relative;
  width: 150px;
  height: 50px;
  min-height: 50px;
`;
