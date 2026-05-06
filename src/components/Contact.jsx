const Contact = () => {
  return (
    <section
      id="contact"
      className="relative px-5 sm:px-8 py-24 overflow-hidden"
    >

      {/* Background Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[350px] h-[350px] bg-indigo-500/10 blur-[120px] rounded-full"></div>

      <div className="relative z-10 max-w-4xl mx-auto text-center">

        {/* Heading */}
        <h2 className="text-3xl sm:text-5xl font-black mb-5">
          Contact
        </h2>

        {/* Subtitle */}
        <p className="text-[var(--subtext)] text-sm sm:text-base max-w-xl mx-auto leading-relaxed">
          Interested in working together, collaborating,
          or discussing new opportunities?
          Feel free to reach out.
        </p>

        {/* Premium Email Button */}
        <div className="mt-10 flex justify-center">

          <a
            href="mailto:kuberlad49@gmail.com"
            className="group relative overflow-hidden px-7 py-4 rounded-2xl border border-[var(--border)] bg-[var(--card)] backdrop-blur-xl shadow-sm hover:shadow-[0_0_35px_rgba(99,102,241,0.25)] transition-all duration-300"
          >

            {/* Animated Glow */}
            <span className="absolute inset-0 bg-gradient-to-r from-indigo-500/10 via-purple-500/10 to-indigo-500/10 opacity-0 group-hover:opacity-100 transition duration-500"></span>

            {/* Content */}
            <span className="relative z-10 flex items-center gap-3 text-sm sm:text-base font-medium">

              <span className="text-xl">
                📩
              </span>

              <span className="group-hover:text-indigo-500 transition">
                kuberlad49@gmail.com
              </span>

            </span>

          </a>

        </div>

        {/* Social Buttons */}
        <div className="mt-10 flex justify-center gap-5 flex-wrap">

          {/* GitHub */}
          <a
            href="https://github.com/Kuberlad49"
            target="_blank"
            rel="noopener noreferrer"
            className="group relative overflow-hidden px-7 py-4 rounded-2xl border border-[var(--border)] bg-[var(--card)] backdrop-blur-xl shadow-sm hover:shadow-[0_0_30px_rgba(99,102,241,0.2)] transition-all duration-300"
          >

            {/* Glow */}
            <span className="absolute inset-0 bg-gradient-to-r from-indigo-500/10 via-purple-500/10 to-indigo-500/10 opacity-0 group-hover:opacity-100 transition duration-500"></span>

            {/* Content */}
            <span className="relative z-10 flex items-center gap-3 font-medium">

              <span className="text-lg">
                ⚡
              </span>

              <span className="group-hover:text-indigo-500 transition">
                GitHub
              </span>

            </span>

          </a>

          {/* LinkedIn */}
          <a
            href="https://www.linkedin.com/in/kuber-lad-50a817290/"
            target="_blank"
            rel="noopener noreferrer"
            className="group relative overflow-hidden px-7 py-4 rounded-2xl border border-[var(--border)] bg-[var(--card)] backdrop-blur-xl shadow-sm hover:shadow-[0_0_30px_rgba(99,102,241,0.2)] transition-all duration-300"
          >

            {/* Glow */}
            <span className="absolute inset-0 bg-gradient-to-r from-indigo-500/10 via-purple-500/10 to-indigo-500/10 opacity-0 group-hover:opacity-100 transition duration-500"></span>

            {/* Content */}
            <span className="relative z-10 flex items-center gap-3 font-medium">

              <span className="text-lg">
                🔗
              </span>

              <span className="group-hover:text-indigo-500 transition">
                LinkedIn
              </span>

            </span>

          </a>

        </div>

      </div>
    </section>
  );
};

export default Contact;