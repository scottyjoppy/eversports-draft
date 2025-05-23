import myPortableTextComponents from "@/components/myPortableTextComponents";
import { PortableText } from "@portabletext/react";
import { getPage } from "../../../../sanity/sanity-utils";

type Props = {
  params: Promise<{ slug: string }>;
};

export default async function Page({ params }: Props) {
    const { slug } = await params
    const page = await getPage(slug);

  return (
    <div>
      <h1 className="bg-gradient-to-r from-orange-400 via-red-500 to-purple-600 bg-clip-text text-transparent text-5xl">
        {page.title}
      </h1>
      <div className="text-lg text-gray-700 mt-10">
        <PortableText
          value={page.content}
          components={myPortableTextComponents}
        />
      </div>
    </div>
  );
}
