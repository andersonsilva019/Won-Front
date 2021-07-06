import styled, { css } from 'styled-components'
import media from 'styled-media-query'

import * as HeadingStyles from '../../components/Heading/styles'
import * as LogoStyles from '../../components/Logo/styles'

export const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  height: 100vh;

  ${media.greaterThan('medium')`
    grid-template-columns: 1fr 1fr;
  `}
`

export const BannerBlock = styled.div`
  ${({ theme }) => css`
    background-image: url('/images/auth-bg.jpg');
    background-size: cover;
    background-position: center center;
    position: relative;
    padding: ${theme.spacings.xxlarge} ${theme.spacings.xxlarge}
      ${theme.spacings.large};

    ${media.lessThan('medium')`
      display: none;
    `};

    &::after {
      content: '';
      position: absolute;
      top: 0;
      bottom: 0;
      right: 0;
      left: 0;
      background-color: ${theme.colors.black};
      opacity: 0.85;
    }
  `}
`

export const BannerContent = styled.div`
  ${({ theme }) => css`
    position: relative;
    display: grid;
    grid-template-columns: 1fr;
    justify-content: space-between;
    height: 100%;
    color: ${theme.colors.white};
    z-index: ${theme.layers.base};
  `}
`

export const Subititle = styled.h3`
  ${({ theme }) => css`
    font-size: ${theme.font.sizes.xxlarge};
    font-weight: ${theme.font.light};
    margin-top: ${theme.spacings.xxsmall};

    > strong {
      color: ${theme.colors.primary};
    }
  `}
`

export const Footer = styled.p`
  ${({ theme }) => css`
    align-self: flex-end;
    text-align: center;
    font-size: ${theme.font.sizes.xsmall};
  `}
`

export const Content = styled.div`
  ${({ theme }) => css`
    background-color: ${theme.colors.white};
    display: grid;
    align-items: center;
    justify-content: center;
  `}
`
export const ContentWrapper = styled.div`
  ${({ theme }) => css`
    width: 30rem;

    ${media.greaterThan('medium')`
      width: 36rem;
    `}

    ${LogoStyles.Container} {
      margin: 0 auto ${theme.spacings.xxlarge};
    }

    ${HeadingStyles.Container} {
      margin-bottom: ${theme.spacings.medium};
    }
  `}
`
