import {
  motion,
  AnimatePresence,
} from "framer-motion";

import { useState } from "react";

const certificates = [
  {
    title: "Software Testing Industrial Training",
    org: "Vision Academy",
    duration: "12 Weeks Internship",
    desc:
      "Completed industrial training focused on API testing, automation workflows, JMeter, Jenkins, GitHub, Postman, and software testing practices.",
    image: "/certificates/software-testing.jpg",
    skills: [
      "JMeter",
      "Jenkins",
      "Postman",
      "GitHub",
      "API Testing",
    ],
    accent:
      "from-[#2563eb] via-[#4f46e5] to-[#7c3aed]",
  },

  {
    title: "Data Science Challenge",
    org: "Mandi Hariyanna Academy",
    duration: "Achievement Certificate",
    desc:
      "Successfully completed a Data Science challenge focused on statistics, machine learning concepts, analytical thinking, and data interpretation.",
    image: "/certificates/data-science.jpg",
    skills: [
      "Statistics",
      "Machine Learning",
      "Data Analysis",
    ],
    accent:
      "from-[#4338ca] via-[#6d28d9] to-[#9333ea]",
  },

  {
    title: "Technical Quiz Participation",
    org: "Enthuse'26 State Level Event",
    duration: "Technical Event Participation",
    desc:
      "Participated in a state-level technical quiz event focused on logical thinking, technical concepts, and competitive problem-solving.",
    image: "/certificates/vdf.jpeg",
    skills: [
      "Technical Quiz",
      "Problem Solving",
      "Competitive Thinking",
    ],
    accent:
      "from-[#0f172a] via-[#1d4ed8] to-[#3b82f6]",
  },

  {
    title: "Chess Competition",
    org: "SVSS Khel Bharari Utsav",
    duration: "Competition Participation",
    desc:
      "Participated in a chess competition demonstrating strategic thinking, patience, concentration, and decision-making abilities.",
    image: "/certificates/chess.jpeg",
    skills: [
      "Chess",
      "Strategy",
      "Focus",
      "Decision Making",
    ],
    accent:
      "from-[#1e293b] via-[#334155] to-[#475569]",
  },

  {
    title: "National Level Technical Event",
    org: "Vishwa Vertex 2K26",
    duration: "Hackathon & Technical Event",
    desc:
      "Participated in a national-level technical event involving innovation challenges, hackathon activities, and collaborative technical learning.",
    image: "/certificates/hackathon.jpeg",
    skills: [
      "Hackathon",
      "Innovation",
      "Technical Event",
      "Collaboration",
    ],
    accent:
      "from-[#111827] via-[#4c1d95] to-[#7e22ce]",
  },
];

const Certificates = () => {

  const [selectedCert, setSelectedCert] =
    useState(null);

  return (
    <section
      id="certificates"
      className="
        relative
        px-5
        sm:px-8
        py-28
        overflow-hidden
      "
    >

      {/* BG GLOWS */}
      <div
        className="
          absolute
          top-0
          left-[-120px]
          w-[340px]
          h-[340px]
          rounded-full
          bg-violet-500/10
          blur-[130px]
          pointer-events-none
        "
      />

      <div
        className="
          absolute
          bottom-0
          right-[-100px]
          w-[300px]
          h-[300px]
          rounded-full
          bg-blue-500/10
          blur-[130px]
          pointer-events-none
        "
      />

      <div className="max-w-6xl mx-auto relative z-10">

        {/* HEADER */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.45 }}
          className="text-center"
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
            Achievements
          </p>

          <h2
            className="
              mt-4
              text-4xl
              sm:text-5xl
              font-black
              tracking-tight
              dark:text-white
              text-slate-900
            "
          >
            Certifications
          </h2>

          <p
            className="
              mt-5
              max-w-2xl
              mx-auto
              leading-relaxed
              dark:text-slate-400
              text-slate-600
            "
          >
            Certifications, competitions,
            hackathons, and technical events
            that strengthened my practical
            development and analytical skills.
          </p>

        </motion.div>

        {/* LIST */}
        <div className="mt-20 space-y-8">

          {certificates.map((cert, i) => (

            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.4,
                delay: i * 0.05,
              }}

              whileHover={{ y: -3 }}

              className="
                relative
                overflow-hidden
                rounded-[28px]
                border
                dark:border-white/10
                border-black/5
                dark:bg-[rgba(8,12,30,0.74)]
                bg-white/72
                backdrop-blur-xl
                shadow-[0_20px_60px_rgba(0,0,0,0.08)]
                dark:shadow-[0_20px_60px_rgba(0,0,0,0.35)]
              "
            >

              {/* subtle gradient */}
              <div
                className={`
                  absolute
                  inset-0
                  opacity-[0.03]
                  bg-gradient-to-br
                  ${cert.accent}
                `}
              />

              <div
                className="
                  relative
                  grid
                  lg:grid-cols-[260px_1fr]
                  gap-8
                  items-center
                  p-6
                  sm:p-8
                "
              >

                {/* PREVIEW */}
                <div
                  onClick={() =>
                    setSelectedCert(cert)
                  }

                  className="
                    relative
                    group
                    cursor-pointer
                  "
                >

                  <div
                    className={`
                      absolute
                      -inset-1
                      rounded-[24px]
                      bg-gradient-to-br
                      ${cert.accent}
                      opacity-20
                      blur-xl
                      transition
                      group-hover:opacity-35
                    `}
                  />

                  <div
                    className="
                      relative
                      overflow-hidden
                      rounded-[22px]
                      border
                      dark:border-white/10
                      border-black/5
                      bg-white
                      dark:bg-[#050816]
                    "
                  >

                    <img
                      src={cert.image}
                      alt={cert.title}
                      loading="lazy"
                      className="
                        w-full
                        h-[210px]
                        object-cover
                        transition-transform
                        duration-700
                        group-hover:scale-[1.03]
                      "
                    />

                    <div
                      className="
                        absolute
                        inset-0
                        bg-gradient-to-t
                        dark:from-black/70
                        from-black/20
                        via-transparent
                        to-transparent
                      "
                    />

                    <div
                      className="
                        absolute
                        bottom-4
                        left-4
                        px-4
                        py-2
                        rounded-full
                        bg-white/70
                        dark:bg-black/40
                        backdrop-blur-xl
                        border
                        dark:border-white/10
                        border-black/5
                        dark:text-white
                        text-slate-900
                        text-sm
                        font-medium
                      "
                    >
                      Open Preview
                    </div>

                  </div>

                </div>

                {/* CONTENT */}
                <div>

                  <div
                    className="
                      flex
                      items-start
                      justify-between
                      gap-4
                      flex-wrap
                    "
                  >

                    <div>

                      <p
                        className="
                          text-sm
                          uppercase
                          tracking-[0.2em]
                          text-violet-500
                        "
                      >
                        {cert.org}
                      </p>

                      <h3
                        className="
                          mt-3
                          text-3xl
                          font-black
                          leading-tight
                          dark:text-white
                          text-slate-900
                        "
                      >
                        {cert.title}
                      </h3>

                      <p
                        className="
                          mt-3
                          text-sm
                          dark:text-gray-400
                          text-slate-500
                        "
                      >
                        {cert.duration}
                      </p>

                    </div>

                    {/* VERIFIED */}
                    <div
                      className={`
                        px-5
                        py-2
                        rounded-full
                        bg-gradient-to-r
                        ${cert.accent}
                        text-white
                        text-sm
                        font-semibold
                        shadow-md
                      `}
                    >
                      Verified
                    </div>

                  </div>

                  {/* DESC */}
                  <p
                    className="
                      mt-7
                      dark:text-gray-300
                      text-slate-600
                      leading-relaxed
                      max-w-2xl
                    "
                  >
                    {cert.desc}
                  </p>

                  {/* SKILLS */}
                  <div
                    className="
                      flex
                      flex-wrap
                      gap-3
                      mt-8
                    "
                  >

                    {cert.skills.map((skill, idx) => (

                      <div
                        key={idx}

                        className="
                          px-4
                          py-2
                          rounded-full
                          border
                          dark:border-white/10
                          border-black/5
                          dark:bg-white/[0.03]
                          bg-black/[0.03]
                          text-sm
                          dark:text-gray-200
                          text-slate-700
                          transition
                        "
                      >
                        {skill}
                      </div>

                    ))}

                  </div>

                </div>

              </div>

            </motion.div>

          ))}

        </div>

      </div>

      {/* MODAL */}
      <AnimatePresence>

        {selectedCert && (

          <motion.div

            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}

            className="
              fixed
              inset-0
              z-[9999]
              bg-black/75
              backdrop-blur-md
              flex
              items-center
              justify-center
              p-4
            "

            onClick={() =>
              setSelectedCert(null)
            }
          >

            <motion.div

              initial={{
                scale: 0.94,
                opacity: 0,
              }}

              animate={{
                scale: 1,
                opacity: 1,
              }}

              exit={{
                scale: 0.94,
                opacity: 0,
              }}

              transition={{
                duration: 0.2,
              }}

              className="
                relative
                w-full
                max-w-6xl
                rounded-[32px]
                overflow-hidden
                border
                dark:border-white/10
                border-black/5
                dark:bg-[#070b18]
                bg-white
                shadow-[0_30px_120px_rgba(0,0,0,0.35)]
              "

              onClick={(e) =>
                e.stopPropagation()
              }
            >

              {/* close */}
              <button
                onClick={() =>
                  setSelectedCert(null)
                }

                className="
                  absolute
                  top-5
                  right-5
                  z-20
                  w-12
                  h-12
                  rounded-full
                  bg-white/70
                  dark:bg-black/40
                  backdrop-blur-xl
                  border
                  dark:border-white/10
                  border-black/5
                  dark:text-white
                  text-slate-900
                  text-xl
                  hover:scale-105
                  transition
                "
              >
                ✕
              </button>

              {/* IMAGE */}
              <div
                className="
                  p-4
                  sm:p-6
                  bg-gradient-to-br
                  dark:from-[#070b1d]
                  dark:via-[#0c1333]
                  dark:to-[#140b24]
                  from-[#f5f7ff]
                  via-[#eef2ff]
                  to-[#faf5ff]
                "
              >

                <img
                  src={selectedCert.image}
                  alt={selectedCert.title}
                  className="
                    w-full
                    max-h-[85vh]
                    object-contain
                    rounded-[24px]
                    shadow-2xl
                  "
                />

              </div>

            </motion.div>

          </motion.div>

        )}

      </AnimatePresence>

    </section>
  );
};

export default Certificates;