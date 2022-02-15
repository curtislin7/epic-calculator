import { render, screen } from '@testing-library/react';
import { CalculatorButton } from './index.js';

describe('calculator button', () => {
  it('renders button with the expected text', () => {
    const expectedText = '1'
    render(<CalculatorButton text={expectedText} calculation={0} handleButtonClick={()=>{}}/>);
    expect(screen.getByText(expectedText)).toBeInTheDocument()
  })
});
