import { LuUsers, LuLightbulb, LuTarget } from "react-icons/lu";
import { BiCodeAlt } from "react-icons/bi";

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

          <div className="relative">
            <div className="rounded-2xl bg-gradient-to-br from-blue-600 to-cyan-500 p-8 shadow-2xl">
              <div className="rounded-lg bg-gray-900 p-6 font-mono text-sm text-green-400">
                <div className="mb-4 flex items-center gap-2">
                  <div className="h-3 w-3 rounded-full bg-red-500"></div>
                  <div className="h-3 w-3 rounded-full bg-yellow-500"></div>
                  <div className="h-3 w-3 rounded-full bg-green-500"></div>
                </div>
                <code>
                  <span className="text-purple-400">const</span> developer ={" "}
                  {"{"}
                  <br />
                  &nbsp;&nbsp;name:{" "}
                  <span className="text-yellow-300">&#39;Kennedy Ada&#39;</span>
                  ,<br />
                  &nbsp;&nbsp;location:{" "}
                  <span className="text-yellow-300">
                    &#39;Kisumu, Kenya&#39;
                  </span>
                  ,<br />
                  &nbsp;&nbsp;role:{" "}
                  <span className="text-yellow-300">
                    &#39;Full-Stack Developer&#39;
                  </span>
                  ,<br />
                  &nbsp;&nbsp;passion: [<br />
                  &nbsp;&nbsp;&nbsp;&nbsp;
                  <span className="text-yellow-300">&#39;Clean Code&#39;</span>,
                  <br />
                  &nbsp;&nbsp;&nbsp;&nbsp;
                  <span className="text-yellow-300">
                    &#39;Problem Solving&#39;
                  </span>
                  ,<br />
                  &nbsp;&nbsp;&nbsp;&nbsp;
                  <span className="text-yellow-300">
                    &#39;Community Building&#39;
                  </span>
                  <br />
                  &nbsp;&nbsp;],
                  <br />
                  &nbsp;&nbsp;available:{" "}
                  <span className="text-cyan-400">true</span>
                  <br />
                  {"}"};
                </code>
              </div>
            </div>
          </div>
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
