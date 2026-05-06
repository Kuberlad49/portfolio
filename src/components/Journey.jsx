import { motion } from "framer-motion";

const journeyData = [
  {
    title: "Primary Education",
    year: "2012 — 2017",
    place: "Saraswati Vidyalaya Khadgaon",
    location: "Prakash Nagar, Latur",
    description:
      "Built strong discipline, learning habits, and personal foundation during early education.",
    highlight: false,
  },

  {
    title: "Secondary Education",
    year: "2017 — 2022",
    place: "Saraswati Vidyalaya Khadgaon",
    location: "Prakash Nagar, Latur",
    description:
      "Developed interest in computers, problem solving, and technical creativity.",
    highlight: false,
  },

  {
    title: "Diploma in Information Technology",
    year: "2023 — 2026",
    place: "Rajiv Gandhi Institute of Polytechnic",
    location: "Latur",
    description:
      "Focused on frontend development, React, Java, UI/UX, and real-world project building. Successfully completed diploma education.",
    highlight: true,
  },
];

const Journey = () => {
  return (
    <section
      id="journey"
      className="relative px-5 sm:px-8 pt-10 pb-24 sm:pt-14 sm:pb-28 overflow-hidden"
    >

      {/* Background Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[400px] h-[400px] bg-indigo-500/10 blur-[120px] rounded-full"></div>

      <div className="max-w-6xl mx-auto relative z-10">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55 }}
          viewport={{ once: true }}
          className="text-center"
        >

          <p className="text-indigo-500 font-medium tracking-widest uppercase text-sm">
            My Journey
          </p>

          <h2 className="mt-3 text-4xl sm:text-5xl font-black tracking-tight">
            Education & Growth
          </h2>

          <p className="mt-5 text-[var(--subtext)] max-w-2xl mx-auto leading-relaxed">
            Every stage of education shaped discipline, technical thinking,
            creativity, and the developer mindset I carry today.
          </p>

        </motion.div>

        {/* Timeline */}
        <div className="relative mt-20">

          {/* Vertical Line */}
          <div
            className="
              absolute
              left-1/2
              top-0
              hidden
              md:block
              w-[2px]
              h-full
              -translate-x-1/2
              bg-gradient-to-b
              from-blue-500/30
              via-purple-500/40
              to-pink-500/30
            "
          />

          <div className="space-y-12 md:space-y-20">

            {journeyData.map((item, index) => {

              const isLeft = index % 2 === 0;

              return (

                <motion.div
                  key={index}

                  initial={{
                    opacity: 0,
                    y: 50,
                  }}

                  whileInView={{
                    opacity: 1,
                    y: 0,
                  }}

                  transition={{
                    duration: 0.6,
                    delay: index * 0.12,
                  }}

                  viewport={{ once: true }}

                  className={`
                    relative
                    flex
                    flex-col
                    md:flex-row
                    items-center
                    ${isLeft ? "md:justify-start" : "md:justify-end"}
                  `}
                >

                  {/* Dot */}
                  <div
                    className="
                      hidden
                      md:flex
                      absolute
                      left-1/2
                      top-10
                      -translate-x-1/2
                      w-5
                      h-5
                      rounded-full
                      bg-gradient-to-br
                      from-blue-500
                      via-purple-500
                      to-pink-500
                      shadow-[0_0_25px_rgba(168,85,247,0.7)]
                    "
                  />

                  {/* Card */}
                  <motion.div

                    whileHover={{
                      y: -6,
                    }}

                    transition={{
                      duration: 0.25,
                    }}

                    className={`
                      relative
                      w-full
                      md:w-[46%]
                      rounded-3xl
                      border
                      border-[var(--border)]
                      backdrop-blur-xl
                      overflow-hidden
                      gpu
                      ${
                        item.highlight
                          ? "bg-gradient-to-br from-indigo-500/10 via-purple-500/10 to-pink-500/10 shadow-[0_20px_50px_rgba(99,102,241,0.15)]"
                          : "bg-[var(--card)]"
                      }
                    `}
                  >

                    {/* Glow */}
                    {item.highlight && (
                      <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 via-purple-500/5 to-pink-500/5"></div>
                    )}

                    <div className="relative z-10 p-7 sm:p-8">

                      {/* Year */}
                      <div
                        className="
                          inline-flex
                          items-center
                          rounded-full
                          px-4
                          py-1.5
                          text-sm
                          font-medium
                          bg-white/40
                          dark:bg-white/5
                          border
                          border-[var(--border)]
                          text-indigo-500
                        "
                      >
                        {item.year}
                      </div>

                      {/* Title */}
                      <h3 className="mt-6 text-2xl font-bold tracking-tight">
                        {item.title}
                      </h3>

                      {/* Place */}
                      <p className="mt-3 text-lg font-medium text-[var(--text)]">
                        {item.place}
                      </p>

                      <p className="text-sm text-[var(--subtext)]">
                        {item.location}
                      </p>

                      {/* Description */}
                      <p className="mt-5 leading-relaxed text-[var(--subtext)]">
                        {item.description}
                      </p>

                    </div>

                  </motion.div>

                </motion.div>
              );
            })}

          </div>

        </div>

      </div>

    </section>
  );
};

export default Journey;