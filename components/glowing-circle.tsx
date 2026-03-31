type TypeProps = {
  className: string;
  children: React.ReactNode;
};

export default function GlowingCircle({
  className,
  children,
}: TypeProps) {
  return (
    <div
      className={`h-full ${className ?? ""}`}
      style={{
        backgroundImage: `
        radial-gradient(400px circle at center, rgb(6, 116, 133,0.3) , transparent 75%),
      `,
        backgroundSize: "100% 900px",
      }}
    >
      {children}
    </div>
  );
}
