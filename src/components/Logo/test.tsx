import { screen } from '@testing-library/react'
import Logo from '.'
import { renderWithTheme } from '../../utils/test/helpers'

describe('<Logo />', () => {
  it('should render a white label by default', () => {
    // renderizar o componente -> 'render'
    renderWithTheme(<Logo />)

    // selecionar o elemento a ser testado -> 'screen'
    // expect -> assetion
    // Pegando o pai do elemento selecionado
    expect(screen.getByLabelText(/Won Games/i).parentElement).toHaveStyle({
      color: '#FAFAFA'
    })
  })

  it('should render a black label when color is passed', () => {
    renderWithTheme(<Logo color="black" />)
    expect(screen.getByLabelText(/Won Games/i).parentElement).toHaveStyle({
      color: '#030517'
    })
  })
})
