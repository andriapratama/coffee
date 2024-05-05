import { StaticImageData } from "next/image";

export interface RoastingType {
  id: string;
  title: string;
  image: StaticImageData;
  isActive: boolean;
}
