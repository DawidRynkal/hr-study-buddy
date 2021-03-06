import React from 'react';
import { render, screen, fireEvent, waitFor } from 'test-utils';
import Root from './Root';

describe('Root component', () => {
  it('Renders the root component as unathenticated user', () => {
    render(<Root />);
    screen.getByLabelText('login');
  });

  it('Displays error message when wrong credentials are passed', async () => {
    render(<Root />);

    const login = screen.getByLabelText('login');
    const password = screen.getByLabelText('password');

    fireEvent.change(login, { target: { value: 'Alloldkash' } });
    fireEvent.change(password, { target: { value: 'Adsftyry' } });

    fireEvent.click(screen.getByText('Sign in'));

    await waitFor(() => screen.getByText(/Ooops/));
  });

  it('Display authenticated app', async () => {
    render(<Root />);

    const login = screen.getByLabelText('login');
    const password = screen.getByLabelText('password');

    fireEvent.change(login, { target: { value: 'teacher@studybuddy.com' } });
    fireEvent.change(password, { target: { value: '1234' } });

    fireEvent.click(screen.getByText('Sign in'));

    await waitFor(() => screen.getByText(/Lonnie/));
  });
});
