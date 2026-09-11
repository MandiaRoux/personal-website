import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

test('renders the about section', () => {
  const { getByText } = render(<App />);
  expect(getByText(/about me/i)).toBeInTheDocument();
});
