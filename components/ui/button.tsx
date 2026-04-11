import Link from "next/link";
import EleAniamtion from "./sliding-ele-animation";

type ButtonTypes = {
  as: "button" | "link";
  variant: "shining" | "filling";
  className?: string;
  children: React.ReactNode;
  slide: boolean;
};

export default function Button(props: ButtonTypes) {
  const {
    as = "link",
    variant,
    className = "",
    children,
    slide = false,
    ...rest
  } = props;

  // link to a diffrent url
  const link = (
    <div>
      <Link className={`btn ${variant} ${className}`} {...rest}>
        {children}
      </Link>
    </div>
  );

  // a normal button
  const btn = (
    <button
      className={`btn disabled:opacity-50! ${variant} ${className}`}
      {...rest}
    >
      {children}
    </button>
  );

  // retun animated link or just the link
  if (as === "link")
    return slide ? <EleAniamtion>{link}</EleAniamtion> : link;

  // same for the button
  return slide ? <EleAniamtion>{btn}</EleAniamtion> : btn;
}
