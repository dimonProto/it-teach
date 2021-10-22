import { render, screen } from '@testing-library/react';
import App from './App';
import AppMain from "./App";

test('renders learn react link', () => {
  render(<AppMain />);
  const div  =  screen.getByRole(/main/i);
  expect(div).toBeInTheDocument();
});
