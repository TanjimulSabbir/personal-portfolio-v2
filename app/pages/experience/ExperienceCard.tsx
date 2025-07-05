type ExperienceCardProps = {
  role: string;
  company: string;
  period: string;
  description: string;
  technologies?: string[];
  companyUrl: string;
};

export default function ExperienceCard({
  role,
  company,
  period,
  description,
  technologies,
  companyUrl,
}: ExperienceCardProps) {
  return (
    <div className="hover:bg-[#0B1120] rounded-xl p-3 md:p-5 group text-white transition duration-500 cursor-pointer hover:shadow-md w-full md:flex justify-between gap-3">
      <p className="mb-3 md:mb-0 job-period md:w-[25%]">
        {period.toUpperCase()}
      </p>

      <div className="md:w-[75%]">
        <h3 className="title group-hover:text-hightlight">
          {role} ·{" "}
          <a
            href={companyUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:underline text-white group-hover:text-hightlight"
          >
            {company} <span aria-hidden>↗</span>
          </a>
        </h3>

        <p className="job-description mt-2 leading-relaxed">{description}</p>

        {technologies && technologies.length > 0 && (
          <div className="flex flex-wrap gap-2 mt-4">
            {technologies.map((tech, idx) => (
              <span
                key={idx}
                className="bg-[#132035] text-teal-200 text-xs px-3 py-1 rounded-full font-medium"
              >
                {tech}
              </span>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
