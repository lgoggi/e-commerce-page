import styled from "styled-components";

export const Wrapper = styled.div`
  background-color: rgba(0, 0, 0, 0.5);
  height: 100vh;
  position: absolute;
  width: 100vw;
  z-index: 1;
`
export const SideBar = styled.div`
  background-color: white;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  height: 90vh;
  padding: 5vh 0 0 5vh;
  width: 55vw;
`
export const CloseButton = styled.button`
  align-items: center;
  background-color: transparent;
  border: none;
  cursor: pointer;
  display: flex;
  justify-content: center;
  width: fit-content;
  .svg{
    fill: #69707D;
    transform: scale(2);
  }
`
export const Nav = styled.button`
  background-color: white;
  border: none;
  color: #202020;
  cursor: pointer;
  font-size: 2rem;
  font-weight: 700;
  margin-top: 3rem;
  padding: 0;
`
