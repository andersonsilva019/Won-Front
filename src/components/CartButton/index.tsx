import {
  AddShoppingCart,
  RemoveShoppingCart
} from '@styled-icons/material-outlined'
import Button, { ButtonProps } from 'components/Button'
import { useCart } from 'hooks/use-cart'

type CartButtonProps = {
  id: string
  hasText?: boolean
} & Pick<ButtonProps, 'size'>

export const CartButton = ({
  id,
  size = 'small',
  hasText = false
}: CartButtonProps) => {
  const { isInCart, addToCart, removeFromCart } = useCart()

  const buttonText = isInCart(id) ? 'Remove from cart' : 'Add to cart'

  return (
    <Button
      icon={
        isInCart(id) ? (
          <RemoveShoppingCart aria-label="Remove from Cart" />
        ) : (
          <AddShoppingCart aria-label="Add to Cart" />
        )
      }
      size={size}
      onClick={() => (isInCart(id) ? removeFromCart(id) : addToCart(id))}
    >
      {hasText && buttonText}
    </Button>
  )
}
