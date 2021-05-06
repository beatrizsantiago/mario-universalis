import React from 'react';
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';
import SearchInput from '../SearchInput';
import {
  Box, Row, Title, Navigation, Button, Page,
} from './styles';

const Pagination = ({ title }) => (
  <Box>
    <Title>{title}</Title>
    <Row>
      <SearchInput />
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
    </Row>
  </Box>
);

export default Pagination;
