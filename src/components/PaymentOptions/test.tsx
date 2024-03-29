import { render, screen, waitFor } from 'utils/test-utils'
import userEvent from '@testing-library/user-event'

import PaymentOptions from '.'

import cards from './mock'

describe('<PaymentOptions />', () => {
  it('should render the saved card options and the add new card button', () => {
    render(<PaymentOptions cards={cards} handlePayment={jest.fn} />)

    expect(screen.getByLabelText(/4325/)).toBeInTheDocument()
    expect(screen.getByLabelText(/4326/)).toBeInTheDocument()
    expect(screen.getByText(/add a new credit card/i)).toBeInTheDocument()
  })

  it('should handle select card when clicking on the label', async () => {
    render(<PaymentOptions cards={cards} handlePayment={jest.fn} />)

    userEvent.click(screen.getByLabelText(/4325/))
    await waitFor(() => {
      expect(screen.getByRole('radio', { name: /4325/ })).toBeChecked()
    })
  })

  it('should not call handlePayment function when button is disabled', () => {
    const handlePayment = jest.fn()

    render(<PaymentOptions cards={cards} handlePayment={handlePayment} />)

    userEvent.click(screen.getByRole('button', { name: /buy now/i }))

    expect(handlePayment).not.toHaveBeenCalled()
  })

  it('should call handlePayment function when credit cart is select', async () => {
    const handlePayment = jest.fn()

    render(<PaymentOptions cards={cards} handlePayment={handlePayment} />)
    // clique na label do cartão
    userEvent.click(screen.getByLabelText(/4325/))
    // clique no botão de comprar
    userEvent.click(screen.getByRole('button', { name: /buy now/i }))

    // aguarda o handlePayment ser chamado uma vez
    await waitFor(() => {
      expect(handlePayment).toHaveBeenCalledTimes(1)
    })
  })
})
