import { useState } from "react";
import styled from "styled-components";
import Carousel from "./components/carousel/carousel";
import Header from "./components/header/header";
import InfoBox from "./components/InfoBox/infoBox";
import PhotosModal from "./components/PhotosModal/photosModal";
import Cart from "./components/cart/cart";
import { imagesType, ProductType } from "./types/types";

import img1 from "./assets/images/image-product-1.jpg"
import img1_thumb from "./assets/images/image-product-1-thumbnail.jpg"
import img2 from "./assets/images/image-product-2.jpg"
import img2_thumb from "./assets/images/image-product-2-thumbnail.jpg"
import img3 from "./assets/images/image-product-3.jpg"
import img3_thumb from "./assets/images/image-product-3-thumbnail.jpg"
import img4 from "./assets/images/image-product-4.jpg"
import img4_thumb from "./assets/images/image-product-4-thumbnail.jpg"
import Menu from "./components/menu/menu";


//simulates data from an API
const shoes: ProductType = {
  id: 1,
  name: "Fall Limited Edition Sneakers",
  description: "These low-profile sneakers are your perfect casual wear companion. Featuring a durable rubber outer sole, they'll withstand everything the weather can offer.",
  price: 250,
  discount: 50,
  images: [
    {
      img: img1,
      img_thumb: img1_thumb,
      alt: "white shoes with brown details in a orange background"
    },
    {
      img: img2,
      img_thumb: img2_thumb,
      alt: "white shoes with brown details in a orange background"
    },
    {
      img: img3,
      img_thumb: img3_thumb,
      alt: "white shoes with brown details in a orange background"
    },
    {
      img: img4,
      img_thumb: img4_thumb,
      alt: "white shoes with brown details in a orange background"
    },
  ]
}

const Wrapper = styled.div`
  align-items: center;
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  height: fit-content;
  margin: 5rem auto;
  width: 70vw;
  @media screen and (max-width: 1440px){
    width: 90vw;
  }
  @media screen and (max-width: 1000px){
    flex-direction: column;
    margin: 0;
    width: 100vw;
  }
  `

function App() {
  const [displayCart, setDisplayCart] = useState<Boolean>(false)
  const [displayPhotos, setDisplayPhotos] = useState<Boolean>(false)
  const [displayMenu, setDisplayMenu] = useState<Boolean>(false)
  const [mainImgIndex, setMainImgIndex] = useState(0)

  const handleNavButton = (index: number, images: imagesType[])=>{
    if((mainImgIndex+index)<0) {
      setMainImgIndex(images.length-1)
      return
    }
    if ((mainImgIndex+index)>(images.length-1)) {
      setMainImgIndex(0)
      return
    }
    setMainImgIndex(mainImgIndex+index)
  }
  
  return (
    <>
      {displayMenu && <Menu setDisplayMenu={setDisplayMenu}/>}

      {displayPhotos && 
      <PhotosModal images={shoes.images}  
        setDisplayPhotos={setDisplayPhotos} 
        mainImgIndex={mainImgIndex} setMainImgIndex={setMainImgIndex} 
        handleNavButton={handleNavButton}/>}

      <Header 
        displayCart={displayCart} setDisplayCart={setDisplayCart} 
        displayMenu={displayMenu} setDisplayMenu={setDisplayMenu} />
        
      <Wrapper>
      {displayCart && <Cart/>}
        <Carousel images={shoes.images} 
          setDisplayPhotos={setDisplayPhotos} 
          setDisplayCart={setDisplayCart}
          mainImgIndex={mainImgIndex} setMainImgIndex={setMainImgIndex} 
          handleNavButton={handleNavButton}/>
        <InfoBox product={shoes}/>
      </Wrapper>
    </>
  );
}

export default App;
