import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 30vw;
  @media screen and (max-width: 1440px){
    width: 40vw;
  }
  @media screen and (max-width: 1000px){
    width: 90vw;
  }
`
export const Brand = styled.div`
  color: hsl(26, 100%, 55%);
  font-size: 1.5rem;
  font-weight: 700;
  margin: 3rem 0 1.5rem;
  @media screen and (max-width: 1000px){
    width: 90vw;
  }
`
export const Name = styled.div`
  color: #252525;
  font-size: 3.5rem;
  font-weight: 700;
  margin-bottom: 3rem;
  width: 25vw;
  @media screen and (max-width: 1440px){
    width: 40vw;
  }
  @media screen and (max-width: 1000px){
    width: 90vw;
  }
`
export const Description = styled.div`
  color: #606060;
  font-size: 1.3rem;
  font-weight: 400;
  margin-bottom: 2.5rem;
  width: 25vw;
  overflow-wrap: break-word;
  @media screen and (max-width: 1440px){
    width: 40vw;
  }
  @media screen and (max-width: 1000px){
    width: 90vw;
  }
`
export const PriceRow = styled.div`
  align-items: center;
  display:flex;
  flex-direction: row;
  flex-wrap: wrap;
  margin-bottom: 1rem;
  width: 15rem;
  @media screen and (max-width: 1000px){
    width: 90vw;
  }
`
export const Price = styled.div`
  color: #252525;
  font-size: 2.5rem;
  font-weight: 700;
`
export const OldPrice=styled.div`
  color:  #606060;
  font-size: 1.5rem;
  font-weight: 400;
  width: 50rem;
  text-decoration-line: line-through;
  @media screen and (max-width: 1000px){
    margin: 0 0 0 auto;
    width: fit-content;
  }
`
export const Discount = styled.div`
border: 1px solid green;
  background-color: hsl(25, 100%, 88%);
  border-radius: 12%;
  color: hsl(26, 100%, 55%);
  font-size: 1.4rem;
  font-weight: 700;
  margin-left: 2rem;
  padding: 5px;
`
export const BuyingRow = styled.div`
  align-items: center;
  display:flex;
  flex-direction: row;
  margin: 2.5rem 0 1rem;
  @media screen and (max-width: 1000px){
    margin: 2.5rem 0 1rem 0;
    flex-direction: column;
  }
`
export const QuantBox = styled.div`
  color: #252525;
  background-color: #eee;
  border-radius: 12px;
  display: flex;
  font-size: 1.4rem;
  font-weight: 700;
  height: 4rem;
  justify-content: space-between;
  align-items: center;
  width: 12rem;
  @media screen and (max-width: 1000px){
    height: 6rem;
    width: 90vw;
  }
`
export const QuantButton = styled.button`
  background-color: transparent;
  border: none;
  cursor: pointer;
  height: 2.5rem;
  width: 3.5rem;
`
export const BuyButton = styled.button`
  align-items: center;
  background-color: hsl(26, 100%, 55%);
  border: none;
  border-radius: 12px;
  color: white;
  cursor: pointer;
  display: flex;
  font-size: 1.2rem;
  font-weight: 700;
  height: 4rem;
  justify-content: center;
  margin-left: 2.5rem;
  width: 20rem;
  @media screen and (max-width: 1000px){
    margin: 2rem 0;
    height: 6rem;
    width: 90vw;
  }
`
