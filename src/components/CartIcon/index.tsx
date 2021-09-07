import { ShoppingCart } from '@styled-icons/material-outlined/ShoppingCart'

import * as S from './styles'

export type CartIconProps = {
  quantity?: number
}

const CartIcon = ({ quantity = 0 }: CartIconProps) => {
  return (
    <S.Container>
      <ShoppingCart aria-label="Shopping Cart" />
      {quantity > 0 && <S.Badge aria-label="Cart items">{quantity}</S.Badge>}
    </S.Container>
  )
}

export default CartIcon
