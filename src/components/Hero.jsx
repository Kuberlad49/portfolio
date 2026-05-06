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
    }, 28);

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
      pb-12
      grid-overlay
    "
    >
      {/* LEFT AMBIENT */}
      <div className="purple-glow w-[320px] h-[320px] bg-blue-500/10 top-[8%] left-[-120px]" />

      {/* RIGHT AMBIENT */}
      <div className="purple-glow w-[380px] h-[380px] bg-pink-500/10 bottom-[0%] right-[-160px]" />

      <div
        className="
        relative
        z-10
        max-w-7xl
        mx-auto
        w-full
        grid
        lg:grid-cols-[1fr_0.92fr]
        gap-14
        items-center
      "
      >
        {/* LEFT CONTENT */}
        <div className="text-center lg:text-left">
          {/* BADGE */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
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
            bg-[var(--card)]
            backdrop-blur-md
            text-sm
            text-[var(--subtext)]
            shadow-[0_8px_30px_rgba(0,0,0,0.08)]
          "
          >
            <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></div>

            Available for Work
          </motion.div>

          {/* TITLE */}
          <motion.h1
            initial={{ opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65 }}
            className="
            mt-6
            text-5xl
            sm:text-6xl
            xl:text-7xl
            font-black
            tracking-[-3px]
            leading-[0.92]
          "
          >
            <span className="block text-[var(--text)]">
              Kuber
            </span>

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
            transition={{ delay: 0.3 }}
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
            <span className="text-purple-400">|</span>
          </motion.p>

          {/* DESCRIPTION */}
          <motion.p
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.45 }}
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
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="
            mt-8
            flex
            flex-col
            sm:flex-row
            items-center
            justify-center
            lg:justify-start
            gap-4
          "
          >
            <a
              href="#projects"
              className="
              premium-btn
              primary-btn
              px-8
              py-4
              rounded-2xl
              text-white
              font-semibold
              min-w-[200px]
              text-center
            "
            >
              View Projects
            </a>

            <a
              href="#contact"
              className="
              premium-btn
              secondary-btn
              px-8
              py-4
              rounded-2xl
              font-semibold
              min-w-[200px]
              text-center
            "
            >
              Contact Me
            </a>
          </motion.div>

          {/* STATS */}
          <motion.div
            initial={{ opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
            className="
            mt-12
            grid
            grid-cols-2
            sm:grid-cols-4
            gap-4
          "
          >
            {stats.map((item, i) => (
              <div
                key={i}
                className="
                hero-card
                p-5
                text-left
              "
              >
                <h3 className="font-bold text-xl">
                  {item[0]}
                </h3>

                <p className="text-sm text-[var(--subtext)] mt-1">
                  {item[1]}
                </p>
              </div>
            ))}
          </motion.div>
        </div>

        {/* RIGHT IMAGE SECTION */}
        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7 }}
          className="
          relative
          flex
          justify-center
          lg:justify-end
        "
        >
          {/* MAIN AMBIENT LIGHT */}
          <div
            className="
            absolute
            w-[280px]
            h-[280px]
            sm:w-[420px]
            sm:h-[420px]
            rounded-full
            bg-gradient-to-br
            from-blue-500/20
            via-purple-500/18
            to-pink-500/18
            blur-[110px]
            opacity-70
          "
          />

          {/* EXTRA SIDE LIGHT */}
          <div
            className="
            absolute
            top-[20%]
            -right-8
            w-[120px]
            h-[260px]
            rounded-full
            bg-pink-500/10
            blur-[70px]
          "
          />

          {/* FRAME */}
          <div
            className="
            relative
            float-smooth
            p-[2px]
            rounded-[42px]
            bg-gradient-to-br
            from-blue-500
            via-purple-500
            to-pink-500
            shadow-[0_20px_80px_rgba(99,102,241,0.22)]
          "
          >
            {/* GLASS CARD */}
            <div
              className="
              relative
              rounded-[40px]
              bg-[#050816]
              backdrop-blur-xl
              overflow-hidden
              border
              border-white/10
            "
            >
              {/* TOP LIGHT */}
              <div
                className="
                absolute
                top-0
                inset-x-0
                h-24
                bg-gradient-to-b
                from-white/10
                to-transparent
                z-20
              "
              />

              {/* SIDE LIGHT */}
              <div
                className="
                absolute
                right-0
                top-0
                bottom-0
                w-[1px]
                bg-gradient-to-b
                from-transparent
                via-pink-400/40
                to-transparent
                z-20
              "
              />

              {/* IMAGE */}
              <img
                src={profile}
                alt="Developer Portrait"
                loading="eager"
                className="
                hero-portrait
                relative
                z-10
                w-[250px]
                sm:w-[340px]
                xl:w-[390px]
                object-cover
                scale-[1.02]
                brightness-[0.96]
                contrast-[1.05]
                saturate-[1.05]
              "
              />

              {/* BOTTOM DEPTH */}
              <div
                className="
                absolute
                bottom-0
                inset-x-0
                h-32
                bg-gradient-to-t
                from-[#050816]
                via-[#050816]/70
                to-transparent
                z-20
              "
              />

              {/* INNER SHADOW */}
              <div
                className="
                absolute
                inset-0
                shadow-[inset_0_0_60px_rgba(0,0,0,0.35)]
                rounded-[40px]
                z-20
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