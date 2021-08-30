import { screen } from '@testing-library/react'
import { renderWithTheme } from 'utils/test/helpers'
import CartList, { CartListProps } from '.'

import mockGameItem from './mock'

const props: CartListProps = {
  items: mockGameItem,
  total: 'R$ 200,00'
}

describe('<CartList />', () => {
  it('should render the cart list', () => {
    const { container } = renderWithTheme(<CartList {...props} />)

    expect(screen.getAllByRole('heading')).toHaveLength(2)
    expect(screen.getByText(props.total)).toBeInTheDocument()

    expect(container.firstChild).toMatchSnapshot()
  })
})
