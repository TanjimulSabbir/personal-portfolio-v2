export default function ExperienceCard({
  role,
  company,
  period,
  description,
  technologies,
  link,
  companyUrl,
}) {
  return (
    <div className="bg-[#0B1120] rounded-xl p-5 text-white shadow-md w-full md:flex justify-between gap-3">
      <p className="mb-3 md:mb-0 job-period md:w-[20%]">{period.toUpperCase()}</p>

      <div className="md:w-[75%]">
        <h3 className="title">
          {role} ·{" "}
          <a
            href={companyUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:underline text-white"
          >
            {company} <span aria-hidden>↗</span>
          </a>
        </h3>

        <p className="job-description mt-2 leading-relaxed">{description}</p>

        {technologies?.length > 0 && (
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
