import styled, { css } from 'styled-components'
import Skeletron from 'components/Skeletron'

export function LoadingGamesShimmer() {
  return (
    <div data-testid="loading">
      <Container>
        {[1, 2, 3, 4, 5, 6, 7, 8, 9].map(item => (
          <ShimmerGame key={item} />
        ))}
      </Container>
    </div>
  )
}

function ShimmerGame() {
  return (
    <ShimmerContainer>
      <Skeletron className="image-skeletron" />
      <Skeletron className="title-skeletron" />
      <Skeletron className="subtitle-skeletron" />
    </ShimmerContainer>
  )
}

const Container = styled.div`
  ${({ theme }) => css`
    display: grid;
    margin: ${theme.spacings.medium} 0;
    grid-template-columns: repeat(auto-fill, minmax(25rem, 1fr));
    grid-gap: ${theme.spacings.medium};
  `}
`

const ShimmerContainer = styled.section`
  ${({ theme }) => css`
    background: ${theme.colors.white};
    .image-skeletron {
      height: 14rem;
      width: 100%;
    }

    .title-skeletron {
      margin: 1.6rem 1rem;

      height: 1.6rem;
      width: 75%;
    }

    .subtitle-skeletron {
      height: 1.6rem;
      width: 50%;

      margin: 0 1rem 2.4rem;
    }
  `}
`
