const Contact = () => {
  return (
    <section
      id="contact"
      className="px-5 sm:px-8 py-24 text-center"
    >

      <h2 className="text-3xl sm:text-4xl font-black mb-6">
        Contact
      </h2>

      <p className="text-[var(--subtext)] text-base sm:text-lg">
        Email: kuberlad49@gmail.com
      </p>

      <div className="mt-8 flex justify-center gap-6 flex-wrap">

        <a
          href="https://github.com/Kuberlad49"
          target="_blank"
          rel="noopener noreferrer"
          className="premium-btn px-6 py-3 rounded-2xl border border-[var(--border)] bg-[var(--card)] backdrop-blur-xl hover:text-indigo-500"
        >
          GitHub
        </a>

        <a
          href="https://www.linkedin.com/in/kuber-lad-50a817290/"
          target="_blank"
          rel="noopener noreferrer"
          className="premium-btn px-6 py-3 rounded-2xl border border-[var(--border)] bg-[var(--card)] backdrop-blur-xl hover:text-indigo-500"
        >
          LinkedIn
        </a>

      </div>
    </section>
  );
};

export default Contact;