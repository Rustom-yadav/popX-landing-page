import { useNavigate, useLocation } from 'react-router-dom'

const PAGES = [
  { path: '/', label: '1 of 4' },
  { path: '/login', label: '2 of 4' },
  { path: '/signup', label: '3 of 4' },
  { path: '/profile', label: '4 of 4' },
]

export default function PhoneFrame({ children }) {
  const navigate = useNavigate()
  const location = useLocation()
  const currentIndex = PAGES.findIndex((p) => p.path === location.pathname)
  const current = currentIndex >= 0 ? currentIndex : 0

  const goHome = () => navigate('/')
  const goPrev = () => {
    if (current > 0) navigate(PAGES[current - 1].path)
  }
  const goNext = () => {
    if (current < PAGES.length - 1) navigate(PAGES[current + 1].path)
  }

  return (
    <div className="app-root">
      <div className="phone-frame">
        <main className="phone-frame-content">
          {children}
        </main>
        <nav className="bottom-nav" aria-label="Page navigation">
          <button type="button" className="nav-btn" onClick={goHome} aria-label="Home">
            <HomeIcon />
          </button>
          <button
            type="button"
            className="nav-btn"
            onClick={goPrev}
            disabled={current === 0}
            aria-label="Previous"
          >
            <ArrowLeftIcon />
          </button>
          <span className="nav-label">{PAGES[current].label}</span>
          <button
            type="button"
            className="nav-btn"
            onClick={goNext}
            disabled={current === PAGES.length - 1}
            aria-label="Next"
          >
            <ArrowRightIcon />
          </button>
        </nav>
      </div>
    </div>
  )
}

function HomeIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
      <polyline points="9 22 9 12 15 12 15 22" />
    </svg>
  )
}

function ArrowLeftIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <line x1="19" y1="12" x2="5" y2="12" />
      <polyline points="12 19 5 12 12 5" />
    </svg>
  )
}

function ArrowRightIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <line x1="5" y1="12" x2="19" y2="12" />
      <polyline points="12 5 19 12 12 19" />
    </svg>
  )
}
