import styled, { css } from 'styled-components'
import media from 'styled-media-query'
import * as GameCardStyles from 'components/GameCard/styles'

export const Main = styled.main`
  ${({ theme }) => css`
    ${media.greaterThan('medium')`
      display: grid;
      grid-template-columns: 26rem 1fr;
      gap: ${theme.grid.gutter};
    `}
  `}
`

export const Games = styled.div`
  ${({ theme }) => css`
    align-self: flex;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(25rem, 1fr));
    gap: ${theme.spacings.medium};

    ${GameCardStyles.Container} {
      height: 25rem;
    }
  `}
`

export const ShowMore = styled.div`
  ${({ theme }) => css`
    color: ${theme.colors.white};
    text-align: center;
    padding: ${theme.spacings.medium};
    text-transform: uppercase;
    font-weight: bold;
    cursor: pointer;
    > svg {
      color: ${theme.colors.primary};
    }
  `}
`
