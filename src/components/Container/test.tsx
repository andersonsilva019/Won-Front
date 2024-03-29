import { render } from 'utils/test-utils'
import theme from 'styles/theme'
import { Container } from '.'

describe('<Container />', () => {
  it('should render correctly', () => {
    const { container } = render(
      <Container>
        <span>My Website</span>
      </Container>
    )

    expect(container.firstChild).toHaveStyle({
      maxWidth: theme.grid.container
    })

    expect(container.firstChild).toMatchInlineSnapshot(`
      .c0 {
        width: 100%;
        max-width: 130rem;
        margin-left: auto;
        margin-right: auto;
        padding-left: calc(3.2rem / 2);
        padding-right: calc(3.2rem / 2);
      }

      <div
        class="c0"
      >
        <span>
          My Website
        </span>
      </div>
    `)
  })
})
