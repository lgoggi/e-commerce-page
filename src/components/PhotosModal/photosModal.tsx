import { imagesType } from "../../types/types"
import { Background, CloseButton, NewNavButton, NewMainImg, Wrapper } from "./photosModal-styles"
import ThumbnailRow from "../ThumbnailRow/thumbnailRow"
import { MainImgWrapper } from "../carousel/carousel-styles"
import {ReactComponent as NextIcon} from "../../assets/images/icon-next.svg"
import{ReactComponent as PrevIcon}  from "../../assets/images/icon-previous.svg"
import{ReactComponent as CloseIcon}  from "../../assets/images/icon-close.svg"

type Props = {
  images: imagesType[],
  setDisplayPhotos: React.Dispatch<React.SetStateAction<Boolean>>,
  mainImgIndex: number,
  setMainImgIndex: React.Dispatch<React.SetStateAction<number>>,
  handleNavButton: (index: number, images: imagesType[]) => void
}

const PhotosModal = ({images, setDisplayPhotos, mainImgIndex, setMainImgIndex, handleNavButton}: Props) => {

  return (
    <Background>

      <Wrapper>
        <CloseButton onClick={()=>setDisplayPhotos(false)}> <CloseIcon className="svg"/> </CloseButton>
        <MainImgWrapper>
          <NewNavButton onClick={()=>handleNavButton(-1, images)}> <PrevIcon className="side"/> </NewNavButton>
          <NewMainImg src={images[mainImgIndex].img} alt={images[mainImgIndex].alt} />
          <NewNavButton onClick={()=>handleNavButton(1, images)}> <NextIcon className="side"/> </NewNavButton>
        </MainImgWrapper>

        <ThumbnailRow images={images} mainImgIndex={mainImgIndex} setMainImgIndex={setMainImgIndex}/>

      </Wrapper>
    </Background>
  )
}

export default PhotosModal