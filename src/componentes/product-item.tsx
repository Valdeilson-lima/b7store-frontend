"use client";

import { Product } from "@/types/product";
import Image from "next/image";
import Link from "next/link";
import { Heart } from "lucide-react";
import { useState } from "react";

interface ProductItemProps {
  product: Product;
}

export const ProductItem = ({ product }: ProductItemProps) => {
  const [isLiked, setIsLiked] = useState(product.liked);
  return (
    <div className="bg-gray-200 border border-gray-300 rounded-sm p-6">
      <div className="flex justify-end">
        <div
          className="text-gray-500 border border-blue-300 rounded-sm p-1 hover:text-blue-500 cursor-pointer"
          onClick={() => setIsLiked(!isLiked)}
        >
          {isLiked ? (
            <Heart size={20} fill="blue" className="text-blue-800" />
          ) : (
            <Heart size={20} />
          )}
        </div>
      </div>
      <div className="">
        <Link href={`/product/${product.id}`}>
          <Image
            src={product.image}
            alt={product.label}
            className="max-w-full h-48 object-cover rounded-md mx-auto"
            width={200}
            height={200}
          />
        </Link>
      </div>
      <div className="mt-4 flex flex-col gap-2">
        <h3 className="text-gray-700 font-bold text-lg">
          <Link href={`/product/${product.id}`}>{product.label}</Link>
        </h3>

        <p className="text-blue-500 font-bold text-xl">
          R${" "}
          <Link href={`/product/${product.id}`}>
            {product.price.toFixed(2)}
          </Link>
        </p>

        <p className="text-gray-500 text-sm">
          Em até 12x sem juros nos cartões
        </p>
      </div>
    </div>
  );
};
