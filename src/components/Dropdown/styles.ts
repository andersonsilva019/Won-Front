import styled, { css } from 'styled-components'
export const Title = styled.div`
  ${({ theme }) => css`
    cursor: pointer;
    color: ${theme.colors.white};
    position: relative;
    display: flex;
    align-items: center;
    padding-right: 2.4rem;
  `}
`

export const Content = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    background: ${theme.colors.white};
    color: ${theme.colors.black};
    margin-top: ${theme.spacings.small};
    position: absolute;
    right: 0;
    z-index: ${theme.layers.alwaysOnTop};
    &::before {
      content: '';
      position: absolute;
      border-right: 1.2rem solid transparent;
      border-left: 1.2rem solid transparent;
      border-bottom: 1.2rem solid ${theme.colors.white};
      top: -1.2rem;
      right: 2.4rem;
    }
  `}
`

type ContainerProps = {
  isOpen?: boolean
}

const containerModifiers = {
  open: () => css`
    opacity: 1;
    pointer-events: auto;
    transform: translateY(0);
  `,
  close: () => css`
    opacity: 0;
    pointer-events: none;
    transform: translateY(-2rem);
  `
}

const overlayModifiers = {
  open: () => css`
    opacity: 1;
    cursor: initial;
  `,
  close: () => css`
    opacity: 0;
    pointer-events: none;
  `
}

export const Overlay = styled.div<ContainerProps>`
  ${({ isOpen, theme }) => css`
    background: rgba(0, 0, 0, 0.5);
    position: fixed;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    z-index: ${theme.layers.overlay};
    ${isOpen && overlayModifiers.open()}
    ${!isOpen && overlayModifiers.close()}
  `}
`

export const Container = styled.div<ContainerProps>`
  ${({ theme, isOpen }) => css`
    position: relative;
    width: max-content;
    ${Content} {
      transition: transform 0.2s ease-in, opacity ${theme.transition.default};
      ${isOpen && containerModifiers.open()}
      ${!isOpen && containerModifiers.close()}
    }
  `}
`
