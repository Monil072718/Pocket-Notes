import Sidebar from './components/Sidebar.jsx'
import EmptyState from './components/EmptyState.jsx'

export default function App() {
  return (
    <div className="app-shell">
      <Sidebar />
      <EmptyState />
    </div>
  )
}
