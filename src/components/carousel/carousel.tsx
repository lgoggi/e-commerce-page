import {  MainImg, ThumbImg, ThumbRow, Wrapper } from "./carousel-styles";
import { imagesType } from "../../types/types";
import { useState } from "react";

type Props = {
  images: imagesType[],
  setDisplayPhotos: React.Dispatch<React.SetStateAction<Boolean>>,
  setDisplayCart: React.Dispatch<React.SetStateAction<Boolean>>
}

const Carousel = ({images, setDisplayPhotos, setDisplayCart}: Props) => { 
  const [mainImg, setMainImg] = useState(images[0])

  const handleClick = () => {
    setDisplayPhotos(true);
    setDisplayCart(false);
  }

  return (
    <Wrapper>
      <MainImg src={mainImg.img} alt={mainImg.alt} onClick={()=>handleClick()}/>
      <ThumbRow>
        {
          images.map( (item, index)=> {
            return(
              <ThumbImg src={item.img} alt={item.alt} key={index} className={(mainImg===item? 'selected' : '')} onClick={()=>setMainImg(item)}/>
            )
          })
        }
      </ThumbRow>
    </Wrapper>
  )
}

export default Carousel