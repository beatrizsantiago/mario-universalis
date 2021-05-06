import React from 'react';
import client from './api';
import { DEVICES } from './api/queries';
import DevicesList from '../src/components/Home/DevicesList';
import Header from '../src/components/Home/Header';

export async function getServerSideProps() {
  const { data } = await client.query({
    query: DEVICES,
    variables: {
      page: 1,
    },
  });

  return {
    props: {
      devices: data.devices.data,
      pagination: data.devices.pagination,
    },
  };
}

const Home: React.FC = ({ devices, pagination }) => (
  <>
    <Header pagination={pagination} />
    <DevicesList devices={devices} />
  </>
);

export default Home;
