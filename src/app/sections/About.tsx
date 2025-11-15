"use client";

import { LuUsers, LuLightbulb, LuTarget } from "react-icons/lu";
import { BiCodeAlt } from "react-icons/bi";
import { useState, useEffect } from "react";

const tokenColors = {
  keyword: "text-purple-400",
  key: "text-green-400",
  string: "text-yellow-300",
  boolean: "text-blue-400",
  symbol: "text-gray-300",
  text: "text-gray-200",
};

const code = [
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
              <div key={i}>
                {code[i].map((token, j) => {
                  const text = ln.slice(index, index + token.v.length);
                  index += token.v.length;
                  return (
                    <span key={j} className={tokenColors[token.t]}>
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
              My journey into development started with curiosity—a fascination
              with how technology could solve real-world problems. From
              tinkering with early web projects to building full-stack
              applications with{" "}
              <span className="font-semibold text-blue-600 dark:text-cyan-400">
                Django
              </span>
              ,
              <span className="font-semibold text-blue-600 dark:text-cyan-400">
                {" "}
                React
              </span>
              , and
              <span className="font-semibold text-blue-600 dark:text-cyan-400">
                {" "}
                Stellar
              </span>
              , I&#39;ve grown into a developer who values both technical
              excellence and human-centered design.
            </p>

            <p>
              What drives me is the opportunity to turn complex challenges into
              elegant, scalable solutions. Whether it&#39;s architecting a{" "}
              <span className="font-semibold">
                community cleanliness platform
              </span>{" "}
              like CleanTown or building{" "}
              <span className="font-semibold">energy-sharing applications</span>{" "}
              on the blockchain, I focus on creating products that make a
              tangible impact.
            </p>

            <p>
              Currently, I&#39;m actively developing CleanTown and organizing
              <span className="font-semibold text-blue-600 dark:text-cyan-400">
                {" "}
                Python Kisumu
              </span>
              , bringing together developers to share knowledge and build
              community. I approach every project with an analytical mindset,
              structured thinking, and a commitment to writing clean,
              maintainable code.
            </p>

            <p className="font-semibold text-gray-900 dark:text-white">
              I believe the best software combines technical rigor with genuine
              empathy for the people who use it.
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
              Writing maintainable, well-structured code that scales with your
              business.
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
              Designing solutions that prioritize user experience and
              accessibility.
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
