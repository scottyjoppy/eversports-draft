import Navbar from "./Navbar";
import Pages from "./Pages";

export default async function NavbarWrapper() {
  return (
    <Navbar>
      <Pages />
    </Navbar>
  );
}
