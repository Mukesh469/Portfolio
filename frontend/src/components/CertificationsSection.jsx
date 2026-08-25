import { motion } from "framer-motion";

const CertificationsSection = () => {
  return (
    <section className="mx-auto w-full max-w-6xl px-4 py-20 sm:px-6 lg:px-8">
      <motion.h2
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mb-10 text-center text-3xl font-bold text-white sm:text-4xl"
      >
        Certifications
      </motion.h2>

      <div className="grid gap-6 md:grid-cols-3">
        <article className="rounded-3xl border border-white/15 bg-slate-900/55 p-6 text-center backdrop-blur-sm">
          <h3 className="text-xl font-semibold text-cyan-300">React Development</h3>
          <p className="mt-2 text-slate-200">Hands-on certification focused on component architecture, hooks, and app performance.</p>
          <p className="mt-4 text-sm text-slate-400">Issued: 2024</p>
        </article>

        <article className="rounded-3xl border border-white/15 bg-slate-900/55 p-6 text-center backdrop-blur-sm">
          <h3 className="text-xl font-semibold text-cyan-300">Node.js + Express</h3>
          <p className="mt-2 text-slate-200">Backend fundamentals covering API construction, middleware, routing, and deployment basics.</p>
          <p className="mt-4 text-sm text-slate-400">Issued: 2024</p>
        </article>

        <article className="rounded-3xl border border-white/15 bg-slate-900/55 p-6 text-center backdrop-blur-sm">
          <h3 className="text-xl font-semibold text-cyan-300">Git and GitHub Workflow</h3>
          <p className="mt-2 text-slate-200">Version control workflow with branching strategy, pull requests, reviews, and release flow.</p>
          <p className="mt-4 text-sm text-slate-400">Issued: 2024</p>
        </article>
      </div>
    </section>
  );
};

export default CertificationsSection;
