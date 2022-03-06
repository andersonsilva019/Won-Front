import { ShoppingCart } from '@styled-icons/material-outlined/ShoppingCart'
import { useCart } from 'hooks/use-cart'

import * as S from './styles'

const CartIcon = () => {
  const { quantity } = useCart()

  return (
    <S.Container>
      <ShoppingCart aria-label="Shopping Cart" />
      {quantity > 0 && <S.Badge aria-label="Cart items">{quantity}</S.Badge>}
    </S.Container>
  )
}

export default CartIcon
