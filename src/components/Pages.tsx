import Link from "next/link";
import { getPages } from "../../sanity/sanity-utils";

export default async function Pages() {
  const pages = await getPages();

  return (
    <div className="absolute z-10 top-0 left-1/2 -translate-x-1/2 w-fit hidden sm:flex justify-center h-full ">
      <div className="flex items-center gap-3">
        {pages.map((page, index) => (
          <div key={page._id} className="flex gap-3">
            <Link
              key={page._id}
              href={`${page.url}`}
              className="hover:text-gray-600 transition-colors duration-100 ease-in-out"
              target="_blank"
            >
              {page.title}
            </Link>
            {index < pages.length - 1 && (
              <div className="text-black">|</div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
