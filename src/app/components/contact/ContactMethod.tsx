import { ReactNode } from "react";

interface ContactMethodProps {
  readonly href: string;
  readonly icon: ReactNode;
  readonly title: string;
  readonly description: string;
  readonly isExternal?: boolean;
}

export default function ContactMethod({
  href,
  icon,
  title,
  description,
  isExternal = false,
}: ContactMethodProps) {
  return (
    <a
      href={href}
      target={isExternal ? "_blank" : undefined}
      rel={isExternal ? "noopener noreferrer" : undefined}
      className="group flex items-center gap-4 rounded-xl border border-gray-200 bg-gray-50 p-4 transition-all duration-300 hover:shadow-lg dark:border-gray-700 dark:bg-gray-900"
    >
      <div className="rounded-lg bg-blue-600 p-3 transition-transform group-hover:scale-110 dark:bg-cyan-500">
        {icon}
      </div>
      <div>
        <p className="font-semibold text-gray-900 dark:text-white">{title}</p>
        <p className="text-gray-600 dark:text-gray-400">{description}</p>
      </div>
    </a>
  );
}
