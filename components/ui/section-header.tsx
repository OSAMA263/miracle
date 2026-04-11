import { Logo } from "./logo";
import EleAniamtion from "./sliding-ele-animation";

type PropsType = {
  title?: string;
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
      {title && (
        <EleAniamtion>
          <span className="rounded-tag max-lg:text-xs uppercase">
            <Logo />
            {title}
          </span>
        </EleAniamtion>
      )}
      <div className={`shining-text [&>h2]:lg:text-4xl text-xl capitalize [&>p]:max-lg:text-sm`}>
        <EleAniamtion>{children}</EleAniamtion>
      </div>
    </div>
  );
}
