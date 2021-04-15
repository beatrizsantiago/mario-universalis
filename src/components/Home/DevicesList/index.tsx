import React from 'react';

const DevicesList = ({ devices }) => (
  <div>
    {devices?.map((device) => (
      <div key={device.code}>
        {device.code}
      </div>
    ))}
  </div>
);

export default DevicesList;
