import { screen } from '@testing-library/react';
import App from './App';
import { renderWithRouter } from './testUtil'

describe('main calculator page', () => {
  it('renders the important title', () => {
    renderWithRouter(<App />, {route: '/calculator'});
    expect(screen.getByText(/HARD CORE CALCULATOR./i)).toBeInTheDocument()
  })

  it('renders the important text in the about page', () => {
    renderWithRouter(<App />, {route: '/about'});
    expect(screen.getByText(/this app is super ready for production/i)).toBeInTheDocument()
  })
});
