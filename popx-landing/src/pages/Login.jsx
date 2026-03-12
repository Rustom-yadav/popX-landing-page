import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

export default function Login() {
  const navigate = useNavigate()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    alert('Login clicked')
    navigate('/profile')
  }

  return (
    <div className="page-content">
      <header className="page-header">
        <h1 className="page-title">Signin to your PopX account</h1>
        <p className="page-subtitle">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </p>
      </header>

      <form className="form" onSubmit={handleSubmit}>
        <label className="field">
          <span className="field-label">Email Address</span>
          <input
            type="email"
            className="input"
            placeholder="Enter email address."
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </label>
        <label className="field">
          <span className="field-label">Password</span>
          <input
            type="password"
            className="input"
            placeholder="Enter password."
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </label>
        <button
          type="submit"
          className="btn primary btn-full btn-login"
          disabled={!email.trim() || !password.trim()}
        >
          Login
        </button>
      </form>
    </div>
  )
}
