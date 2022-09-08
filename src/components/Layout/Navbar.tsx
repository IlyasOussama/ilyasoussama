import { useRouter } from "next/router";
import NextLink from "next/link";
import clsx from "clsx";

import ThemeButton from "../Buttons/ThemeButton";

type NavItemProps = {
  href: string;
  text: string;
};

const NavItem = ({ href, text }: NavItemProps) => {
  const router = useRouter();
  const isActive = router.asPath === href;

  return (
    <NextLink href={href}>
      <a
        className={clsx(
          isActive
            ? "font-semibold text-gray-900 dark:text-gray-200 bg-gray-300 dark:bg-gray-800 transition-all"
            : "font-normal text-gray-700 dark:text-gray-400",
          "hidden md:inline-block p-1 sm:px-3 sm:py-2 rounded-lg hover:bg-gray-300 dark:hover:bg-gray-800 transition-all"
        )}
      >
        <span className="capsize">{text}</span>
      </a>
    </NextLink>
  );
};

const Navbar = () => {
  return (
    <nav className="py-4 flex justify-between items-center">
      <div>Logo</div>
      <div>
        <NavItem href="/" text="Home" />
        <NavItem href="/about" text="About" />
        <NavItem href="/techstack" text="Teck Stack" />
        <NavItem href="/projects" text="Projects" />
        <NavItem href="/blog" text="Blog" />
        <NavItem href="#contact" text="Contact Me" />
      </div>
      <ThemeButton />
    </nav>
  );
};

export default Navbar;
