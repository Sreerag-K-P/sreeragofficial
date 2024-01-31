import Image from "next/image";
import Banner from "./components/Banner";
import Aboutme from "./components/Aboutme";
import Experience from "./components/Experience";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Sreerag K P | React Developer",
  description: "full stack developer",
  alternates: {
    canonical: "https://sreeragofficial.vercel.app/",
  },
};

export default function Home() {
  return (
    <main className="w-full bg-gray-950 text-gray-200 px-4">
      <div className="max-w-screen-xl mx-auto">
        <Banner />
        <Aboutme />
        {/* <Experience /> */}
        <Skills />
        <Projects />
        <Contact />
        <Footer />
      </div>
    </main>
  );
}
