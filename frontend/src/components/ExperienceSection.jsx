import { motion } from "framer-motion";

const ExperienceSection = () => {
  return (
    <section className="mx-auto w-full max-w-6xl px-4 py-20 sm:px-6 lg:px-8">
      <motion.h2
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mb-10 text-center text-3xl font-bold text-white sm:text-4xl"
      >
        Experience
      </motion.h2>

      <div className="grid gap-6 md:grid-cols-2">
        <article className="rounded-3xl border border-white/15 bg-slate-900/55 p-6 backdrop-blur-sm">
          <p className="text-sm font-semibold uppercase tracking-wide text-cyan-300">Dec 2024 - Present</p>
          <h3 className="mt-2 text-2xl font-semibold text-white">Frontend Developer</h3>
          <p className="mt-1 text-slate-300">MyITROnline Global Service Pvt Ltd, New Delhi</p>
          <ul className="mt-4 list-disc space-y-2 pl-5 text-slate-200">
            <li>Built responsive web modules using React and Tailwind CSS.</li>
            <li>Integrated REST APIs and improved UI performance on production pages.</li>
            <li>Delivered dashboard and profile features with reusable UI patterns.</li>
          </ul>
        </article>

        <article className="rounded-3xl border border-white/15 bg-slate-900/55 p-6 backdrop-blur-sm">
          <p className="text-sm font-semibold uppercase tracking-wide text-cyan-300">Jun 2024 - Jul 2024</p>
          <h3 className="mt-2 text-2xl font-semibold text-white">Training Specialist</h3>
          <p className="mt-1 text-slate-300">Tech Mahindra</p>
          <ul className="mt-4 list-disc space-y-2 pl-5 text-slate-200">
            <li>Completed IT support and troubleshooting track assignments.</li>
            <li>Strengthened professional communication and agile teamwork habits.</li>
            <li>Built a strong foundation in practical software delivery workflows.</li>
          </ul>
        </article>
      </div>
    </section>
  );
};

export default ExperienceSection;
