import Navbar from "@/components/Navbar";
import type { Metadata } from "next";
import { Figtree } from "next/font/google";
import "../globals.css";
import Hero from "@/components/ScrollBox";

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
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${figtree.variable} font-sans antialiased bg-background`}>
        <Navbar />
        <Hero />
        <div className="mx-auto">
          {children}
        </div>
      </body>
    </html>
  );
}
