import { AddShoppingCart, RemoveShoppingCart } from "@styled-icons/material-outlined";
import Button from "components/Button";
import { useCart } from "hooks/use-cart";

type CartButtonProps = {
  id: string

}

export const CartButton = ({ id }: CartButtonProps) => {

  const { isInCart, addToCart, removeFromCart } = useCart()

  return (
    <Button
      icon={
        isInCart(id)
          ? <RemoveShoppingCart aria-label="Remove from Cart" />
          : <AddShoppingCart aria-label="Add to Cart" />}
      size="small"
      onClick={() => (isInCart(id) ? removeFromCart(id) : addToCart(id))}
    />
  )
}

