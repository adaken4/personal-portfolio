import { LuBriefcase, LuCalendar } from "react-icons/lu";
import type { Experience } from "../types/types";

interface ExperienceCardProps {
  readonly exp: Experience;
}

export default function ExperienceCard({ exp }: ExperienceCardProps) {
  return (
    <div className="relative md:ml-20">
      {/* Timeline Icon */}
      <div className="absolute top-6 -left-12 hidden h-8 w-8 items-center justify-center rounded-full border-4 border-white bg-gradient-to-br from-blue-600 to-cyan-500 md:flex dark:border-gray-900">
        <LuBriefcase size={16} className="text-white" />
      </div>

      {/* Card */}
      <div className="rounded-xl border border-gray-200 bg-white p-6 shadow-lg transition-shadow duration-300 hover:shadow-xl md:p-8 dark:border-gray-700 dark:bg-gray-800">
        {/* Header */}
        <div className="mb-4 flex flex-col md:flex-row md:items-center md:justify-between">
          <div>
            <h3 className="mb-1 text-2xl font-bold text-gray-900 dark:text-white">
              {exp.role}
            </h3>
            <p className="text-lg font-semibold text-blue-600 dark:text-cyan-400">
              {exp.company}
            </p>
          </div>
          <div className="mt-2 flex items-center gap-2 text-gray-600 md:mt-0 dark:text-gray-400">
            <LuCalendar size={18} />
            <span>{exp.period}</span>
          </div>
        </div>

        {/* Description */}
        <p className="mb-4 leading-relaxed text-gray-700 dark:text-gray-300">
          {exp.description}
        </p>

        {/* Achievements */}
        <div className="mb-4">
          <h4 className="mb-2 font-semibold text-gray-900 dark:text-white">
            Key Achievements:
          </h4>
          <ul className="space-y-2">
            {exp.achievements.map((achievement) => (
              <li
                key={achievement}
                className="flex items-start gap-2 text-gray-700 dark:text-gray-300"
              >
                <span className="mt-2 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-blue-600 dark:bg-cyan-400"></span>
                <span>{achievement}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Technologies */}
        <div>
          <h4 className="mb-2 font-semibold text-gray-900 dark:text-white">
            Technologies Used:
          </h4>
          <div className="flex flex-wrap gap-2">
            {exp.technologies.map((tech) => (
              <span
                key={tech}
                className="rounded-md bg-blue-50 px-3 py-1 text-sm font-medium text-blue-700 dark:bg-gray-700 dark:text-cyan-300"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
