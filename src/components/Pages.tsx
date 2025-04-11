import Link from "next/link";
import { getPages } from "../../sanity/sanity-utils";

export default async function Pages() {
  const pages = await getPages();

  return (
    <div className="flex items-center gap-3">
      {pages.map((page, index) => (
        <div key={page._id} className="flex gap-3">
          <Link
            key={page._id}
            href={`${page.url}`}
            className="hover:text-[var(--black)]/20 transition-colors duration-300"
            target="_blank"
          >
            {page.title}
          </Link>
          {index < pages.length - 1 && (
            <div className="text-black/30">|</div>
          )}
        </div>
      ))}
    </div>
  );
}
