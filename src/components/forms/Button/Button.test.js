/**
 * @jest-environment jsdom
 */

import { render, screen } from '@testing-library/react'
import Button from '../Button';

describe('Button', () => {
    it('renders a button element', () => {
      render(<Button />);
      const buttonElement = screen.getByRole('button');
      expect(buttonElement).toBeInTheDocument();
    });
  
    it('renders the correct text', () => {
      const buttonText = 'Click me!';
      render(<Button>{buttonText}</Button>);
      const buttonElement = screen.getByText(buttonText);
      expect(buttonElement).toBeInTheDocument();
    });
  
    it('calls the onClick function when clicked', () => {
      const handleClick = jest.fn();
      render(<Button onClick={handleClick}>Click me!</Button>);
      const buttonElement = screen.getByRole('button');
      buttonElement.click();
      expect(handleClick).toHaveBeenCalledTimes(1);
    });
});