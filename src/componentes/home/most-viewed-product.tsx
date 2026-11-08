import { data } from "@/data";
import { ProductList } from "../product-list";

export const MostViewedProduct = async () => {
  return (
    <div className="flex flex-col gap-4 mt-10">
      <h2 className="text-xl lg:text-2xl font-bold text-center lg:text-left">
        Produtos Mais Visualizados
      </h2>
      <p className="text-gray-500 text-center lg:text-left">
        Confira os produtos mais visualizados por nossos clientes.
      </p>
      <div className="mt-5">
        <ProductList products={data.products} />
      </div>
    </div>
  );
};
