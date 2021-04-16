import { gql } from '@apollo/client';

export const DEVICES = gql`
  query Devices {
    devices {
      data {
        code
        logo
        name
        description: description_fr
      }
    }
  }
`;
