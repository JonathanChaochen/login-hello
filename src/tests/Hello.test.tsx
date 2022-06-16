import { render, screen } from '@testing-library/react';
import Hello from '../pages/Hello';

test('renders react Hello component with button logout', () => {
  render(<Hello />);
  const buttonElement = screen.getByText(/Logout/i);
  expect(buttonElement).toBeInTheDocument();
});
