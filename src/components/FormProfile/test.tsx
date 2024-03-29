import { screen, render } from 'utils/test-utils'

import FormProfile from '.'

describe('<FormProfile />', () => {
  it('should render the form correcly', () => {
    render(<FormProfile />)

    expect(
      screen.getByRole('heading', { name: /my profile/i })
    ).toBeInTheDocument()

    expect(screen.getByRole('textbox', { name: /name/i })).toBeInTheDocument()

    expect(screen.getByRole('textbox', { name: /e-mail/i })).toBeInTheDocument()

    expect(
      screen.getByPlaceholderText(/type your password/i)
    ).toBeInTheDocument()

    expect(
      screen.getByPlaceholderText(/type your password/i)
    ).toBeInTheDocument()

    expect(screen.getByRole('button', { name: /save/i })).toBeInTheDocument()
  })
})
