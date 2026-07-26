"use client";

import { Banner } from "@/types/banner";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

interface BannerProps {
  list: Banner[];
}

export const Banners = ({ list }: BannerProps) => {
  const [currentImage, setCurrentImage] = useState(0);

  const nestImage = () => {
    setCurrentImage((currentImage) => {
      if (currentImage + 1 >= list.length) {
        return 0;
      }
      return currentImage + 1;
    });
  };

  let bannerInterval: 5000;
  if (typeof window !== "undefined") {
    bannerInterval = 5000;
  }

  useEffect(() => {
    const interval = setInterval(nestImage, bannerInterval);
    return () => clearInterval(interval);
  }, []);

  const handleImageClick = (index: number) => {
    setCurrentImage(index);
    clearInterval(bannerInterval);
  };

  return (
    <div>
      <div className="relative aspect-3/1">
        {list.map((banner) => (
          <Link
            href={banner.link}
            key={banner.id}
            className={`absolute top-0 left-0 w-full h-full transition-opacity duration-500 ${
              currentImage === banner.id - 1 ? "opacity-100" : "opacity-0"
            }`}
          >
            <Image
              src={banner.image}
              alt={banner.title}
              width={1280}
              height={400}
              className="w-full h-auto object-cover rounded-md"
            />
          </Link>
        ))}
      </div>
      <div className="mt-4 justify-center gap-4 flex">
        {list.map((banner, index) => (
          <button
            key={index}
            onClick={() => handleImageClick(index)}
            className={`w-3 h-3 rounded-full transition-all ${
              currentImage === index
                ? "bg-blue-500 scale-110"
                : "bg-black hover:bg-black/80 cursor-pointer transition-all duration-300"
            }`}
          />
        ))}
      </div>
    </div>
  );
};
