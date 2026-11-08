import image1 from "../public/assets/banners/banner-1.png";
import image2 from "../public/assets/banners/banner-2.png";
import image3 from "../public/assets/banners/banner-3.png";
import image4 from "../public/assets/banners/banner-4.png";

import image5 from "../public/assets/products/camiseta-Laravel-cinza.png";
import image6 from "../public/assets/products/camiseta-laravel-azul.png";
import image7 from "../public/assets/products/camiseta-css.png";
import image8 from "../public/assets/products/camiseta-react-azul.png";

export const data = {
  banners: [
    {
      id: 1,
      image: image1,
      link: "",
      title: "Banner 1",
      description: "Descrição do Banner 1",
    },
    {
      id: 2,
      image: image2,
      link: "",
      title: "Banner 2",
      description: "Descrição do Banner 2",
    },
    {
      id: 3,
      image: image3,
      link: "",
      title: "Banner 3",
      description: "Descrição do Banner 3",
    },
    {
      id: 4,
      image: image4,
      link: "",
      title: "Banner 4",
      description: "Descrição do Banner 4",
    },
  ],
  products: [
    {
      id: 1,
      image: image5,
      label: "Camiseta Laravel Cinza",
      price: 19.99,
      liked: false,
      description: "Descrição do Produto 1",
    },
    {
      id: 2,
      image: image6,
      label: "Camiseta Laravel Azul",
      price: 29.99,
      liked: false,
      description: "Descrição do Produto 2",
    },
    {
      id: 3,
      image: image7,
      label: "Camiseta CSS Azul",
      price: 39.99,
      liked: false,
      description: "Descrição do Produto 3",
    },
    {
      id: 4,
      image: image8,
      label: "Camiseta React Azul",
      price: 49.99,
      liked: true,
      description: "Descrição do Produto 4",
    },
  ],
};
