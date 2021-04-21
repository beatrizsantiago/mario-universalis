import styled, { css } from 'styled-components';

const PropsCenterAlign = css`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Box = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 0px 40px;
`;

export const Title = styled.h1`
  font-size: 25px;
  font-weight: 700;
  color: #ffffff;
  line-height: 1;
`;

export const Navigation = styled.div`
  ${PropsCenterAlign}
  flex-direction: row;
  width: 90px;
  height: 30px;
`;

const PropsLeftButton = css`
  border-bottom-left-radius: 50%;
  border-top-left-radius: 50%;
`;

const PropsRightButton = css`
  border-bottom-right-radius: 50%;
  border-top-right-radius: 50%;
`;

export const Button = styled.button`
  ${PropsCenterAlign}
  ${(props) => (props.left ? PropsLeftButton : PropsRightButton)}
  background-color: rgba(255, 255, 255, 0.9);
  width: 33.3%;
  height: 100%;
  border: none;
  cursor: pointer;

  :focus{
    outline: none;
  }
`;

export const Page = styled.div`
  ${PropsCenterAlign}
  width: 33.3%;
  height: 100%;
  background-color: rgba(255, 255, 255, 0.9);
  font-weight: 700;
  font-size: 12px;
  border-left: solid 1px #cccccc;
  border-right: solid 1px #cccccc;
`;
