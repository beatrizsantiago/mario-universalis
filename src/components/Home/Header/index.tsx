import React from 'react';
import NavBar from '../../NavBar';
import { Content, GradientBackground } from './styles';

const Header = () => (
  <Content>
    <GradientBackground>
      <NavBar title="Devices List" />
    </GradientBackground>
  </Content>
);

export default Header;
