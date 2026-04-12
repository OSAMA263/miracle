import Link from "next/link";
import { ComponentPropsWithoutRef } from "react";
import EleAniamtion from "./sliding-ele-animation";

type BaseProps = {
  variant: "shining" | "filling";
  className?: string;
  children: React.ReactNode;
  slide?: boolean;
};

type ButtonProps = BaseProps & {
  as: "button";
} & ComponentPropsWithoutRef<"button">;

type LinkProps = BaseProps & {
  as: "link";
} & ComponentPropsWithoutRef<typeof Link>;

type ButtonTypes = ButtonProps | LinkProps;

export default function Button(props: ButtonTypes) {
  const { as = "link", variant, className = "", children, slide = false, ...rest } = props;

  const link = (
    <div>
      <Link
        className={`btn max-md:text-sm ${variant} ${className}`}
        {...(rest as ComponentPropsWithoutRef<typeof Link>)}
      >
        {children}
      </Link>
    </div>
  );

  const btn = (
    <button
      className={`btn disabled:opacity-50! max-md:text-sm ${variant} ${className}`}
      {...(rest as ComponentPropsWithoutRef<"button">)}
    >
      {children}
    </button>
  );

  if (as === "link")
    return slide ? <EleAniamtion>{link}</EleAniamtion> : link;

  return slide ? <EleAniamtion>{btn}</EleAniamtion> : btn;
}