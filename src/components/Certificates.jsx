import { motion } from "framer-motion";

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

      {/* Ambient Glow */}
      <div className="purple-glow w-[300px] h-[300px] bg-purple-500/10 left-[-120px] top-20" />

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
            Certifications and training programs that
            strengthened my practical development and
            software testing skills.
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
                duration: 0.5,
                delay: i * 0.1,
              }}

              whileHover={{
                y: -4,
              }}

              className="
                hero-card
                rounded-[30px]
                overflow-hidden
              "
            >

              {/* Top Image */}
              <div className="relative overflow-hidden">

                <img
                  src={cert.image}
                  alt={cert.title}
                  loading="lazy"
                  className="
                    w-full
                    h-[230px]
                    object-cover
                    transition-transform
                    duration-500
                    hover:scale-[1.03]
                  "
                />

                {/* Gradient Overlay */}
                <div
                  className={`
                    absolute
                    inset-0
                    bg-gradient-to-tr
                    ${cert.accent}
                    opacity-[0.10]
                  `}
                />

              </div>

              {/* Content */}
              <div className="p-7">

                {/* Top */}
                <div className="flex items-center justify-between gap-4 flex-wrap">

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
                      shadow-lg
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

    </section>
  );
};

export default Certificates;