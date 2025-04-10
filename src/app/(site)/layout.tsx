import Navbar from "@/components/Navbar";
import type { Metadata } from "next";
import { Figtree } from "next/font/google";
import { getPages } from "../../../sanity/sanity-utils";
import "../globals.css";

const figtree = Figtree({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-figtree",
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
      <body className={`${figtree.variable} font-sans antialiased`}>
        <div className="max-w-7xl mx-auto">
          <Navbar />
          <main className="py-20">{children}</main>
        </div>
      </body>
    </html>
  );
}
