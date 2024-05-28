import NavbarIsolated from "../../components/Navbar";
import { useStore } from "../appStore";

export const AppNavbar = () => {
  const [pages] = useStore(o => [o.pages])
  return <NavbarIsolated pages={pages} />
}