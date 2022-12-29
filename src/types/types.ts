export type imagesType = {
    img: string;
    img_thumb: string;
    alt: string;
}

export type ProductType = {
  id: number;
  name: string;
  description: string;
  price: number;
  discount?: number;
  images: imagesType[];
}

export type CartProps = {
    item: ProductType;
    quant: number;
}