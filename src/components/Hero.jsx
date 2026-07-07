import { ArrowDown, Download, Github, Linkedin, Mail } from 'lucide-react'
import { hero, meta } from '../data/content.js'
import useTypewriter from '../hooks/useTypewriter.js'

export default function Hero() {
  const typed = useTypewriter(hero.typewriter)

  return (
    <section id="top" className="mx-auto max-w-content px-4 pb-20 pt-16 sm:px-6 sm:pt-24">
      <div className="max-w-3xl">
        <p className="mb-4 font-mono text-sm text-primary">{hero.greeting}</p>
        <h1 className="text-4xl font-extrabold leading-tight tracking-tight text-base-content sm:text-5xl">
          {/* Screen readers get the stable headline; the animation is decorative. */}
          <span className="sr-only">{hero.headline}</span>
          <span aria-hidden="true" className="grid">
            {/* Every phrase stacked invisibly in the same grid cell reserves
                the tallest phrase's height, so the layout never jumps. */}
            {hero.typewriter.map((phrase) => (
              <span key={phrase} className="invisible col-start-1 row-start-1">
                {phrase}
              </span>
            ))}
            <span className="col-start-1 row-start-1">
              {typed}
              <span className="tw-cursor" />
            </span>
          </span>
          <span
            aria-hidden="true"
            className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent"
          >
            {hero.tagline}
          </span>
        </h1>
        <p className="mt-5 max-w-xl text-base leading-relaxed sm:text-lg">{hero.subline}</p>

        <div className="mt-8 flex flex-wrap items-center gap-3">
          <a
            href="#projects"
            className="focus-ring inline-flex items-center gap-2 rounded-md border border-base-content/20 px-4 py-2 text-sm font-semibold text-base-content transition-all duration-200 hover:-translate-y-0.5 hover:border-primary hover:text-primary"
          >
            View Projects <ArrowDown size={15} aria-hidden="true" />
          </a>
          <a
            href={meta.resume}
            download="Saumitra_Dubey_Resume.pdf"
            className="focus-ring inline-flex items-center gap-2 rounded-md bg-primary px-4 py-2 text-sm font-semibold text-primary-content transition-all duration-200 hover:-translate-y-0.5 hover:shadow-md hover:shadow-primary/30"
          >
            <Download size={15} aria-hidden="true" /> Download Resume
          </a>
          <span className="flex items-center gap-1">
            <a
              href={meta.github}
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub profile"
              className="focus-ring icon-hover rounded-md p-2 text-base-content/50"
            >
              <Github size={19} aria-hidden="true" />
            </a>
            <a
              href={meta.linkedin}
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn profile"
              className="focus-ring icon-hover rounded-md p-2 text-base-content/50"
            >
              <Linkedin size={19} aria-hidden="true" />
            </a>
            <a
              href={`mailto:${meta.email}`}
              aria-label="Email Saumitra"
              className="focus-ring icon-hover rounded-md p-2 text-base-content/50"
            >
              <Mail size={19} aria-hidden="true" />
            </a>
          </span>
        </div>

        <ul className="mt-10 flex flex-wrap gap-x-0 gap-y-2 font-mono text-xs text-base-content/50 sm:text-sm">
          {hero.stats.map((s, i) => (
            <li key={s} className="flex items-center transition-colors duration-200 hover:text-primary">
              {i > 0 && (
                <span className="mx-3 text-primary" aria-hidden="true">
                  ·
                </span>
              )}
              {s}
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
