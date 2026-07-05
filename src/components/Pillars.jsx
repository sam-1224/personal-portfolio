import { BrainCircuit, TestTubes, Layers } from 'lucide-react'
import { pillars } from '../data/content.js'

const icons = { BrainCircuit, TestTubes, Layers }

export default function Pillars() {
  return (
    <section id="about" className="mx-auto max-w-content px-4 py-16 sm:px-6">
      <span className="section-label">// what i do</span>
      <h2 className="mb-8 text-2xl font-bold text-base-content sm:text-3xl">
        Three sides of the same job
      </h2>
      <div className="grid gap-5 md:grid-cols-3">
        {pillars.map((p) => {
          const Icon = icons[p.icon]
          return (
            <article
              key={p.title}
              className="reveal card-hover group rounded-xl border border-base-content/10 bg-base-200/60 p-6"
            >
              <Icon
                className="mb-4 text-primary transition-transform duration-300 group-hover:scale-110"
                size={26}
                aria-hidden="true"
              />
              <h3 className="mb-2 text-base font-semibold text-base-content">{p.title}</h3>
              <p className="text-sm leading-relaxed">{p.body}</p>
            </article>
          )
        })}
      </div>
    </section>
  )
}
