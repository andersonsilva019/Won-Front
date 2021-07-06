import { screen } from '@testing-library/react'
import { renderWithTheme } from 'utils/test/helpers'
import Auth from '.'

describe('<Auth />', () => {
  it('should render all components and children', () => {
    renderWithTheme(<Auth title="Title page">children</Auth>)
    // Title of Content
    expect(screen.getByText(/title page/i)).toBeInTheDocument()
    // Children of Content
    expect(screen.getByText(/children/i)).toBeInTheDocument()
    // Logos
    expect(screen.getAllByLabelText(/won games/i)).toHaveLength(2)
    // Title of BannerBlock
    expect(
      screen.getByRole('heading', {
        name: 'All your favorite games is one place'
      })
    ).toBeInTheDocument()
    // Subtitle of BannerBlock
    expect(
      screen.getByRole('heading', {
        name: 'WON is the best and most complete gaming platform.'
      })
    ).toBeInTheDocument()
    // Footer
    expect(
      screen.getByText(/won games 2020 © todos os direitos reservados/i)
    ).toBeInTheDocument()
  })
})
