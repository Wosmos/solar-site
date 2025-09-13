import { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SkipToContent from "@/components/SkipToContent";
import BackToTop from "@/components/BackToTop";
import ProjectsSection from "@/components/ProjectsSection";

export const metadata: Metadata = {
  title: "Projects - Fazna Solar Energy LLC",
  description:
    "Explore our portfolio of successful utility-scale solar projects including Sweihan Solar (1.18 GW) and Aldhafra PV2 (2 GW).",
  openGraph: {
    title: "Projects - Fazna Solar Energy LLC",
    description:
      "Explore our portfolio of successful utility-scale solar projects including Sweihan Solar (1.18 GW) and Aldhafra PV2 (2 GW).",
  },
};

export default function ProjectsPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <SkipToContent />
      <Header />
      <main
        id="main-content"
        className="flex-1 focus:outline-none"
        tabIndex={-1}
      >
        <ProjectsSection />
      </main>
      <Footer />
      <BackToTop />
    </div>
  );
}
