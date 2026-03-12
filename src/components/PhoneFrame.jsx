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
          <button type="button" className="nav-btn nav-btn-home" onClick={goHome} aria-label="Home">
            <HomeIcon />
          </button>
          <button
            type="button"
            className="nav-btn"
            onClick={goPrev}
            disabled={current === 0}
            aria-label="Previous"
          >
            &lt;
          </button>
          <span className="nav-label">{PAGES[current].label}</span>
          <button
            type="button"
            className="nav-btn"
            onClick={goNext}
            disabled={current === PAGES.length - 1}
            aria-label="Next"
          >
            &gt;
          </button>
        </nav>
      </div>
    </div>
  )
}

function HomeIcon() {
  return (
    <svg
      className="home-icon-svg"
      width="26"
      height="26"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M3 12l9-9 9 9v8H5v-8H3z"
        stroke="#1a1a1a"
        strokeWidth="2.25"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M9 22V12h6v10"
        stroke="#1a1a1a"
        strokeWidth="2.25"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

