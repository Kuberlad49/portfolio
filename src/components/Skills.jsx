const Skills = () => {
  const skills = ["React", "Tailwind", "Java", "Python"];

  return (
    <section className="px-4 sm:px-8 py-20 text-center">
      <h2 className="text-3xl font-bold mb-12">Skills</h2>

      <div className="flex flex-wrap justify-center gap-6">

        {skills.map((skill, i) => (
          <div
            key={i}
            className="px-6 py-3 rounded-xl border border-[var(--border)] bg-[var(--card)] hover:-translate-y-1 hover:shadow-lg transition"
          >
            <span className="text-sm font-medium text-[var(--text)]">
              {skill}
            </span>
          </div>
        ))}

      </div>
    </section>
  );
};

export default Skills;