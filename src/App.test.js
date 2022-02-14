import { render, screen } from '@testing-library/react';
import App from './App';
import { MemoryRouter } from 'react-router-dom'

const renderWithRouter = (ui, {route = '/'} = {}) => {
  window.history.pushState({}, 'Test page', route)
  return render(ui, {wrapper: MemoryRouter})
}

describe('main calculator page', () => {
  it('renders the important title', () => {
    render(<App />, {wrapper: MemoryRouter});
    
    const linkElement = screen.getByText(/HARD CORE CALCULATOR./i);
  })
});
