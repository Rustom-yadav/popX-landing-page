# PopX

🔗 **Live:** [View Demo](https://popx-landing.vercel.app/) 
📂 **Repo:** [GitHub](https://github.com/Rustom-yadav/educase-india-assignment)

A single-page React app that replicates the PopX mobile landing experience. The project lives in the **educase-india-assignment** root folder. The UI is a centered phone-style frame with four screens: Landing, Login, Signup, and Profile. Built with React, Vite, and React Router.

## Features

- **Landing (1 of 4)** – Welcome screen with clickable numbered circles (1–10), “Create Account” and “Already Registered? Login” buttons. Numbers 9 and 10 sit on the Create Account button (flex + z-index).
- **Login (2 of 4)** – Sign-in form (email, password). Login button is disabled when either field is empty; gray when disabled.
- **Signup (3 of 4)** – Create account form: Full Name, Phone, Email, Password, Company name, and “Are you an Agency?” (Yes/No). Create Account button submits the form.
- **Profile (4 of 4)** – Account settings view with avatar, name, email, and placeholder bio.
- **Bottom navigation** – Home icon, Previous/Next arrows (`<` / `>`), and “X of 4” indicator. Seamless client-side navigation between all four pages.

## Tech Stack

- **React 19** – UI
- **Vite 7** – Build and dev server
- **React Router DOM** – Routing and navigation

## Getting Started

### Prerequisites

- Node.js (v18+ recommended)
- npm or yarn

### Install

```bash
npm install
```

### Run

```bash
npm run dev
```

Then open the URL shown in the terminal (e.g. `http://localhost:5173`).

### Build

```bash
npm run build
```

Output is in `dist/`. To preview the production build:

```bash
npm run preview
```

## Project Structure

```
educase-india-assignment/
├── src/
│   ├── App.jsx          # Router + routes
│   ├── App.css          # Global + page styles
│   ├── main.jsx         # Entry point
│   ├── index.css        # Base styles
│   ├── components/
│   │   └── PhoneFrame.jsx   # Centered phone frame + bottom nav
│   └── pages/
│       ├── Landing.jsx   # Welcome + numbered circles + CTAs
│       ├── Login.jsx     # Sign-in form
│       ├── Signup.jsx    # Create account form
│       └── Profile.jsx   # Account settings
├── index.html
├── package.json
└── README.md
```

## Notes

- Design is mobile-first: the main content is inside a fixed-width phone frame (320px) centered on the page.
- All numbered circles (1–8 on the landing, 9 and 10 on the Create Account button) and both CTA buttons are clickable.
- Login button is only enabled when both email and password fields have a value.
