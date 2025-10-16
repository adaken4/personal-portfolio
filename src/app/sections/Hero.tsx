"use client";

import { LuDownload, LuArrowDown, LuMail } from "react-icons/lu";
import { SiGithub, SiLinkedin } from "react-icons/si";
import Image from "next/image";

export default function Hero() {
  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="hero"
      className="relative flex min-h-screen items-center justify-center overflow-hidden bg-gradient-to-br from-blue-50 via-white to-cyan-50 dark:from-gray-900 dark:via-gray-800 dark:to-blue-900"
    >
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 h-80 w-80 animate-pulse rounded-full bg-blue-400/20 blur-3xl dark:bg-blue-600/10"></div>
        <div className="absolute -bottom-40 -left-40 h-96 w-96 animate-pulse rounded-full bg-cyan-400/20 blur-3xl delay-700 dark:bg-cyan-600/10"></div>
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <div className="text-center">
          <div className="mb-8 inline-block">
            <div className="mx-auto flex h-32 w-32 items-center justify-center rounded-full bg-gradient-to-br from-blue-500 to-cyan-500 text-4xl font-bold text-white shadow-xl">
              <Image
                src="/profile-image.jpg"
                alt="Kennedy Ada"
                width={128}
                height={128}
                className="h-full w-full rounded-full object-cover opacity-0 transition-opacity duration-300"
                onLoad={(e) => e.currentTarget.classList.remove("opacity-0")}
                priority
              />
            </div>
          </div>

          <h1 className="animate-fade-in mb-6 bg-gradient-to-r from-blue-600 via-cyan-600 to-blue-700 bg-clip-text text-5xl font-bold text-transparent sm:text-6xl lg:text-7xl dark:from-blue-400 dark:via-cyan-400 dark:to-blue-500">
            Hi, I&#39;m Kennedy Ada
          </h1>

          <h2 className="mb-6 text-3xl font-semibold text-gray-800 sm:text-4xl lg:text-5xl dark:text-gray-100">
            Full-Stack Developer
          </h2>

          <p className="mx-auto mb-12 max-w-3xl text-xl leading-relaxed text-gray-700 sm:text-2xl dark:text-gray-300">
            I build scalable, user-centered web applications that connect ideas
            to impact.
          </p>

          <div className="mb-12 flex flex-wrap justify-center gap-4">
            <button
              onClick={() => scrollToSection("#projects")}
              className="rounded-lg bg-gradient-to-r from-blue-600 to-cyan-500 px-8 py-4 font-semibold text-white transition-all duration-300 hover:scale-105 hover:shadow-xl"
            >
              View My Work
            </button>
            <a
              href="/resume.pdf"
              download
              className="flex items-center gap-2 rounded-lg border-2 border-gray-300 bg-white px-8 py-4 font-semibold text-gray-800 transition-all duration-300 hover:scale-105 hover:border-blue-500 hover:shadow-xl dark:border-gray-600 dark:bg-gray-800 dark:text-white dark:hover:border-cyan-500"
            >
              <LuDownload size={20} />
              Download Resume
            </a>
            <button
              onClick={() => scrollToSection("#contact")}
              className="rounded-lg border-2 border-gray-300 bg-white px-8 py-4 font-semibold text-gray-800 transition-all duration-300 hover:scale-105 hover:border-blue-500 hover:shadow-xl dark:border-gray-600 dark:bg-gray-800 dark:text-white dark:hover:border-cyan-500"
            >
              Contact Me
            </button>
          </div>

          <div className="flex justify-center gap-6">
            <a
              href="https://github.com/adaken4"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full bg-gray-200 p-3 transition-all duration-300 hover:scale-110 hover:bg-blue-600 hover:text-white dark:bg-gray-700 dark:hover:bg-cyan-500"
              aria-label="GitHub"
            >
              <SiGithub size={24} />
            </a>
            <a
              href="https://www.linkedin.com/in/kennedy-ada-606655184/"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full bg-gray-200 p-3 transition-all duration-300 hover:scale-110 hover:bg-blue-600 hover:text-white dark:bg-gray-700 dark:hover:bg-cyan-500"
              aria-label="LinkedIn"
            >
              <SiLinkedin size={24} />
            </a>
            <a
              href="mailto:adakennedy6@gmail.com"
              className="rounded-full bg-gray-200 p-3 transition-all duration-300 hover:scale-110 hover:bg-blue-600 hover:text-white dark:bg-gray-700 dark:hover:bg-cyan-500"
              aria-label="Email"
            >
              <LuMail size={24} />
            </a>
          </div>
        </div>

        <button
          onClick={() => scrollToSection("#about")}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 transform animate-bounce"
          aria-label="Scroll to about section"
        >
          <LuArrowDown size={32} className="text-gray-600 dark:text-gray-400" />
        </button>
      </div>
    </section>
  );
}
