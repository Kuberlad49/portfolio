import ThemeToggle from "./ThemeToggle";

const Navbar = () => {
  return (
    <nav className="flex justify-between items-center px-8 py-4 sticky top-0 bg-white/70 dark:bg-gray-900/70 backdrop-blur-md z-50 border-b border-gray-200 dark:border-gray-800">
      <h1 className="text-xl font-bold tracking-wide">Kuber</h1>
      <ThemeToggle />
    </nav>
  );
};

export default Navbar;