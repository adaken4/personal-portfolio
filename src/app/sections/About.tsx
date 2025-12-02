"use client";

import { LuUsers, LuLightbulb, LuTarget } from "react-icons/lu";
import { BiCodeAlt } from "react-icons/bi";
import { useState, useEffect } from "react";
import { tokenColors, CodeToken } from "../types/types";

const code: CodeToken[][] = [
  [
    { t: "keyword", v: "const" },
    { t: "text", v: " developer " },
    { t: "symbol", v: "= {" },
  ],
  [
    { t: "key", v: "  name" },
    { t: "symbol", v: ": " },
    { t: "string", v: "'Kennedy Ada'," },
  ],
  [
    { t: "key", v: "  location" },
    { t: "symbol", v: ": " },
    { t: "string", v: "'Kisumu, Kenya'," },
  ],
  [
    { t: "key", v: "  role" },
    { t: "symbol", v: ": " },
    { t: "string", v: "'Full-Stack Developer'," },
  ],
  [
    { t: "key", v: "  passion" },
    { t: "symbol", v: ": [" },
  ],
  [{ t: "string", v: "    'Clean Code'," }],
  [{ t: "string", v: "    'Problem Solving'," }],
  [{ t: "string", v: "    'Community Building'" }],
  [{ t: "symbol", v: "  ]," }],
  [
    { t: "key", v: "  available" },
    { t: "symbol", v: ": " },
    { t: "boolean", v: "true" },
  ],
  [{ t: "symbol", v: "};" }],
];

function TypewriterCode() {
  const [line, setLine] = useState(0);
  const [char, setChar] = useState(0);
  const [display, setDisplay] = useState([""]);

  useEffect(() => {
    const fullLine = code[line].map((x) => x.v).join("");

    if (char < fullLine.length) {
      setTimeout(() => {
        setDisplay((prev) => {
          const newLines = [...prev];
          newLines[line] = fullLine.slice(0, char + 1);
          return newLines;
        });
        setChar((c) => c + 1);
      }, 50);
    } else if (line < code.length - 1) {
      setTimeout(() => {
        setLine((l) => l + 1);
        setChar(0);
        setDisplay((prev) => [...prev, ""]);
      }, 300);
    }
  }, [char, line]);

  return (
    <div className="rounded-2xl bg-gradient-to-br from-blue-600 to-cyan-500 p-8 shadow-2xl">
      <div className="rounded-lg bg-gray-900 p-6 font-mono text-sm text-green-400">
        <div className="mb-3 flex items-center gap-2">
          <span className="h-3 w-3 rounded-full bg-red-500" />
          <span className="h-3 w-3 rounded-full bg-yellow-500" />
          <span className="h-3 w-3 rounded-full bg-green-500" />
        </div>
        <code className="block whitespace-pre">
          {display.map((ln, i) => {
            // re-tokenize each line dynamically
            let index = 0;
            return (
              <div key={`line-${i}`}>
                {code[i].map((token, j) => {
                  const text = ln.slice(index, index + token.v.length);
                  index += token.v.length;
                  return (
                    <span
                      key={`token-${i}-${j}`}
                      className={tokenColors[token.t]}
                    >
                      {text}
                    </span>
                  );
                })}
                {i === line && (
                  <span className="ml-1 inline-block h-2 w-1 animate-pulse bg-yellow-300" />
                )}
              </div>
            );
          })}
        </code>
      </div>
    </div>
  );
}

export default function About() {
  return (
    <section id="about" className="bg-white py-20 dark:bg-gray-800">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h2 className="mb-16 text-center text-4xl font-bold text-gray-900 sm:text-5xl dark:text-white">
          About Me
        </h2>

        <div className="mb-16 grid items-center gap-12 md:grid-cols-2">
          <div className="space-y-6 text-lg leading-relaxed text-gray-700 dark:text-gray-300">
            <p>
              I am a dedicated and hardworking individual who is always eager to
              learn and grow. I am highly organized and detail-oriented with a
              passion for writing clean code. Having just completed 01edu&#39;s
              rigorous full-stack curriculum, I&#39;ve built a solid foundation
              in modern development, coupled with my commitment to ensuring that
              each project I work on is completed on time, on budget, and to the
              highest standards of quality, I believe makes me a valuable asset
              to any software development team.
            </p>
            <p>
              In addition to my development work, I am dedicated to sharing
              knowledge and fostering the tech community. I actively lead{" "}
              <span className="font-semibold text-blue-600 dark:text-cyan-400">
                Python Kisumu
              </span>
              , organizing developers to share expertise and build local
              knowledge. I also conduct{" "}
              <span className="font-semibold text-blue-600 dark:text-cyan-400">
                weekly online classes
              </span>
              , helping others build a strong foundation in modern development
              practices.
            </p>
          </div>
          {TypewriterCode()}
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          <div className="rounded-xl border border-gray-200 bg-gradient-to-br from-blue-50 to-cyan-50 p-6 transition-shadow hover:shadow-lg dark:border-gray-600 dark:from-gray-900 dark:to-gray-700">
            <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-blue-600 dark:bg-cyan-500">
              <BiCodeAlt className="text-white" size={24} />
            </div>
            <h3 className="mb-2 text-lg font-semibold text-gray-900 dark:text-white">
              Clean Code
            </h3>
            <p className="text-sm text-gray-700 dark:text-gray-300">
              Passionate about clean, readable, and well-structured code, and
              learning best practices for scalability.
            </p>
          </div>

          <div className="rounded-xl border border-gray-200 bg-gradient-to-br from-blue-50 to-cyan-50 p-6 transition-shadow hover:shadow-lg dark:border-gray-600 dark:from-gray-900 dark:to-gray-700">
            <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-blue-600 dark:bg-cyan-500">
              <LuTarget className="text-white" size={24} />
            </div>
            <h3 className="mb-2 text-lg font-semibold text-gray-900 dark:text-white">
              User-Centered
            </h3>
            <p className="text-sm text-gray-700 dark:text-gray-300">
              Building with the end-user in mind, focusing on intuitive
              interfaces and accessible design principles.
            </p>
          </div>

          <div className="rounded-xl border border-gray-200 bg-gradient-to-br from-blue-50 to-cyan-50 p-6 transition-shadow hover:shadow-lg dark:border-gray-600 dark:from-gray-900 dark:to-gray-700">
            <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-blue-600 dark:bg-cyan-500">
              <LuLightbulb className="text-white" size={24} />
            </div>
            <h3 className="mb-2 text-lg font-semibold text-gray-900 dark:text-white">
              Problem Solver
            </h3>
            <p className="text-sm text-gray-700 dark:text-gray-300">
              Analytical approach to breaking down complex challenges into
              actionable solutions.
            </p>
          </div>

          <div className="rounded-xl border border-gray-200 bg-gradient-to-br from-blue-50 to-cyan-50 p-6 transition-shadow hover:shadow-lg dark:border-gray-600 dark:from-gray-900 dark:to-gray-700">
            <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-blue-600 dark:bg-cyan-500">
              <LuUsers className="text-white" size={24} />
            </div>
            <h3 className="mb-2 text-lg font-semibold text-gray-900 dark:text-white">
              Community Leader
            </h3>
            <p className="text-sm text-gray-700 dark:text-gray-300">
              Organizing Python Kisumu and mentoring developers in the local
              tech community.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
