import React from 'react';
import Pagination from '../../Pagination';
import { Content, GradientBackground } from './styles';

const Header = () => (
  <Content>
    <GradientBackground>
      <Pagination title="Devices List" />
    </GradientBackground>
  </Content>
);

export default Header;
