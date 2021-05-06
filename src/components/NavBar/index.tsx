import React from 'react';
import SearchInput from './SearchInput';
import Navigation from './Navigation';
import { Box, Row, Title } from './styles';

interface Pagination {
  currentPage: string
  hasPreviousPage: Boolean
  hasNextPage: Boolean
}

interface NavBarProps {
  title: string
  pagination: Pagination
}

const NavBar = ({ title, pagination }: NavBarProps) => (
  <Box>
    <Title>{title}</Title>
    <Row>
      <SearchInput />
      <Navigation pagination={pagination} />
    </Row>
  </Box>
);

export default NavBar;
