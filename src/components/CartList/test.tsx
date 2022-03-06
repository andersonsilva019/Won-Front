import { CartContextDefaultValue } from 'hooks/use-cart'
import { screen, render } from 'utils/test-utils'

import CartList from '.'

import items from './mock'


describe('<CartList />', () => {
  it('should render the cart list', () => {

    const cartProviderProps = {
      ...CartContextDefaultValue,
      items,
      total: 'R$ 200,00',
    }

    const { container } = render(<CartList />, { cartProviderProps })

    expect(screen.getAllByRole('heading')).toHaveLength(2)
    expect(screen.getByText('R$ 200,00')).toBeInTheDocument()

    expect(container.firstChild).toMatchSnapshot()
  })

  it('should render the button', () => {
    const cartProviderProps = {
      ...CartContextDefaultValue,
      items,
      total: 'R$ 200,00',
    }

    render(<CartList hasButton />, { cartProviderProps })

    expect(
      screen.getByRole('link', { name: /buy it now/i })
    ).toBeInTheDocument()
  })

  it('should render loading', () => {
    const cartProviderProps = {
      ...CartContextDefaultValue,
      loading: true,
    }

    render(<CartList hasButton />, { cartProviderProps })

    expect(screen.getByTitle(/loading/i)).toBeInTheDocument()
  })

  it('should render empty if there are no games', () => {
    render(<CartList />)

    expect(screen.getByText(/your cart is empty/i)).toBeInTheDocument()
    expect(screen.queryByText(/total/i)).not.toBeInTheDocument()
  })
})
