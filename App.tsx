import { useEffect, useRef, useState, type TouchEvent } from 'react'

const SWIPE_THRESHOLD = 50

const BASE_BOX_WIDTH = 320
const BASE_BOX_HEIGHT = 280
const BASE_OFFSET = 300
const BASE_VIEWPORT = 700

function useResponsiveScale() {
  const [scale, setScale] = useState(1)

  useEffect(() => {
    const compute = () => {
      setScale(Math.min(1, Math.max(0.5, window.innerWidth / BASE_VIEWPORT)))
    }
    compute()
    window.addEventListener('resize', compute)
    return () => window.removeEventListener('resize', compute)
  }, [])

  return scale
}

const slides = [
  {
    title: 'Box One',
    body: 'Placeholder content for the first slide.',
    content: 'This is the detail content for Box One.',
    bg: '/images/ff7.jpeg',
  },
  {
    title: 'Box Two',
    body: 'Placeholder content for the second slide.',
    content: 'This is the detail content for Box Two.',
    bg: '/images/totk.jpg',
  },
  {
    title: 'Box Three',
    body: 'Placeholder content for the third slide.',
    content: 'This is the detail content for Box Three.',
    bg: '/images/silksong.jpg',
  },
  {
    title: 'Box Four',
    body: 'Placeholder content for the fourth slide.',
    content: 'This is the detail content for Box Four.',
    bg: '/images/elden.jpg',
  },
  {
    title: 'Box Five',
    body: 'Placeholder content for the fifth slide.',
    content: 'This is the detail content for Box Five.',
    bg: '/images/gow.jpeg',
  },
  {
    title: 'Box Six',
    body: 'Placeholder content for the sixth slide.',
    content: 'This is the detail content for Box Six.',
    bg: '/images/batman.jpg',
  },
]

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
  const scale = useResponsiveScale()
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
    <div className="w-full my-2 px-6">
      <div
        className="relative h-80 flex items-center justify-start [perspective:1000px]"
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
              className="absolute overflow-hidden rounded-lg border border-[var(--border)] bg-cover bg-center p-4 text-left transition-all duration-300 ease-in-out"
              style={{
                width: BASE_BOX_WIDTH * scale,
                height: BASE_BOX_HEIGHT * scale,
                backgroundImage: `url(${slide.bg})`,
                transform: `translateX(${offset * BASE_OFFSET * scale}px) scale(${isActive ? 1 : 0.85})`,
                zIndex: isActive ? 10 : 10 - Math.abs(offset),
                opacity: isActive ? 1 : 0.6,
                boxShadow: isActive
                  ? '0 0 24px 6px rgba(59, 130, 246, 0.5)'
                  : 'none',
              }}
            >
              <div className="absolute inset-0 bg-black/40" />
              <div className="relative">
                <h2 style={{ color: 'white' }}>{slide.title}</h2>
                <p className="text-white">{slide.body}</p>
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
    <span className="text-base font-bold text-white">
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

function App() {
  const [index, setIndex] = useState(0)

  return (
    <>
      <Background index={index} />

      <header className="flex items-center justify-between px-6 py-4">
        <div className="flex items-center gap-3">
          <div className="relative h-10 w-10 rounded-full border-2 border-blue-500 bg-[var(--code-bg)]">
            <span className="absolute bottom-0 right-0 h-3 w-3 rounded-full border-2 border-[var(--bg)] bg-green-500" />
          </div>
          <span className="font-medium text-white">Your Name</span>
          <GithubIcon />
          <XIcon />
        </div>

        <div className="flex items-center gap-2">
          <WifiIcon />
          <Clock />
        </div>
      </header>

      <Carousel index={index} onSelect={setIndex} />

      <main className="text-left px-8">
        <div key={index} className="animate-slide-up">
          <h2 style={{ color: 'white', fontSize: 32 }}>{slides[index].title}</h2>
          <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-3">
            {[0, 1, 2].map((i) => (
              <div
                key={i}
                className="min-h-64 rounded-lg border border-white/20 bg-white/10 backdrop-blur-md"
              />
            ))}
          </div>
        </div>
      </main>
    </>
  )
}

export default App
