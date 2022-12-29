import styled from "styled-components";

export const Wrapper = styled.div`
  background-color: white;
  border-radius: 12px;
  box-shadow: 0 3px 2px 0px hsl(219, 9%, 45%);
  display: flex;
  flex-direction: column;
  height: 20rem;
  position: absolute;
  right: 9vw;
  top: 12vh;
  overflow-x:hidden;
  overflow-y: auto;
  width: 30rem;
`
export const Title = styled.div`
  border-bottom: 1px solid grey;
  font-size: 1.5rem;
  font-weight: 700;
  height: 3rem;
  margin: 2rem 1.5rem;
  width: 90%;
`
export const ProductBox = styled.div`
  border-bottom: 1px solid grey;
  height: 20rem;
  overflow-x:hidden;
  overflow-y: auto;
  ::-webkit-scrollbar {
    width: 10px;
  }
  ::-webkit-scrollbar-track {
    background: transparent;
  }
  ::-webkit-scrollbar-thumb {
    background: #888;
    border-radius: 25px;
  }
  ::-webkit-scrollbar-thumb:hover {
    background: #555;
  }
`
export const EmptyCart = styled.div`
align-items: center;
color: #606060;
display: flex;
justify-content: center;
font-size: 1.3rem;
font-weight: 700;
height: 50%;
`
export const Product = styled.div`
  align-items: center;
  display: flex;
  flex-direction: row;
  height: 5rem;
  margin: 0 1.5rem 1rem; 
  width: 90%;
`
export const ProductThumb = styled.img`
  border-radius: 6px;
  height: 100%;
`
export const ProductInfo = styled.div`
  align-items: center;
  height: 5rem;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  margin-left: 10px;
`
export const ProductText = styled.div`
  color: #606060;
  font-size: 1.3rem;
  font-weight: 400;
  width: fit-content;
`
export const ProductPrice = styled.div`
  color: #252525;
  font-size: 1.5rem;
  font-weight: 700;
  margin-left: 10px;
`
export const BinButton = styled.button`
background-color: transparent;
border: none;
cursor: pointer;
`
export const Checkout = styled.button`
background-color: hsl(26, 100%, 55%);
border: none;
border-radius: 12px;
color: white;
cursor: pointer;
font-size: 1.5rem;
font-weight: 700;
height: 8rem;
margin: 1.2rem auto;
width: 22rem;
`
