import React from 'react';
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';
import { Container, Button, Page } from './styles';

const Navigation = () => (
  <Container>
    <Button left>
      <FiChevronLeft />
    </Button>
    <Page>
      1
    </Page>
    <Button>
      <FiChevronRight />
    </Button>
  </Container>
);

export default Navigation;
