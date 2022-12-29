import styled from "styled-components";

export const Wrapper = styled.div`
  align-items: center;
  display: grid;
  grid-template:
  'mainImg'
  'thumbRow';
  justify-items: center;
  width: 30vw;
  @media screen and (max-width: 1440px){
    width: 50vw;
  } 
  @media screen and (max-width: 1000px){
    border: 1px solid red;
    width: 100vw;
  } 
`
export const MainImg=styled.img`
  border: 2px solid transparent;
  border-radius: 12px;
  cursor: pointer;
  grid-area: mainImg;
  width: 27.5vw;
  :hover{
    border: 2px solid hsl(26, 100%, 55%);
  }
  @media screen and (max-width: 1440px){
      width: 45vw;
    } 
  @media screen and (max-width: 1000px){
      height: 50vh;
      width: 100vw;
      object-fit: cover;
      object-position: 50% 50%;
      border: none;
      :hover{
        border: none;
      }
  }
`
export const ThumbRow=styled.div`
  display: flex;
  flex-direction: row;
  grid-area: thumbRow;
  justify-content: space-between;
  margin-top: 2rem;
  width: 27.5vw;
  @media screen and (max-width: 1440px){
      width: 45vw;
  } 
  @media screen and (max-width: 1000px){
      display: none;
  } 
`
export const ThumbImg = styled.img`
  border: 2px solid transparent;
  border-radius: 12px;
  cursor: pointer;
  width: 5.7vw;
  &.selected{
    border: 2px solid hsl(26, 100%, 55%);
    opacity: 50%;
  }
  :hover{
    opacity: 40%;
  }
  @media screen and (max-width: 1440px){
      width: 8vw;
    } 

`