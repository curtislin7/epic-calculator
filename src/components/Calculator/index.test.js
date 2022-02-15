import { screen, fireEvent, waitFor } from '@testing-library/react';
import { Calculator } from './index.js';
import { renderWithRouter } from 'testUtil.js'

describe('calculator', () => {
  it('displays number after clicking a button', async () => {
    renderWithRouter(<Calculator/>, {route: '/calculator'});

    fireEvent.click(screen.getByText("9"))
    await waitFor(() => expect(screen.getAllByText("9")).toHaveLength(2))
  })

  it('adds numbers', async () => {
    renderWithRouter(<Calculator/>, {route: '/calculator'});

    const numberNineButton = screen.getByText("9")
    fireEvent.click(numberNineButton)
    fireEvent.click(screen.getByText("+"))
    fireEvent.click(numberNineButton)
    fireEvent.click(screen.getByText("="))

    await waitFor(() => expect(screen.getByText("18")).toBeInTheDocument)
  })
});
