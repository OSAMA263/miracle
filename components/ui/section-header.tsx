import { Logo } from "./logo";

type PropsType = {
  title: string;
  children: React.ReactNode;
  className?: string;
};

export default function SectionHeader({
  children,
  title,
  className,
}: PropsType) {
  return (
    <div
      className={`flex-center flex-col text-center gap-6! ${className ?? ""}`}
    >
      <span className="rounded-tag uppercase">
        <Logo />
        {title}
      </span>
      <div className={`shining-text [&>h2]:text-4xl`}>{children}</div>
    </div>
  );
}
