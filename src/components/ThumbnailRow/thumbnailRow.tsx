import { imagesType } from "../../types/types"
import { ImgBackground, ThumbImg, ThumbRow } from "./thumbnail-styles"

type Props = {
  images: imagesType[],
  mainImgIndex: number,
  setMainImgIndex: React.Dispatch<React.SetStateAction<number>>,
}

const ThumbnailRow = ({images, mainImgIndex, setMainImgIndex}: Props) => {
  return (
    <ThumbRow>
      {
        images.map((item, index) => {
          return (
            <ImgBackground key={index}>
              <ThumbImg className={(images[mainImgIndex] === item ? "selected" : "")}
                  key={index} src={item.img} alt={item.alt} 
                onClick={() => setMainImgIndex(index)} />
            </ImgBackground>
          )
        })
      }
    </ThumbRow>
  )
}

export default ThumbnailRow