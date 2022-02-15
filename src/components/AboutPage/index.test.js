import { render, screen } from '@testing-library/react';
import { AboutPage } from './index.js';
import { renderWithRouter } from 'testUtil.js'

describe('about page', () => {
  it('renders the about page text', () => {
    renderWithRouter(<AboutPage/>, {route: '/about'});
    expect(screen.getByText(/this app is super ready for production/i)).toBeInTheDocument()
  })
});
