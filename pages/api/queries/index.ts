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
