import { screen, render } from 'utils/test-utils'

import CardsList from '.'

import cardsMock from 'components/PaymentOptions/mock'

describe('<CardsList />', () => {
  it('should render the cards', () => {
    render(<CardsList cards={cardsMock} />)
    expect(
      screen.getByRole('heading', { name: /my cards/i })
    ).toBeInTheDocument()

    expect(screen.getByRole('img', { name: /visa/i })).toHaveAttribute(
      'src',
      '/images/visa.png'
    )

    expect(screen.getByRole('img', { name: /mastercard/i })).toHaveAttribute(
      'src',
      '/images/master-card.png'
    )

    expect(screen.getByText(/4325/)).toBeInTheDocument()
    expect(screen.getByText(/4326/)).toBeInTheDocument()
  })
})
