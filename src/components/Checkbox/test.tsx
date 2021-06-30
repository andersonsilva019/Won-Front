import { screen } from '@testing-library/react'
import { renderWithTheme } from 'utils/test/helpers'
import Checkbox from '.'
describe('<Checkbox />', () => {
  it('should render with label', () => {
    renderWithTheme(<Checkbox label="checkbox label" labelFor="check" />)
    expect(screen.getByRole('checkbox')).toBeInTheDocument()
    expect(screen.getByText(/checkbox label/i)).toBeInTheDocument()
    expect(screen.getByText(/checkbox label/i)).toHaveAttribute('for', 'check')
    expect(screen.getByRole('checkbox')).toHaveAttribute('id', 'check')
  })

  it('should not render when label is undefinded', () => {
    renderWithTheme(<Checkbox />)

    expect(screen.queryByLabelText('checkbox label')).not.toBeInTheDocument()
  })

  it('should render with black label', () => {
    renderWithTheme(
      <Checkbox label="Checkbox label" labelFor="check" labelColor="black" />
    )

    expect(screen.getByText(/checkbox label/i)).toHaveStyle({
      color: '#030517'
    })
  })

  it('should render with white label by default', () => {
    renderWithTheme(
      <Checkbox label="Checkbox label" labelFor="check" labelColor="white" />
    )

    expect(screen.getByText(/checkbox label/i)).toHaveStyle({
      color: '#FAFAFA'
    })
  })
})
