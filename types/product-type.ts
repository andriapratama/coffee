import { StaticImageData } from "next/image";

export interface ProductType {
  id: string;
  name: string;
  image: StaticImageData;
}
