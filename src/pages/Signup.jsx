import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

export default function Signup() {
  const navigate = useNavigate()
  const [form, setForm] = useState({
    fullName: '',
    phone: '',
    email: '',
    password: '',
    companyName: '',
    isAgency: 'yes',
  })

  const handleChange = (e) => {
    const { name, value } = e.target
    setForm((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    alert('Account created')
    navigate('/profile')
  }

  return (
    <div className="page-content">
      <header className="page-header page-header-with-badge">
        <h1 className="page-title">Create your PopX account</h1>
        <button type="button" className="circle circle-badge" onClick={() => alert('Badge 1')}>
          1
        </button>
      </header>

      <form className="form form-signup" onSubmit={handleSubmit}>
        <label className="field">
          <span className="field-label">Full Name*</span>
          <input
            type="text"
            name="fullName"
            className="input"
            placeholder="Harry Doe"
            value={form.fullName}
            onChange={handleChange}
          />
        </label>
        <label className="field">
          <span className="field-label">Phone number*</span>
          <input
            type="tel"
            name="phone"
            className="input"
            placeholder="Harry Doe"
            value={form.phone}
            onChange={handleChange}
          />
        </label>
        <label className="field">
          <span className="field-label">Email address*</span>
          <input
            type="email"
            name="email"
            className="input"
            placeholder="Harry Doe"
            value={form.email}
            onChange={handleChange}
          />
        </label>
        <label className="field">
          <span className="field-label">Password*</span>
          <input
            type="password"
            name="password"
            className="input"
            placeholder="Harry Doe"
            value={form.password}
            onChange={handleChange}
          />
        </label>
        <label className="field">
          <span className="field-label">Company name</span>
          <input
            type="text"
            name="companyName"
            className="input"
            placeholder="Harry Doe"
            value={form.companyName}
            onChange={handleChange}
          />
        </label>

        <p className="radio-label">Are you an Agency?</p>
        <div className="radio-group">
          <label className="radio-option">
            <input
              type="radio"
              name="isAgency"
              value="yes"
              checked={form.isAgency === 'yes'}
              onChange={handleChange}
            />
            <span className="radio-text">Yes</span>
          </label>
          <label className="radio-option">
            <input
              type="radio"
              name="isAgency"
              value="no"
              checked={form.isAgency === 'no'}
              onChange={handleChange}
            />
            <span className="radio-text">No</span>
          </label>
        </div>

        <button type="submit" className="btn primary btn-full">
          Create Account
        </button>
      </form>
    </div>
  )
}
