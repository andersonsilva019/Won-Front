import { screen } from '@testing-library/react'
import { renderWithTheme } from 'utils/test/helpers'
import GameItem, { GameItemProps } from '.'

const props: GameItemProps = {
  img: 'https://source.unsplash.com/user/willianjusten/151x70',
  title: 'Red Dead Redemption 2',
  price: 'R$ 215,00'
}

describe('<GameItem />', () => {
  it('should render correcly GameItem', () => {
    renderWithTheme(<GameItem {...props} />)

    expect(
      screen.getByRole('heading', { name: props.title })
    ).toBeInTheDocument()

    expect(screen.getByText(props.price)).toBeInTheDocument()

    expect(screen.getByRole('img', { name: props.title })).toHaveAttribute(
      'src',
      props.img
    )
  })
})
