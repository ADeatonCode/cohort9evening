import { render, screen } from '@testing-library/react';
import App from './App';
import panicButton from './button';
test('renders learn react link', () => {
  render(<panicButton />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
