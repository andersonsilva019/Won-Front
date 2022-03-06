import { render, screen, waitFor } from 'utils/test-utils'
import { Email } from '@styled-icons/material-outlined'
import userEvent from '@testing-library/user-event'

import TextField from '.'

describe('<TextField />', () => {
  it('should render with label and labelFor', () => {
    render(<TextField label="label input" name="input" />)

    expect(screen.getByLabelText(/label input/i)).toBeInTheDocument()
    expect(screen.getByRole('textbox')).toHaveAttribute('id', 'input')
  })

  it('should render without label', () => {
    render(<TextField />)

    expect(screen.queryByLabelText(/label input/)).not.toBeInTheDocument()
    expect(screen.queryByRole('textbox')).not.toHaveAttribute('id', '')
  })

  it('should render with placeholder', () => {
    render(<TextField placeholder="Hello" />)

    expect(screen.getByPlaceholderText(/hello/i)).toBeInTheDocument()
  })

  it('Renders with Icon on the right side', () => {
    render(
      <TextField icon={<Email data-testid="icon" />} iconPosition="right" />
    )

    expect(screen.getByTestId('icon').parentElement).toHaveStyle({ order: 1 })
  })
  it('should call onInput function', async () => {
    const onInput = jest.fn()

    render(<TextField label="label input" name="input" onInput={onInput} />)

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
    render(<TextField icon={<Email data-testid="icon" />} />)

    expect(screen.getByTestId('icon')).toBeInTheDocument()
  })

  it('Is accessible by tab', () => {
    render(<TextField label="TextField" name="TextField" />)

    const input = screen.getByLabelText('TextField')
    expect(document.body).toHaveFocus()

    userEvent.tab()
    expect(input).toHaveFocus()
  })

  it('does not changes its value when disabled', async () => {
    const onInput = jest.fn()

    render(
      <TextField onInput={onInput} label="Label field" name="field" disabled />
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
    render(<TextField label="Label field" name="field" disabled />)

    const input = screen.getByLabelText('Label field')
    expect(document.body).toHaveFocus()

    userEvent.tab()
    expect(input).not.toHaveFocus()
  })

  it('Renders with error', () => {
    const { container } = render(
      <TextField
        icon={<Email data-testid="icon" />}
        label="TextField"
        name="TextField"
        error="Error message"
      />
    )

    expect(screen.getByText('Error message')).toBeInTheDocument()

    expect(container.firstChild).toMatchSnapshot()
  })
})
