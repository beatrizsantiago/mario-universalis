import styled, { css } from 'styled-components';

const PropsCenterAlign = css`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Container = styled.div`
  ${PropsCenterAlign}
  flex-direction: row;
  width: 90px;
  height: 30px;
`;

interface ButtonType {
  left?: boolean
  disabled: boolean
}

const PropsLeftButton = css`
  border-bottom-left-radius: 50%;
  border-top-left-radius: 50%;
`;

const PropsRightButton = css`
  border-bottom-right-radius: 50%;
  border-top-right-radius: 50%;
`;

export const Button = styled.button.attrs((props) => ({ disabled: props.disabled }))<ButtonType>`
  ${PropsCenterAlign}
  ${(props) => (props.left ? PropsLeftButton : PropsRightButton)}
  background-color: #fff;
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
  background-color: #fff;
  font-weight: 700;
  font-size: 12px;
  border-left: solid 1px #cccccc;
  border-right: solid 1px #cccccc;
`;
