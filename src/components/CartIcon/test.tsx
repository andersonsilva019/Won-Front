import { screen } from '@testing-library/react'
import { renderWithTheme } from 'utils/test/helpers'
import CartIcon from '.'
describe('<CartIcon />', () => {
  it('should render cart icon without badge', () => {
    renderWithTheme(<CartIcon />)

    expect(screen.getByLabelText(/shopping cart/i)).toBeInTheDocument()
    expect(screen.queryByLabelText(/cart items/i)).not.toBeInTheDocument()
  })

  it('should render cart icon with badge', () => {
    const quantity = 10

    renderWithTheme(<CartIcon quantity={quantity} />)

    expect(screen.getByLabelText(/shopping cart/i)).toBeInTheDocument()
    expect(screen.getByLabelText(/cart items/i)).toHaveTextContent(
      String(quantity)
    )
  })

  it('should render with badge only if has positive numbers', () => {
    const quantity = -1

    renderWithTheme(<CartIcon quantity={quantity} />)
    expect(screen.getByLabelText(/shopping cart/i)).toBeInTheDocument()
    expect(screen.queryByLabelText(/cart items/i)).not.toBeInTheDocument()
  })
})
