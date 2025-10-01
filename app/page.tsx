import { AboutMe, Contact, Experience, Skills, Work } from "./pages/home/home";

export default function MainContainerHome() {
  return (
    <div className="lg:w-[60%] lg:ml-auto flex flex-col min-h-screen lg:pl-4">
      <AboutMe />
      <Experience />
      <Skills />
      <Work />
      <Contact />
    </div>
  );
}
