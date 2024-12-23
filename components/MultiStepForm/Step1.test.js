import { render, screen, fireEvent } from '@testing-library/react';
import Step1 from './Step1';

test('renders Step1 component and updates state on input change', () => {
  const mockSetState = jest.fn();
  render(<Step1 state={{ name: '' }} setState={mockSetState} />);

  const input = screen.getByLabelText(/Name/i);
  fireEvent.change(input, { target: { value: 'John Doe' } });

  expect(mockSetState).toHaveBeenCalledWith({ name: 'John Doe' });
});
