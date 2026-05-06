import { motion } from "framer-motion";

const Skills = () => {
  const skills = [
    "React",
    "Tailwind",
    "JavaScript",
    "Java",
    "Python",
    "Git",
    "UI/UX",
    "Responsive Design",
  ];

  return (
    <section className="px-4 sm:px-8 py-24 text-center">

      <motion.h2
        initial={{ opacity: 0, y: 35 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.15 }}
        transition={{ duration: 0.7 }}
        className="text-3xl sm:text-4xl font-black mb-14"
      >
        Skills
      </motion.h2>

      <div className="flex flex-wrap justify-center gap-5">

        {skills.map((skill, i) => (

          <motion.div
            key={i}
            initial={{
              opacity: 0,
              scale: 0.7,
              y: 20,
            }}
            whileInView={{
              opacity: 1,
              scale: 1,
              y: 0,
            }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{
              duration: 0.5,
              delay: i * 0.05,
            }}
            whileHover={{
              y: -7,
              scale: 1.06,
            }}
            className="px-6 py-3 rounded-2xl border border-[var(--border)] bg-[var(--card)] backdrop-blur-md shadow-sm"
          >
            <span className="font-medium">
              {skill}
            </span>
          </motion.div>

        ))}

      </div>
    </section>
  );
};

export default Skills;