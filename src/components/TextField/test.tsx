import { screen, waitFor } from '@testing-library/react'
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

  it('Is accessible by tab', () => {
    renderWithTheme(
      <TextField label="TextField" labelFor="TextField" id="TextField" />
    )

    const input = screen.getByLabelText('TextField')
    expect(document.body).toHaveFocus()

    userEvent.tab()
    expect(input).toHaveFocus()
  })
})
