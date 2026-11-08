import { Banners } from "@/componentes/home/banners";
import { MostSoldProduct } from "@/componentes/home/most-sold-product";
import { MostViewedProduct } from "@/componentes/home/most-viewed-product";
import { ProductListSkeleton } from "@/componentes/home/product-list-skeleton";
import { data } from "@/data";
import { Truck, BadgePercent, ArrowRightLeft } from "lucide-react";
import { Suspense } from "react";

export default function Home() {
  return (
    <div className="w-full max-w-7xl mx-auto p-6">
      <Banners list={data.banners} />
      <div className="flex flex-col lg:flex-row gap-4 lg:gap-8 mt-10">
        <div className="flex flex-1 py-6 border border-blue-200 rounded-md">
          <div className="w-32 border-r border-blue-200 flex items-center justify-center">
            <Truck className=" text-blue-500 " size={36} />
          </div>
          <div className="flex-1 pl-10 lg:pl-6">
            <h1 className="font-bold text-lg lg:text-xl">Entrega Rápida</h1>
            <p className="text-gray-500 text-sm">Entrega em até 24 horas</p>
          </div>
        </div>

        <div className="flex flex-1 py-6 border border-blue-200 rounded-md">
          <div className="w-32 border-r border-blue-200 flex items-center justify-center">
            <BadgePercent className=" text-blue-500 " size={36} />
          </div>
          <div className="flex-1 pl-10 lg:pl-6 gap-1 flex flex-col">
            <h1 className="font-bold text-lg lg:text-xl">Desconto Especial</h1>
            <p className="text-gray-500 text-sm">
              Descontos de até 50% em produtos selecionados
            </p>
          </div>
        </div>

        <div className="flex flex-1 py-6 border border-blue-200 rounded-md">
          <div className="w-32 border-r border-blue-200 flex items-center justify-center">
            <ArrowRightLeft className=" text-blue-500 " size={36} />
          </div>
          <div className="flex-1 pl-10 lg:pl-6">
            <h1 className="font-bold text-lg lg:text-xl">Troca Fácil</h1>
            <p className="text-gray-500 text-sm">
              Troca gratuita em até 30 dias
            </p>
          </div>
        </div>
      </div>
      <Suspense fallback={<ProductListSkeleton />}>
        <MostViewedProduct />
      </Suspense>

      <Suspense fallback={<ProductListSkeleton />}>
        <MostSoldProduct />
      </Suspense>
    </div>
  );
}
