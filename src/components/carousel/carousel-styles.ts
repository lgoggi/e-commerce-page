import styled from "styled-components";

export const Wrapper = styled.div`
  align-items: center;
  display:flex;
  flex-direction: column;
  justify-items: center;
  width: 25vw;
  @media screen and (max-width: 1440px){
    width: 50vw;
  } 
  @media screen and (max-width: 720px){
    width: 100vw;
  } 
`
export const MainImgWrapper = styled.div`
  align-items: center;
  display: flex;
  flex-direction: row;
  justify-content: center;
  overflow: hidden;
  width: fit-content;
  @media screen and (max-width: 720px) {
    width: 100vw;
  }
`
export const MainImg=styled.img`
  border: 2px solid transparent;
  border-radius: 12px;
  cursor: pointer;
  width:  25vw;
  :hover{
    border: 2px solid hsl(26, 100%, 55%);
  }
  @media screen and (max-width: 1440px){
    width: 45vw;
  } 
  @media screen and (max-width: 720px){
    border: none;
    height: 30vh;
    object-fit: cover;
    object-position: 50% 50%;
    width: stretch;
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
  height: 2.5rem;
  justify-content: center;
  margin: 0 -12.5vw;
  width: 2.5rem;
  z-index: 2;
  .svg{
    transform: scale(0.9);
    stroke: black;
    stroke-width: 2px;
  }  
  @media screen and (min-width: 720px){
    display: none;
  } 
`