"use client";

import Image from "next/image";
import image from "../../../public/assets/ui/logo-black.png";
import {
  UserRound,
  ShoppingBag,
  Menu,
  ArrowUpRight,
  X,
  Search,
} from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import { HeaderSearch } from "./header-search";

interface MenuItem {
  label: string;
  href: string;
}

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menu: MenuItem[] = [
    { label: "Camisa", href: "/categories/camisa" },
    { label: "Kit", href: "/categories/kit" },
    { label: "Sobre", href: "/sobre" },
    { label: "Contato", href: "/contato" },
  ];

  return (
    <header className="bg-white shadow-md border-b border-gray-200">
      <div className="bg-black text-white text-sm md:text-lg text-center py-3">
        <strong>FRETE GRATIS</strong> para todo o brasil acima de R$ 200,00.{" "}
        <strong>APROVEITE!</strong>
      </div>
      <div className="p-6 w-full max-w-7xl mx-auto ">
        <div className="flex items-center justify-between">
          <div className="">
            <Link href="/">
              <Image src={image} alt="Logo" width={120} height={40} />
            </Link>
          </div>
          <div className="flex gap-4">
            <div className="flex gap-2 items-center justify-center">
              {menu.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="px-4 py-2 hover:bg-blue-100 rounded-sm transition-all duration-300 hidden lg:inline-block"
                >
                  <span className="text-md font-medium">{item.label}</span>
                </Link>
              ))}
            </div>
            <div className="hidden md:block w-96 relative items-center justify-center">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
              <HeaderSearch />
            </div>
            <div
              className="border border-blue-300 rounded-sm p-2 hover:bg-blue-100 cursor-pointer transition-all duration-300"
              title="Perfil"
            >
              <Link href="/perfil">
                <UserRound />
              </Link>
            </div>

            <div
              className="border border-blue-300 rounded-sm p-2 hover:bg-blue-100 cursor-pointer transition-all duration-300"
              title="Carrinho"
            >
              <Link href="/carrinho">
                <ShoppingBag />
              </Link>
            </div>
            <button
              className="border border-blue-300 rounded-sm p-2 hover:bg-blue-100 cursor-pointer transition-all duration-300 lg:hidden"
              title="Menu"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>
      </div>
      {menu.length > 0 && isMenuOpen && (
        <div className="lg:hidden">
          {menu.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="block px-6 py-3 hover:bg-blue-100 border-b border-gray-200 transition-all duration-300"
            >
              <div className="flex items-center justify-between">
                <span className="text-md font-medium">{item.label}</span>
                <ArrowUpRight className="ml-auto text-blue-600" />
              </div>
            </Link>
          ))}
        </div>
      )}
      <div className="px-6 py-4 lg:hidden">
        <div className="w-full relative flex items-center justify-center">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
          <HeaderSearch />
        </div>
      </div>
    </header>
  );
}
