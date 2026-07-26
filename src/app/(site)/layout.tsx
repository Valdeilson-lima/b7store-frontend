import { Header } from "@/componentes/layout/header";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div>
      <Header />
      <main className="w-full max-w-7xl mx-auto p-6">{children}</main>
    </div>
  );
}
