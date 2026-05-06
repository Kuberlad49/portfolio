import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const Hero = () => {
  const [text, setText] = useState("");

  const fullText = "Frontend Developer • React Focused";

  useEffect(() => {
    let i = 0;

    const interval = setInterval(() => {
      setText(fullText.slice(0, i));
      i++;

      if (i > fullText.length) clearInterval(interval);
    }, 35);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden px-5 sm:px-8">

      {/* BACKGROUND */}
      <div className="absolute inset-0 bg-[var(--bg)] -z-20"></div>

      {/* GRID */}
      <div className="absolute inset-0 opacity-[0.04] dark:opacity-[0.06] bg-[linear-gradient(to_right,#6366f1_1px,transparent_1px),linear-gradient(to_bottom,#6366f1_1px,transparent_1px)] bg-[size:70px_70px] -z-10"></div>

      {/* GLOW LEFT */}
      <motion.div
        animate={{ y: [0, -20, 0] }}
        transition={{ duration: 8, repeat: Infinity }}
        className="absolute top-[10%] left-[-120px] w-[350px] sm:w-[500px] h-[350px] sm:h-[500px] bg-indigo-500/20 blur-[120px] rounded-full"
      />

      {/* GLOW RIGHT */}
      <motion.div
        animate={{ y: [0, 20, 0] }}
        transition={{ duration: 10, repeat: Infinity }}
        className="absolute bottom-[5%] right-[-120px] w-[300px] sm:w-[450px] h-[300px] sm:h-[450px] bg-purple-500/20 blur-[120px] rounded-full"
      />

      <div className="relative z-10 text-center max-w-4xl">

        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-[var(--border)] bg-white/40 dark:bg-white/5 backdrop-blur-md text-sm text-[var(--subtext)] shadow-sm"
        >
          <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></div>

          Building modern web experiences
        </motion.div>

        {/* Heading */}
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mt-8 text-5xl sm:text-7xl md:text-8xl font-black tracking-tight leading-none"
        >
          <span className="block">Kuber</span>

          <span className="block text-indigo-500 mt-2">
            Lad
          </span>
        </motion.h1>

        {/* Typing */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="mt-6 text-base sm:text-xl text-[var(--subtext)] h-8 font-medium"
        >
          {text}
          <span className="animate-pulse text-indigo-500">|</span>
        </motion.p>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7 }}
          className="mt-8 max-w-2xl mx-auto text-sm sm:text-lg leading-relaxed text-[var(--subtext)]"
        >
          I build high-performance web applications with clean UI,
          smooth user experience, and modern frontend architecture.
        </motion.p>

        {/* Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9 }}
          className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <a
            href="#projects"
            className="group px-7 py-3 rounded-2xl bg-indigo-600 text-white font-medium hover:scale-[1.05] hover:shadow-[0_0_35px_rgba(99,102,241,0.45)]"
          >
            View Projects
          </a>

          <a
            href="#contact"
            className="px-7 py-3 rounded-2xl border border-[var(--border)] bg-white/40 dark:bg-white/5 backdrop-blur-md hover:bg-white/70 dark:hover:bg-white/10"
          >
            Contact Me
          </a>
        </motion.div>

      </div>
    </section>
  );
};

export default Hero;