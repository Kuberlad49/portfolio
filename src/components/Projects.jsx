import projects from "../data/projects";

const Projects = () => {
  return (
    <section id="projects" className="px-4 sm:px-8 py-20">
      <h2 className="text-3xl font-bold text-center mb-12">
        My Work
      </h2>

      <div className="grid md:grid-cols-3 gap-8">
        {projects.map((p, i) => (
          <div
            key={i}
            className="group p-6 rounded-2xl border border-[var(--border)] bg-[var(--card)] hover:-translate-y-2 hover:shadow-xl transition duration-300"
          >
            {/* Status */}
            <div className="text-xs mb-2 text-[var(--subtext)]">
              {p.status === "in-progress" ? "In Progress" : "Draft"}
            </div>

            {/* Title */}
            <h3 className="text-xl font-semibold group-hover:text-indigo-500 transition">
              {p.title}
            </h3>

            {/* Description */}
            <p className="mt-3 text-sm text-[var(--subtext)]">
              {p.desc}
            </p>

            {/* Tech */}
            <div className="flex flex-wrap gap-2 mt-4">
              {p.tech.map((t, idx) => (
                <span
                  key={idx}
                  className="text-xs px-2 py-1 rounded bg-gray-100 dark:bg-gray-800"
                >
                  {t}
                </span>
              ))}
            </div>

            {/* Links */}
            <div className="flex justify-between items-center mt-6 text-sm">

              <a
                href={p.github || "#"}
                target="_blank"
                className="text-indigo-500 hover:underline"
              >
                GitHub →
              </a>

              {p.live ? (
                <a
                  href={p.live}
                  target="_blank"
                  className="text-indigo-500 hover:underline"
                >
                  Live →
                </a>
              ) : (
                <span className="text-[var(--subtext)]">
                  Live soon
                </span>
              )}

            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;