import styled, { DefaultTheme, css } from 'styled-components'
import { darken } from 'polished'
import { RibbonColor, RibbonProps } from '.'

const containerModifiers = {
  color: (theme: DefaultTheme, color: RibbonColor) => css`
    background-color: ${theme.colors[color]};
    &::before {
      border-left-color: ${darken(0.2, theme.colors[color])};
      border-top-color: ${darken(0.2, theme.colors[color])};
    }
  `,
  normal: (theme: DefaultTheme) => css`
    height: 3.6rem;
    font-size: ${theme.font.sizes.small};
    padding: 0rem ${theme.spacings.small};
    right: -2rem;

    &::before {
      top: 3.6rem;
      border-top-width: 1rem;
      border-right-width: 2rem;
    }
  `,
  small: (theme: DefaultTheme) => css`
    height: 2.6rem;
    font-size: ${theme.font.sizes.xsmall};
    padding: 0rem ${theme.spacings.xsmall};

    right: -1.5rem;
    &::before {
      top: 2.6rem;
      border-top-width: 0.7rem;
      border-right-width: 1.5rem;
    }
  `
}

export const Container = styled.div<Omit<RibbonProps, 'children'>>`
  ${({ theme, color, size }) => css`
    ${!!color && containerModifiers.color(theme, color)};
    ${!!size && containerModifiers[size](theme)};

    position: absolute;
    top: ${theme.spacings.xsmall};
    display: flex;
    align-items: center;
    font-weight: ${theme.font.bold};
    color: ${theme.colors.white};
    &::before {
      content: '';
      position: absolute;
      right: 0;
      border-style: solid;
      border-left-width: 0rem;
      border-right-color: transparent;
      border-bottom-color: transparent;
      border-bottom-width: 1rem;
    }
  `}
`
