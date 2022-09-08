import clsx from "clsx";
import { useTheme } from "next-themes";
import { MoonIcon, SunIcon } from "@radix-ui/react-icons";

type ThemeButtonProps = React.ComponentPropsWithoutRef<"button">;

const ThemeButton = ({ className, ...rest }: ThemeButtonProps) => {
  const { theme, setTheme } = useTheme();
  return (
    <button
      className={clsx(className)}
      {...rest}
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
    >
      {theme === "light" ? <MoonIcon /> : <SunIcon />}
    </button>
  );
};

export default ThemeButton;
