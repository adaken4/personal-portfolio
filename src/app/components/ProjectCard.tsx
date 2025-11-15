import { LuExternalLink, LuGithub, LuCircleCheck } from "react-icons/lu";
import type { Project } from "../types/types";
import Image from "next/image";

interface ProjectCardProps {
  readonly project: Project;
}

export default function ProjectCard({ project }: ProjectCardProps) {
  return (
    <div className="group overflow-hidden rounded-2xl border border-gray-200 bg-gray-50 shadow-lg transition-all duration-700 hover:shadow-2xl dark:border-gray-700 dark:bg-gray-900">
      {/* Image Section */}
      <div className="relative h-64 overflow-hidden">
        <Image
          src={project.image}
          alt={project.title}
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
          fill
        />
        <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/50 to-transparent opacity-60"></div>
        <div className="absolute right-4 bottom-4 left-4">
          <h3 className="mb-1 text-2xl font-bold text-white">
            {project.title}
          </h3>
          <p className="text-sm text-gray-200">{project.tagline}</p>
        </div>
      </div>

      {/* Content Section */}
      <div className="space-y-4 p-6">
        <p className="leading-relaxed text-gray-700 dark:text-gray-300">
          {project.description}
        </p>

        {/* Tech Stack */}
        <div>
          <h4 className="mb-2 flex items-center gap-2 font-semibold text-gray-900 dark:text-white">
            <LuCircleCheck
              size={16}
              className="text-blue-600 dark:text-cyan-400"
            />
            Tech Stack
          </h4>
          <div className="flex flex-wrap gap-2">
            {project.tech.map((tech) => (
              <span
                key={tech}
                className="rounded-md bg-blue-100 px-3 py-1 text-sm font-medium text-blue-800 dark:bg-gray-800 dark:text-cyan-400"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* Role */}
        <div>
          <h4 className="mb-1 font-semibold text-gray-900 dark:text-white">
            Role
          </h4>
          <p className="text-sm text-gray-700 dark:text-gray-300">
            {project.role}
          </p>
        </div>

        {/* Challenges */}
        <div>
          <h4 className="mb-1 font-semibold text-gray-900 dark:text-white">
            Key Challenge
          </h4>
          <p className="text-sm text-gray-700 dark:text-gray-300">
            {project.challenges}
          </p>
        </div>

        {/* Results */}
        <div>
          <h4 className="mb-1 font-semibold text-gray-900 dark:text-white">
            Results
          </h4>
          <p className="text-sm text-gray-700 dark:text-gray-300">
            {project.results}
          </p>
        </div>

        {/* Links */}
        <div className="flex gap-4 border-t border-gray-200 pt-4 dark:border-gray-700">
          <a
            href={project.liveUrl}
            className="flex flex-1 items-center justify-center gap-2 rounded-lg bg-gradient-to-r from-blue-600 to-cyan-500 px-4 py-2 font-semibold text-white transition-all duration-700 hover:scale-105 hover:shadow-lg"
          >
            <LuExternalLink size={18} />
            Live Demo
          </a>
          <a
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-1 items-center justify-center gap-2 rounded-lg bg-gray-200 px-4 py-2 font-semibold text-gray-800 transition-all duration-700 hover:scale-105 hover:shadow-lg dark:bg-gray-800 dark:text-white"
          >
            <LuGithub size={18} />
            GitHub
          </a>
        </div>
      </div>
    </div>
  );
}
