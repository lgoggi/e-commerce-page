import {  MainImgWrapper, MainImg, NavButton, Wrapper } from "./carousel-styles";
import { imagesType } from "../../types/types";
import {ReactComponent as NextIcon} from "../../assets/images/icon-next.svg"
import{ReactComponent as PrevIcon}  from "../../assets/images/icon-previous.svg"
import ThumbnailRow from "../ThumbnailRow/thumbnailRow";

type Props = {
  images: imagesType[],
  mainImgIndex: number,
  setDisplayPhotos: React.Dispatch<React.SetStateAction<Boolean>>,
  setDisplayCart: React.Dispatch<React.SetStateAction<Boolean>>,
  setMainImgIndex: React.Dispatch<React.SetStateAction<number>>,
  handleNavButton: (index: number, images: imagesType[]) => void
}

const Carousel = ({images, mainImgIndex, setDisplayPhotos, setDisplayCart, setMainImgIndex, handleNavButton}: Props) => { 

  const handleMainClick = () => {
    setDisplayPhotos(true);
    setDisplayCart(false);
  }

  return (
    <Wrapper>

      <MainImgWrapper>
          <NavButton onClick={()=>handleNavButton(-1, images)}> <PrevIcon className="svg"/> </NavButton>
          <MainImg src={images[mainImgIndex].img} alt={images[mainImgIndex].alt} onClick={()=>handleMainClick()}/>
          <NavButton onClick={()=>handleNavButton(1, images)}> <NextIcon className="svg"/> </NavButton>
      </MainImgWrapper>

      <ThumbnailRow images={images} mainImgIndex={mainImgIndex} setMainImgIndex={setMainImgIndex}/>

    </Wrapper>
  )
}

export default Carousel