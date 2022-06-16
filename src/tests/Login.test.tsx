import { render, fireEvent, screen } from '@testing-library/react';
import Login from '../pages/Login';
import { AuthProvider } from '../context/auth';

test('renders react Login component with inputs', () => {
  render(<Login />);
  const usernameInput = screen.getByTestId('username-input');
  expect(usernameInput).toBeInTheDocument();
  const passwordInput = screen.getByTestId('password-input');
  expect(passwordInput).toBeInTheDocument();
});

const setup = () => {
  const utils = render(
    <AuthProvider>
      <Login />
    </AuthProvider>
  );
  const usernameInput = screen.getByTestId(
    'username-input'
  ) as HTMLInputElement;
  const passwordInput = screen.getByTestId(
    'password-input'
  ) as HTMLInputElement;
  const loginButton = screen.getByTestId('login-button') as HTMLInputElement;
  return {
    usernameInput,
    passwordInput,
    loginButton,
    ...utils,
  };
};

test('It change input and submit', () => {
  const { usernameInput, passwordInput } = setup();
  expect(usernameInput.value).toBe('');
  fireEvent.change(usernameInput, { target: { value: 'test@test.com' } });
  expect(usernameInput.value).toBe('test@test.com');

  expect(passwordInput.value).toBe('');
  fireEvent.change(passwordInput, { target: { value: '123' } });
  expect(passwordInput.value).toBe('123');

  fireEvent.click(screen.getByText(/login/i));
});
