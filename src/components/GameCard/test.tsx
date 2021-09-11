import { fireEvent, screen } from '@testing-library/react'
import { renderWithTheme } from 'utils/test/helpers'
import theme from 'styles/theme'
import GameCard from '.'

const props = {
  slug: 'population-zero',
  title: 'Population Zero',
  developer: 'Rockstars Games',
  img: '/images/red-dead-img.jpg',
  price: 250
}

describe('<GameCard />', () => {
  it('should render correctly', () => {
    const { container } = renderWithTheme(<GameCard {...props} />)

    expect(
      screen.getByRole('heading', { name: props.title })
    ).toBeInTheDocument()

    expect(
      screen.getByRole('heading', { name: props.developer })
    ).toBeInTheDocument()

    expect(screen.getByRole('link', { name: props.title })).toHaveAttribute(
      'href',
      `/game/${props.slug}`
    )

    expect(screen.getByRole('img', { name: props.title })).toHaveAttribute(
      'src',
      props.img
    )

    expect(screen.getByLabelText(/Add to Wishlist/i)).toBeInTheDocument()

    const price = screen.getByText(/250/)

    expect(price).toBeInTheDocument()

    expect(container.firstChild).toMatchSnapshot()
  })

  it('should render price in label', () => {
    renderWithTheme(<GameCard {...props} />)

    const price = screen.getByText(/250/)

    expect(price).not.toHaveStyleRule('text-decoration', 'line-through')

    expect(price).toHaveStyle({
      backgroundColor: theme.colors.secondary
    })
  })

  it('should render a line-through in price when promotional', () => {
    renderWithTheme(<GameCard {...props} promotionalPrice={150} />)

    expect(screen.getByText(/250/)).toHaveStyle({
      textDecoration: 'line-through'
    })

    expect(screen.getByText(/150/)).toHaveStyle({
      backgroundColor: theme.colors.secondary
    })

    expect(screen.getByText(/150/)).not.toHaveStyle({
      textDecoration: 'line-through'
    })
  })

  it('should render filled favorite icon when favorite is tru', () => {
    renderWithTheme(<GameCard {...props} favorite />)

    expect(screen.getByLabelText(/Remove from Wishlist/i)).toBeInTheDocument()
  })

  it('should call onFav method when favorite is click', () => {
    const onFav = jest.fn()
    renderWithTheme(<GameCard {...props} favorite onFav={onFav} />)

    fireEvent.click(screen.getAllByRole('button')[0])

    expect(onFav).toBeCalled()
  })

  it('should render Ribbon', () => {
    renderWithTheme(
      <GameCard
        {...props}
        ribbon="My Ribbon"
        ribbonColor="secondary"
        ribbonSize="small"
      />
    )
    const ribbon = screen.getByText(/my ribbon/i)

    expect(ribbon).toHaveStyle({ backgroundColor: '#3CD3C1' })

    expect(ribbon).toHaveStyle({ height: '2.6rem', fontSize: '1.2rem' })

    expect(ribbon).toBeInTheDocument()
  })
})
