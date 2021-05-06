import React from 'react';
import NavBar from '../../NavBar';
import { Content, GradientBackground } from './styles';

interface Pagination {
  currentPage: string
  hasPreviousPage: Boolean
  hasNextPage: Boolean
}

interface HeaderProps {
  pagination: Pagination
}

const Header = ({ pagination }: HeaderProps) => (
  <Content>
    <GradientBackground>
      <NavBar title="Devices List" pagination={pagination} />
    </GradientBackground>
  </Content>
);

export default Header;
