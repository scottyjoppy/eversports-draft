import Image from "next/image";
import Pages from "./Pages";
import Link from "next/link";

interface NavbarProps {
  className?: string;
}

export default function Navbar({ className }: NavbarProps) {
  return (
    <div
      className={`${className} sticky top-0 w-full h-15 bg-[var(--background)] flex justify-between items-center px-5 border-b-1 border-[var(--black)]/10 text-[var(--black)]/50`}
    >
      <div className="relative lg:w-[140px] md:w-[120px] w-[100px] aspect-[3/1]">
          <Link href="/">
            <Image
              src="/images/eversports-logo.svg"
              alt="eversports logo"
              fill
              className="object-contain"
              priority
            />
          </Link>
      </div>
      <div>
        <Pages />
      </div>
      <div className="border-1 rounded-md p-2 bg-[var(--secondary)] hover:cursor-pointer hover:scale-105 transition hover:border-[var(--foreground)] hover:text-[var(--foreground)]">Login</div>
    </div>
  );
}
