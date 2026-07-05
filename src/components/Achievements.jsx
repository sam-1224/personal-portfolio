import { Trophy, GraduationCap, Award, Users } from 'lucide-react'
import { achievements } from '../data/content.js'

const icons = { Trophy, GraduationCap, Award, Users }

export default function Achievements() {
  return (
    <section id="achievements" className="mx-auto max-w-content px-4 py-16 sm:px-6">
      <span className="section-label">// certifications &amp; achievements</span>
      <h2 className="mb-8 text-2xl font-bold text-base-content sm:text-3xl">Proof of work</h2>
      <ul className="grid gap-4 sm:grid-cols-2">
        {achievements.map((a) => {
          const Icon = icons[a.icon]
          return (
            <li
              key={a.text}
              className="reveal card-hover group flex items-start gap-3 rounded-lg border border-base-content/10 bg-base-200/60 p-4"
            >
              <Icon
                className="mt-0.5 shrink-0 text-primary transition-transform duration-300 group-hover:scale-110"
                size={19}
                aria-hidden="true"
              />
              <span className="text-sm leading-relaxed">{a.text}</span>
            </li>
          )
        })}
      </ul>
    </section>
  )
}
