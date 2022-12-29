import styled from "styled-components";
import { MainImg, ThumbImg, ThumbRow } from "../carousel/carousel-styles";

export const Background = styled.div`
  background: rgba(0, 0, 0, 0.85);
  border: 1px solid black;
  display: grid;
  height: 100vh;
  place-items: center;
  left: 0;
  position: absolute;
  top: 0;
  width: 100vw;
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
export const MainImgWrapper = styled.div`
  align-items: center;
  display: flex;
  flex-direction: row;
`
export const NewMainImg = styled(MainImg)`
  border: none;
  cursor: default;
  margin: 0 -2rem 0;
  width: 35vw;
  :hover{
    border: none;
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
  width: 4rem;
  z-index: 1;
  .side{
    stroke: black;
  }
  :hover{
    .nav{
      stroke: hsl(26, 100%, 55%);
    }
  }
`
export const NewThumbRow = styled(ThumbRow)`
  width: 35vw;
`
export const ImgBackground = styled.div`
  align-items: center;
  background-color: black;
  border-radius: 12px;
  display: flex;
  height: 5.7vw;
  justify-content: center;
  width: 5.7vw;
`
export const NewThumbImg = styled(ThumbImg)`
  margin: 0;
  &.selected{
    border: 2px solid hsl(26, 100%, 55%);
    opacity: 60%;
  }
  :hover{
    opacity: 50%;
  }
`