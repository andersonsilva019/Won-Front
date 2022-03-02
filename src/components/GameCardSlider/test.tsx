import '../../../.jest/match-media-mock'
import { screen, render } from 'utils/test-utils'

import GameCardSlider from '.'

import items from './mock'

describe('<GameCardSlider />', () => {
  it('should show four GameCardSlide with class .slick-active', () => {
    const { container } = render(<GameCardSlider items={items} />)

    expect(container.querySelectorAll('.slick-slide')).toHaveLength(6)
    expect(container.querySelectorAll('.slick-active')).toHaveLength(4)
  })

  it('should render white arrows if color passed', () => {
    render(<GameCardSlider items={items} colorDots="white" />)

    expect(screen.getByLabelText(/previous games/i)).toHaveStyle({
      color: '#FAFAFA'
    })
    expect(screen.getByLabelText(/next games/i)).toHaveStyle({
      color: '#FAFAFA'
    })
  })
})
