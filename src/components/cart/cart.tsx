import {useContext } from 'react'
import { CartContext } from "../../providers/CartProvider"
import {ProductBox, Product, ProductInfo, ProductThumb, ProductText, Title, Wrapper, ProductPrice, Checkout, BinButton, EmptyCart } from "./cart-styles"
import{ReactComponent as BinIcon} from "../../assets/images/icon-delete.svg"
import { CartProps } from '../../types/types'

const Cart = () => {
  const { cart, setCart } = useContext(CartContext)

  const handleBin = (prod: CartProps) => {
    const newCart = cart?.filter(item => item !== prod)
    setCart(newCart)
  }

  return (
      <Wrapper >
        <Title>Cart</Title>
        {
          (cart?.length === 0)? 
            <EmptyCart>Your carty is empty.</EmptyCart>
            :
            <>
              <ProductBox>
                {
                  cart?.map((prod) => {
                    return (
                      <Product>
                        <ProductThumb src={prod.item.images[0].img_thumb} alt={prod.item.images[0].alt} />
                        <ProductInfo>
                          <ProductText>{prod.item.name}</ProductText>
                          <ProductText>${prod.item.price.toFixed(2)} x {prod.quant}</ProductText>
                          <ProductPrice>${(prod.item.price * prod.quant).toFixed(2)}</ProductPrice>
                        </ProductInfo>
                        <BinButton onClick={() => handleBin(prod)}>
                          <BinIcon />
                        </BinButton>
                      </Product>
                    )
                  })
                }
              </ProductBox>
              <Checkout>Checkout</Checkout>
            </>
        }
      </Wrapper>
  )
}

export default Cart