import React from 'react';
import { render, fireEvent, wait } from '@testing-library/react';
import { vi } from 'vitest';
import Form from './Form';

afterEach(() => {
  vi.unstubAllGlobals();
});

function fillForm() {
  const view = render(<Form />);
  fireEvent.change(view.getByLabelText('Your name'), { target: { value: 'Test visitor' } });
  fireEvent.change(view.getByLabelText('Email address'), { target: { value: 'test@example.com' } });
  fireEvent.change(view.getByLabelText('About your project'), { target: { value: 'Help with a Node.js upgrade.' } });
  return view;
}

test('shows inline errors for required fields and offers timeline and engagement choices', () => {
  const view = render(<Form />);

  fireEvent.submit(view.getByRole('form'));

  expect(view.getByRole('alert')).toHaveTextContent('Please check the highlighted fields');
  expect(view.getByText('Please enter your name.')).toBeInTheDocument();
  expect(view.getByText('Please enter an email address so I can reply.')).toBeInTheDocument();
  expect(view.getByText('Please share a short outline of your project.')).toBeInTheDocument();
  expect(view.getByLabelText(/Timeline/).querySelectorAll('option')).toHaveLength(5);
  expect(view.getByLabelText(/Engagement/).querySelectorAll('option')).toHaveLength(6);
});

test('confirms an accepted enquiry and clears the form', async () => {
  const fetchMock = vi.fn().mockResolvedValue({ ok: true });
  vi.stubGlobal('fetch', fetchMock);
  const view = fillForm();
  fireEvent.submit(view.getByRole('form'));
  await wait(() => expect(view.getByRole('status')).toHaveTextContent('your enquiry has been submitted'));
  expect(view.getByLabelText('About your project').value).toBe('');
  expect(fetchMock.mock.calls[0][1].headers.Accept).toBe('application/json');
  expect(fetchMock.mock.calls[0][1].body.get('email')).toBe('test@example.com');
});

test.each(['server', 'network'])('preserves the enquiry and permits retry after a %s failure', async failure => {
  const fetchMock = vi.fn();
  if (failure === 'server') fetchMock.mockResolvedValueOnce({ ok: false });
  else fetchMock.mockRejectedValueOnce(new TypeError('Network unavailable'));
  fetchMock.mockResolvedValueOnce({ ok: true });
  vi.stubGlobal('fetch', fetchMock);
  const view = fillForm();
  fireEvent.submit(view.getByRole('form'));
  await wait(() => expect(view.getByRole('alert')).toHaveTextContent('please try again'));
  expect(view.getByLabelText('About your project').value).toBe('Help with a Node.js upgrade.');
  expect(view.getByText('mandiaroux@gmail.com').getAttribute('href')).toBe('mailto:mandiaroux@gmail.com');
  fireEvent.submit(view.getByRole('form'));
  await wait(() => expect(view.getByRole('status')).toHaveTextContent('your enquiry has been submitted'));
});

test('prevents duplicate requests while an enquiry is sending', async () => {
  let finish;
  const fetchMock = vi.fn(() => new Promise(resolve => { finish = resolve; }));
  vi.stubGlobal('fetch', fetchMock);
  const view = fillForm();
  fireEvent.submit(view.getByRole('form'));
  fireEvent.submit(view.getByRole('form'));
  expect(fetchMock).toHaveBeenCalledTimes(1);
  expect(view.getByText('Sending…')).toBeDisabled();
  finish({ ok: true });
  await wait(() => expect(view.getByRole('status')).toHaveTextContent('your enquiry has been submitted'));
});
