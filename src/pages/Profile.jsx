export default function Profile() {
  return (
    <div className="page-content page-profile">
      <header className="page-header">
        <h1 className="page-title">Account Settings</h1>
      </header>

      <div className="profile-card">
        <div className="profile-avatar" aria-hidden />
        <h2 className="profile-name">Marry Doe</h2>
        <p className="profile-email">Marry@Gmail.Com</p>
        <p className="profile-bio">
          Lorem Ipsum Dolor Sit Amet, Consetetur sadipscing Elitr. Sed Diam Nonumy eirmod Tempor
          invidunt Ut Labore Et Dolore Magna Aliquyam Erat, Sed Diam
        </p>
      </div>
    </div>
  )
}
