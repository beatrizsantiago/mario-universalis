import styled from 'styled-components';

export const Content = styled.div`
  width: 100%;
  margin-bottom: 8px;
  background-image: url('https://wallpaperaccess.com/full/513997.jpg');
  background-size: cover;
  background-repeat: no-repeat;
  background-position: top;
`;

export const GradientBackground = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  width: 100%;
  height: 320px;
  background: linear-gradient(180deg, rgba(0,0,0,0) 0%, rgba(0,212,255,1) 95%);
`;
