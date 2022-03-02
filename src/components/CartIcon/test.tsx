import { CartContextDefaultValue } from 'hooks/use-cart'
import { screen, render } from 'utils/test-utils'

import CartIcon from '.'
describe('<CartIcon />', () => {
  it('should render cart icon without badge', () => {
    render(<CartIcon />)

    expect(screen.getByLabelText(/shopping cart/i)).toBeInTheDocument()
    expect(screen.queryByLabelText(/cart items/i)).not.toBeInTheDocument()
  })

  it('should render cart icon with badge', () => {
    render(<CartIcon />, { cartProviderProps: { ...CartContextDefaultValue, quantity: 3 } })

    expect(screen.getByLabelText(/shopping cart/i)).toBeInTheDocument()
    expect(screen.getByLabelText(/cart items/i)).toHaveTextContent(
      String(3)
    )
  })
})
