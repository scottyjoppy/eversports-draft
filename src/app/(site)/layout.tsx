import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Link from "next/link";
import { getPages } from "../../../sanity/sanity-utils";
import "../globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Eversports Draft",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const pages = await getPages();

  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <div className="max-w-7xl mx-auto py-10">
          <header className="flex items-center justify-between">
            <Link
              href="/"
              className="bg-gradient-to-r from-orange-400 via-red-500 to-purple-600 bg-clip-text text-transparent text-lg font-bold"
            >
              Eversports
            </Link>

            <div className="flex items-center gap-5 text-sm text-gray-600">
              {pages.map((page) => (
                <Link key={page._id} href={`/${page.slug}`} className="hover:underline">
                  {page.title}
                </Link>
              ))}
            </div>
          </header>
          <main className="py-20">{children}</main>
        </div>
      </body>
    </html>
  );
}
