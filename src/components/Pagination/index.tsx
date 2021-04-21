import React from 'react';
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';
import {
  Box, Title, Navigation, Button, Page,
} from './styles';

const Pagination = ({ title }) => (
  <Box>
    <Title>{title}</Title>
    <Navigation>
      <Button left>
        <FiChevronLeft />
      </Button>
      <Page>
        1
      </Page>
      <Button>
        <FiChevronRight />
      </Button>
    </Navigation>
  </Box>
);

export default Pagination;
