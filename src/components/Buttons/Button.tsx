import clsx from "clsx";

enum ButtonVarient {
  "default",
  "cta",
}

type ButtonProps = {
  variant: keyof typeof ButtonVarient;
} & React.ComponentPropsWithoutRef<"button">;

const Button = ({
  children,
  className,
  variant = "default",
  ...rest
}: ButtonProps) => {
  return (
    <button
      {...rest}
      className={clsx(
        className,
        "px-4 py-2 font-bold border border-gray-300 shadow-sm dark:border-gray-600 rounded-lg",
        "scale-100 hover:scale-[1.03] active:scale-[0.97] motion-safe:transform-gpu transition duration-100",
        {
          "bg-white text-gray-600 disabled:bg-gray-200 dark:bg-gray-900 dark:text-gray-300 dark:disabled:bg-gray-700":
            variant === "default",
        },
        {
          "bg-white text-gray-600 disabled:bg-gray-200 dark:bg-gray-900 dark:text-gray-300 dark:disabled:bg-gray-700":
            variant === "cta",
        }
      )}
    >
      {children}
    </button>
  );
};

export default Button;
