"use client";

import { useState, useEffect } from "react";
import {
  LuGithub,
  LuLinkedin,
  LuMail,
  LuFileText,
  LuUser,
  LuZap,
  LuCode,
  LuBriefcase,
  LuMailOpen,
} from "react-icons/lu";

export default function Footer() {
  const [currentYear, setCurrentYear] = useState("");
  useEffect(() => {
    // Should run on the client side to avoid cached deployment issues
    setCurrentYear(new Date().getFullYear().toString());
  }, []);

  return (
    <footer className="bg-gray-900 py-12 text-gray-300">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-8 grid gap-8 md:grid-cols-3">
          <div>
            <h3 className="mb-4 bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-xl font-bold text-transparent">
              Kennedy Ada
            </h3>
            <p className="leading-relaxed text-gray-400">
              Full-Stack Developer passionate about building scalable web
              applications that solve real-world problems.
            </p>
          </div>

          <div>
            <h4 className="mb-4 font-semibold text-white">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <a
                  href="#about"
                  className="flex items-center transition-colors hover:text-cyan-400"
                >
                  <LuUser size={16} className="mr-2" />
                  About
                </a>
              </li>
              <li>
                <a
                  href="#skills"
                  className="flex items-center transition-colors hover:text-cyan-400"
                >
                  <LuZap size={16} className="mr-2" />
                  Skills
                </a>
              </li>
              <li>
                <a
                  href="#projects"
                  className="flex items-center transition-colors hover:text-cyan-400"
                >
                  <LuCode size={16} className="mr-2" />
                  Projects
                </a>
              </li>
              <li>
                <a
                  href="#experience"
                  className="flex items-center transition-colors hover:text-cyan-400"
                >
                  <LuBriefcase size={16} className="mr-2" />
                  Experience
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  className="flex items-center transition-colors hover:text-cyan-400"
                >
                  <LuMailOpen size={16} className="mr-2" />
                  Contact
                </a>
              </li>
              <li>
                <a
                  href="/resume.pdf"
                  download
                  className="flex items-center transition-colors hover:text-cyan-400"
                >
                  <LuFileText size={16} className="mr-2" />
                  Download Resume
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="mb-4 font-semibold text-white">Connect</h4>
            <div className="flex gap-4">
              <a
                href="https://github.com/adaken4"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-lg bg-gray-800 p-3 transition-all hover:scale-110 hover:bg-cyan-500"
                aria-label="GitHub"
              >
                <LuGithub size={20} />
              </a>
              <a
                href="https://linkedin.com/in/kennedy-ada-606655184"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-lg bg-gray-800 p-3 transition-all hover:scale-110 hover:bg-cyan-500"
                aria-label="LinkedIn"
              >
                <LuLinkedin size={20} />
              </a>
              <a
                href="mailto:adakennedy6@gmail.com"
                className="rounded-lg bg-gray-800 p-3 transition-all hover:scale-110 hover:bg-cyan-500"
                aria-label="Email"
              >
                <LuMail size={20} />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 text-center">
          <p className="flex items-center justify-center gap-2 text-gray-400">
            Copyright © {currentYear} Kennedy Ada
          </p>
          <p className="mt-2 text-sm text-gray-500">Full Stack Developer</p>
        </div>
      </div>
    </footer>
  );
}
