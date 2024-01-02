import React from 'react';
import { render } from '@testing-library/react';
import Footer from './Footer';

test('renders Footer component', () => {
  const { getByText } = render(<Footer />);
  expect(getByText('Library Management System © 2020 All Rights Reserved.')).toBeInTheDocument();
});
