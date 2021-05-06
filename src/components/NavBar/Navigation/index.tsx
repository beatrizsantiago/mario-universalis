import React from 'react';
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';
import { Container, Button, Page } from './styles';

interface Pagination {
  currentPage: string
  hasPreviousPage: Boolean
  hasNextPage: Boolean
}

interface NavigationProps {
  pagination: Pagination
}

const Navigation = ({ pagination }: NavigationProps) => (
  <Container>
    <Button left disabled={!pagination.hasPreviousPage}>
      <FiChevronLeft />
    </Button>
    <Page>
      {pagination.currentPage}
    </Page>
    <Button disabled={!pagination.hasNextPage}>
      <FiChevronRight />
    </Button>
  </Container>
);

export default Navigation;
