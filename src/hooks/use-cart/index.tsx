import { createContext, useContext, useEffect, useState } from 'react'
import { getStorageItem } from 'utils/localStorage'

const CART_KEY = 'cartItems'

export type CartContextData = {
  items: string[]
}

export type CartProviderProps = {
  children: React.ReactNode
}
export const CartContextDefaultValue: CartContextData = {
  items: []
}

export const CartContext = createContext<CartContextData>(CartContextDefaultValue)

export function CartProvider({ children }: CartProviderProps) {

  const [cartItems, setCartItems] = useState<string[]>([])

  useEffect(() => {
    const data = getStorageItem(CART_KEY)

    if (data) {
      setCartItems(data)
    }
  }, [])

  return (
    <CartContext.Provider value={{ items: cartItems }}>
      {children}
    </CartContext.Provider>
  )
}

export const useCart = () => useContext(CartContext)
