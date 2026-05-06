import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const ThemeToggle = () => {

  const [dark, setDark] = useState(() => {
    return localStorage.getItem("theme") === "dark";
  });

  useEffect(() => {

    const root = document.documentElement;

    if (dark) {
      root.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      root.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }

  }, [dark]);

  return (

    <motion.button

      whileTap={{ scale: 0.92 }}

      whileHover={{
        scale: 1.04,
        y: -1,
      }}

      transition={{
        type: "spring",
        stiffness: 260,
        damping: 18,
      }}

      onClick={() => setDark(!dark)}

      className="
        premium-btn
        relative
        overflow-hidden
        px-4
        sm:px-5
        py-2.5
        rounded-2xl
        border
        border-[var(--border)]
        bg-white/50
        dark:bg-white/5
        backdrop-blur-md
        shadow-sm
        flex
        items-center
        gap-2
        text-sm
        sm:text-base
        font-medium
      "
    >

      {/* Glow */}
      <span
        className="
          absolute
          inset-0
          opacity-0
          hover:opacity-100
          transition-opacity
          duration-300
          bg-gradient-to-r
          from-indigo-500/10
          via-purple-500/10
          to-pink-500/10
        "
      />

      {/* Icon */}
      <motion.span

        key={dark ? "dark" : "light"}

        initial={{
          rotate: -90,
          opacity: 0,
          scale: 0.7,
        }}

        animate={{
          rotate: 0,
          opacity: 1,
          scale: 1,
        }}

        transition={{
          duration: 0.25,
        }}

        className="relative z-10 text-base"
      >

        {dark ? "☀" : "🌙"}

      </motion.span>

      {/* Text */}
      <span
        className="
          relative
          z-10
          text-[var(--text)]
        "
      >
        {dark ? "Light" : "Dark"}
      </span>

    </motion.button>
  );
};

export default ThemeToggle;