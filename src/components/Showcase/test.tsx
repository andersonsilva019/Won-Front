import '../../../.jest/match-media-mock'
import { screen } from '@testing-library/react'
import { renderWithTheme } from 'utils/test/helpers'
import Showcase from '.'
import gamesMock from '../GameCardSlider/mock'
import highLightMock from '../Highlight/mock'

const games = gamesMock.slice(0, 1)

describe('<Showcase />', () => {
  it('should render with title, highlight and games', () => {
    renderWithTheme(
      <Showcase title="Most Popular" highlight={highLightMock} games={games} />
    )

    expect(
      screen.getByRole('heading', { name: /most popular/i })
    ).toBeInTheDocument()
    expect(
      screen.getByRole('heading', { name: highLightMock.title })
    ).toBeInTheDocument()
    expect(
      screen.getByRole('heading', { name: gamesMock[0].title })
    ).toBeInTheDocument()
  })

  it('should render without title', () => {
    renderWithTheme(<Showcase highlight={highLightMock} games={games} />)

    expect(
      screen.queryByRole('heading', { name: /most popular/i })
    ).not.toBeInTheDocument()
    expect(
      screen.getByRole('heading', { name: highLightMock.title })
    ).toBeInTheDocument()
    expect(
      screen.getByRole('heading', { name: gamesMock[0].title })
    ).toBeInTheDocument()
  })

  it('should render without highlight', () => {
    renderWithTheme(<Showcase title="Most popular" games={games} />)

    expect(
      screen.getByRole('heading', { name: /most popular/i })
    ).toBeInTheDocument()
    expect(
      screen.queryByRole('heading', { name: highLightMock.title })
    ).not.toBeInTheDocument()
    expect(
      screen.getByRole('heading', { name: gamesMock[0].title })
    ).toBeInTheDocument()
  })

  it('should render without games', () => {
    renderWithTheme(<Showcase title="Most Popular" highlight={highLightMock} />)

    expect(
      screen.getByRole('heading', { name: /most popular/i })
    ).toBeInTheDocument()
    expect(
      screen.getByRole('heading', { name: highLightMock.title })
    ).toBeInTheDocument()
    expect(
      screen.queryByRole('heading', { name: gamesMock[0].title })
    ).not.toBeInTheDocument()
  })
})
