import avatar from "../../assets/images/image-avatar.png"
import {ReactComponent as Icon} from "../../assets/images/icon-cart.svg";
import{ReactComponent as Logo}  from "../../assets/images/logo.svg"
import{ReactComponent as MenuIcon}  from "../../assets/images/icon-menu.svg"
import { Wrapper, Home, Nav, Cart, Avatar, MenuButton } from "./header-styles"
import { useContext } from "react";
import { CartContext } from "../../providers/CartProvider";

type Props = {
  displayCart: Boolean, 
  setDisplayCart: React.Dispatch<React.SetStateAction<Boolean>>,
  displayMenu: Boolean, 
  setDisplayMenu: React.Dispatch<React.SetStateAction<Boolean>> 
}

const Header = ({displayCart, setDisplayCart, displayMenu, setDisplayMenu }: Props) => { 
  const { cart } = useContext(CartContext)
  
  return (
    <Wrapper>
      <MenuButton onClick={()=> setDisplayMenu(!displayMenu)}> <MenuIcon className="svg"/> </MenuButton>
      <Home><Logo className="svg"/></Home>
      <Nav>Collections</Nav>
      <Nav>Men</Nav>
      <Nav>Women</Nav>
      <Nav>About</Nav>
      <Nav>Contact</Nav>
      <Cart onClick={()=>setDisplayCart(!displayCart)}> 
        <Icon fill='#69707D' transform='scale(1.5)'/>
      </Cart>
      <Avatar>
        <img src={avatar} alt="profile"/>
      </Avatar>
    </Wrapper>
  )
}

export default Header