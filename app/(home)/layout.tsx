import Footer from "@/components/layout/footer";
import Navigation from "@/components/layout/navigation-bar";
import QuestionsAskedSection from "./_sections/questions-asked";
import ContactSection from "./_sections/contact";

export default function LayoutContainer({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="w-[70%] mx-auto space-y-36 relative z-50">
      <Navigation />
      {children}

      {/* shared content across each page */}
      <QuestionsAskedSection />
      <ContactSection />

      <Footer />
    </div>
  );
}
