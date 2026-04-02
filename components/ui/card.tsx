export default function Card({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div
      className={`border transition-all duration-500 border-white/5 bg-lightGray rounded-2xl p-8 py-12 overflow-hidden relative ${className ?? ""}`}
    >
      {children}
    </div>
  );
}
