import { render, screen } from '@testing-library/react'
import Main from '.'

describe('<Main />', () => {
  it('should render the heading', () => {
    const { container } = render(<Main />)
    expect(screen.getByRole('heading', { name: /nextjs/i })).toBeInTheDocument()

    expect(container.firstChild).toMatchSnapshot()
  })

  it('should render the styles correctly', () => {
    const { container } = render(<Main />)

    expect(container.firstChild).toHaveStyle({
      'background-color': '#06092b',
      color: '#fff',
      width: '100%',
      height: '100%',
      padding: '3rem',
      display: 'flex',
      'flex-direction': 'column',
      'text-align': 'center',
      'align-items': 'center',
      'justify-content': 'center'
    })
  })
})
