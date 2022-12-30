import styled from "styled-components"

export const ThumbRow=styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-top: 2rem;
  width: stretch;
  @media screen and (max-width: 1440px){
    width: 45vw;
  } 
  @media screen and (max-width: 720px){
    display: none;
  } 
`
export const ImgBackground = styled.div`
  align-items: center;
  background-color: black;
  border-radius: 12px;
  display: flex;
  height: 5.7vw;
  justify-content: center;
  width: 5.7vw;
  @media screen and (max-width: 1440px){
      width: 8vw;
      height: 8vw;
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