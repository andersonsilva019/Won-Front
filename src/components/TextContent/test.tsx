import { screen } from '@testing-library/react'
import { renderWithTheme } from 'utils/test/helpers'
import TextContent from '.'

const props = {
  title: 'Hello World',
  content: '<h1>Content</h1>'
}

describe('<TextContent />', () => {
  it('should render the title and content', () => {
    renderWithTheme(<TextContent title={props.title} content={props.content} />)
    expect(
      screen.getByRole('heading', { name: props.title })
    ).toBeInTheDocument()
    expect(
      screen.getByRole('heading', { name: /content/i })
    ).toBeInTheDocument()
  })

  it('should render without title', () => {
    renderWithTheme(<TextContent content={props.content} />)
    expect(
      screen.queryByRole('heading', { name: props.title })
    ).not.toBeInTheDocument()
  })

  it('should render text with color white when is mobile', () => {
    renderWithTheme(<TextContent title={props.title} content={props.content} />)

    const container = screen.getByRole('heading', { name: props.title })
      .parentElement

    expect(container).toHaveStyle({
      color: '#FAFAFA'
    })

    expect(container).toHaveStyleRule('color', '#030517', {
      media: '(min-width: 768px)'
    })
  })

  it('should render background with color white when is desktop', () => {
    renderWithTheme(<TextContent title={props.title} content={props.content} />)

    const container = screen.getByRole('heading', { name: props.title })
      .parentElement

    expect(container).toHaveStyleRule('color', '#030517', {
      media: '(min-width: 768px)'
    })

    expect(container).toHaveStyleRule('background', '#FAFAFA', {
      media: '(min-width: 768px)'
    })
  })
})
