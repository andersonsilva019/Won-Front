import { createContext, useContext } from 'react'

export type CartContextData = {}

export type CartProviderProps = {
  children: React.ReactNode
}
export const CartContextDefaultValue: CartContextData = {}

export const CartContext = createContext<CartContextData>(CartContextDefaultValue)

export function CartContextProvider({ children }: CartProviderProps) {
  return (
    <CartContext.Provider value={{}}>
      {children}
    </CartContext.Provider>
  )
}

export const useCart = () => useContext(CartContext)
