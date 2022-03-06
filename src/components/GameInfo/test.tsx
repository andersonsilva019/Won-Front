import { screen, render } from 'utils/test-utils'

import GameInfo from '.'

const props = {
  id: '1',
  title: 'Game Title',
  description: 'Game description',
  price: 215.0
}

describe('<GameInfo />', () => {
  it('should render title, description and price', () => {
    const { container } = render(<GameInfo {...props} />)

    expect(
      screen.getByRole('heading', { name: props.title })
    ).toBeInTheDocument()
    expect(screen.getByText(props.description)).toBeInTheDocument()
    expect(screen.getByText(/215.0/)).toBeInTheDocument()
    expect(container.firstChild).toMatchSnapshot()
  })

  it('should render buttons', () => {
    render(<GameInfo {...props} />)

    expect(
      screen.getByRole('button', { name: /add to cart/i })
    ).toBeInTheDocument()

    expect(
      screen.getByRole('button', { name: /wishlist/i })
    ).toBeInTheDocument()
  })
})
