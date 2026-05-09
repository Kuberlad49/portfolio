import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

const skillGroups = [
  {
    title: "Frontend",
    color: "from-blue-500 to-cyan-400",

    skills: [
      {
        name: "HTML",
        info:
          "Semantic page structure, accessibility, responsive layouts, and clean document architecture.",
      },

      {
        name: "CSS",
        info:
          "Modern styling, animations, responsive design systems, flexbox, grid, and visual polish.",
      },

      {
        name: "JavaScript",
        info:
          "Interactive UI logic, DOM manipulation, dynamic rendering, and frontend functionality.",
      },

      {
        name: "React",
        info:
          "Reusable components, state management, smooth UI architecture, and scalable frontend development.",
      },

      {
        name: "Tailwind CSS",
        info:
          "Utility-first modern styling for fast, responsive, and clean user interface development.",
      },

      {
        name: "Responsive UI",
        info:
          "Mobile-first layouts optimized for laptops, tablets, and smartphones.",
      },

      {
        name: "UI/UX",
        info:
          "Balanced spacing, visual hierarchy, interaction design, and premium user experience.",
      },
    ],
  },

  {
    title: "Backend",
    color: "from-purple-500 to-pink-500",

    skills: [
      {
        name: "Node.js",
        info:
          "Backend runtime for APIs, authentication systems, and server-side functionality.",
      },

      {
        name: "Java",
        info:
          "Object-oriented programming, desktop applications, and Android application development.",
      },

      {
        name: "Python",
        info:
          "Automation, scripting, networking projects, and problem-solving logic.",
      },
    ],
  },

  {
    title: "Android Development",
    color: "from-green-500 to-emerald-400",

    skills: [
      {
        name: "Android App Development",
        info:
          "Building native Android applications using Java and Android Studio with responsive mobile UI, activity lifecycle handling, authentication systems, and structured app architecture.",
      },

      {
        name: "Android Studio",
        info:
          "Developing, debugging, testing, and managing Android applications using Android Studio development environment.",
      },

      {
        name: "SQLite",
        info:
          "Local database management for Android applications including structured data storage, trip records, authentication handling, and report management.",
      },

      {
        name: "XML Layouts",
        info:
          "Designing responsive Android user interfaces using XML layouts, Material Design principles, and adaptive mobile components.",
      },

      {
        name: "PDF Report System",
        info:
          "Generating and managing downloadable PDF reports inside Android applications for trip history and tracking summaries.",
      },

      {
        name: "Mobile UI Optimization",
        info:
          "Designing Android interfaces optimized for responsiveness, usability, smooth navigation, and performance across devices.",
      },

      {
        name: "Experience",
        info:
          "Successfully developed and released 1 complete Android application project with real functionality and APK distribution.",
      },
    ],
  },

  {
    title: "Databases",
    color: "from-indigo-500 to-purple-500",

    skills: [
      {
        name: "MySQL",
        info:
          "Structured relational database management for web applications and data storage.",
      },

      {
        name: "PostgreSQL",
        info:
          "Advanced SQL database system focused on performance and scalability.",
      },

      {
        name: "SQLite",
        info:
          "Lightweight embedded database used in Android applications for local data persistence and offline storage.",
      },
    ],
  },

  {
    title: "Testing & Tools",
    color: "from-pink-500 to-orange-400",

    skills: [
      {
        name: "Software Testing",
        info:
          "Functional testing, UI testing, debugging workflows, and quality assurance basics.",
      },

      {
        name: "Postman",
        info:
          "API testing, request handling, response validation, and endpoint verification.",
      },

      {
        name: "Git",
        info:
          "Version control, commits, branching, and collaborative development workflow.",
      },

      {
        name: "GitHub",
        info:
          "Code hosting, project management, repository collaboration, and deployment integration.",
      },

      {
        name: "JMeter",
        info:
          "Performance testing, load testing, and stress testing for web applications.",
      },

      {
        name: "Jenkins",
        info:
          "Basic CI/CD workflow automation and integration pipeline understanding.",
      },
    ],
  },
];

const Skills = () => {

  const [activeSkill, setActiveSkill] = useState(null);

  return (
    <section
      id="skills"
      className="relative px-5 sm:px-8 py-24 overflow-hidden"
    >

      {/* Glow */}
      <div className="purple-glow w-[280px] h-[280px] bg-purple-500/10 top-10 right-[-100px]" />

      <div className="max-w-6xl mx-auto relative z-10">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >

          <p className="text-indigo-500 uppercase tracking-[0.3em] text-sm font-medium">
            Expertise
          </p>

          <h2 className="mt-4 text-4xl sm:text-5xl font-black tracking-tight">
            Skills & Technologies
          </h2>

          <p className="mt-5 max-w-2xl mx-auto text-[var(--subtext)] leading-relaxed">
            Technologies and tools I use to build fast,
            modern, responsive, and performance-focused digital experiences.
          </p>

        </motion.div>

        {/* Layout */}
        <div className="mt-20 space-y-14">

          {skillGroups.map((group, i) => (

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
                delay: i * 0.08,
              }}
            >

              {/* TOP */}
              <div className="flex items-center gap-4 mb-6">

                <div
                  className={`
                    h-12
                    w-1.5
                    rounded-full
                    bg-gradient-to-b
                    ${group.color}
                  `}
                />

                <div>

                  <h3 className="text-2xl font-bold">
                    {group.title}
                  </h3>

                  <p className="text-sm text-[var(--subtext)] mt-1">
                    {group.skills.length} Technologies
                  </p>

                </div>

              </div>

              {/* SKILLS */}
              <div className="flex flex-wrap gap-4">

                {group.skills.map((skill, idx) => {

                  const isActive =
                    activeSkill === skill.name;

                  return (

                    <div key={idx} className="relative">

                      {/* BUTTON */}
                      <motion.button

                        whileHover={{
                          y: -4,
                          scale: 1.03,
                        }}

                        whileTap={{
                          scale: 0.98,
                        }}

                        onClick={() =>
                          setActiveSkill(
                            isActive
                              ? null
                              : skill.name
                          )
                        }

                        className="
                          relative
                          px-5
                          py-3
                          rounded-2xl
                          border
                          border-[var(--border)]
                          bg-[var(--card)]
                          backdrop-blur-md
                          text-sm
                          font-medium
                          shadow-[0_6px_20px_rgba(0,0,0,0.04)]
                          hover:border-purple-500/20
                          transition-all
                          duration-300
                        "
                      >

                        <div
                          className="
                            absolute
                            inset-0
                            rounded-2xl
                            bg-gradient-to-r
                            from-blue-500/0
                            via-purple-500/0
                            to-pink-500/0
                            hover:from-blue-500/5
                            hover:via-purple-500/5
                            hover:to-pink-500/5
                            transition
                            duration-300
                          "
                        />

                        <span className="relative z-10">
                          {skill.name}
                        </span>

                      </motion.button>

                      {/* INFO BOX */}
                      <AnimatePresence>

                        {isActive && (

                          <motion.div

                            initial={{
                              opacity: 0,
                              y: 10,
                              scale: 0.96,
                            }}

                            animate={{
                              opacity: 1,
                              y: 0,
                              scale: 1,
                            }}

                            exit={{
                              opacity: 0,
                              y: 10,
                              scale: 0.96,
                            }}

                            transition={{
                              duration: 0.2,
                            }}

                            className="
                              absolute
                              left-0
                              top-[115%]
                              z-50
                              w-[260px]
                              p-4
                              rounded-2xl
                              border
                              border-[var(--border)]
                              bg-[var(--card)]
                              backdrop-blur-xl
                              shadow-[0_10px_40px_rgba(0,0,0,0.12)]
                            "
                          >

                            <h4 className="font-semibold text-sm">
                              {skill.name}
                            </h4>

                            <p className="mt-2 text-xs leading-relaxed text-[var(--subtext)]">
                              {skill.info}
                            </p>

                          </motion.div>

                        )}

                      </AnimatePresence>

                    </div>
                  );
                })}

              </div>

            </motion.div>

          ))}

        </div>

      </div>

    </section>
  );
};

export default Skills;