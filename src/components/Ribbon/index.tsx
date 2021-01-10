import * as S from './styles'

export type RibbonColor = 'primary' | 'secondary'
export type RibbonSize = 'normal' | 'small'

export type RibbonProps = {
  children: React.ReactNode
  color?: RibbonColor
  size?: RibbonSize
}

const Ribbon = ({
  children,
  color = 'primary',
  size = 'normal'
}: RibbonProps) => {
  return (
    <S.Container color={color} size={size}>
      {children}
    </S.Container>
  )
}

export default Ribbon
