import { render, screen, fireEvent } from '@testing-library/react';
import Form from './components/Form/index';

test('renders form properly', () => {
  const { getByText, getByLabelText } = render(<Form />);
  const dateLabel = screen.getByText(/Select Date (required):/i);
  const timeLabel = screen.getByText(/Select Time (required):/i);
  expect(dateLabel).toBeInTheDocument();
  expect(timeLabel).toBeInTheDocument();
});
test('btn should be disabled for empty name', () => {
  const { getByLabelText, getByRole } = render(<Form />);
  const nameInput = screen.getByLabelText(/First Name:/i);
  fireEvent.change(nameInput, { target: { value: '' } });
  const btn = screen.getByRole('button', { name: 'Book' });
  expect(btn).toHaveAttribute('disabled');
});
