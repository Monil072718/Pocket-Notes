import Illustration from './Illustration.jsx'

export default function EmptyState() {
  return (
    <main className="content">
      <div className="center-wrap">
        <Illustration className="illustration" />
        <h1 className="headline">Pocket Notes</h1>

        <p className="lead">
          Send and receive messages without keeping your phone online.
        </p>
        <p className="lead">
          Use Pocket Notes on up to 4 linked devices and 1 mobile phone
        </p>

        <div className="e2e">
          <span className="lock" aria-hidden>🔒</span> end-to-end encrypted
        </div>
      </div>

      
    </main>
  )
}
