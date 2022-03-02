import { screen, render } from 'utils/test-utils'

import FormSignIn from '.'

describe('<FormSignIn />', () => {
  it('should render the form', () => {
    const { container } = render(<FormSignIn />)

    expect(screen.getByPlaceholderText('Email')).toBeInTheDocument()

    expect(screen.getByPlaceholderText('Password')).toBeInTheDocument()

    expect(
      screen.getByRole('button', { name: 'Sign in now' })
    ).toBeInTheDocument()

    expect(container.parentElement).toMatchSnapshot()
  })

  it('should render the forgot password link', () => {
    render(<FormSignIn />)

    const link = screen.getByRole('link', { name: 'Forgot your password?' })

    expect(link).toBeInTheDocument()

    expect(link).toHaveAttribute('href', '#')
  })

  it('should render the text and link to sign up', () => {
    render(<FormSignIn />)

    expect(screen.getByText('Don’t have an account?')).toBeInTheDocument()

    expect(screen.getByRole('link', { name: 'Sign up' })).toBeInTheDocument()

    expect(screen.getByRole('link', { name: 'Sign up' })).toHaveAttribute(
      'href',
      '/sign-up'
    )
    // link
  })
})
