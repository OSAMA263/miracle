export default function Notfound() {
  return (
    <div className="flex-center flex-col h-dvh gap-4">
      <h2 className="text-xl">Error: Page Not Found</h2>
      <p className="text-white/60 max-md:text-sm">
        sorry, this page doesnt exist anymore or the URL changed
      </p>
    </div>
  );
}
