import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Counter from '../components/Counter';

beforeEach(() => {
  // Render the Counter component here
  render(<Counter />);
})

test('renders counter message', () => {
  // Complete the unit test below based on the objective in the line above
  const counterHeader = screen.getByText(/Counter/i);
  expect(counterHeader).toBeInTheDocument();
});

test('should render initial count with value of 0', () => {
  // Complete the unit test below based on the objective in the line above
  const counterValue = screen.getByTestId('count').textContent;
  expect(counterValue).toEqual("0");
});

test('clicking + increments the count', () => {
  // Complete the unit test below based on the objective in the line above
  const incrementBtn = screen.getByRole('button', {name: '+'});  
  userEvent.click(incrementBtn);
  const counterValue = screen.getByTestId('count').textContent;
  expect(counterValue).toEqual("1");
});

test('clicking - decrements the count', () => {
  // Complete the unit test below based on the objective in the line above
  const decrementBtn = screen.getByRole('button', {name: '-'});
  userEvent.click(decrementBtn);
  const counterValue = screen.getByTestId('count').textContent;
  expect(counterValue).toEqual("-1");
});
