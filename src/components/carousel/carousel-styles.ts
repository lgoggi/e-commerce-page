import styled from "styled-components";

export const Wrapper = styled.div`
  align-items: center;
  display:flex;
  flex-direction: column;
  justify-items: center;
  width: 30vw;
  @media screen and (max-width: 1440px){
    width: 50vw;
  } 
  @media screen and (max-width: 1000px){
    width: 100vw;
  } 
`
export const MainImgWrapper = styled.div`
  align-items: center;
  display: flex;
  flex-direction: row;
`
export const MainImg=styled.img`
  border: 2px solid transparent;
  border-radius: 12px;
  cursor: pointer;
  width: 30vw;
  :hover{
    border: 2px solid hsl(26, 100%, 55%);
  }
  @media screen and (max-width: 1440px){
    width: 45vw;
  } 
  @media screen and (max-width: 1000px){
    border: none;
    height: 30vh;
    object-fit: cover;
    object-position: 50% 50%;
    width: 100vw;
    :hover{
      border: none;
    }
  }
`
export const NavButton = styled.button`
  align-items: center;
  background-color: white;
  border: none;
  border-radius: 50%;
  cursor: pointer;
  display: flex;
  height: 4rem;
  justify-content: center;
  margin: 0 -10vw;
  width: 4rem;
  z-index: 2;
  .svg{
    stroke: black;
    stroke-width: 5px;
  }  
  @media screen and (min-width: 1000px){
    display: none;
  } 
`