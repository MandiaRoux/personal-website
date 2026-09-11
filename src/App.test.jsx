import React from 'react';
import { fireEvent, render } from '@testing-library/react';
import App from './App';

test('renders the about section', () => {
  const { getByText } = render(<App />);
  expect(getByText(/about me/i)).toBeInTheDocument();
});

test('service CTA preselects the enquiry type and focuses the contact form', () => {
  const { getAllByText, getByLabelText } = render(<App />);
  const nodeUpgradeHeading = getAllByText('Node.js upgrades').find(element => element.tagName === 'H3');
  const nodeUpgradeCard = nodeUpgradeHeading.closest('article');

  fireEvent.click(nodeUpgradeCard.querySelector('a'));

  expect(window.location.hash).toBe('#contact');
  expect(getByLabelText('What do you need help with?').value).toBe('node-upgrade');
  expect(getByLabelText('Your name')).toHaveFocus();
});
