import { motion } from "framer-motion";

const About = () => {
  return (
    <section
      id="about"
      className="
        relative
        px-5
        sm:px-8
        pt-6
        pb-16
        sm:pt-10
        sm:pb-20
        overflow-hidden
      "
    >
      {/* Glow */}
      <div
        className="
          absolute
          top-0
          left-1/2
          -translate-x-1/2
          w-[260px]
          h-[260px]
          bg-indigo-500/10
          blur-[120px]
          rounded-full
          pointer-events-none
        "
      />

      <div className="relative z-10 max-w-6xl mx-auto">
        {/* Badge */}
        <div className="flex justify-center">
          <div
            className="
              inline-flex
              items-center
              gap-2
              px-5
              py-2
              rounded-full
              border
              border-[var(--border)]
              bg-white/40
              dark:bg-white/5
              backdrop-blur-xl
              text-sm
              text-[var(--subtext)]
            "
          >
            <span className="w-2 h-2 rounded-full bg-green-500"></span>

            About Me
          </div>
        </div>

        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55 }}
          viewport={{ once: true }}
          className="
            mt-7
            text-center
            text-4xl
            sm:text-5xl
            lg:text-6xl
            font-black
            tracking-tight
            leading-[1]
          "
        >
          Building Clean,
          <br />

          <span
            className="
              bg-gradient-to-r
              from-blue-500
              via-purple-500
              to-pink-500
              bg-clip-text
              text-transparent
            "
          >
            Modern Experiences
          </span>
        </motion.h2>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          viewport={{ once: true }}
          className="
            mt-7
            max-w-3xl
            mx-auto
            text-center
            text-base
            sm:text-lg
            leading-relaxed
            text-[var(--subtext)]
          "
        >
          I'm an IT diploma student focused on creating
          high-performance web applications with modern UI,
          smooth interactions, strong frontend architecture,
          and visually polished user experiences.
        </motion.p>

        {/* CARDS */}
        <div
          className="
            mt-14
            grid
            grid-cols-1
            sm:grid-cols-2
            lg:grid-cols-3
            gap-5
          "
        >
          {[
            {
              icon: "⚡",
              title: "Performance Focused",
              text: "Optimized layouts, smooth animations, responsive structure, and fast frontend experience.",
            },

            {
              icon: "🎨",
              title: "UI / UX Design",
              text: "Clean interfaces, balanced spacing, premium color systems, and mobile-first layouts.",
            },

            {
              icon: "🚀",
              title: "Real Projects",
              text: "Learning through building actual applications instead of relying only on theoretical knowledge.",
            },
          ].map((item, i) => (
            <motion.div
              key={i}
              whileHover={{ y: -4 }}
              transition={{ duration: 0.2 }}
              className="hero-card rounded-3xl p-7"
            >
              <div
                className="
                  w-14
                  h-14
                  rounded-2xl
                  flex
                  items-center
                  justify-center
                  text-2xl
                  bg-gradient-to-br
                  from-blue-500/20
                  to-purple-500/20
                  border
                  border-blue-500/20
                "
              >
                {item.icon}
              </div>

              <h3 className="mt-6 text-xl font-bold">
                {item.title}
              </h3>

              <p className="mt-3 text-[var(--subtext)] leading-relaxed">
                {item.text}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;