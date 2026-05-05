const Certificates = () => {
  const certs = [
    "Web Development Certificate",
    "Java Programming",
    "Python Basics",
  ];

  return (
    <section className="px-8 py-20">
      <h2 className="text-3xl font-bold text-center mb-10">Certificates</h2>

      <div className="flex flex-wrap justify-center gap-6">
        {certs.map((c, i) => (
          <div
            key={i}
            className="px-6 py-4 border rounded-xl glow hover:-translate-y-1"
          >
            {c}
          </div>
        ))}
      </div>
    </section>
  );
};

export default Certificates;