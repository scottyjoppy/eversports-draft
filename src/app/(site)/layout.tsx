import NavbarWrapper from "@/components/NavbarWrapper";
import ReactLenis from "lenis/react";
import type { Metadata } from "next";
import { Figtree } from "next/font/google";
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
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${figtree.variable} font-sans antialiased bg-background`}
      >
        <NavbarWrapper />
        <ReactLenis root>{children}</ReactLenis>
      </body>
    </html>
  );
}
