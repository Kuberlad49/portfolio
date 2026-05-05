import { useEffect, useState } from "react";

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
    <section className="relative min-h-screen flex items-center justify-center text-center px-4 sm:px-6 overflow-hidden">

      {/* 🔥 Multiple Glow Layers (depth) */}
      <div className="absolute w-[400px] h-[400px] bg-indigo-600 opacity-20 blur-3xl rounded-full top-10 left-10 animate-pulse"></div>
      <div className="absolute w-[300px] h-[300px] bg-purple-600 opacity-20 blur-3xl rounded-full bottom-10 right-10 animate-pulse"></div>

      {/* 🔥 Content */}
      <div className="z-10 max-w-2xl">

        {/* Name */}
        <h1 className="text-4xl sm:text-6xl md:text-7xl font-extrabold leading-tight">
          Kuber <span className="text-indigo-500">Lad</span>
        </h1>

        {/* Typing Role */}
        <p className="mt-4 text-sm sm:text-lg text-gray-400 h-6">
          {text}
          <span className="animate-pulse">|</span>
        </p>

        {/* Description */}
        <p className="mt-6 text-sm sm:text-base text-gray-500 dark:text-gray-400 px-2">
          I build high-quality web applications with clean UI, strong performance,
          and real-world functionality.
        </p>

        {/* 🔥 CTA */}
        <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">

          <a
            href="#projects"
            className="px-6 py-3 bg-indigo-600 text-white rounded-xl hover:scale-105 hover:shadow-lg"
          >
            View Projects
          </a>

          <a
            href="#contact"
            className="px-6 py-3 border border-gray-500 rounded-xl hover:bg-gray-800"
          >
            Contact Me
          </a>

        </div>

      </div>
    </section>
  );
};

export default Hero;