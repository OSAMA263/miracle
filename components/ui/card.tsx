import EleAniamtion from "./sliding-ele-animation";

type propTypes = {
  children: React.ReactNode;
  className?: string;
  i?: number;
  slide?: boolean;
};

export default function Card(props: propTypes) {
  const { children, className, i, slide = false } = props;

  const card = (
    <div
      className={`border transition-all duration-500 border-white/5 bg-lightGray rounded-2xl p-8 py-12 overflow-hidden relative ${className ?? ""}`}
    >
      {children}
    </div>
  );
  return slide ? <EleAniamtion i={i}>{card}</EleAniamtion> : card;
}