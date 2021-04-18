import React from 'react';
import Image from 'next/image';
import {
  List, Card, ImageBox, Title, Description,
} from './styles';

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
        <Title>
          {device.name}
        </Title>
        <Description>
          {device.description}
        </Description>
      </Card>
    ))}
  </List>
);

export default DevicesList;
