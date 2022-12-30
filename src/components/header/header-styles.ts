import styled from "styled-components";

export const Wrapper = styled.div`  
  align-items: center;
  border-bottom: 1px solid grey;
  display: flex;
  flex-direction: row;
  height: 14vh;
  width: 80vw;
  @media screen and (max-width: 1440px){
    width: 90vw;
  } 
  @media screen and (max-width: 1280px){
    height: 10vh;
    width: 100vw;
  } 
`
export const Home = styled.button`
  align-items: center;
  background-color: white;
  border: none;
  display: flex;
  justify-content: center;
  margin-left: 2rem;
  width: fit-content;
  .svg{
    margin: 0 4rem 0 5px;
    transform: scale(1.5);
    @media screen and (max-width: 1000px){
      margin: 0 0 0 4rem;
      transform: scale(2);
    } 
  }
  &:hover{
    cursor: pointer;
  }
`
export const MenuButton = styled.button`
  background-color: none;
  border: none;
  cursor: pointer;
  display: none;
  margin: 0 2rem 0 4rem;
  svg{
    transform: scale(2.2);
    z-index: 2;
  }
  @media screen and (max-width: 1280px){
    display: inline;
  }
`
export const Nav = styled.button`
  background-color: white;
  border: none;
  color: #606060;
  cursor: pointer;
  font-size: 1.3rem;
  margin: 1rem;
  width: fit-content;
  &:hover{
    border-bottom: 5px solid hsl(26, 100%, 55%);
  }
  @media screen and (max-width: 1280px){
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
`

