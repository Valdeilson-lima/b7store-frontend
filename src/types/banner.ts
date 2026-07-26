import { StaticImageData } from "next/image";

export interface Banner {
  id: number;
  image: string | StaticImageData;
  link: string;
  title: string;
  description: string;
}
