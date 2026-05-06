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
        min-h-[88vh]
        flex
        items-center
        justify-center
        overflow-hidden
        px-5
        sm:px-8
        pt-24
        pb-14
      "
    >

      {/* Background */}
      <div className="absolute inset-0 bg-[var(--bg)] -z-30"></div>

      {/* Grid */}
      <div
        className="
          absolute
          inset-0
          opacity-[0.03]
          dark:opacity-[0.05]
          bg-[linear-gradient(to_right,#6366f1_1px,transparent_1px),linear-gradient(to_bottom,#6366f1_1px,transparent_1px)]
          bg-[size:70px_70px]
          -z-20
        "
      />

      {/* Glow Left */}
      <motion.div

        animate={{
          y: [0, -14, 0],
        }}

        transition={{
          duration: 16,
          repeat: Infinity,
          ease: "easeInOut",
        }}

        className="
          absolute
          top-[10%]
          left-[-180px]
          w-[320px]
          h-[320px]
          sm:w-[380px]
          sm:h-[380px]
          bg-gradient-to-br
          from-blue-500/10
          via-purple-500/10
          to-pink-500/10
          blur-[70px]
          rounded-full
          -z-10
        "
      />

      {/* Glow Right */}
      <motion.div

        animate={{
          y: [0, 14, 0],
        }}

        transition={{
          duration: 18,
          repeat: Infinity,
          ease: "easeInOut",
        }}

        className="
          absolute
          bottom-[5%]
          right-[-180px]
          w-[320px]
          h-[320px]
          sm:w-[380px]
          sm:h-[380px]
          bg-gradient-to-br
          from-pink-500/10
          via-purple-500/10
          to-blue-500/10
          blur-[70px]
          rounded-full
          -z-10
        "
      />

      {/* CONTENT */}
      <div
        className="
          relative
          z-10
          max-w-7xl
          w-full
          grid
          lg:grid-cols-2
          gap-12
          xl:gap-16
          items-center
        "
      >

        {/* LEFT */}
        <div className="text-center lg:text-left">

          {/* Badge */}
          <motion.div

            initial={{
              opacity: 0,
              y: 15,
            }}

            animate={{
              opacity: 1,
              y: 0,
            }}

            transition={{
              duration: 0.45,
            }}

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

          {/* Heading */}
          <motion.h1

            initial={{
              opacity: 0,
              y: 30,
            }}

            animate={{
              opacity: 1,
              y: 0,
            }}

            transition={{
              duration: 0.7,
            }}

            className="
              mt-6
              text-4xl
              sm:text-5xl
              xl:text-7xl
              font-black
              tracking-tight
              leading-[0.95]
            "
          >

            <span className="block">
              Kuber
            </span>

            <span
              className="
                block
                mt-2
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

          {/* Role */}
          <motion.p

            initial={{
              opacity: 0,
            }}

            animate={{
              opacity: 1,
            }}

            transition={{
              delay: 0.4,
            }}

            className="
              mt-5
              text-base
              sm:text-lg
              text-[var(--subtext)]
              h-8
              font-medium
            "
          >

            {text}

            <span className="text-indigo-500">
              |
            </span>

          </motion.p>

          {/* Description */}
          <motion.p

            initial={{
              opacity: 0,
              y: 20,
            }}

            animate={{
              opacity: 1,
              y: 0,
            }}

            transition={{
              delay: 0.6,
            }}

            className="
              mt-6
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

            initial={{
              opacity: 0,
              y: 20,
            }}

            animate={{
              opacity: 1,
              y: 0,
            }}

            transition={{
              delay: 0.8,
            }}

            className="
              mt-9
              flex
              flex-wrap
              items-center
              justify-center
              lg:justify-start
              gap-3
              max-w-[380px]
            "
          >

            <a
              href="#projects"

              className="
                premium-btn
                flex-1
                min-w-[150px]
                text-center
                px-5
                py-3
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
                flex-1
                min-w-[150px]
                text-center
                px-5
                py-3
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

          {/* Stats */}
          <motion.div

            initial={{
              opacity: 0,
              y: 30,
            }}

            animate={{
              opacity: 1,
              y: 0,
            }}

            transition={{
              delay: 1,
            }}

            className="
              mt-12
              grid
              grid-cols-2
              sm:grid-cols-4
              gap-4
            "
          >

            {stats.map((item, i) => (

              <motion.div

                key={i}

                whileHover={{
                  y: -3,
                }}

                transition={{
                  duration: 0.2,
                }}

                className="hero-card gpu py-5"
              >

                <h3 className="font-bold text-lg">
                  {item[0]}
                </h3>

                <p className="text-sm text-[var(--subtext)] mt-1">
                  {item[1]}
                </p>

              </motion.div>

            ))}

          </motion.div>

        </div>

        {/* RIGHT IMAGE */}
        <motion.div

          initial={{
            opacity: 0,
            scale: 0.98,
          }}

          animate={{
            opacity: 1,
            scale: 1,
            y: [0, -6, 0],
          }}

          transition={{
            opacity: {
              duration: 0.7,
            },

            scale: {
              duration: 0.7,
            },

            y: {
              duration: 7,
              repeat: Infinity,
              ease: "easeInOut",
            },
          }}

          className="
            relative
            flex
            justify-center
            mt-8
            lg:mt-0
          "
        >

          {/* Glow */}
          <div
            className="
              absolute
              w-[240px]
              h-[240px]
              sm:w-[320px]
              sm:h-[320px]
              bg-gradient-to-br
              from-blue-500/10
              via-purple-500/10
              to-pink-500/10
              blur-[60px]
              rounded-full
            "
          />

          {/* Border */}
          <div
            className="
              relative
              p-[2px]
              rounded-[34px]
              bg-gradient-to-br
              from-blue-500
              via-purple-500
              to-pink-500
              shadow-[0_20px_60px_rgba(99,102,241,0.16)]
            "
          >

            <div
              className="
                rounded-[32px]
                overflow-hidden
                bg-[#0b1020]
              "
            >

              <img
                src={profile}
                alt="Developer Portrait"

                className="
                  w-[220px]
                  sm:w-[290px]
                  xl:w-[340px]
                  object-cover
                  gpu
                "

                loading="eager"
              />

            </div>

          </div>

        </motion.div>

      </div>

    </section>
  );
};

export default memo(Hero);