import { fireEvent, render, screen } from '@testing-library/react';
import Avaleht from '../pages/Avaleht';

test('renders "muuda kogust" text when nothing changed', () => {
  render(<Avaleht />);
  const linkElement = screen.getByText(/Muuda kogust/i);
  expect(linkElement).toBeInTheDocument();
});

test('renders "Suurendasid kogust" text when "suurendatud" button is pressed', () => {
  render(<Avaleht />);
  const button = screen.getByText("+");
  fireEvent.click(button);
  const linkElement = screen.getByText(/Suurendasid kogust/i);
  expect(linkElement).toBeInTheDocument();
});

test('renders "Vähendasid kogust" text when "vähendatud" button is pressed', () => {
  render(<Avaleht />);
  const increaseButton = screen.getByText("+");
  fireEvent.click(increaseButton);
  const decreaseButton = screen.getByText("-");
  fireEvent.click(decreaseButton);
  const linkElement = screen.getByText(/Vähendasid kogust/i);
  expect(linkElement).toBeInTheDocument();
});