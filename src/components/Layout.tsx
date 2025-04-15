import NavbarWrapper from "./NavbarWrapper";

interface LayoutProps {
  children: React.ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  return (
    <>
      <NavbarWrapper />
      {children}
    </>
  );
}
