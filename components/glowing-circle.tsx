type TypeProps = {
  className: string;
  children: React.ReactNode;
};

export default function GlowingCircle({
  className,
  children,
}: TypeProps) {
  return (
    <div className={`h-full relative ${className ?? ""}`}>
      {/* circle overlay */}
      <div
        className="absolute -top-16 left-0 w-full h-full -z-10"
        style={{
          background:
            "radial-gradient(600px circle at center, rgba(6,116,133,0.2), transparent 60%)",
        }}
      />
      {children}
    </div>
  );
}
