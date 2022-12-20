import Link from "next/link";
import { cva } from "class-variance-authority";
import type { VariantProps } from "class-variance-authority";
import type { AnchorHTMLAttributes } from "react";

export interface ButtonProps
  extends VariantProps<typeof buttonClasses>,
    AnchorHTMLAttributes<HTMLAnchorElement> {
  children?: React.ReactNode;
  type?: "button" | "submit" | "reset";
  href: string;
  disabled?: boolean;
  icon?: React.ReactNode;
  isLoading?: boolean;
  loadingText?: string;
}

const buttonClasses = cva("relative rounded-full inline-flex items-center", {
  variants: {
    variant: {
      primary: [
        "bg-primary-gradient hover:text-shadow hover:shadow-primary transition-[shadow,text-shadow]",
        "[&_.icon-wrapper]:ml-2",
      ],
      secondary: [
        "text-off-white bg-white bg-opacity-10 border border-transparent-white backdrop-filter-[12px] hover:bg-opacity-20 transition-colors ease-in",
        "[&_.icon-wrapper]:bg-transparent-white [&_.icon-wrapper]:rounded-full [&_.icon-wrapper]:px-2 [&_.icon-wrapper]:ml-2 [&_.icon-wrapper]:-mr-2",
      ],
    },
    size: {
      small: "text-xs px-3 h-7",
      medium: "text-sm px-4 h-8",
      large: "text-md px-6 h-12",
    },
  },
  defaultVariants: {
    variant: "primary",
    size: "medium",
  },
});

export const IconWrapper = ({ children }: { children: React.ReactNode }) => (
  <span className="icon-wrapper">{children}</span>
);

export const Button = ({
  children,
  href,
  variant,
  size,
  ...props
}: ButtonProps) => {
  return (
    <Link
      {...props}
      type={props.type}
      className={
        buttonClasses({ variant, size, className: props.className }) +
        `${
          props.disabled || props.isLoading
            ? "cursor-not-allowed bg-zinc-900"
            : "bg-zinc-800"
        }`
      }
      href={href}
    >
      {props.isLoading ? (
        <>
          {/* <Loader /> */}
          {props.loadingText ?? "Loading..."}
        </>
      ) : (
        <>
          {props.icon} ? <div className="mr-2">{props.icon}</div> : {null}
          {children}
        </>
      )}
    </Link>
  );
};
