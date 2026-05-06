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
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="text-3xl sm:text-4xl font-black mb-14"
      >
        Skills
      </motion.h2>

      <div className="flex flex-wrap justify-center gap-5">

        {skills.map((skill, i) => (

          <motion.div
            key={i}
            initial={{ opacity: 0, scale: 0.7 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ delay: i * 0.05 }}
            viewport={{ once: true }}
            whileHover={{
              y: -6,
              scale: 1.05,
            }}
            className="px-6 py-3 rounded-2xl border border-[var(--border)] bg-[var(--card)] backdrop-blur-xl shadow-sm"
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