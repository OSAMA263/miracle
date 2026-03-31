import Navigation from "@/components/layout/navigation-bar";

export default function LayoutContainer({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="w-[70%] mx-auto space-y-32">
      <Navigation />
      {children}
    </div>
  );
}
