import React from 'react';
import Image from 'next/image';
import { List, Card, ImageBox } from './styles';

interface Device {
  code: string
  logo: string
  name: string
  description: string
}

interface DevicesListProps {
  devices: Device[]
}

const DevicesList = ({ devices }: DevicesListProps) => (
  <List>
    {devices.map((device) => (
      <Card key={device.code}>
        <ImageBox>
          <Image
            alt="Logo"
            src={`${device.logo}`}
            layout="fill"
            objectFit="contain"
          />
        </ImageBox>
        <h6>{device.name}</h6>
        {device.description}
      </Card>
    ))}
  </List>
);

export default DevicesList;
