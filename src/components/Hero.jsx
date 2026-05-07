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
      min-h-screen
      flex
      items-center
      overflow-hidden
      px-6
      sm:px-8
      lg:px-12
      pt-28
      pb-16
      grid-overlay
    "
    >
      {/* ambient */}
      <div className="purple-glow w-[320px] h-[320px] bg-blue-500/10 top-[6%] left-[-120px]" />
      <div className="purple-glow w-[420px] h-[420px] bg-purple-500/10 bottom-[-10%] right-[-140px]" />

      <div
        className="
        relative
        z-10
        max-w-7xl
        mx-auto
        w-full
        grid
        lg:grid-cols-[1.05fr_0.95fr]
        items-center
        gap-10
        xl:gap-16
      "
      >
        {/* LEFT */}
        <div className="relative z-20 text-center lg:text-left">
          {/* badge */}
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
            bg-[var(--card)]
            backdrop-blur-md
            text-sm
            text-[var(--subtext)]
            shadow-[0_8px_30px_rgba(0,0,0,0.08)]
          "
          >
            <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
            Available for Work
          </motion.div>

          {/* title */}
          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65 }}
            className="
            mt-7
            leading-[0.9]
            tracking-[-4px]
            font-black
          "
          >
            <span className="block text-[var(--text)] text-6xl sm:text-7xl xl:text-[6.5rem]">
              Kuber
            </span>

            <span
              className="
              block
              mt-1
              text-6xl
              sm:text-7xl
              xl:text-[6.5rem]
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

          {/* typing role */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.25 }}
            className="
            mt-5
            text-lg
            sm:text-xl
            text-[var(--subtext)]
            font-medium
            h-8
          "
          >
            {text}
            <span className="text-purple-400">|</span>
          </motion.p>

          {/* description */}
          <motion.p
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.45 }}
            className="
            mt-6
            max-w-[620px]
            text-[15px]
            sm:text-[17px]
            leading-[1.9]
            text-[var(--subtext)]
            mx-auto
            lg:mx-0
          "
          >
            I build high-performance web applications with clean UI,
            smooth interactions, responsive layouts, and modern frontend
            architecture focused on real user experience.
          </motion.p>

          {/* buttons */}
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="
            mt-9
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
              min-w-[210px]
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
              min-w-[210px]
              text-center
            "
            >
              Contact Me
            </a>
          </motion.div>

          {/* stats */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.75 }}
            className="
            mt-12
            grid
            grid-cols-2
            sm:grid-cols-4
            gap-4
            max-w-[760px]
          "
          >
            {stats.map((item, i) => (
              <div
                key={i}
                className="
                hero-card
                px-5
                py-5
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

        {/* RIGHT IMAGE */}
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
          {/* ambient glow */}
          <div
            className="
            absolute
            w-[260px]
            h-[260px]
            sm:w-[380px]
            sm:h-[380px]
            rounded-full
            bg-gradient-to-br
            from-blue-500/20
            via-purple-500/20
            to-pink-500/20
            blur-[100px]
            opacity-60
          "
          />

          {/* frame */}
          <div
            className="
            relative
            float-smooth
            p-[2px]
            rounded-[38px]
            bg-gradient-to-br
            from-blue-500
            via-purple-500
            to-pink-500
            shadow-[0_20px_80px_rgba(99,102,241,0.24)]
          "
          >
            <div
              className="
              relative
              overflow-hidden
              rounded-[36px]
              bg-[#050816]
              border
              border-white/10
            "
            >
              {/* image */}
              <img
                src={profile}
                alt="Kuber Lad"
                loading="eager"
                className="
                hero-portrait
                relative
                z-10
                w-[270px]
                sm:w-[340px]
                xl:w-[380px]
                aspect-[3/4]
                object-cover
                brightness-[0.98]
                contrast-[1.04]
                saturate-[1.02]
              "
              />

              {/* top light */}
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

              {/* bottom depth */}
              <div
                className="
                absolute
                bottom-0
                inset-x-0
                h-28
                bg-gradient-to-t
                from-black/60
                to-transparent
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