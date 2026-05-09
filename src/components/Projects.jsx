import projects from "../data/projects";
import { motion } from "framer-motion";

const Projects = () => {
  return (
    <section
      id="projects"
      className="relative px-5 sm:px-8 py-28 overflow-hidden"
    >
      {/* Ambient */}
      <div className="absolute top-10 left-[-120px] w-[260px] h-[260px] bg-purple-500/10 blur-[120px] rounded-full" />

      <div className="max-w-7xl mx-auto relative z-10">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <p className="text-sm tracking-[0.35em] uppercase text-indigo-500 font-medium">
            Portfolio
          </p>

          <h2 className="mt-4 text-4xl sm:text-5xl font-black tracking-tight">
            Featured Projects
          </h2>

          <p className="mt-5 text-[var(--subtext)] max-w-2xl mx-auto leading-relaxed">
            Real projects focused on frontend engineering, Android
            application development, responsive UI systems,
            and performance-driven experiences.
          </p>
        </motion.div>

        {/* FEATURED PROJECT */}
        {projects
          .filter((p) => p.featured)
          .map((p, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 35 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="
                mt-16
                relative
                overflow-hidden
                rounded-[36px]
                border
                border-purple-500/20
                bg-[var(--card)]
                backdrop-blur-xl
                shadow-[0_20px_80px_rgba(99,102,241,0.10)]
              "
            >
              <div className="grid lg:grid-cols-[0.9fr_1.1fr] gap-10 p-8 lg:p-10">

                {/* IMAGE */}
                <div
                  className="
                    relative
                    flex
                    items-center
                    justify-center
                    py-4
                  "
                >
                  {/* Ambient glow */}
                  <div
                    className="
                      absolute
                      inset-0
                      rounded-[36px]
                      bg-gradient-to-br
                      from-blue-500/20
                      via-purple-500/20
                      to-pink-500/20
                      blur-3xl
                      opacity-70
                    "
                  />

                  {/* Outer frame */}
                  <div
                    className="
                      relative
                      z-10
                      rounded-[34px]
                      bg-gradient-to-br
                      from-blue-500
                      via-purple-500
                      to-pink-500
                      p-[2px]
                      shadow-[0_25px_80px_rgba(99,102,241,0.22)]
                      max-w-[350px]
                      w-full
                    "
                  >
                    {/* Inner device container */}
                    <div
                      className="
                        relative
                        overflow-hidden
                        rounded-[32px]
                        bg-[#050816]
                        border
                        border-white/10
                        p-3
                      "
                    >
                      {/* top light */}
                      <div
                        className="
                          absolute
                          top-0
                          inset-x-0
                          h-20
                          bg-gradient-to-b
                          from-white/10
                          to-transparent
                          z-20
                          pointer-events-none
                        "
                      />

                      {/* screenshot */}
                      <img
                        src={p.image}
                        alt={p.title}
                        className="
                          relative
                          z-10
                          w-full
                          h-auto
                          max-h-[680px]
                          object-contain
                          rounded-[24px]
                          select-none
                        "
                        draggable="false"
                      />

                      {/* bottom depth */}
                      <div
                        className="
                          absolute
                          bottom-0
                          inset-x-0
                          h-24
                          bg-gradient-to-t
                          from-black/50
                          to-transparent
                          z-20
                          pointer-events-none
                        "
                      />
                    </div>
                  </div>
                </div>

                {/* CONTENT */}
                <div className="flex flex-col justify-center">

                  <div className="flex flex-wrap items-center gap-3">

                    <span
                      className="
                        px-4
                        py-1.5
                        rounded-full
                        text-xs
                        font-semibold
                        bg-gradient-to-r
                        from-blue-500
                        via-purple-500
                        to-pink-500
                        text-white
                      "
                    >
                      FEATURED PROJECT
                    </span>

                    <span
                      className="
                        px-4
                        py-1.5
                        rounded-full
                        text-xs
                        font-medium
                        border
                        border-[var(--border)]
                        text-[var(--subtext)]
                      "
                    >
                      {p.type}
                    </span>

                  </div>

                  <h3 className="mt-6 text-4xl font-black tracking-tight">
                    {p.title}
                  </h3>

                  <p
                    className="
                      mt-5
                      text-[15px]
                      leading-[1.9]
                      text-[var(--subtext)]
                    "
                  >
                    {p.desc}
                  </p>

                  {/* TECH */}
                  <div className="flex flex-wrap gap-3 mt-8">

                    {p.tech.map((t, idx) => (
                      <span
                        key={idx}
                        className="
                          text-sm
                          px-4
                          py-2
                          rounded-full
                          border
                          border-[var(--border)]
                          bg-white/5
                          text-[var(--subtext)]
                        "
                      >
                        {t}
                      </span>
                    ))}

                  </div>

                  {/* BUTTONS */}
                  <div className="flex flex-wrap gap-4 mt-10">

                    <a
                      href={p.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="
                        premium-btn
                        primary-btn
                        px-7
                        py-4
                        rounded-2xl
                        font-semibold
                      "
                    >
                      Download APK
                    </a>

                    <a
                      href={p.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="
                        premium-btn
                        secondary-btn
                        px-7
                        py-4
                        rounded-2xl
                        font-semibold
                      "
                    >
                      View Release
                    </a>

                  </div>
                </div>
              </div>
            </motion.div>
          ))}

        {/* OTHER PROJECTS */}
        <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-6 mt-10">

          {projects
            .filter((p) => !p.featured)
            .map((p, i) => {

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

                  {/* STATUS */}
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

                  {/* TITLE */}
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

                  {/* DESC */}
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

                  {/* TECH */}
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
                          text-[var(--subtext)]
                        "
                      >
                        {t}
                      </span>
                    ))}

                  </div>

                  {/* FOOTER */}
                  <div className="flex items-center justify-between mt-8">

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
                        Open ↗
                      </a>
                    ) : (
                      <span className="text-sm text-[var(--subtext)]">
                        Coming soon
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