import React from 'react';
import SearchInput from './SearchInput';
import Navigation from './Navigation';
import { Box, Row, Title } from './styles';

const NavBar = ({ title }) => (
  <Box>
    <Title>{title}</Title>
    <Row>
      <SearchInput />
      <Navigation />
    </Row>
  </Box>
);

export default NavBar;
