import Navbar from "./Navbar";
import Footer from "./Footer";
import { PropsWithChildren } from "react";
import MobileMenu from "./MobileMenu";

const Layout: React.FC<PropsWithChildren> = ({ children }) => {
  return (
    <div className="max-w-6xl mx-auto">
      <MobileMenu />
      <Navbar />
      {children}
    </div>
  );
};

export default Layout;
