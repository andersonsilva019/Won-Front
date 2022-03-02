import { screen, render } from 'utils/test-utils'

import CartIcon from '.'
describe('<CartIcon />', () => {
  it('should render cart icon without badge', () => {
    render(<CartIcon />)

    expect(screen.getByLabelText(/shopping cart/i)).toBeInTheDocument()
    expect(screen.queryByLabelText(/cart items/i)).not.toBeInTheDocument()
  })

  it('should render cart icon with badge', () => {
    const quantity = 10

    render(<CartIcon quantity={quantity} />)

    expect(screen.getByLabelText(/shopping cart/i)).toBeInTheDocument()
    expect(screen.getByLabelText(/cart items/i)).toHaveTextContent(
      String(quantity)
    )
  })

  it('should render with badge only if has positive numbers', () => {
    const quantity = -1

    render(<CartIcon quantity={quantity} />)
    expect(screen.getByLabelText(/shopping cart/i)).toBeInTheDocument()
    expect(screen.queryByLabelText(/cart items/i)).not.toBeInTheDocument()
  })
})
