import { skills } from '../data/content.js'

export default function Skills() {
  return (
    <section id="skills" className="mx-auto max-w-content px-4 py-16 sm:px-6">
      <span className="section-label">// skills</span>
      <h2 className="mb-8 text-2xl font-bold text-base-content sm:text-3xl">Toolbox</h2>
      <div className="grid gap-x-10 gap-y-8 sm:grid-cols-2 lg:grid-cols-3">
        {skills.map((g) => (
          <div key={g.group} className="reveal">
            <h3 className="mb-3 font-mono text-sm font-semibold text-primary">{g.group}</h3>
            <ul className="flex flex-wrap gap-1.5">
              {g.items.map((item) => (
                <li key={item} className="chip">
                  {item}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  )
}
