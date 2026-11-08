import { StaticImageData } from "next/image";

export type Product = {
  id: number;
  label: string;
  image: StaticImageData;
  price: number;
  liked: boolean;
  description: string;
};
