import { screen, waitFor } from '@testing-library/react'
import { Email } from '@styled-icons/material-outlined'
import userEvent from '@testing-library/user-event'
import { renderWithTheme } from 'utils/test/helpers'
import TextField from '.'

describe('<TextField />', () => {
  it('should render with label and labelFor', () => {
    renderWithTheme(<TextField label="label input" labelFor="input" />)

    expect(screen.getByLabelText(/label input/i)).toBeInTheDocument()
    expect(screen.getByRole('textbox')).toHaveAttribute('id', 'input')
  })

  it('should render without label', () => {
    renderWithTheme(<TextField />)

    expect(screen.queryByLabelText(/label input/)).not.toBeInTheDocument()
    expect(screen.getByRole('textbox')).toHaveAttribute('id', '')
  })

  it('should render with placeholder', () => {
    renderWithTheme(<TextField placeholder="Hello" />)

    expect(screen.getByPlaceholderText(/hello/i)).toBeInTheDocument()
  })

  it('Renders with Icon on the right side', () => {
    renderWithTheme(
      <TextField icon={<Email data-testid="icon" />} iconPosition="right" />
    )

    expect(screen.getByTestId('icon').parentElement).toHaveStyle({ order: 1 })
  })
  it('should call onInput function', async () => {
    const onInput = jest.fn()

    renderWithTheme(
      <TextField label="label input" labelFor="input" onInput={onInput} />
    )

    const input = screen.getByRole('textbox')
    const text = 'This is my text'

    userEvent.type(input, text)

    await waitFor(() => {
      expect(input).toHaveValue(text)
      expect(onInput).toHaveBeenCalledTimes(text.length)
    })

    expect(onInput).toHaveBeenCalledWith(text)
  })

  it('Renders with Icon', () => {
    renderWithTheme(<TextField icon={<Email data-testid="icon" />} />)

    expect(screen.getByTestId('icon')).toBeInTheDocument()
  })

  it('Is accessible by tab', () => {
    renderWithTheme(
      <TextField label="TextField" labelFor="TextField" id="TextField" />
    )

    const input = screen.getByLabelText('TextField')
    expect(document.body).toHaveFocus()

    userEvent.tab()
    expect(input).toHaveFocus()
  })

  it('does not changes its value when disabled', async () => {
    const onInput = jest.fn()

    renderWithTheme(
      <TextField
        onInput={onInput}
        label="Label field"
        labelFor="field"
        disabled
      />
    )

    const input = screen.getByRole('textbox')
    expect(input).toBeDisabled()

    const text = 'This is my text'
    userEvent.type(input, text)

    await waitFor(() => {
      expect(input).not.toHaveValue(text)
    })

    expect(onInput).not.toHaveBeenCalled()
  })

  it('Is not accessible by tab when disabled', () => {
    renderWithTheme(<TextField label="Label field" labelFor="field" disabled />)

    const input = screen.getByLabelText('Label field')
    expect(document.body).toHaveFocus()

    userEvent.tab()
    expect(input).not.toHaveFocus()
  })

  it('Renders with error', () => {
    const { container } = renderWithTheme(
      <TextField
        icon={<Email data-testid="icon" />}
        label="TextField"
        labelFor="TextField"
        error="Error message"
      />
    )

    expect(screen.getByText('Error message')).toBeInTheDocument()

    expect(container.firstChild).toMatchSnapshot()
  })
})
