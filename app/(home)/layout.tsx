import Footer from "@/components/layout/footer";
import Navigation from "@/components/layout/navigation-bar";
import QuestionsAskedSection from "./_sections/questions-asked";
import ContactSection from "./_sections/contact";
import PageTransition from "@/components/layout/page-transition";

export default function LayoutContainer({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="xl:w-[70%] lg:w-[85%] w-[98%] mx-auto relative z-50">
      <Navigation />
      <div className="space-y-36">
        
        {/* in the first render we need min h vh so the shared content dont show first and looks awkward */}
        <PageTransition>{children}</PageTransition>

        {/* shared content across each page */}
        <QuestionsAskedSection />
        <ContactSection />

        <Footer />
      </div>
    </div>
  );
}
