import { gql } from '@apollo/client';

export const DEVICES = gql`
  query Devices($page: Int, $search: String) {
    devices(page: $page, search: $search) {
      data {
        code
        logo
        name
        description: description_fr
      }
      pagination {
        currentPage: current_page
        hasPreviousPage: has_previous_page
        hasNextPage: has_next_page
      }
    }
  }
`;

export const GAMES = gql`
  query Games($page: Int, $search: String, $device: DeviceCode) {
    games(page: $page, search: $search, device: $device, order_by: { field: popularity, sort: DESC }) {
      data {
        id
        popularity
        image
        name
        mariouniversalisURL
        genres {
          code
          name
          icon
        }
      }
      pagination {
        current_page
        has_previous_page
        has_next_page
      }
    }
  }
`;
