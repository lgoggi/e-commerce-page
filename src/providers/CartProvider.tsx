import React, { createContext, ReactNode, useState } from "react";
import { CartProps } from "../types/types";

type CartContextProps = {
  children: ReactNode;
}


type CartContextTypes = {
  cart: CartProps[] | undefined;
  setCart: React.Dispatch<React.SetStateAction<CartProps[] | undefined >>;
}

export const CartContext = createContext<CartContextTypes>({} as CartContextTypes)

export const CartProvider = ({children}: CartContextProps)=>{
  const [cart, setCart] = useState<CartProps[]>()

  return (
    <CartContext.Provider value={{cart, setCart}}>
    {children}
    </CartContext.Provider>
  )
}