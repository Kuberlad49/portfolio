import ThemeToggle from "./ThemeToggle";
import { motion } from "framer-motion";

const Navbar = () => {

  return (

    <motion.nav

      initial={{
        y: -40,
        opacity: 0,
      }}

      animate={{
        y: 0,
        opacity: 1,
      }}

      transition={{
        duration: 0.4,
        ease: "easeOut",
      }}

      className="
        fixed
        top-0
        left-0
        w-full
        z-50
        border-b
        border-[var(--border)]
        backdrop-blur-xl
        bg-white/45
        dark:bg-[#020617]/65
      "
    >

      <div
        className="
          max-w-7xl
          mx-auto
          px-5
          sm:px-8
          py-3
          flex
          items-center
          justify-between
          gap-4
        "
      >

        {/* LOGO */}
        <motion.a

          href="/"

          whileHover={{
            scale: 1.02,
          }}

          transition={{
            duration: 0.2,
          }}

          className="
            text-xl
            sm:text-2xl
            font-black
            tracking-tight
            shrink-0
            gpu
          "
        >

          <span
            className="
              bg-gradient-to-r
              from-blue-500
              via-purple-500
              to-pink-500
              bg-clip-text
              text-transparent
            "
          >
            Kuber
          </span>

          <span className="text-pink-500">
            .
          </span>

        </motion.a>

        {/* RIGHT */}
        <div
          className="
            flex
            items-center
            gap-2
            sm:gap-4
            shrink-0
          "
        >

          {/* STATUS */}
          <motion.div

            initial={{
              opacity: 0,
              x: 10,
            }}

            animate={{
              opacity: 1,
              x: 0,
            }}

            transition={{
              delay: 0.1,
              duration: 0.3,
            }}

            className="
              hidden
              lg:flex
              items-center
              gap-2
              text-sm
              text-[var(--subtext)]
              bg-white/35
              dark:bg-white/5
              border
              border-[var(--border)]
              px-3
              py-1.5
              rounded-full
              backdrop-blur-md
            "
          >

            <span className="w-2 h-2 rounded-full bg-green-500" />

            Available for Work

          </motion.div>

          <ThemeToggle />

        </div>

      </div>

    </motion.nav>
  );
};

export default Navbar;