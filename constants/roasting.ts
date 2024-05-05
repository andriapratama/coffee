import { RoastingType } from "@/types/roasting-type";

import DarkBean from "../public/beans/All-About-Coffee-Roasts.jpg";
import MediumBean from "../public/beans/coffee-medium-roast-organic-amsterdam.webp";
import MediumDarkBean from "../public/beans/roasting-coffee-beans.jpg";
import LightBean from "../public/beans/unnamed_65c1eb79-4306-4b8c-b1b5-9a53f96b0e2f.jpg";

export const RoastingDatas: RoastingType[] = [
  {
    id: "1",
    title: "LIGHT ROAST",
    image: LightBean,
    isActive: false,
  },
  {
    id: "2",
    title: "MEDIUM ROAST",
    image: MediumBean,
    isActive: false,
  },
  {
    id: "3",
    title: "MEDIUM-DARK ROAST",
    image: MediumDarkBean,
    isActive: false,
  },
  {
    id: "4",
    title: "DARK ROAST",
    image: DarkBean,
    isActive: false,
  },
];
