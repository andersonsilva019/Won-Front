import { screen } from '@testing-library/react'
import Ribbon from '.'
import { renderWithTheme } from 'utils/test/helpers'

describe('<Ribbon />', () => {
  it('should render the text correctly', () => {
    renderWithTheme(<Ribbon>Best Sellers</Ribbon>)
    // (getByText) find by element text content
    expect(screen.getByText(/best sellers/i)).toBeInTheDocument()
  })

  it('should render with the primary color', () => {
    renderWithTheme(<Ribbon>Best Sellers</Ribbon>)
    expect(screen.getByText(/best sellers/i)).toHaveStyle({
      backgroundColor: '#F231A5'
    })
  })

  it('should render with the secondary color', () => {
    renderWithTheme(<Ribbon color="secondary">Best Sellers</Ribbon>)
    expect(screen.getByText(/best sellers/i)).toHaveStyle({
      backgroundColor: '#3CD3C1'
    })
  })

  it('should render with the normal size as default', () => {
    renderWithTheme(<Ribbon>Best Sellers</Ribbon>)
    expect(screen.getByText(/best sellers/i)).toHaveStyle({
      height: '3.6rem',
      fontSize: '1.4rem'
    })
  })

  it('should render with the small size', () => {
    renderWithTheme(<Ribbon size="small">Best Sellers</Ribbon>)
    expect(screen.getByText(/best sellers/i)).toHaveStyle({
      height: '2.6rem',
      fontSize: '1.2rem'
    })
  })
})
