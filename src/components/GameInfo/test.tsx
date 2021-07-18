import { screen } from '@testing-library/react'
import { renderWithTheme } from 'utils/test/helpers'
import GameInfo from '.'

const props = {
  title: 'Game Title',
  description: 'Game description',
  price: '215,00'
}

describe('<GameInfo />', () => {
  it('should render title, description and price', () => {
    const { container } = renderWithTheme(<GameInfo {...props} />)

    expect(
      screen.getByRole('heading', { name: props.title })
    ).toBeInTheDocument()
    expect(screen.getByText(props.description)).toBeInTheDocument()
    expect(screen.getByText(/\$215,00/)).toBeInTheDocument()
    expect(container.firstChild).toMatchSnapshot()
  })

  it('should render buttons', () => {
    renderWithTheme(<GameInfo {...props} />)

    expect(
      screen.getByRole('button', { name: /add to cart/i })
    ).toBeInTheDocument()

    expect(
      screen.getByRole('button', { name: /wishlist/i })
    ).toBeInTheDocument()
  })
})
