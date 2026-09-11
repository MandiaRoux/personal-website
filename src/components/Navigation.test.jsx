import React from 'react';
import { fireEvent, render } from '@testing-library/react';
import Navigation from './Navigation';

test('marks the current section and toggles the compact menu', () => {
  const { container, getByText } = render(<Navigation activeSection="work" isSticky />);
  const navigation = container.querySelector('#main-navigation');

  expect(container.querySelector('.site-header')).toHaveClass('site-header--sticky');
  expect(navigation.querySelector('a[href="#work"]')).toHaveAttribute('aria-current', 'location');
  expect(getByText('Menu').getAttribute('aria-expanded')).toBe('false');

  fireEvent.click(getByText('Menu'));

  expect(getByText('Menu').getAttribute('aria-expanded')).toBe('true');
  expect(navigation).toHaveClass('is-open');
});
