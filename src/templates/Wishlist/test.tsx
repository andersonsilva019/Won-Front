import { screen } from '@testing-library/react'
import { renderWithTheme } from 'utils/test/helpers'
import Wishlist, { WishlistTemplateProps } from '.'

import gamesMock from 'components/GameCardSlider/mock'
import highlightMock from 'components/Highlight/mock'

const props: WishlistTemplateProps = {
  games: gamesMock,
  recommendedGames: gamesMock.slice(0, 1),
  recommendedHighlight: highlightMock
}

jest.mock('components/Showcase', () => ({
  __esModule: true,
  default: function Mock() {
    return <div data-testid="Mock Showcase" />
  }
}))

describe('<Wishlist />', () => {
  it('should render the Showcase component', () => {
    renderWithTheme(<Wishlist {...props} />)

    expect(screen.getAllByText(/population zero/i)).toHaveLength(6)

    expect(
      screen.getByRole('heading', { name: /wishlist/i })
    ).toBeInTheDocument()

    expect(screen.getByTestId('Mock Showcase')).toBeInTheDocument()
  })
})
