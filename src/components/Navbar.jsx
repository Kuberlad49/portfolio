import ThemeToggle from "./ThemeToggle";
import { motion } from "framer-motion";

const Navbar = () => {
  return (
    <motion.nav
      initial={{ y: -80 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
      className="fixed top-0 left-0 w-full z-50 border-b border-white/10 backdrop-blur-xl bg-white/60 dark:bg-[#020617]/60"
    >
      <div className="max-w-7xl mx-auto px-5 sm:px-8 py-4 flex items-center justify-between">

        <a
          href="/"
          className="text-2xl font-black tracking-tight"
        >
          Kuber
          <span className="text-indigo-500">.</span>
        </a>

        <div className="flex items-center gap-4">

          <div className="hidden sm:flex items-center gap-2 text-sm text-[var(--subtext)] bg-white/40 dark:bg-white/5 border border-[var(--border)] px-3 py-1.5 rounded-full">

            <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></div>

            Available for Work
          </div>

          <ThemeToggle />

        </div>
      </div>
    </motion.nav>
  );
};

export default Navbar;