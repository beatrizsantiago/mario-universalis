import styled from 'styled-components';

export const Box = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 0px 40px;

  @media (max-width: 600px) {
    flex-direction: column;
    padding: 20px;
  }
`;

export const Row = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const Title = styled.h1`
  font-size: 25px;
  font-weight: 700;
  color: #ffffff;
  line-height: 1;
`;
