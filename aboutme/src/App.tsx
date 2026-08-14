import { useEffect, useRef, useState, type TouchEvent } from 'react'

const SWIPE_THRESHOLD = 50

const BASE_BOX_WIDTH = 220
const BASE_BOX_HEIGHT = 190
const BASE_OFFSET = 210

const skillCategories = [
  {
    category: 'Languages',
    skills: ['JavaScript', 'TypeScript', 'Python', 'HTML/CSS'],
  },
  {
    category: 'Frontend',
    skills: ['React', 'Tailwind', 'Bootstrap', 'MaterialUI', 'Vite'],
  },
  {
    category: 'Hobbies',
    skills: ['Basketball', 'Jiu Jitsu', 'Gaming', 'Coding'],
  },
  {
    category: 'Backend + Tools',
    skills: [
      'Node.js',
      'FastAPI',
      'Gunicorn',
      'MySQL',
      'PostgreSQL',
      'NoSQL (MongoDB)',
      'Asana',
      'Claude',
      'Git',
    ],
  },
]

const experience = [
  {
    title: 'Hedge Fund',
    role: 'Software Engineer',
    timeSpent: 'May 2023 — Present',
    caption:
      'Building tools, including model development, dashboards, and data pipelines, to support traders. While also building products for our investors and internal departments to faciliate different needs.',
    note: '* Name redacted for compliance reasons.',
  },
  {
    title: 'RedMane Technology LLC.',
    role: 'Software Engineer',
    timeSpent: 'July 2022 — May 2023',
    caption:
      'Built applications with the State of Missouri to provide citizens access to financial aid programs, while also empowering government case workers the ability to manage these new and ongoing applications.',
  },
  {
    title: 'HBR Consulting',
    role: 'Full-Stack Engineer Intern',
    timeSpent: 'August 2021 — July 2022',
    caption: 'Full-stack intern where I increased overall employee collaboration and connection.',
  },
]

const projects = [
  {
    title: 'Gardenia',
    link: 'https://www.usegardenia.com/',
    linkLabel: 'view site',
    description:
      'A application managing rental properties. Tracking tenants, leases, accounting, and payments in one place.',
    tags: ['React', 'TypeScript', 'Node', 'PostgreSQL', 'AI', 'Twilio', 'Prisma', 'Stripe'],
  },
  {
    title: 'Sports Trader',
    link: 'https://github.com/KevinGuillaume/ShadowTrader',
    linkLabel: 'view code',
    description:
      "A polymarket aggregator that lets you look at current and upcoming sports games. Shows their odds and additional information. Lets you see players on a team's roster and see how they perform against their opponent.",
    tags: ['API', 'React', 'TypeScript', 'Python', 'PostgreSQL'],
  },
  {
    title: 'Realtime Stocks',
    link: 'https://marketalertandwatch.live',
    linkLabel: 'view site',
    description:
      'A web app where a trader can watch live stock charts with technical analysis tools, and set custom alerts ("notify me when X happens") that fire in real time.',
    tags: ['React', 'TypeScript', 'Python', 'WebSockets', 'PostgreSQL'],
  },
  {
    title: 'Agents Find Jobs',
    link: 'https://agentsfindjobs.vercel.app',
    linkLabel: 'view site',
    description:
      'A web application meant for agentic payments to handle job searching. Payments are handled through MPP.',
    tags: ['Next.js', 'Blockchain', 'Tempo', 'MPP'],
  },
]

const slides = [
  {
    title: 'About Me',
    body: 'Placeholder content for the first slide.',
    content: 'This is the detail content for Box One.',
    bg: '/ff7.jpeg',
    font: "'Cinzel Decorative', serif",
    titlePosition: 'top-center',
  },
  {
    title: 'Experience',
    body: 'Placeholder content for the second slide.',
    content: 'This is the detail content for Box Two.',
    bg: '/totk.jpg',
    font: "'MedievalSharp', cursive",
    titlePosition: 'center-left',
  },
  {
    title: 'Projects',
    body: 'Placeholder content for the third slide.',
    content: 'This is the detail content for Box Three.',
    bg: '/silksong.jpg',
    font: "'Trajan Pro', 'Trajan Pro 3', Cinzel, serif",
    titlePosition: 'center',
  },
  {
    title: 'Skills',
    body: 'Placeholder content for the fourth slide.',
    content: 'This is the detail content for Box Four.',
    bg: '/elden.jpg',
    font: "'Mantinia', 'Mantinia Regular', Cinzel, serif",
    titlePosition: 'top-center',
    titleSize: 34,
  },
  // {
  //   title: 'Reading',
  //   body: 'Placeholder content for the fifth slide.',
  //   content: 'This is the detail content for Box Five.',
  //   bg: '/gow.jpeg',
  //   font: "'Bebas Neue', sans-serif",
  //   titlePosition: 'bottom-center',
  // },
  // {
  //   title: 'Music',
  //   body: 'Placeholder content for the sixth slide.',
  //   content: 'This is the detail content for Box Six.',
  //   bg: '/batman.jpg',
  //   font: "'Anton', sans-serif",
  //   titlePosition: 'top-right',
  // },
] as const

const TITLE_POSITION_CLASSES: Record<string, string> = {
  'top-left': 'items-start justify-start text-left',
  'top-center': 'items-start justify-center text-center',
  'top-right': 'items-start justify-end text-right',
  center: 'items-center justify-center text-center',
  'center-left': 'items-center justify-start text-left',
  'center-right': 'items-center justify-end text-right',
  'bottom-left': 'items-end justify-start text-left',
  'bottom-center': 'items-end justify-center text-center',
  'bottom-right': 'items-end justify-end text-right',
}

function ExperienceCard({ job }: { job: (typeof experience)[number] }) {
  return (
    <div className="rounded-lg border border-white/20 bg-[#232222] p-6">
      <div className="flex flex-wrap items-center justify-between gap-2">
        <h3 className="m-0 flex items-center gap-2 text-lg text-white">
          <BriefcaseIcon className="text-white/50" />
          {job.title}
          {'note' in job && job.note && <span className="text-white/60">*</span>}
        </h3>
        <span className="flex items-center gap-1.5 text-[13px] text-white/60">
          <CalendarIcon />
          {job.timeSpent}
        </span>
      </div>
      <span className="mb-2 mt-2 inline-block rounded-full border border-white/20 px-3 py-1 text-xs text-white/70">
        {job.role}
      </span>
      <p className="my-3 pl-4 text-sm text-white/90">{job.caption}</p>
      {'note' in job && job.note && (
        <p className="mt-4 pl-4 text-xs italic text-white/50">{job.note}</p>
      )}
    </div>
  )
}

function Background({ index }: { index: number }) {
  return (
    <div className="fixed inset-0 -z-10">
      {slides.map((slide, i) => (
        <div
          key={slide.title}
          className="absolute inset-0 bg-cover bg-center transition-opacity duration-700 ease-in-out"
          style={{
            backgroundImage: `url(${slide.bg})`,
            opacity: i === index ? 1 : 0,
          }}
        />
      ))}
      <div className="absolute inset-0 bg-[var(--bg)] opacity-70" />
    </div>
  )
}

function Carousel({
  index,
  onSelect,
}: {
  index: number
  onSelect: (index: number) => void
}) {
  const touchStartX = useRef<number | null>(null)

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowLeft') {
        onSelect(Math.max(0, index - 1))
      } else if (e.key === 'ArrowRight') {
        onSelect(Math.min(slides.length - 1, index + 1))
      }
    }
    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [index, onSelect])

  const handleTouchStart = (e: TouchEvent) => {
    touchStartX.current = e.touches[0].clientX
  }

  const handleTouchEnd = (e: TouchEvent) => {
    if (touchStartX.current === null) return
    const delta = e.changedTouches[0].clientX - touchStartX.current
    touchStartX.current = null

    if (delta > SWIPE_THRESHOLD) {
      onSelect(Math.max(0, index - 1))
    } else if (delta < -SWIPE_THRESHOLD) {
      onSelect(Math.min(slides.length - 1, index + 1))
    }
  }

  return (
    <div className="w-full my-2 overflow-x-hidden px-6">
      <div
        className="relative h-60 flex items-center justify-start [perspective:1000px]"
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}
      >
        {slides.map((slide, i) => {
          const offset = i - index
          const isActive = offset === 0

          return (
            <button
              key={slide.title}
              type="button"
              onClick={() => onSelect(i)}
              className="absolute overflow-hidden rounded-lg bg-cover bg-center transition-all duration-300 ease-in-out"
              style={{
                width: BASE_BOX_WIDTH,
                height: BASE_BOX_HEIGHT,
                backgroundImage: `url(${slide.bg})`,
                transform: `translateX(${offset * BASE_OFFSET}px) scale(${isActive ? 1 : 0.85})`,
                zIndex: isActive ? 10 : 10 - Math.abs(offset),
                opacity: isActive ? 1 : 0.6,
                boxShadow: isActive
                  ? '0 0 24px 6px rgba(59, 130, 246, 0.5)'
                  : 'none',
              }}
            >
              <div className="absolute inset-0 bg-black/40" />
              <div
                className={`absolute inset-0 flex p-4 ${TITLE_POSITION_CLASSES[slide.titlePosition]}`}
              >
                <h2
                  style={{
                    color: 'white',
                    fontFamily: slide.font,
                    fontWeight: 700,
                    fontSize: 'titleSize' in slide ? slide.titleSize : undefined,
                  }}
                >
                  {slide.title}
                </h2>
              </div>
            </button>
          )
        })}
      </div>
    </div>
  )
}

function WifiIcon() {
  return (
    <svg
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="none"
      stroke="white"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M2 8.82a16 16 0 0 1 20 0" />
      <path d="M5 12.86a11 11 0 0 1 14 0" />
      <path d="M8.5 17a6 6 0 0 1 7 0" />
      <circle cx="12" cy="20" r="1" fill="white" stroke="none" />
    </svg>
  )
}

function Clock() {
  const [now, setNow] = useState(() => new Date())

  useEffect(() => {
    const id = setInterval(() => setNow(new Date()), 1000)
    return () => clearInterval(id)
  }, [])

  return (
    <span className="text-base text-white">
      {now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
    </span>
  )
}

function GithubIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="white">
      <path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.44 9.8 8.21 11.39.6.11.82-.26.82-.58 0-.29-.01-1.04-.02-2.04-3.34.73-4.04-1.61-4.04-1.61-.55-1.39-1.34-1.76-1.34-1.76-1.09-.75.08-.73.08-.73 1.21.08 1.84 1.24 1.84 1.24 1.07 1.84 2.81 1.3 3.5.99.11-.78.42-1.3.76-1.6-2.67-.3-5.47-1.33-5.47-5.93 0-1.31.47-2.38 1.24-3.22-.12-.3-.54-1.52.12-3.18 0 0 1.01-.32 3.3 1.23a11.5 11.5 0 0 1 6 0c2.29-1.55 3.3-1.23 3.3-1.23.66 1.66.24 2.88.12 3.18.77.84 1.24 1.91 1.24 3.22 0 4.61-2.81 5.63-5.48 5.93.43.37.81 1.1.81 2.22 0 1.6-.02 2.89-.02 3.29 0 .32.22.7.83.58C20.56 21.8 24 17.3 24 12c0-6.63-5.37-12-12-12Z" />
    </svg>
  )
}

function XIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="white">
      <path d="M18.24 2h3.3l-7.2 8.23L23 22h-6.63l-5.2-6.8L5.2 22H1.9l7.7-8.8L1 2h6.8l4.7 6.2Zm-1.16 18h1.83L7.02 3.9H5.06Z" />
    </svg>
  )
}

function EmailIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="white">
      <path d="M2 4h20a1 1 0 0 1 1 1v14a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V5a1 1 0 0 1 1-1Zm18.4 2H3.6l8.4 6.6L20.4 6ZM3 7.4V18h18V7.4l-9 7.1-9-7.1Z" />
    </svg>
  )
}

function ResumeIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="white">
      <path d="M6 2h9l5 5v15a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1V3a1 1 0 0 1 1-1Zm8 1.5V8h4.5L14 3.5ZM8 12h8v1.5H8V12Zm0 3.5h8V17H8v-1.5ZM8 8.5h4V10H8V8.5Z" />
    </svg>
  )
}

function SpotifyIcon({ className }: { className?: string }) {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="#1DB954" className={className}>
      <path d="M12 0a12 12 0 1 0 0 24 12 12 0 0 0 0-24Zm5.5 17.3a.75.75 0 0 1-1.03.26c-2.82-1.72-6.37-2.11-10.55-1.16a.75.75 0 1 1-.33-1.46c4.58-1.04 8.5-.6 11.65 1.32.36.22.47.68.26 1.04Zm1.47-3.27a.94.94 0 0 1-1.29.31c-3.23-1.99-8.15-2.56-11.97-1.4a.94.94 0 1 1-.55-1.8c4.36-1.32 9.78-.68 13.5 1.6a.94.94 0 0 1 .31 1.29Zm.13-3.4C15.9 8.36 9.98 8.15 6.6 9.18a1.13 1.13 0 1 1-.66-2.16c3.88-1.18 10.42-.94 14.53 1.5a1.13 1.13 0 0 1-1.15 1.94Z" />
    </svg>
  )
}

function SparkleIcon({ className }: { className?: string }) {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" className={className}>
      <path d="M12 2l1.8 5.9L20 10l-6.2 2.1L12 18l-1.8-5.9L4 10l6.2-2.1L12 2Z" />
    </svg>
  )
}

function BriefcaseIcon({ className }: { className?: string }) {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <rect x="2" y="7" width="20" height="14" rx="2" />
      <path d="M8 7V5a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" />
      <path d="M2 12h20" />
    </svg>
  )
}

function CalendarIcon({ className }: { className?: string }) {
  return (
    <svg
      width="14"
      height="14"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <rect x="3" y="4" width="18" height="18" rx="2" />
      <path d="M16 2v4M8 2v4M3 10h18" />
    </svg>
  )
}

function FolderIcon({ className }: { className?: string }) {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <path d="M3 7a2 2 0 0 1 2-2h4l2 2h8a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V7Z" />
    </svg>
  )
}

function ExternalLinkIcon({ className }: { className?: string }) {
  return (
    <svg
      width="12"
      height="12"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
      <path d="M15 3h6v6M10 14 21 3" />
    </svg>
  )
}

function CodeIcon({ className }: { className?: string }) {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <path d="m8 6-6 6 6 6M16 6l6 6-6 6" />
    </svg>
  )
}

function LayoutIcon({ className }: { className?: string }) {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <rect x="3" y="3" width="18" height="18" rx="2" />
      <path d="M3 9h18M9 21V9" />
    </svg>
  )
}

function ServerIcon({ className }: { className?: string }) {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <rect x="2" y="3" width="20" height="7" rx="1.5" />
      <rect x="2" y="14" width="20" height="7" rx="1.5" />
      <path d="M6 6.5h.01M6 17.5h.01" />
    </svg>
  )
}

function GamepadIcon({ className }: { className?: string }) {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <path d="M6 12h4m-2-2v4m5-3h.01M17 13h.01" />
      <path d="M17.5 6h-11A4.5 4.5 0 0 0 2 10.5v3A4.5 4.5 0 0 0 6.5 18h.5l2-2h6l2 2h.5a4.5 4.5 0 0 0 4.5-4.5v-3A4.5 4.5 0 0 0 17.5 6Z" />
    </svg>
  )
}

const SKILL_CATEGORY_ICONS: Record<string, (props: { className?: string }) => React.ReactElement> = {
  Languages: CodeIcon,
  Frontend: LayoutIcon,
  'Backend + Tools': ServerIcon,
  Hobbies: GamepadIcon,
}

const SKILL_CATEGORY_ACCENTS: Record<string, string> = {
  Languages: 'text-blue-400',
  Frontend: 'text-fuchsia-400',
  'Backend + Tools': 'text-emerald-400',
  Hobbies: 'text-amber-400',
}

const SKILL_CATEGORY_SPANS: Record<string, string> = {
  Hobbies: 'col-span-2',
  'Backend + Tools': 'col-span-2',
}

function LinkedinIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="white">
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  )
}

function App() {
  const [index, setIndex] = useState(0)

  return (
    <>
      <Background index={index} />

      <header className="relative flex items-center justify-between px-6 py-4">
        <div className="flex items-center gap-3">
          <div
            className="relative h-10 w-10 rounded-full border-2 border-blue-500 bg-[var(--code-bg)] bg-cover bg-center"
            style={{ backgroundImage: 'url(/avatar.png)' }}
          >
            <span className="absolute bottom-0 right-0 flex h-3 w-3">
              <span className="animate-pulse-ring absolute inline-flex h-full w-full rounded-full bg-green-500" />
              <span className="relative h-3 w-3 rounded-full border-2 border-[var(--bg)] bg-green-500" />
            </span>
          </div>
          <span className="hidden font-medium text-white sm:inline">Kevin Guillaume</span>
        </div>

        <div className="absolute left-1/2 top-1/2 flex -translate-x-1/2 -translate-y-1/2 items-center gap-4 rounded-full border border-white/20 bg-black/10 px-5 py-2.5 backdrop-blur-md">
          <a
            href="https://github.com/KevinGuillaume"
            target="_blank"
            rel="noopener noreferrer"
            className="transition-transform duration-200 ease-out hover:scale-125 hover:-translate-y-0.5"
          >
            <GithubIcon />
          </a>
          <a
            href="https://linkedin.com/in/kevin-guillaume-722544239/"
            target="_blank"
            rel="noopener noreferrer"
            className="transition-transform duration-200 ease-out hover:scale-125 hover:-translate-y-0.5"
          >
            <LinkedinIcon />
          </a>
          <a
            href="https://x.com/KevinG11_?lang=en"
            target="_blank"
            rel="noopener noreferrer"
            className="transition-transform duration-200 ease-out hover:scale-125 hover:-translate-y-0.5"
          >
            <XIcon />
          </a>
          <a
            href="mailto:keving3492@gmail.com"
            className="transition-transform duration-200 ease-out hover:scale-125 hover:-translate-y-0.5"
          >
            <EmailIcon />
          </a>
          <a
            href="/KevinResume_2026.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="transition-transform duration-200 ease-out hover:scale-125 hover:-translate-y-0.5"
          >
            <ResumeIcon />
          </a>
        </div>

        <div className="flex items-center gap-2">
          <span className="hidden sm:block">
            <WifiIcon />
          </span>
          <Clock />
        </div>
      </header>

      <Carousel index={index} onSelect={setIndex} />

      <main className="min-h-0 flex-1 overflow-y-auto px-8 text-left">
        <div key={index} className="animate-slide-up">
          <h2 style={{ color: 'white', fontSize: 32 }}>{slides[index].title}</h2>
          {index === 0 && (
            <>
              <div className="mt-6 flex max-w-5xl flex-col gap-4 sm:flex-row sm:gap-12">
                <div>
                  <div className="text-sm text-white/60">Current Role</div>
                  <div className="mt-1 text-lg text-white/90">Software Engineer</div>
                </div>
                <div>
                  <div className="text-sm text-white/60">Last Listened</div>
                  <div className="mt-1 flex items-center gap-2 text-lg text-white/90">
                    <SpotifyIcon />
                    93 'til Infinity
                  </div>
                </div>
                <div>
                  <div className="text-sm text-white/60">Last Watched</div>
                  <div className="mt-1 flex items-center gap-2 text-lg text-white/90">
                    <img src="/filmposter.jpg" alt="The Odyssey poster" className="h-5 w-5 rounded-sm object-cover" />
                    The Odyssey
                  </div>
                </div>
              </div>
              <div className="mt-4 flex max-w-5xl flex-col gap-4 md:flex-row">
                <div className="flex-1 rounded-lg border border-white/20 bg-[#232222] p-6">
                  <p className="text-lg text-white/90">
                    I'm a <span className="font-bold text-blue-500">software engineer</span>{' '}
                    passionate about exploring technology and its real-world applications. I focus
                    on building high-performance applications that users enjoy, blending practical
                    innovation with seamless user experiences. I'm especially drawn to AI and how
                    it can be applied to make everyday life easier.
                  </p>
                </div>
                <div className="rounded-lg border border-white/20 bg-[#232222] p-4 text-left md:w-48">
                  <div className="flex items-center gap-1.5 text-sm text-white/60">
                    <SparkleIcon />
                    Current Interests
                  </div>
                  <div className="mt-2 flex flex-wrap gap-1.5">
                    {['Agents', 'LLMs','Low Level Python', 'Multi processing', 'Optimizations'].map(
                      (interest) => (
                        <span
                          key={interest}
                          className="rounded-full border border-white/20 px-3 py-1 text-xs text-white/90"
                        >
                          {interest}
                        </span>
                      ),
                    )}
                  </div>
                </div>
              </div>
            </>
          )}

          {index === 1 && (
            <>
              <div className="relative mt-6 sm:hidden">
                <span className="mb-1 block pl-12 text-xs font-semibold uppercase tracking-wide text-white/50">
                  Now
                </span>
                <div className="absolute left-4 top-7 bottom-7 w-0.5 bg-white/20" />
                <div className="flex flex-col gap-8">
                  {experience.map((job) => (
                    <div key={job.title} className="relative pl-12">
                      <span className="absolute left-[11px] top-1.5 h-3 w-3 rounded-full bg-blue-500" />
                      <ExperienceCard job={job} />
                    </div>
                  ))}
                </div>
                <span className="mt-1 block pl-12 text-xs font-semibold uppercase tracking-wide text-white/50">
                  Past
                </span>
              </div>

              <div className="relative mt-10 hidden sm:block">
                <span className="absolute -top-6 left-0 text-xs font-semibold uppercase tracking-wide text-white/50">
                  Now
                </span>
                <span className="absolute -top-6 right-0 text-xs font-semibold uppercase tracking-wide text-white/50">
                  Past
                </span>
                <div className="absolute left-0 right-0 top-[13px] h-0.5 bg-white/20" />
                <div className="flex gap-6">
                  {experience.map((job) => (
                    <div key={job.title} className="relative flex-1 pt-10">
                      <span className="absolute left-1/2 top-2 h-3 w-3 -translate-x-1/2 rounded-full bg-blue-500" />
                      <ExperienceCard job={job} />
                    </div>
                  ))}
                </div>
              </div>
            </>
          )}

          {index === 2 && (
            <div className="mt-6 flex flex-col flex-wrap gap-4 sm:flex-row">
              {projects.map((project) => (
                <div
                  key={project.title}
                  className="rounded-lg border border-white/20 bg-[#232222] p-6 sm:min-w-[280px] sm:flex-1"
                >
                  <div className="flex flex-wrap items-center justify-between gap-2">
                    <h3 className="m-0 flex items-center gap-2 text-lg text-white">
                      <FolderIcon className="text-white/50" />
                      {project.title}
                    </h3>
                    {project.link && (
                      <a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-1.5 text-[13px] text-white/70 hover:text-white"
                      >
                        <ExternalLinkIcon />
                        {project.linkLabel}
                      </a>
                    )}
                  </div>
                  <p className="mt-3 text-sm text-white/80">{project.description}</p>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded border border-white/20 px-2.5 py-1 text-[12px] text-white/70"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          )}

          {index === 3 && (
            <div className="mt-6 grid grid-cols-2 gap-4 lg:grid-cols-4">
              {skillCategories.map((group) => {
                const CategoryIcon = SKILL_CATEGORY_ICONS[group.category]
                const accent = SKILL_CATEGORY_ACCENTS[group.category] ?? 'text-white/60'
                const span = SKILL_CATEGORY_SPANS[group.category] ?? ''
                return (
                  <div
                    key={group.category}
                    className={`rounded-lg border border-white/20 bg-[#232222] p-4 transition-transform duration-200 ease-out hover:-translate-y-1 ${span}`}
                  >
                    <div className={`flex items-center gap-1.5 text-sm font-semibold ${accent}`}>
                      {CategoryIcon && <CategoryIcon />}
                      {group.category}
                    </div>
                    <div className="mt-3 flex flex-wrap gap-1.5">
                      {group.skills.map((skill) => (
                        <span
                          key={skill}
                          className="rounded-full border border-white/20 bg-white/5 px-2.5 py-1 text-xs text-white/90"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                )
              })}
            </div>
          )}

          {(index === 4 || index === 5) && (
            <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-3">
              {[0, 1, 2].map((i) => (
                <div
                  key={i}
                  className="min-h-64 rounded-lg border border-white/20 bg-[#232222]"
                />
              ))}
            </div>
          )}
        </div>
      </main>

      <footer className="px-8 py-3 text-center text-xs text-white/50">
        My design here is inspired by some of the awesome games I've played over the years,
        as well as the PlayStation 5, each carousel slide styled after one of them.
      </footer>
    </>
  )
}

export default App
