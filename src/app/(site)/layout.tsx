import ReactLenis from "lenis/react";
import type { Metadata } from "next";
import { Figtree } from "next/font/google";
import "../globals.css";
import Layout from "@/components/Layout";

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
        className={`${figtree.variable} font-sans antialiased bg-primary`}
      >
        <ReactLenis root>
          <Layout>
          {children}
          </Layout>
        </ReactLenis>
      </body>
    </html>
  );
}
