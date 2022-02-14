import { render, screen } from '@testing-library/react';
import App from './App';

describe('main calculator page', () => {
  it('renders the important title', () => {
    render(<App />);
    const linkElement = screen.getByText(/HARD CORE CALCULATOR./i);
  })
});
