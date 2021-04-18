import React from 'react';
import client from './api';
import { DEVICES } from './api/queries';
import DevicesList from '../src/components/Home/DevicesList';
import Header from '../src/components/Home/Header';

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
    <Header />
    <DevicesList devices={devices} />
  </>
);

export default Home;
