import projects from "../data/projects";
import { motion } from "framer-motion";

const Projects = () => {
  return (
    <section id="projects" className="px-4 sm:px-8 py-24">

      <motion.h2
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false, amount: 0.2 }}
        transition={{ duration: 0.7 }}
        className="text-3xl sm:text-4xl font-black text-center mb-14"
      >
        My Work
      </motion.h2>

      <div className="grid md:grid-cols-3 gap-8">

        {projects.map((p, i) => (

          <motion.div
            key={i}
            initial={{ opacity: 0, y: 70 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.2 }}
            transition={{
              duration: 0.6,
              delay: i * 0.15,
            }}
            whileHover={{
              y: -10,
              scale: 1.02,
            }}
            className="group p-6 rounded-3xl border border-[var(--border)] bg-[var(--card)] backdrop-blur-xl shadow-sm hover:shadow-2xl"
          >

            <div className="text-xs mb-2 text-[var(--subtext)]">
              {p.status === "in-progress"
                ? "In Progress"
                : "Draft"}
            </div>

            <h3 className="text-2xl font-bold group-hover:text-indigo-500">
              {p.title}
            </h3>

            <p className="mt-4 text-sm leading-relaxed text-[var(--subtext)]">
              {p.desc}
            </p>

            <div className="flex flex-wrap gap-2 mt-5">

              {p.tech.map((t, idx) => (
                <span
                  key={idx}
                  className="text-xs px-3 py-1 rounded-full bg-indigo-500/10 text-indigo-500"
                >
                  {t}
                </span>
              ))}

            </div>

            <div className="flex justify-between items-center mt-8 text-sm">

              <a
                href={p.github || "#"}
                target="_blank"
                className="text-indigo-500 hover:underline"
              >
                GitHub →
              </a>

              <span className="text-[var(--subtext)]">
                Live soon
              </span>

            </div>

          </motion.div>

        ))}
      </div>
    </section>
  );
};

export default Projects;