import * as S from './styles'
import { forwardRef, AnchorHTMLAttributes, ButtonHTMLAttributes } from 'react'

type ButtonTypes =
  | AnchorHTMLAttributes<HTMLAnchorElement>
  | ButtonHTMLAttributes<HTMLButtonElement>

export type ButtonProps = {
  size?: 'small' | 'medium' | 'large'
  fullWidth?: boolean
  icon?: JSX.Element
  as?: React.ElementType
} & ButtonTypes

const Button: React.ForwardRefRenderFunction<S.ContainerProps, ButtonProps> = (
  { children, icon, size = 'medium', fullWidth = false, ...props },
  ref
) => {
  return (
    <S.Container
      ref={ref}
      size={size}
      fullWidth={fullWidth}
      hasIcon={!!icon}
      {...props}
    >
      {icon}
      {!!children && <span>{children}</span>}
    </S.Container>
  )
}

export default forwardRef(Button)
