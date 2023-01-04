import styled from "styled-components";


export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 30vw;
  @media screen and (max-width: 1440px){
    width: 40vw;
  }
  @media screen and (max-width: 720px){
    width: 90vw;
  }
`
export const Brand = styled.div`
  color: hsl(26, 100%, 55%);
  font-size: 1.5rem;
  font-weight: 700;
  margin: 3rem 0 1.5rem;
  @media screen and (max-width: 720px){
    width: 90vw;
    font-size: 1.2rem;
    margin: 1.5rem 0 1.5rem;
  }
`
export const Name = styled.div`
  color: #252525;
  font-size: 3rem;
  font-weight: 700;
  margin-bottom: 2rem;
  width: 30vw;
  @media screen and (max-width: 1440px){
    width: 40vw;
  }
  @media screen and (max-width: 720px){
    width: 90vw;
    font-size: 1.5rem;
    margin-bottom: 1.5rem;
  }
`
export const Description = styled.div`
  color: #606060;
  font-size: 1.5rem;
  font-weight: 400;
  margin-bottom: 2.5rem;
  width: 30vw;
  overflow-wrap: break-word;
  @media screen and (max-width: 1440px){
    width: 40vw;
  }
  @media screen and (max-width: 720px){
    width: 90vw;
    font-size: 1rem;
    margin-bottom: 1.5rem;
  }
`
export const PriceRow = styled.div`
  align-items: center;
  display:flex;
  flex-direction: row;
  flex-wrap: wrap;
  margin-bottom: 1rem;
  width: 15rem;
  @media screen and (max-width: 720px){
    justify-content: space-between;
    width: 88vw;
    margin-bottom: 0;
  }
`
export const Price = styled.div`
  color: #252525;
  font-size: 2.5rem;
  font-weight: 700;
  @media screen and (max-width: 720px){
    font-size: 1.2rem;
  }
`
export const OldPrice=styled.div`
  color:  #606060;
  font-size: 1.5rem;
  font-weight: 400;
  width: 50rem;
  text-decoration-line: line-through;
  @media screen and (max-width: 720px){
    margin: 0 0 0 auto;
    width: fit-content;

  }
`
export const Discount = styled.div`
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
  @media screen and (max-width: 720px){
    margin: 1.5rem 0 0;
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
  width: 15rem;
  @media screen and (max-width: 720px){
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
  @media screen and (max-width: 720px){
    margin: 2rem 0;
    width: 90vw;
  }
`
