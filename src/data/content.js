// ── Single source of truth for all site copy ────────────────────────────────
// Honesty rule: real numbers only. Every fact here traces back to the resume.

export const meta = {
  name: 'Saumitra Dubey',
  handle: 'saumitra.dev',
  location: 'Bengaluru, India',
  email: 'saumitradubey1224@gmail.com',
  github: 'https://www.github.com/sam-1224',
  linkedin: 'https://www.linkedin.com/in/saumitra-dubey-b64a49280/',
  resume: 'resume.pdf', // relative → works under the /portfolio/ base path
}

export const hero = {
  greeting: '// QA Engineer @ BlueStacks · B.Tech CSE, IIIT Nagpur ’25',
  headline: 'I test AI in production. I also build it.',
  tagline: 'I also build it.',
  // Rotating typewriter phrases — first one matches the static headline so
  // the page never flashes empty text before the animation starts.
  typewriter: [
    'I test AI in production.',
    'SDET for the AI era — I test LLMs in production and build agents on the side.',
    'I engineer the tests that let teams ship fast without fear.',
    'I write code that tests code — including the AI kind.',
    'I build software end to end — and test it like an adversary.',
  ],
  subline:
    'AI-native quality engineer — 2 years shipping quality for an Android platform used by millions, while building LLM agents, RAG systems, and full-stack apps on the side.',
  stats: [
    '2 yrs QA @ scale',
    '2 shipped AI agent skills',
    '1st place hackathon',
    '5+ products built',
  ],
}

export const pillars = [
  {
    icon: 'BrainCircuit',
    title: 'AI Quality & Evaluation',
    body: 'Testing an embedded LLM assistant in production: accuracy, hallucination, and prompt-regression evaluation, with automated smoke suites in Python.',
  },
  {
    icon: 'TestTubes',
    title: 'Test Automation & Grey-Box Engineering',
    body: 'API testing with Postman, Fiddler, and Charles Proxy; log and adb debugging; Selenium (Python); TestRail and Jira; Jenkins CI/CD releases.',
  },
  {
    icon: 'Layers',
    title: 'Full-Stack & AI Engineering',
    body: 'React, Node/Express, and FastAPI apps; AI agents, graph-vector RAG, and multi-provider LLM applications.',
  },
]

export const experience = [
  {
    company: 'Now.gg (BlueStacks)',
    role: 'QA Engineer',
    period: 'May 2024 – Present',
    location: 'Bengaluru, India',
    bullets: [
      'Built the automated Python smoke test suite for BlueAI, an LLM assistant embedded in the App Player, and drove per-release evaluation of agent responses for accuracy, hallucinations, and prompt regressions.',
      'Owned E2E quality of features spanning client, cloud API, and CDN teams — from PRD analysis and test design in TestRail through defect resolution and verified deployment on production.',
      'Eliminated defects at the root via grey-box debugging across logs, adb, and network traces (Fiddler, Charles Proxy), and validated REST API contracts in Postman — including zero-regression sign-off of a Python-to-Rust backend migration.',
      'Shipped 2 production AI agent skills on the BlueAI platform (blue-shield, deal-keeper) — owning design, prompt engineering, Python/SQLite implementation, and on-platform validation.',
    ],
  },
  {
    company: 'DNote',
    role: 'Software Developer Intern',
    period: 'Sep – Oct 2025',
    location: 'Remote',
    bullets: [
      'Built an internal customer-service dashboard (React.js, Node.js/Express, Supabase) end to end.',
      'Owned backend validation of service data workflows ahead of production, debugging data-consistency issues.',
    ],
  },
]

// Filter tags: All / AI / Automation / Full-Stack
export const projects = [
  {
    featured: true,
    title: 'Recall',
    tags: ['AI'],
    problem: 'Job hunting scatters context across dozens of applications and conversations.',
    build:
      'Agentic job-hunt memory agent on Cognee’s hybrid graph-vector RAG layer spanning 3 datastores (SQLite + LanceDB + Kuzu), with FastAPI ingestion/retrieval pipelines and a one-line switch between self-hosted and cloud back ends.',
    stack: ['Python', 'FastAPI', 'Cognee', 'RAG', 'LanceDB', 'Kuzu', 'SQLite'],
    links: [{ label: 'GitHub', href: 'https://www.github.com/sam-1224', icon: 'Github' }],
  },
  {
    featured: true,
    title: 'TL;DW',
    tags: ['AI'],
    problem: 'Long-form video is slow to consume and every summarizer locks you into one model vendor.',
    build:
      'Open-source YouTube summarizer, provider-agnostic across 4 LLM providers (Anthropic, OpenAI, Gemini, Groq) behind one BYOK interface, with automatic transcript-source fallback and a timeline-scrubber UI.',
    stack: ['Python', 'FastAPI', 'JavaScript', 'LLM APIs'],
    links: [{ label: 'GitHub', href: 'https://www.github.com/sam-1224', icon: 'Github' }],
  },
  {
    featured: false,
    title: 'blue-shield, deal-keeper & BlueDeck',
    tags: ['AI', 'Automation'],
    problem: 'Built at BlueStacks: agent safety, deal tracking, and developer productivity in one sweep.',
    build:
      'Two BlueAI agent skills shipped to production — a zero-LLM triage safety detector and a shopping/price-tracking agent — plus BlueDeck, a developer debugging/testing dashboard that won 1st place at the OpenClaw Hackathon.',
    stack: ['Python', 'SQLite', 'Prompt Engineering', 'Agent Skills'],
    links: [],
    badge: '1st Place · OpenClaw Hackathon',
    note: 'Internal to the BlueAI platform — happy to walk through the design in an interview.',
  },
  {
    featured: false,
    title: 'SpeakEasy',
    tags: ['Full-Stack'],
    problem: 'Language learners rarely get live practice with native speakers.',
    build:
      'Real-time language exchange platform with JWT auth, a dynamic friend system, and Stream API integration for real-time video and group calls.',
    stack: ['React', 'Node.js', 'Express', 'MongoDB', 'JWT', 'Stream API'],
    links: [{ label: 'GitHub', href: 'https://www.github.com/sam-1224', icon: 'Github' }],
  },
]

export const projectFilters = ['All', 'AI', 'Automation', 'Full-Stack']

// Grouped, scannable — no progress bars, no star ratings (spec §5.6).
export const skills = [
  {
    group: 'AI / LLM',
    items: [
      'LLM APIs (Anthropic, OpenAI, Gemini, Groq)',
      'AI Agents & Agent Skills',
      'RAG (graph-vector)',
      'Prompt Engineering',
      'LLM Output Evaluation',
    ],
  },
  {
    group: 'Languages',
    items: ['Python', 'JavaScript', 'Java', 'SQL', 'C++'],
  },
  {
    group: 'Test Automation & Quality',
    items: [
      'Selenium WebDriver (Python)',
      'API Test Automation',
      'Grey-Box Testing',
      'adb',
      'TestRail',
      'Jira',
      'Postman',
      'Fiddler',
      'Charles Proxy',
    ],
  },
  {
    group: 'Web & Backend',
    items: ['React.js', 'Node.js/Express', 'FastAPI', 'REST/HTTP-JSON', 'MySQL', 'MongoDB', 'Supabase'],
  },
  {
    group: 'Data & Tools',
    items: ['Git/GitHub', 'Jenkins CI/CD', 'BigQuery', 'Linux'],
  },
]

export const achievements = [
  { icon: 'Trophy', text: '1st Place, OpenClaw Hackathon (BlueStacks) — BlueDeck' },
  { icon: 'GraduationCap', text: 'NVIDIA DLI: Deep Learning · AI for Anomaly Detection · NLP' },
  { icon: 'Award', text: 'NPTEL “Programming in Java” — 90% (Top 2%)' },
  { icon: 'Users', text: 'Core Member, GDSC IIIT Nagpur (2022–23)' },
]

export const footer = {
  line: 'Open to SDET, QA, and SDE roles.',
  repo: 'https://www.github.com/sam-1224/personal-portfolio',
}
