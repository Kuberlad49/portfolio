const Skills = () => {
  return (
    <section className="px-8 py-16 text-center">
      <h2 className="text-3xl font-bold mb-6">Skills</h2>

      <div className="flex flex-wrap justify-center gap-4">
        {["React", "Tailwind", "Java", "Python"].map((skill, i) => (
          <span
            key={i}
            className="px-4 py-2 border rounded-lg hover:bg-primary hover:text-white"
          >
            {skill}
          </span>
        ))}
      </div>
    </section>
  );
};

export default Skills;