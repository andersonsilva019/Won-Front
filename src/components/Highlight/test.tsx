import { screen, render } from 'utils/test-utils'

import * as S from './styles'
import Highlight from '.'

const props = {
  title: 'Heading 1',
  subtitle: 'Heading 2',
  buttonLabel: 'Buy now',
  buttonLink: '/dsds',
  backgroundImage: '/images/red-dead-img.jpg'
}

describe('<Highlight />', () => {
  it('should render the headings and button', () => {
    render(<Highlight {...props} />)

    expect(
      screen.getByRole('heading', { name: /Heading 1/i })
    ).toBeInTheDocument()

    expect(
      screen.getByRole('heading', { name: /Heading 2/i })
    ).toBeInTheDocument()

    expect(screen.getByRole('link', { name: /Buy now/i })).toBeInTheDocument()
  })

  it('should render background image', () => {
    const { container } = render(<Highlight {...props} />)
    expect(container.firstChild).toHaveStyle({
      backgroundImage: `url(${props.backgroundImage})`
    })
  })

  it('should render background image', () => {
    render(<Highlight {...props} floatImage="/float-img.png" />)
    expect(screen.getByRole('img', { name: props.title })).toHaveAttribute(
      'src',
      '/float-img.png'
    )
  })

  it('should align right by defaut', () => {
    const { container } = render(<Highlight {...props} />)
    expect(container.firstChild).toHaveStyleRule(
      'grid-template-areas',
      "'floatImage content'"
    )

    expect(container.firstChild).toHaveStyleRule('text-align', 'right', {
      modifier: `${S.Content}`
    })
  })

  it('should align left by default', () => {
    const { container } = render(<Highlight {...props} alignment="left" />)
    expect(container.firstChild).toHaveStyleRule(
      'grid-template-areas',
      "'content floatImage'"
    )

    expect(container.firstChild).toHaveStyleRule('text-align', 'left', {
      modifier: `${S.Content}`
    })
  })
})
