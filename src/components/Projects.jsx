import projects from "../data/projects";
import { motion } from "framer-motion";

const Projects = () => {
  return (
    <section
      id="projects"
      className="relative px-5 sm:px-8 py-24 overflow-hidden"
    >
      {/* Soft background */}
      <div className="absolute top-20 left-[-120px] w-[260px] h-[260px] bg-purple-500/10 blur-[120px] rounded-full" />

      <div className="max-w-6xl mx-auto relative z-10">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <p className="text-sm tracking-[0.3em] uppercase text-indigo-500 font-medium">
            Portfolio
          </p>

          <h2 className="mt-4 text-4xl sm:text-5xl font-black tracking-tight">
            My Work
          </h2>

          <p className="mt-5 text-[var(--subtext)] max-w-2xl mx-auto leading-relaxed">
            Selected projects focused on frontend engineering,
            performance optimization, and modern UI experience.
          </p>
        </motion.div>

        {/* Grid */}
        <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-6 mt-16">

          {projects.map((p, i) => {

            const isLive = p.live && p.live.trim() !== "";

            return (

              <motion.div
                key={i}
                initial={{ opacity: 0, y: 35 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.45,
                  delay: i * 0.08,
                }}
                whileHover={{
                  y: -6,
                }}
                className="
                  group
                  relative
                  rounded-3xl
                  border
                  border-[var(--border)]
                  bg-[var(--card)]
                  p-6
                  transition-all
                  duration-300
                  hover:border-purple-500/30
                  hover:shadow-[0_0_35px_rgba(139,92,246,0.08)]
                "
              >

                {/* Status */}
                <div
                  className="
                    inline-flex
                    items-center
                    gap-2
                    px-3
                    py-1
                    rounded-full
                    text-[11px]
                    font-medium
                    border
                    border-[var(--border)]
                    bg-white/5
                    dark:bg-white/[0.03]
                  "
                >
                  <span
                    className={`
                      w-2
                      h-2
                      rounded-full
                      ${
                        p.status === "live"
                          ? "bg-green-400"
                          : p.status === "in-progress"
                          ? "bg-yellow-400"
                          : "bg-indigo-400"
                      }
                    `}
                  />

                  <span className="text-[var(--subtext)]">
                    {p.status === "live"
                      ? "Live"
                      : p.status === "in-progress"
                      ? "In Progress"
                      : "Draft"}
                  </span>
                </div>

                {/* Title */}
                <h3
                  className="
                    mt-6
                    text-2xl
                    font-bold
                    tracking-tight
                    transition
                    duration-300
                    group-hover:text-purple-500
                  "
                >
                  {p.title}
                </h3>

                {/* Description */}
                <p
                  className="
                    mt-4
                    text-sm
                    leading-relaxed
                    text-[var(--subtext)]
                  "
                >
                  {p.desc}
                </p>

                {/* Tech */}
                <div className="flex flex-wrap gap-2 mt-6">

                  {p.tech.map((t, idx) => (
                    <span
                      key={idx}
                      className="
                        text-xs
                        px-3
                        py-1.5
                        rounded-full
                        border
                        border-[var(--border)]
                        bg-white/5
                        dark:bg-white/[0.03]
                        text-[var(--subtext)]
                      "
                    >
                      {t}
                    </span>
                  ))}

                </div>

                {/* Footer */}
                <div className="flex items-center justify-between mt-8">

                  {/* GitHub */}
                  <a
                    href={p.github || "#"}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="
                      text-sm
                      font-medium
                      text-indigo-500
                      hover:text-purple-500
                      transition
                    "
                  >
                    GitHub →
                  </a>

                  {/* Live */}
                  {isLive ? (
                    <a
                      href={p.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="
                        text-sm
                        font-medium
                        text-[var(--subtext)]
                        hover:text-purple-500
                        transition
                      "
                    >
                      Live ↗
                    </a>
                  ) : (
                    <span className="text-sm text-[var(--subtext)]">
                      Live soon
                    </span>
                  )}

                </div>

              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Projects;