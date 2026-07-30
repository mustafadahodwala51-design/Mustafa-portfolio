import { createFileRoute } from "@tanstack/react-router";
import { Toaster } from "sonner";
import { Navbar } from "@/components/shared/Navbar";
import { NoiseOverlay, SpotlightCursor } from "@/components/shared/AmbientBackground";
import { Hero } from "@/components/sections/Hero";
import { About } from "@/components/sections/About";
import { Journey } from "@/components/sections/Journey";
import { Skills } from "@/components/sections/Skills";
import { Projects } from "@/components/sections/Projects";
import { Availability } from "@/components/sections/Availability";
import { Education } from "@/components/sections/Education";
import { Certifications } from "@/components/sections/Certifications";
import { Achievements } from "@/components/sections/Achievements";
import { ResumeSection } from "@/components/sections/ResumeSection";
import { Contact } from "@/components/sections/Contact";
import { Footer } from "@/components/sections/Footer";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Mustafa Dahodwala — Data Science Student & Aspiring AI Engineer" },
      {
        name: "description",
        content:
          "Portfolio of Mustafa Dahodwala — B.Sc. Data Science student building end-to-end ML and AI projects. Available for Data Science, Machine Learning, AI, and Python internships.",
      },
      { property: "og:title", content: "Mustafa Dahodwala — Data Science & AI" },
      {
        property: "og:description",
        content:
          "B.Sc. Data Science student turning messy data into decisions. Open to Data Science, ML, AI, and Python internships.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "Mustafa Dahodwala — Data Science & AI" },
      {
        name: "twitter:description",
        content: "Portfolio of a Data Science student building ML & AI projects. Available for internships.",
      },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
  component: Index,
});

function Index() {
  return (
    <>
      <a href="#main" className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded-md focus:bg-gradient-aurora focus:px-4 focus:py-2 focus:text-sm focus:text-white">
        Skip to main content
      </a>
      <NoiseOverlay />
      <SpotlightCursor />
      <Navbar />
      <main id="main">
        <Hero />
        <About />
        <Journey />
        <Skills />
        <Projects />
        <Availability />
        <Education />
        <Certifications />
        <Achievements />
        <ResumeSection />
        <Contact />
      </main>
      <Footer />
      <Toaster
        position="bottom-right"
        theme="dark"
        toastOptions={{
          style: {
            background: "rgba(10,10,18,0.95)",
            border: "1px solid rgba(255,255,255,0.12)",
            color: "#f5f5f7",
            backdropFilter: "blur(20px)",
          },
        }}
      />
    </>
  );
}
