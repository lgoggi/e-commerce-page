import { imagesType } from "../../types/types"
import { Background, CloseButton, ImgBackground, MainImgWrapper, NavButton, NewMainImg, NewThumbImg, NewThumbRow, Wrapper } from "./photosModal-styles"
import { useState } from "react"
import {ReactComponent as NextIcon} from "../../assets/images/icon-next.svg"
import{ReactComponent as PrevIcon}  from "../../assets/images/icon-previous.svg"
import{ReactComponent as CloseIcon}  from "../../assets/images/icon-close.svg"

type Props = {
  images: imagesType[],
  setDisplayPhotos: React.Dispatch<React.SetStateAction<Boolean>>
}

const PhotosModal = ({images, setDisplayPhotos}: Props) => {
  const [mainImgIndex, setMainImgIndex] = useState(0)

  const handleNavButton = (index: number)=>{
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
    <Background>

      <Wrapper>
        <CloseButton onClick={()=>setDisplayPhotos(false)}> <CloseIcon className="svg"/> </CloseButton>
        <MainImgWrapper>
          <NavButton onClick={()=>handleNavButton(-1)}> <PrevIcon className="side"/> </NavButton>
          <NewMainImg src={images[mainImgIndex].img} alt={images[mainImgIndex].alt} />
          <NavButton onClick={()=>handleNavButton(1)}> <NextIcon className="side"/> </NavButton>
        </MainImgWrapper>

        <NewThumbRow>
          {
            images.map( (item, index)=> {
              return(
                <ImgBackground key={index}>
                  <NewThumbImg src={item.img} alt={item.alt} key={index} 
                    className={(images[mainImgIndex]===item? 'selected' : '')} 
                    onClick={()=>setMainImgIndex(index)}/>
                </ImgBackground>
              )
            })
          }
        </NewThumbRow>

      </Wrapper>
    </Background>
  )
}

export default PhotosModal