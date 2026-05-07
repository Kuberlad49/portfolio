import { motion } from "framer-motion";

const features = [
  {
    title: "Quality-Driven Work",
    desc:
      "I focus on delivering work that feels complete, polished, responsive, and reliable before it reaches the final stage.",
  },

  {
    title: "Performance & Responsiveness",
    desc:
      "From smooth animations to mobile optimization, I care about creating interfaces that feel fast, modern, and user-friendly.",
  },

  {
    title: "Focused Execution",
    desc:
      "Once I start building something, I stay committed until the structure, design, and overall experience meet my own quality standards.",
  },

  {
    title: "Continuous Improvement",
    desc:
      "I learn by building real projects, improving existing systems, refining UI decisions, and solving practical frontend challenges.",
  },
];

const stats = [
  {
    value: "10+",
    label: "Projects Built",
  },

  {
    value: "5+",
    label: "Certificates",
  },

  {
    value: "Frontend",
    label: "Development",
  },

  {
    value: "Testing",
    label: "& QA Skills",
  },
];

const HireMe = () => {
  return (
    <section
      id="approach"
      className="
        relative
        px-5
        sm:px-8
        py-28
        overflow-hidden
      "
    >

      {/* Glow */}
      <div
        className="
          absolute
          top-10
          right-[-120px]
          w-[320px]
          h-[320px]
          rounded-full
          bg-violet-500/10
          blur-[120px]
          pointer-events-none
        "
      />

      <div className="max-w-6xl mx-auto relative z-10">

        <div
          className="
            grid
            lg:grid-cols-[0.9fr_1.1fr]
            gap-20
            items-start
          "
        >

          {/* LEFT */}
          <motion.div

            initial={{
              opacity: 0,
              y: 30,
            }}

            whileInView={{
              opacity: 1,
              y: 0,
            }}

            viewport={{
              once: true,
            }}

            transition={{
              duration: 0.5,
            }}
          >

            <p
              className="
                text-sm
                uppercase
                tracking-[0.28em]
                text-violet-500
                font-medium
              "
            >
              What I Bring
            </p>

            <h2
              className="
                mt-5
                text-4xl
                sm:text-5xl
                font-black
                leading-tight
                tracking-tight
                dark:text-white
                text-slate-900
              "
            >
              Building with
              <span
                className="
                  bg-gradient-to-r
                  from-blue-500
                  via-violet-500
                  to-pink-500
                  bg-clip-text
                  text-transparent
                "
              >
                {" "}focus,
              </span>
              {" "}clarity,
              and quality.
            </h2>

            <p
              className="
                mt-7
                text-[17px]
                leading-relaxed
                dark:text-slate-400
                text-slate-600
              "
            >
              I believe strong frontend work is not just
              about visuals — it’s about responsiveness,
              structure, smooth interaction, performance,
              and attention to detail.
            </p>

            <p
              className="
                mt-5
                text-[17px]
                leading-relaxed
                dark:text-slate-400
                text-slate-600
              "
            >
              My approach focuses on refining projects
              carefully until the UI, responsiveness,
              and overall experience reach a level I’m
              personally confident in delivering.
            </p>

            {/* STATS */}
            <div
              className="
                grid
                grid-cols-2
                gap-5
                mt-12
              "
            >

              {stats.map((stat, i) => (

                <motion.div
                  key={i}

                  initial={{
                    opacity: 0,
                    y: 20,
                  }}

                  whileInView={{
                    opacity: 1,
                    y: 0,
                  }}

                  viewport={{
                    once: true,
                  }}

                  transition={{
                    delay: i * 0.08,
                    duration: 0.4,
                  }}

                  className="
                    rounded-2xl
                    border
                    dark:border-white/10
                    border-black/5
                    dark:bg-white/[0.03]
                    bg-white/60
                    backdrop-blur-xl
                    p-5
                  "
                >

                  <h3
                    className="
                      text-2xl
                      font-black
                      dark:text-white
                      text-slate-900
                    "
                  >
                    {stat.value}
                  </h3>

                  <p
                    className="
                      mt-2
                      text-sm
                      dark:text-slate-400
                      text-slate-600
                    "
                  >
                    {stat.label}
                  </p>

                </motion.div>

              ))}

            </div>

          </motion.div>

          {/* RIGHT */}
          <div className="space-y-10">

            {features.map((feature, i) => (

              <motion.div
                key={i}

                initial={{
                  opacity: 0,
                  x: 30,
                }}

                whileInView={{
                  opacity: 1,
                  x: 0,
                }}

                viewport={{
                  once: true,
                }}

                transition={{
                  duration: 0.45,
                  delay: i * 0.08,
                }}

                className="
                  relative
                  pl-10
                "
              >

                {/* LINE */}
                <div
                  className="
                    absolute
                    left-0
                    top-1
                    bottom-0
                    w-[2px]
                    rounded-full
                    bg-gradient-to-b
                    from-blue-500
                    via-violet-500
                    to-pink-500
                  "
                />

                {/* DOT */}
                <div
                  className="
                    absolute
                    left-[-7px]
                    top-1
                    w-4
                    h-4
                    rounded-full
                    bg-violet-500
                    shadow-[0_0_18px_rgba(139,92,246,0.5)]
                  "
                />

                <h3
                  className="
                    text-2xl
                    font-bold
                    dark:text-white
                    text-slate-900
                  "
                >
                  {feature.title}
                </h3>

                <p
                  className="
                    mt-4
                    leading-relaxed
                    dark:text-slate-400
                    text-slate-600
                  "
                >
                  {feature.desc}
                </p>

              </motion.div>

            ))}

          </div>

        </div>

      </div>

    </section>
  );
};

export default HireMe;