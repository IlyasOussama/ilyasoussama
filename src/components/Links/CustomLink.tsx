import clsx from "clsx";

import UnstyledLink, { UnstyledLinkProps } from "./UnstyledLink";

const CustomLink = ({ children, className, ...rest }: UnstyledLinkProps) => {
  return (
    <UnstyledLink
      {...rest}
      className={clsx(
        "animated-underline custom-link inline-flex items-center font-medium",
        "focus:outline-none focus-visible:ring focus-visible:ring-primary-300",
        "border-b border-dotted border-dark hover:border-black/0",
        className
      )}
    >
      <span className="dark:bg-gradient-to-tr dark:from-primary-300 dark:to-primary-400 dark:bg-clip-text dark:text-transparent">
        {children}
      </span>
    </UnstyledLink>
  );
};

export default CustomLink;
