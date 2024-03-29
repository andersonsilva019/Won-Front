import styled, { css, DefaultTheme } from 'styled-components'
import media from 'styled-media-query'
import { HeadingProps, LineColor } from '.'

export const containerModifiers = {
  small: (theme: DefaultTheme) => css`
    font-size: ${theme.font.sizes.medium};

    &::after {
      width: 3rem;
    }
  `,
  medium: (theme: DefaultTheme) => css`
    font-size: ${theme.font.sizes.xlarge};
    /* Se for maior que medium */
    ${media.greaterThan('medium')`
      font-size: ${theme.font.sizes.xxlarge};
    `}
  `,
  huge: (theme: DefaultTheme) => css`
    font-size: ${theme.font.sizes.huge};
  `,
  lineLeft: (theme: DefaultTheme, lineColor: LineColor) => css`
    padding-left: ${theme.spacings.xxsmall};
    border-left: 0.7rem solid ${theme.colors[lineColor]};
  `,

  lineBottom: (theme: DefaultTheme, lineColor: LineColor) => css`
    position: relative;
    margin-bottom: ${theme.spacings.medium};

    &::after {
      content: '';
      position: absolute;
      left: 0;
      bottom: -1rem;
      width: 5rem;
      border-bottom: 0.5rem solid ${theme.colors[lineColor]};
    }
  `
}

export const Container = styled.h2<HeadingProps>`
  ${({ theme, color, lineLeft, lineBottom, size, lineColor }) => css`
    color: ${theme.colors[color!]};

    ${lineLeft && containerModifiers.lineLeft(theme, lineColor!)}
    ${lineBottom && containerModifiers.lineBottom(theme, lineColor!)}
    ${!!size && containerModifiers[size](theme)}
  `}
`
