import { screen } from '@testing-library/react'
import { renderWithTheme } from 'utils/test/helpers'
import FormSignIn from '.'

describe('<FormSignIn />', () => {
  it('should render the form', () => {
    renderWithTheme(<FormSignIn />)

    expect(screen.getByPlaceholderText('Email')).toBeInTheDocument()

    expect(screen.getByPlaceholderText('Password')).toBeInTheDocument()

    expect(
      screen.getByRole('button', { name: 'Sign in now' })
    ).toBeInTheDocument()
  })

  it('should render the forgot password link', () => {
    renderWithTheme(<FormSignIn />)

    const link = screen.getByRole('link', { name: 'Forgot your password?' })

    expect(link).toBeInTheDocument()

    expect(link).toHaveAttribute('href', '#')
  })

  it('should render the text and link to sign up', () => {
    renderWithTheme(<FormSignIn />)

    expect(screen.getByText('Don’t have an account?')).toBeInTheDocument()

    expect(screen.getByRole('link', { name: 'Sign up' })).toBeInTheDocument()

    expect(screen.getByRole('link', { name: 'Sign up' })).toHaveAttribute(
      'href',
      '/sign-up'
    )
    // link
  })
})
