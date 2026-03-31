import Link from "next/link";

type ButtonTypes = {
  as: "button" | "link";
  variant: "shining" | "filling";
  className?: string;
  children: React.ReactNode;
};

export default function Button(props: ButtonTypes) {
  const {
    as = "link",
    variant,
    className="",
    children,
    ...rest
  } = props;

  if (as === "link")
    return (
      <Link
        className={`btn ${variant} ${className}`}
        {...rest}
      >
        {children}
      </Link>
    );

  return (
    <button
      className={`btn ${variant} ${className}`}
      {...rest}
    >
      {children}
    </button>
  );
}
