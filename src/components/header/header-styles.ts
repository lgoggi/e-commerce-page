import styled from "styled-components";

export const Wrapper = styled.div`  
  align-items: center;
  border-bottom: 1px solid grey;
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  height: 14vh;
  margin: 0 auto;
  width: 70vw;
  @media screen and (max-width: 1440px){
    width: 90vw;
  } 
  @media screen and (max-width: 1280px){
    height: 10vh;
    width: 100vw;
  }
  @media screen and (max-width: 720px){
    justify-content: space-evenly;
  }
`
export const Home = styled.button`
  align-items: center;
  background-color: white;
  border: none;
  display: flex;
  justify-content: center;
  margin: 0 4rem;
  width: fit-content;
  .svg{
    margin: auto;
    transform: scale(1.5);
    @media screen and (max-width: 1000px){
      transform: scale(1.5);
    }
    @media screen and (max-width: 720px){
      transform: scale(1);
    } 
  }
  &:hover{
    cursor: pointer;
  }
  @media screen and (max-width: 720px){
    margin: 0;
  }
`
export const MenuButton = styled.button`
border: 1px solid green;
  background-color: none;
  border: none;
  cursor: pointer;
  display: none;
  margin: 0 1vw 0 1vw;
  svg{
    transform: scale(1.5);
    z-index: 2;
  }
  @media screen and (max-width: 1000px){
    display: inline;
  }
  @media screen and (max-width: 720px){
    margin: 0;
    svg{
      transform: scale(1);
    }
  }
`
export const Nav = styled.button`
  background-color: white;
  border: none;
  color: #606060;
  cursor: pointer;
  font-size: 1.3rem;
  height: 100%;
  margin: 1rem;
  width: fit-content;
  &:hover{
    border-bottom: 5px solid hsl(26, 100%, 55%);
  }
  @media screen and (max-width: 1000px){
    display: none;
  } 
`
export const Cart = styled.button`
  background-size: cover;
  background-color: white;
  border: none;
  height: 2rem;
  margin: 0 2.5rem 0 auto;
  width: 2.2rem;
  &:hover{
    cursor: pointer;
    height: 2.3rem;
    width: 2.5rem;
  }
  @media screen and (max-width: 720px){
    margin: 0;
  }
`
export const Avatar = styled.div`
  border-radius: 50%;
  height: 7.3vh;  
  margin: 0 2rem 0 0;
  width: 7.3vh;
  img{
    height: 7.3vh;
    width: 7.3vh;
  }
  &:hover{
    border: 3px solid hsl(26, 100%, 55%);
    cursor: pointer;
  }
  @media screen and (max-width: 720px){
    margin: 0;
  }
`

