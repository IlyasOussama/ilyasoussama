import Navbar from "./Navbar";
import Footer from "./Footer";
import { PropsWithChildren } from "react";
import MobileMenu from "./MobileMenu";

const Layout: React.FC<PropsWithChildren> = ({ children }) => {
  return (
    <div className="animate-[wiggle_1s_ease-in-out]">
      <div className="bg-red-500 text-xl font-semibold p-3 text-center text-white">
        Still working on it, Excuse the unfinished work and the dummy data, have
        a great day!{" "}
      </div>
      <div className="max-w-6xl mx-auto">
        <MobileMenu />
        <Navbar />
        {children}
        <Footer />
      </div>
    </div>
  );
};

export default Layout;
