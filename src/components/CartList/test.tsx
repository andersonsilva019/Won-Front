import { screen, render } from 'utils/test-utils'

import CartList, { CartListProps } from '.'

import mockGameItem from './mock'

const props: CartListProps = {
  items: mockGameItem,
  total: 'R$ 200,00'
}

describe('<CartList />', () => {
  it('should render the cart list', () => {
    const { container } = render(<CartList {...props} />)

    expect(screen.getAllByRole('heading')).toHaveLength(2)
    expect(screen.getByText('R$ 200,00')).toBeInTheDocument()

    expect(container.firstChild).toMatchSnapshot()
  })

  it('should render the button', () => {
    render(<CartList {...props} hasButton />)

    expect(
      screen.getByRole('link', { name: /buy it now/i })
    ).toBeInTheDocument()
  })

  it('should render empty if there are no games', () => {
    render(<CartList />)

    expect(screen.getByText(/your cart is empty/i)).toBeInTheDocument()
    expect(screen.queryByText(/total/i)).not.toBeInTheDocument()
  })
})
