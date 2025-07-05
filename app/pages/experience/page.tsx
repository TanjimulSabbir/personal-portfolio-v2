import { experiences } from "@/app/data/experience"
import ExperienceCard from "./ExperienceCard";

export default function Experience() {
    return (
      <div id="experience" className="scroll-mt-20 mt-20 space-y-10">
        <h1 className="heading">Experience</h1>
        {experiences.map((exp, idx) => (
          <ExperienceCard key={idx} {...exp} />
        ))}
      </div>
    );
}
