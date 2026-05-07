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
      "from-blue-500 via-violet-500 to-pink-500",
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
      "from-indigo-500 via-purple-500 to-fuchsia-500",
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

      {/* BACKGROUND GLOWS */}
      <div
        className="
          absolute
          top-10
          left-[-120px]
          w-[320px]
          h-[320px]
          rounded-full
          bg-violet-500/15
          blur-[120px]
          pointer-events-none
        "
      />

      <div
        className="
          absolute
          bottom-0
          right-[-100px]
          w-[280px]
          h-[280px]
          rounded-full
          bg-blue-500/15
          blur-[120px]
          pointer-events-none
        "
      />

      <div className="max-w-6xl mx-auto relative z-10">

        {/* HEADER */}
        <motion.div
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
            duration: 0.45,
          }}

          className="text-center"
        >

          <p
            className="
              text-sm
              uppercase
              tracking-[0.28em]
              text-violet-400
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
              text-[var(--subtext)]
            "
          >
            Certifications and professional
            training programs that strengthened
            my development, testing, and
            analytical capabilities.
          </p>

        </motion.div>

        {/* CARDS */}
        <div className="mt-20 space-y-8">

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
                y: -5,
              }}

              className="
                relative
                overflow-hidden
                rounded-[32px]
                border
                border-white/10
                bg-[rgba(10,14,35,0.72)]
                backdrop-blur-2xl
                shadow-[0_20px_70px_rgba(0,0,0,0.28)]
              "
            >

              {/* Glow */}
              <div
                className={`
                  absolute
                  inset-0
                  opacity-[0.07]
                  bg-gradient-to-br
                  ${cert.accent}
                `}
              />

              <div
                className="
                  relative
                  grid
                  lg:grid-cols-[280px_1fr]
                  gap-8
                  items-center
                  p-6
                  sm:p-8
                "
              >

                {/* LEFT PREVIEW */}
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

                  {/* Glow */}
                  <div
                    className={`
                      absolute
                      -inset-2
                      rounded-[28px]
                      bg-gradient-to-br
                      ${cert.accent}
                      blur-2xl
                      opacity-20
                      group-hover:opacity-35
                      transition
                    `}
                  />

                  <div
                    className="
                      relative
                      overflow-hidden
                      rounded-[26px]
                      border
                      border-white/10
                      bg-black/40
                    "
                  >

                    <img
                      src={cert.image}
                      alt={cert.title}
                      loading="lazy"
                      className="
                        w-full
                        h-[220px]
                        object-cover
                        transition-transform
                        duration-700
                        group-hover:scale-105
                      "
                    />

                    {/* Overlay */}
                    <div
                      className="
                        absolute
                        inset-0
                        bg-gradient-to-t
                        from-black/60
                        via-black/10
                        to-transparent
                      "
                    />

                    {/* View */}
                    <div
                      className="
                        absolute
                        bottom-4
                        left-4
                        px-4
                        py-2
                        rounded-full
                        bg-white/10
                        backdrop-blur-xl
                        border
                        border-white/10
                        text-white
                        text-sm
                        font-medium
                      "
                    >
                      View Certificate
                    </div>

                  </div>

                </div>

                {/* RIGHT CONTENT */}
                <div>

                  {/* TOP */}
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
                          tracking-[0.18em]
                          text-violet-400
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
                          text-white
                        "
                      >
                        {cert.title}
                      </h3>

                      <p
                        className="
                          mt-3
                          text-sm
                          text-gray-400
                        "
                      >
                        {cert.duration}
                      </p>

                    </div>

                    {/* Badge */}
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
                        shadow-lg
                      `}
                    >
                      Verified
                    </div>

                  </div>

                  {/* DESCRIPTION */}
                  <p
                    className="
                      mt-7
                      text-gray-300
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
                          border-white/10
                          bg-white/[0.04]
                          text-sm
                          text-gray-200
                          hover:bg-white/[0.08]
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

            initial={{
              opacity: 0,
            }}

            animate={{
              opacity: 1,
            }}

            exit={{
              opacity: 0,
            }}

            className="
              fixed
              inset-0
              z-[9999]
              bg-black/80
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
                scale: 0.9,
                opacity: 0,
                y: 20,
              }}

              animate={{
                scale: 1,
                opacity: 1,
                y: 0,
              }}

              exit={{
                scale: 0.9,
                opacity: 0,
                y: 20,
              }}

              transition={{
                duration: 0.25,
              }}

              className="
                relative
                w-full
                max-w-5xl
                rounded-[32px]
                overflow-hidden
                border
                border-white/10
                bg-[rgba(8,12,30,0.92)]
                shadow-[0_30px_120px_rgba(0,0,0,0.5)]
              "

              onClick={(e) =>
                e.stopPropagation()
              }
            >

              {/* CLOSE */}
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
                  bg-black/50
                  backdrop-blur-xl
                  border
                  border-white/10
                  text-white
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
                  from-[#070b1d]
                  via-[#0c1333]
                  to-[#140b24]
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