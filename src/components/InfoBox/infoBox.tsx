import { useContext,useState } from "react";
import {ReactComponent as Minus} from "../../assets/images/icon-minus.svg"
import {ReactComponent as Plus} from "../../assets/images/icon-plus.svg"
import {ReactComponent as Cart} from "../../assets/images/icon-cart.svg";
import {ProductType} from "../../types/types";
import { Brand, BuyButton, BuyingRow, Description, Discount, Name, OldPrice, Price, PriceRow, QuantBox, QuantButton, Wrapper } from "./infoBox-styles";
import { CartContext } from "../../providers/CartProvider";

type Props ={ 
  product: ProductType
}

const InfoBox = ({product}: Props) => {
  const [quant, setQuant] = useState(1);
  const { cart, setCart } = useContext(CartContext);
  const newPrice = (product.price * (1 - parseFloat(`0.${product.discount}`))).toFixed(2);
  
  (function(){
    if(quant<1) setQuant(1)
    if(quant>99) setQuant(99)
  })()
  
  const handleBuy = () => {
    if(cart){
      let newCart = [...cart, {item: product, quant: quant}]
      setCart(newCart)
      console.log(cart)
    } else {
      let newCart = [ {item: product, quant: quant} ]
      setCart(newCart)
      console.log(cart)
    }
  }
  

  return (
    <Wrapper>
      <Brand className="brand">SNEAKER COMPANY</Brand>
      <Name>{product.name}</Name>
      <Description>{product.description}</Description>
      <PriceRow>
        <Price>
          ${(product.discount)? newPrice : product.price}
        </Price>
        <Discount>{(product.discount)? `${product.discount}%`: null}</Discount>
        <OldPrice>{(product.discount)? `$${product.price.toFixed(2)}` : null}</OldPrice>
      </PriceRow>
      <BuyingRow>
        <QuantBox>
          <QuantButton onClick={()=>setQuant(quant-1)}> <Minus/> </QuantButton>
            {quant}
          <QuantButton onClick={()=>setQuant(quant+1)}> <Plus/> </QuantButton>
        </QuantBox>
        <BuyButton onClick={()=>handleBuy()}> <Cart fill='white' color="white" height="1.5rem" width="2rem"/> Add to cart</BuyButton>
      </BuyingRow>
    </Wrapper>
)
}

export default InfoBox