import styled from "styled-components";
import { MainImg, NavButton } from "../carousel/carousel-styles";

export const Background = styled.div`
  background: rgba(0, 0, 0, 0.85);
  display: grid;
  height: 100vh;
  left: 0;
  place-items: center;
  position: absolute;
  top: 0;
  width: 100vw;
  z-index: 1;
  @media screen and (max-width: 1000px){
      display: none;
  } 
`
export const Wrapper = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  height: fit-content;
  justify-content: center;
  width: 35vw;
`
export const CloseButton = styled.button`
  align-self: end;
  align-items: center;
  background-color: transparent;
  border: none;
  cursor: pointer;
  display: flex;
  height: 5rem;
  width: 3rem;
  justify-content: center;
  .svg{
    fill: #69707D;
    transform: scale(3);
    :hover{
      fill: hsl(26, 100%, 55%);
    }
  }
`
export const NewMainImg = styled(MainImg)`
  border: none;
  cursor: default;
  margin: 0 -2rem 0;
  width: 35vw;
  z-index: 1;
  :hover{
    border: none;
  }
`
export const NewNavButton = styled(NavButton)`
  margin: 0;
  .side{
    stroke: black;
    stroke-width: 3px;
  }
  :hover{
    .side{
      stroke: hsl(26, 100%, 55%);
    }
  }
  @media screen and (min-width: 1000px){
    display: flex;
  } 
`