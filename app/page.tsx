import { AboutMe, Contact, Experience, Skills, Work } from "./pages/home/home";

export default function MainContainerHome() {
  return (
    <div className="lg:w-[60%] flex flex-col min-h-screen p-4">
      <AboutMe />
      <Experience />
      <Skills />
      <Work />
      <Contact />
    </div>
  );
}
