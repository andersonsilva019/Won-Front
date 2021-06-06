import { screen } from '@testing-library/react'
import { renderWithTheme } from 'utils/test/helpers'
import theme from 'styles/theme'
import GameCard from '.'

const props = {
  title: 'Population Zero',
  developer: 'Rockstars Games',
  img: '/images/red-dead-img.jpg',
  price: '250'
}

describe('<GameCard />', () => {
  it('should render correctly', () => {
    renderWithTheme(<GameCard {...props} />)

    expect(
      screen.getByRole('heading', { name: props.title })
    ).toBeInTheDocument()

    expect(
      screen.getByRole('heading', { name: props.developer })
    ).toBeInTheDocument()

    expect(screen.getByRole('img', { name: props.title })).toHaveAttribute(
      'src',
      props.img
    )

    expect(screen.getByLabelText(/Add to Wishlist/i)).toBeInTheDocument()

    const price = screen.getByText('250')

    expect(price.innerHTML).toEqual(props.price)
  })

  it('should render price in label', () => {
    renderWithTheme(<GameCard {...props} />)

    const price = screen.getByText('250')

    expect(price).not.toHaveStyleRule('text-decoration', 'line-through')

    expect(price).toHaveStyle({
      backgroundColor: theme.colors.secondary
    })
  })

  it('should render a line-through in price when promotional', () => {
    renderWithTheme(<GameCard {...props} promotionalPrice="150" />)

    expect(screen.getByText('250')).toHaveStyle({
      textDecoration: 'line-through'
    })

    expect(screen.getByText('150')).toHaveStyle({
      backgroundColor: theme.colors.secondary
    })
  })
})
