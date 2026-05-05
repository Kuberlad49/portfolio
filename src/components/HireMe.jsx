const HireMe = () => {
  const points = [
    "I build real projects, not just theory",
    "Clean UI and user-focused design",
    "Fast learner with consistent improvement",
  ];

  return (
    <section className="px-8 py-20 text-center max-w-3xl mx-auto">
      <h2 className="text-3xl font-bold mb-6">Why Hire Me</h2>

      <div className="space-y-4">
        {points.map((p, i) => (
          <div
            key={i}
            className="border p-4 rounded-xl glow hover:scale-[1.02]"
          >
            {p}
          </div>
        ))}
      </div>
    </section>
  );
};

export default HireMe;