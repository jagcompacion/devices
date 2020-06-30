import React from 'react';
import { Container } from 'react-bootstrap';

type Props = {
  children: React.ReactNode;
};

const DefaultLayout: React.FC<Props> = ({ children }: Props) => {
  return <Container>{children}</Container>;
};

export default DefaultLayout;
