import { motion } from "framer-motion";

const Contact = () => {
  return (
    <section
      id="contact"
      className="relative px-5 sm:px-8 pt-28 pb-24 overflow-hidden"
    >
      {/* BACKGROUND GLOWS */}
      <div className="absolute top-[-140px] left-[-120px] w-[340px] h-[340px] rounded-full bg-violet-500/20 blur-[130px] pointer-events-none" />

      <div className="absolute bottom-[-140px] right-[-120px] w-[340px] h-[340px] rounded-full bg-blue-500/20 blur-[130px] pointer-events-none" />

      <div className="max-w-6xl mx-auto relative z-10">
        <div className="grid lg:grid-cols-[1fr_420px] gap-14 items-start">
          {/* LEFT */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.45 }}
          >
            <p className="text-sm uppercase tracking-[0.28em] text-violet-500 font-semibold">
              Contact
            </p>

            <h2 className="mt-5 text-4xl sm:text-5xl lg:text-6xl font-black leading-tight tracking-tight dark:text-white text-slate-900">
              Let’s build
              <span className="bg-gradient-to-r from-blue-500 via-violet-500 to-pink-500 bg-clip-text text-transparent">
                {" "}
                something real.
              </span>
            </h2>

            <p className="mt-7 text-[17px] leading-relaxed dark:text-slate-400 text-slate-600 max-w-2xl">
              My first priority is self satisfaction.
              When I start working on something,
              I stay fully focused until the work
              feels complete and polished from my side.
              That mindset helps me deliver work
              with strong attention to detail,
              consistency, and reliability.
            </p>

            <div className="flex items-center gap-3 mt-10">
              <div className="relative flex items-center justify-center">
                <div className="absolute w-4 h-4 rounded-full bg-emerald-500 animate-ping opacity-75" />
                <div className="relative w-3 h-3 rounded-full bg-emerald-500" />
              </div>

              <p className="text-sm dark:text-slate-400 text-slate-600">
                Available for freelance work & collaborations
              </p>
            </div>
          </motion.div>

          {/* RIGHT */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.45, delay: 0.08 }}
            className="rounded-[30px] border dark:border-white/10 border-black/5 dark:bg-[rgba(12,18,38,0.72)] bg-white/70 backdrop-blur-2xl p-6 shadow-[0_25px_80px_rgba(0,0,0,0.08)] dark:shadow-[0_25px_80px_rgba(0,0,0,0.45)]"
          >
            {/* EMAIL */}
            <a
              href="mailto:kuberlad49@gmail.com"
              className="group flex items-center justify-between gap-4 rounded-2xl border dark:border-white/10 border-black/5 dark:bg-white/[0.04] bg-black/[0.02] px-5 py-5 transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl hover:border-violet-500/30"
            >
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-2xl flex items-center justify-center bg-gradient-to-br from-blue-500 via-violet-500 to-pink-500 text-white shadow-lg">
                  <span className="text-[20px]">✉</span>
                </div>

                <div>
                  <p className="text-sm dark:text-slate-400 text-slate-500">
                    Email
                  </p>

                  <h3 className="mt-1 text-lg font-semibold dark:text-white text-slate-900 break-all">
                    kuberlad49@gmail.com
                  </h3>
                </div>
              </div>

              <span className="text-violet-500 text-[22px] transition group-hover:translate-x-1 group-hover:-translate-y-1">
                ↗
              </span>
            </a>

            {/* SOCIALS */}
            <div className="grid grid-cols-2 gap-4 mt-5">
              {/* GITHUB */}
              <a
                href="https://github.com/Kuberlad49"
                target="_blank"
                rel="noopener noreferrer"
                className="group rounded-2xl border dark:border-white/10 border-black/5 dark:bg-white/[0.04] bg-black/[0.02] p-5 transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl hover:border-violet-500/30"
              >
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm dark:text-slate-400 text-slate-500">
                      GitHub
                    </p>

                    <h3 className="mt-2 font-semibold dark:text-white text-slate-900">
                      View Profile
                    </h3>
                  </div>

                  <img
                    src="https://cdn-icons-png.flaticon.com/512/733/733553.png"
                    alt="GitHub"
                    className="w-7 h-7 transition group-hover:scale-110 brightness-125"
                  />
                </div>
              </a>

              {/* LINKEDIN */}
              <a
                href="https://www.linkedin.com/in/kuber-lad-50a817290/"
                target="_blank"
                rel="noopener noreferrer"
                className="group rounded-2xl border dark:border-white/10 border-black/5 dark:bg-white/[0.04] bg-black/[0.02] p-5 transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl hover:border-blue-500/30"
              >
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm dark:text-slate-400 text-slate-500">
                      LinkedIn
                    </p>

                    <h3 className="mt-2 font-semibold dark:text-white text-slate-900">
                      Connect
                    </h3>
                  </div>

                  <img
                    src="https://cdn-icons-png.flaticon.com/512/174/174857.png"
                    alt="LinkedIn"
                    className="w-7 h-7 transition group-hover:scale-110"
                  />
                </div>
              </a>
            </div>
          </motion.div>
        </div>

        {/* FOOTER */}
        <div className="mt-24 pt-8 border-t dark:border-white/10 border-black/5 flex flex-col md:flex-row items-center justify-between gap-5">
          <div>
            <h3 className="text-lg font-bold dark:text-white text-slate-900">
              Kuber Lad
            </h3>

            <p className="mt-2 text-sm dark:text-slate-400 text-slate-500">
              Frontend Developer • UI Focused • Performance Driven
            </p>
          </div>

          <div className="text-sm dark:text-slate-500 text-slate-500 text-center md:text-right">
            <p>© 2026 Kuber Lad. All rights reserved.</p>

            <p className="mt-2">
              Designed & developed with React + Tailwind CSS
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;