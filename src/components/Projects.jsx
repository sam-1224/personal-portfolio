import { useState } from 'react'
import { Github, Trophy } from 'lucide-react'
import { projects, projectFilters } from '../data/content.js'

const linkIcons = { Github }

function ProjectCard({ p }) {
  return (
    <article
      className={`reveal card-hover flex flex-col rounded-xl border border-base-content/10 bg-base-200/60 p-6 ${
        p.featured ? 'ring-1 ring-primary/30' : ''
      }`}
    >
      <div className="mb-2 flex items-start justify-between gap-3">
        <h3 className="text-base font-semibold text-base-content">{p.title}</h3>
        {p.featured && <span className="chip border-primary/40 text-primary">featured</span>}
      </div>
      <p className="text-sm font-medium text-base-content/80">{p.problem}</p>
      <p className="mt-2 flex-1 text-sm leading-relaxed">{p.build}</p>

      {p.badge && (
        <p className="mt-3 inline-flex items-center gap-1.5 font-mono text-xs text-warning">
          <Trophy size={13} aria-hidden="true" /> {p.badge}
        </p>
      )}
      {p.note && <p className="mt-1.5 text-xs italic text-base-content/50">{p.note}</p>}

      <div className="mt-4 flex flex-wrap gap-1.5">
        {p.stack.map((s) => (
          <span key={s} className="chip">
            {s}
          </span>
        ))}
      </div>

      {p.links.length > 0 && (
        <div className="mt-4 flex gap-3">
          {p.links.map((l) => {
            const Icon = linkIcons[l.icon]
            return (
              <a
                key={l.label}
                href={l.href}
                target="_blank"
                rel="noreferrer"
                className="focus-ring inline-flex items-center gap-1.5 text-sm font-medium text-primary transition-all duration-200 hover:gap-2.5 hover:underline"
              >
                {Icon && <Icon size={15} aria-hidden="true" />} {l.label}
              </a>
            )
          })}
        </div>
      )}
    </article>
  )
}

export default function Projects() {
  const [filter, setFilter] = useState('All')
  const visible = projects.filter((p) => filter === 'All' || p.tags.includes(filter))

  return (
    <section id="projects" className="mx-auto max-w-content px-4 py-16 sm:px-6">
      <span className="section-label">// projects</span>
      <h2 className="mb-6 text-2xl font-bold text-base-content sm:text-3xl">
        Things I&rsquo;ve built
      </h2>

      <div role="group" aria-label="Filter projects" className="mb-8 flex flex-wrap gap-2">
        {projectFilters.map((f) => (
          <button
            key={f}
            type="button"
            onClick={() => setFilter(f)}
            aria-pressed={filter === f}
            className={`focus-ring rounded-full px-3.5 py-1.5 font-mono text-xs transition-all duration-200 ${
              filter === f
                ? 'bg-primary font-semibold text-primary-content shadow-md shadow-primary/25'
                : 'border border-base-content/20 text-base-content/70 hover:-translate-y-0.5 hover:border-primary hover:text-primary'
            }`}
          >
            {f}
          </button>
        ))}
      </div>

      <div className="grid gap-5 md:grid-cols-2">
        {visible.map((p) => (
          <ProjectCard key={p.title} p={p} />
        ))}
      </div>
    </section>
  )
}
