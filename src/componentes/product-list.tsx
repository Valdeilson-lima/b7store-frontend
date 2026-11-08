import { Product } from "@/types/product";
import { ProductItem } from "./product-item";

type ProductListProps = {
  products: Product[];
};

export const ProductList = async ({ products }: ProductListProps) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mt-9">
      {products.map((product) => (
        <ProductItem key={product.id} product={product} />
      ))}
    </div>
  );
};
