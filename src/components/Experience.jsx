import { experience } from '../data/content.js'

export default function Experience() {
  return (
    <section id="experience" className="mx-auto max-w-content px-4 py-16 sm:px-6">
      <span className="section-label">// experience</span>
      <h2 className="mb-8 text-2xl font-bold text-base-content sm:text-3xl">
        Where I&rsquo;ve shipped
      </h2>
      <ol className="relative space-y-10 border-l border-base-content/15 pl-6">
        {experience.map((job) => (
          <li key={job.company} className="reveal group relative">
            <span
              className="absolute -left-[1.85rem] top-1.5 h-3 w-3 rounded-full border-2 border-primary bg-base-100 transition-transform duration-300 group-hover:scale-125"
              aria-hidden="true"
            />
            <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1">
              <h3 className="text-lg font-semibold text-base-content">
                {job.company}
                <span className="text-base-content/60"> — {job.role}</span>
              </h3>
              <p className="font-mono text-xs text-base-content/50">
                {job.period} · {job.location}
              </p>
            </div>
            <ul className="mt-3 space-y-2">
              {job.bullets.map((b) => (
                <li key={b} className="flex gap-2.5 text-sm leading-relaxed">
                  <span
                    className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary"
                    aria-hidden="true"
                  />
                  <span className="transition-colors duration-200 hover:text-base-content">{b}</span>
                </li>
              ))}
            </ul>
          </li>
        ))}
      </ol>
    </section>
  )
}
