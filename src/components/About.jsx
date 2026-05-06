import { motion } from "framer-motion";

const About = () => {
  return (
    <section className="px-5 sm:px-8 py-24">

      <motion.div
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false, amount: 0.2 }}
        transition={{ duration: 0.7 }}
        className="max-w-4xl mx-auto text-center"
      >

        <h2 className="text-4xl font-black mb-8">
          About Me
        </h2>

        <p className="text-base sm:text-lg leading-relaxed text-[var(--subtext)]">
          I'm a second-year IT student focused on building modern,
          high-performance web applications with clean UI and smooth user experience.
          I continuously improve by creating real-world projects instead of relying only on theory.
        </p>

      </motion.div>
    </section>
  );
};

export default About;