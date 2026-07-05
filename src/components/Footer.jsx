import { Download, Github, Linkedin, Mail, MapPin } from 'lucide-react'
import { footer, meta } from '../data/content.js'

export default function Footer() {
  return (
    <footer id="contact" className="border-t border-base-content/10">
      <div className="mx-auto max-w-content px-4 py-16 sm:px-6">
        <span className="section-label">// contact</span>
        <h2 className="text-2xl font-bold text-base-content sm:text-3xl">{footer.line}</h2>
        <p className="mt-2 flex items-center gap-1.5 text-sm text-base-content/50">
          <MapPin size={14} aria-hidden="true" /> {meta.location}
        </p>

        <div className="mt-6 flex flex-wrap items-center gap-3">
          <a
            href={`mailto:${meta.email}`}
            className="focus-ring inline-flex items-center gap-2 rounded-md bg-primary px-4 py-2 text-sm font-semibold text-primary-content transition-all duration-200 hover:-translate-y-0.5 hover:shadow-md hover:shadow-primary/30"
          >
            <Mail size={15} aria-hidden="true" /> {meta.email}
          </a>
          <a
            href={meta.resume}
            download="Saumitra_Dubey_Resume.pdf"
            className="focus-ring inline-flex items-center gap-2 rounded-md border border-base-content/20 px-4 py-2 text-sm font-semibold text-base-content transition-all duration-200 hover:-translate-y-0.5 hover:border-primary hover:text-primary"
          >
            <Download size={15} aria-hidden="true" /> Resume
          </a>
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
        </div>

        <div className="mt-12 space-y-1.5 font-mono text-xs text-base-content/50">
          <p>
            Built with React + Vite + daisyUI · Deployed via{' '}
            <a
              href={footer.repo}
              target="_blank"
              rel="noreferrer"
              className="focus-ring text-primary hover:underline"
            >
              GitHub Actions
            </a>
          </p>
          <p>© 2026 Saumitra Dubey. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
