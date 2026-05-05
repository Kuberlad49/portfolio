const Contact = () => {
  return (
    <section className="px-8 py-16 text-center">
      <h2 className="text-3xl font-bold mb-6">Contact</h2>

      <p className="text-gray-500 dark:text-gray-400">
        Email: your@email.com
      </p>

      <div className="mt-4 flex justify-center gap-6">
        <a href="#" className="hover:text-primary">GitHub</a>
        <a href="#" className="hover:text-primary">LinkedIn</a>
      </div>
    </section>
  );
};

export default Contact;