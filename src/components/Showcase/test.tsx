import '../../../.jest/match-media-mock'
import { screen, render } from 'utils/test-utils'

import gamesMock from 'components/GameCardSlider/mock'
import highLightMock from 'components/Highlight/mock'
import Showcase from '.'

const games = gamesMock.slice(0, 1)

describe('<Showcase />', () => {
  it('should render with title, highlight and games', () => {
    render(
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
    render(<Showcase highlight={highLightMock} games={games} />)

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
    render(<Showcase title="Most popular" games={games} />)

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
    render(<Showcase title="Most Popular" highlight={highLightMock} />)

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
