import '../../../.jest/match-media-mock'
import { screen, render } from 'utils/test-utils'

import Home, { HomeTemplateProps } from '.'

import bannerMock from 'components/BannerSlider/mock'
import gamesMock from 'components/GameCardSlider/mock'
import highlightMock from 'components/Highlight/mock'

const props: HomeTemplateProps = {
  banners: bannerMock,
  newGames: [gamesMock[0]],
  mostPopularHighlight: highlightMock,
  mostPopularGames: [gamesMock[0]],
  upcommingGames: [gamesMock[0]],
  upcommingHighligth: highlightMock,
  freeGames: [gamesMock[0]],
  freeHighligth: highlightMock,
  upcommingGamesTitle: 'Upcoming Games',
  freeGamesTitle: 'Free Games',
  mostPopularGamesTitle: 'Most Popular Games',
  newGamesTitle: 'New Games'
}

jest.mock('components/Showcase', () => {
  return {
    __esModule: true,
    default: function Mock() {
      return <div data-testid="Mock Showcase"></div>
    }
  }
})

jest.mock('components/BannerSlider', () => {
  return {
    __esModule: true,
    default: function Mock() {
      return <div data-testid="Mock BannerSlider"></div>
    }
  }
})

describe('<Home />', () => {
  it('should render Banner and Showcase', () => {
    render(<Home {...props} />)
    // Banner Slider
    expect(screen.getByTestId('Mock BannerSlider')).toBeInTheDocument()
    // Showcase
    expect(screen.getAllByTestId('Mock Showcase')).toHaveLength(4)
  })
})
