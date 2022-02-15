import { screen, fireEvent, waitFor } from '@testing-library/react';
import { Calculator } from './index.js';
import { renderWithRouter } from 'testUtil.js'

describe('about page', () => {
  it('displays number after clicking a button', async () => {
    renderWithRouter(<Calculator/>, {route: '/calculator'});

    fireEvent.click(screen.getByText("9"))
    await waitFor(() => expect(screen.getAllByText("9")).toHaveLength(2))

  })
});
