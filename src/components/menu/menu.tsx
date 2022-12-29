import { CloseButton, Nav, SideBar, Wrapper } from "./menu-styles"
import{ReactComponent as CloseIcon}  from "../../assets/images/icon-close.svg"

type Props = {
  setDisplayMenu: React.Dispatch<React.SetStateAction<Boolean>> 
}

const Menu = ( {setDisplayMenu}: Props ) => {
  return (
    <Wrapper>
      <SideBar>
        <CloseButton onClick={()=>setDisplayMenu(false)}> <CloseIcon className="svg"/> </CloseButton>
        <Nav>Collections</Nav>
        <Nav>Men</Nav>
        <Nav>Women</Nav>
        <Nav>About</Nav>
        <Nav>Contact</Nav>
      </SideBar>
    </Wrapper>
  )
}

export default Menu