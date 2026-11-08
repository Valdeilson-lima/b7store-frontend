interface Props {
  params: Promise<{ slug: string }>;

  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}

export default async function Page({ params, searchParams }: Props) {
  const { slug } = await params;
  const filters = await searchParams;
  return (
    <div className="w-full max-w-6xl mx-auto px-6 py-16 md:py-10">
      <h1 className="font-bold text-2xl mb-6 md:mb-2">Página de categoria</h1>
      <p className="text-gray-400">Aqui você verá os produtos da categoria</p>
      <p className="text-gray-400">Slug: {slug}</p>
    </div>
  );
}
