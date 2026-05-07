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
      "Completed industrial training focused on JMeter, Jenkins, Postman, GitHub, API testing, and software testing workflows.",

    image: "/certificates/software-testing.jpg",

    skills: [
      "JMeter",
      "Jenkins",
      "Postman",
      "GitHub",
      "Software Testing",
    ],

    accent:
      "from-blue-500 via-purple-500 to-pink-500",
  },

  {
    title: "Data Science Challenge",

    org: "Mandi Hariyanna Academy",

    duration: "Achievement Certificate",

    desc:
      "Successfully completed a Data Science challenge focused on statistics, machine learning concepts, and data analysis.",

    image: "/certificates/data-science.jpg",

    skills: [
      "Data Analysis",
      "Statistics",
      "Machine Learning",
    ],

    accent:
      "from-yellow-400 via-orange-400 to-pink-500",
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
        py-24
        overflow-hidden
      "
    >

      {/* Purple Glow */}
      <div className="purple-glow w-[340px] h-[340px] bg-purple-500/10 left-[-140px] top-20" />

      <div className="max-w-6xl mx-auto relative z-10">

        {/* Heading */}
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
            duration: 0.6,
          }}

          className="text-center"
        >

          <p className="text-indigo-500 uppercase tracking-[0.28em] text-sm font-medium">
            Achievements
          </p>

          <h2 className="mt-4 text-4xl sm:text-5xl font-black tracking-tight">
            Certifications
          </h2>

          <p className="mt-5 max-w-2xl mx-auto text-[var(--subtext)] leading-relaxed">
            Certifications and training programs
            that strengthened my development,
            testing, and analytical skills.
          </p>

        </motion.div>

        {/* Cards */}
        <div className="mt-20 grid lg:grid-cols-2 gap-8">

          {certificates.map((cert, i) => (

            <motion.div
              key={i}

              initial={{
                opacity: 0,
                y: 40,
              }}

              whileInView={{
                opacity: 1,
                y: 0,
              }}

              viewport={{
                once: true,
              }}

              transition={{
                duration: 0.45,
                delay: i * 0.08,
              }}

              whileHover={{
                y: -4,
              }}

              className="
                hero-card
                rounded-[30px]
                overflow-hidden
                group
                border
                border-[var(--border)]
                bg-[var(--card)]
                backdrop-blur-xl
              "
            >

              {/* Image */}
              <div
                className="
                  relative
                  overflow-hidden
                  cursor-pointer
                "

                onClick={() =>
                  setSelectedCert(cert)
                }
              >

                <img
                  src={cert.image}
                  alt={cert.title}
                  loading="lazy"
                  className="
                    w-full
                    h-[240px]
                    object-cover
                    transition-transform
                    duration-700
                    group-hover:scale-[1.03]
                  "
                />

                {/* Overlay */}
                <div
                  className="
                    absolute
                    inset-0
                    bg-black/10
                    group-hover:bg-black/0
                    transition
                    duration-500
                  "
                />

                {/* Hover Button */}
                <div
                  className="
                    absolute
                    inset-0
                    flex
                    items-center
                    justify-center
                    opacity-0
                    group-hover:opacity-100
                    transition
                    duration-300
                  "
                >

                  <div
                    className="
                      px-5
                      py-3
                      rounded-2xl
                      bg-black/40
                      backdrop-blur-xl
                      border
                      border-white/10
                      text-white
                      text-sm
                      font-medium
                      shadow-lg
                    "
                  >
                    View Certificate
                  </div>

                </div>

              </div>

              {/* Content */}
              <div className="p-7">

                {/* Top */}
                <div className="flex items-start justify-between gap-4 flex-wrap">

                  <div>

                    <h3 className="text-2xl font-bold leading-tight">
                      {cert.title}
                    </h3>

                    <p className="text-sm text-[var(--subtext)] mt-2">
                      {cert.org} • {cert.duration}
                    </p>

                  </div>

                  {/* Badge */}
                  <div
                    className={`
                      px-4
                      py-2
                      rounded-full
                      text-xs
                      font-semibold
                      bg-gradient-to-r
                      ${cert.accent}
                      text-white
                      shadow-md
                    `}
                  >
                    Verified
                  </div>

                </div>

                {/* Description */}
                <p className="mt-6 text-[var(--subtext)] leading-relaxed">
                  {cert.desc}
                </p>

                {/* Skills */}
                <div className="flex flex-wrap gap-3 mt-7">

                  {cert.skills.map((skill, idx) => (

                    <div
                      key={idx}

                      className="
                        px-4
                        py-2
                        rounded-2xl
                        border
                        border-[var(--border)]
                        bg-white/5
                        dark:bg-white/[0.03]
                        text-sm
                        font-medium
                      "
                    >
                      {skill}
                    </div>

                  ))}

                </div>

              </div>

            </motion.div>

          ))}

        </div>

      </div>

      {/* FULLSCREEN PREVIEW */}
      <AnimatePresence>

        {selectedCert && (

          <motion.div

            initial={{
              opacity: 0,
            }}

            animate={{
              opacity: 1,
            }}

            exit={{
              opacity: 0,
            }}

            transition={{
              duration: 0.22,
            }}

            className="
              fixed
              inset-0
              z-[999]
              bg-black/70
              backdrop-blur-[6px]
              flex
              items-center
              justify-center
              p-4
              sm:p-6
            "

            onClick={() =>
              setSelectedCert(null)
            }
          >

            {/* Modal */}
            <motion.div

              initial={{
                scale: 0.94,
                opacity: 0,
                y: 20,
              }}

              animate={{
                scale: 1,
                opacity: 1,
                y: 0,
              }}

              exit={{
                scale: 0.94,
                opacity: 0,
                y: 20,
              }}

              transition={{
                duration: 0.22,
              }}

              className="
                relative
                w-full
                max-w-6xl
                max-h-[94vh]
                overflow-hidden
                rounded-[30px]
                border
                border-white/10
                bg-black/20
                backdrop-blur-xl
                shadow-[0_20px_80px_rgba(0,0,0,0.35)]
              "

              onClick={(e) =>
                e.stopPropagation()
              }
            >

              {/* Close Button */}
              <button
                onClick={() =>
                  setSelectedCert(null)
                }

                className="
                  absolute
                  top-4
                  right-4
                  z-20
                  w-11
                  h-11
                  rounded-full
                  bg-black/45
                  text-white
                  text-lg
                  backdrop-blur-xl
                  hover:scale-105
                  transition
                "
              >
                ✕
              </button>

              {/* Certificate Image */}
              <img
                src={selectedCert.image}
                alt={selectedCert.title}
                className="
                  w-full
                  max-h-[92vh]
                  object-contain
                  rounded-[30px]
                  bg-white
                "
              />

            </motion.div>

          </motion.div>

        )}

      </AnimatePresence>

    </section>
  );
};

export default Certificates;