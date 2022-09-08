import Navbar from "./Navbar";
import Footer from "./Footer";
import { PropsWithChildren } from "react";

const Layout: React.FC<PropsWithChildren> = ({ children }) => {
  return (
    <div className="max-w-6xl mx-auto">
      <Navbar />
      {children}
    </div>
  );
};

export default Layout;
