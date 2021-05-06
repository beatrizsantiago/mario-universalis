import styled from 'styled-components';
import { BiSearchAlt } from 'react-icons/bi';

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  margin-right: 10px;
`;

export const Input = styled.input`
  width: 200px;
  height: 30px;
  border-radius: 20px;
  border: none;
  padding: 5px 30px 5px 10px;
  box-sizing: border-box;

  :focus{
    outline: none;
  }
`;

export const SearchIcon = styled(BiSearchAlt)`
  position: absolute;
  width: 22px;
  height: 22px;
  padding-right: 6px;
`;
