import { useEffect, useState, memo } from "react";
import { motion } from "framer-motion";
import profile from "../assets/profile.png";

const stats = [
  ["10+", "Projects"],
  ["Frontend", "Focused"],
  ["React", "Specialized"],
  ["UI/UX", "Modern Design"],
];

const Hero = () => {
  const [text, setText] = useState("");

  const fullText = "Frontend Developer • React Focused";

  useEffect(() => {
    let i = 0;

    const interval = setInterval(() => {
      setText(fullText.slice(0, i));
      i++;

      if (i > fullText.length) {
        clearInterval(interval);
      }
    }, 35);

    return () => clearInterval(interval);
  }, []);

  return (
    <section
      className="
        relative
        min-h-[92vh]
        flex
        items-center
        overflow-hidden
        px-5
        sm:px-8
        pt-24
        pb-6
      "
    >
      {/* Background */}
      <div className="absolute inset-0 bg-[var(--bg)] -z-30"></div>

      {/* Grid */}
      <div
        className="
          absolute inset-0
          opacity-[0.03]
          dark:opacity-[0.05]
          bg-[linear-gradient(to_right,#6366f1_1px,transparent_1px),linear-gradient(to_bottom,#6366f1_1px,transparent_1px)]
          bg-[size:70px_70px]
          -z-20
        "
      />

      {/* LEFT GLOW */}
      <div
        className="
          absolute
          top-[10%]
          left-[-160px]
          w-[280px]
          h-[280px]
          sm:w-[360px]
          sm:h-[360px]
          bg-gradient-to-br
          from-blue-500/10
          via-purple-500/10
          to-pink-500/10
          blur-[70px]
          rounded-full
          -z-10
        "
      />

      {/* RIGHT GLOW */}
      <div
        className="
          absolute
          bottom-[5%]
          right-[-160px]
          w-[280px]
          h-[280px]
          sm:w-[360px]
          sm:h-[360px]
          bg-gradient-to-br
          from-pink-500/10
          via-purple-500/10
          to-blue-500/10
          blur-[70px]
          rounded-full
          -z-10
        "
      />

      <div
        className="
          relative
          z-10
          max-w-7xl
          mx-auto
          w-full
          grid
          lg:grid-cols-2
          gap-10
          xl:gap-14
          items-center
        "
      >
        {/* LEFT */}
        <div className="text-center lg:text-left">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45 }}
            className="
              inline-flex
              items-center
              gap-2
              px-4
              py-2
              rounded-full
              border
              border-[var(--border)]
              bg-white/40
              dark:bg-white/5
              backdrop-blur-md
              text-sm
              text-[var(--subtext)]
            "
          >
            <div className="w-2 h-2 rounded-full bg-green-500"></div>
            Available for Work
          </motion.div>

          {/* HEADING */}
          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="
              mt-5
              text-5xl
              sm:text-6xl
              xl:text-7xl
              font-black
              tracking-tight
              leading-[0.95]
            "
          >
            <span className="block">Kuber</span>

            <span
              className="
                block
                mt-1
                bg-gradient-to-r
                from-blue-500
                via-purple-500
                to-pink-500
                bg-clip-text
                text-transparent
              "
            >
              Lad
            </span>
          </motion.h1>

          {/* ROLE */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.35 }}
            className="
              mt-4
              text-base
              sm:text-lg
              text-[var(--subtext)]
              h-8
              font-medium
            "
          >
            {text}
            <span className="text-indigo-500">|</span>
          </motion.p>

          {/* DESCRIPTION */}
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="
              mt-5
              max-w-xl
              text-sm
              sm:text-base
              leading-relaxed
              text-[var(--subtext)]
              mx-auto
              lg:mx-0
            "
          >
            I build high-performance web applications with clean UI,
            smooth user experience, and modern frontend architecture.
          </motion.p>

          {/* BUTTONS */}
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7 }}
            className="
              mt-8
              flex
              flex-col
              sm:flex-row
              items-center
              justify-center
              lg:justify-start
              gap-3
              w-full
              sm:w-auto
            "
          >
            <a
              href="#projects"
              className="
                premium-btn
                w-full
                sm:w-auto
                min-w-[190px]
                text-center
                px-7
                py-3.5
                rounded-2xl
                bg-gradient-to-r
                from-blue-500
                via-purple-500
                to-pink-500
                text-white
                font-medium
                shadow-lg
              "
            >
              View Projects
            </a>

            <a
              href="#contact"
              className="
                premium-btn
                w-full
                sm:w-auto
                min-w-[190px]
                text-center
                px-7
                py-3.5
                rounded-2xl
                border
                border-[var(--border)]
                bg-[var(--card)]
                backdrop-blur-md
                text-[var(--text)]
                font-medium
              "
            >
              Contact Me
            </a>
          </motion.div>

          {/* STATS */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9 }}
            className="
              mt-10
              grid
              grid-cols-2
              sm:grid-cols-4
              gap-4
            "
          >
            {stats.map((item, i) => (
              <div key={i} className="hero-card py-5">
                <h3 className="font-bold text-lg">{item[0]}</h3>

                <p className="text-sm text-[var(--subtext)] mt-1">
                  {item[1]}
                </p>
              </div>
            ))}
          </motion.div>
        </div>

        {/* RIGHT IMAGE */}
        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7 }}
          className="
            relative
            flex
            justify-center
            mt-4
            lg:mt-0
          "
        >
          <div
            className="
              absolute
              w-[220px]
              h-[220px]
              sm:w-[300px]
              sm:h-[300px]
              bg-gradient-to-br
              from-blue-500/10
              via-purple-500/10
              to-pink-500/10
              blur-[60px]
              rounded-full
            "
          />

          <div
            className="
              relative
              p-[2px]
              rounded-[32px]
              bg-gradient-to-br
              from-blue-500
              via-purple-500
              to-pink-500
            "
          >
            <div
              className="
                rounded-[30px]
                overflow-hidden
                bg-[#0b1020]
              "
            >
              <img
                src={profile}
                alt="Developer Portrait"
                loading="eager"
                className="
                  w-[220px]
                  sm:w-[290px]
                  xl:w-[330px]
                  object-cover
                "
              />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default memo(Hero);