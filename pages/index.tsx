import React from 'react';
import { createGlobalStyle } from 'styled-components';
import client from './api';
import { DEVICES } from './api/queries';
import DevicesList from '../src/components/Home/DevicesList';
import Header from '../src/components/Home/Header';

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
  }
`;

export async function getServerSideProps() {
  const { data } = await client.query({
    query: DEVICES,
  });

  return {
    props: {
      devices: data.devices.data,
    },
  };
}

const Home: React.FC = ({ devices }) => (
  <>
    <GlobalStyle />
    <Header />
    <DevicesList devices={devices} />
  </>
);

export default Home;
