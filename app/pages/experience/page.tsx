import { experiences } from "@/app/data/experience"
import ExperienceCard from "./ExperienceCard";

export default function Experience() {
    return (
      <div className="mt-20 space-y-10">
        {experiences.map((exp, idx) => (
          <ExperienceCard key={idx} {...exp} />
        ))}
      </div>
    );
}
