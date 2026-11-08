import { data } from "@/data";
import { ProductList } from "../product-list";

export const MostSoldProduct = async () => {
  return (
    <div className="flex flex-col gap-4 mt-10">
      <h2 className="text-xl lg:text-2xl font-bold text-center lg:text-left">
        Produtos Mais Vendidos
      </h2>
      <p className="text-gray-500 text-center lg:text-left">
        Confira os produtos mais vendidos em nossa loja.
      </p>
      <div className="mt-3">
        <ProductList products={data.products} />
      </div>
    </div>
  );
};
