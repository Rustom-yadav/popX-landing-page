import { useNavigate } from 'react-router-dom'

const CIRCLE_POSITIONS = [
  { n: 6, style: { top: '26px', left: '12%' } },
  { n: 7, style: { top: '58px', left: '24%' } },
  { n: 1, style: { top: '104px', left: '27%' } },
  { n: 2, style: { top: '152px', left: '30%' } },
  { n: 3, style: { top: '184px', left: '42%' } },
  { n: 4, style: { top: '224px', left: '54%' } },
  { n: 5, style: { top: '264px', left: '66%' } },
  { n: 8, style: { top: '8px', right: '12px', left: 'auto' } },
]

export default function Landing() {
  const navigate = useNavigate()

  const handleCircleClick = (number) => {
    alert(`You clicked on circle ${number}`)
  }

  const handleCreateAccount = () => {
    navigate('/signup')
  }

  const handleLogin = () => {
    navigate('/login')
  }

  return (
    <>
      <div className="circle-track">
        {CIRCLE_POSITIONS.map(({ n, style }) => (
          <button
            key={n}
            type="button"
            className="circle"
            style={style}
            onClick={() => handleCircleClick(n)}
          >
            {n}
          </button>
        ))}
      </div>

      <div className="content">
        <h1 className="title">Welcome to PopX</h1>
        <p className="subtitle">
          Lorem ipsum dolor sit amet,
          <br />
          consectetur adipiscing elit,
        </p>

        <div className="actions">
          <div className="create-account-wrap">
            <button type="button" className="btn primary" onClick={handleCreateAccount}>
              Create Account
            </button>
            <div className="create-account-badges" aria-hidden>
              <button
                type="button"
                className="circle circle-on-btn"
                onClick={() => handleCircleClick(10)}
              >
                10
              </button>
              <button
                type="button"
                className="circle circle-on-btn"
                onClick={() => handleCircleClick(9)}
              >
                9
              </button>
            </div>
          </div>
          <button type="button" className="btn secondary" onClick={handleLogin}>
            Already Registered? Login
          </button>
        </div>
      </div>
    </>
  )
}
