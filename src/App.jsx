// src/App.jsx
import { useState } from 'react'
import Sidebar from './components/Sidebar.jsx'
import EmptyState from './components/EmptyState.jsx'
import CreateGroupModal from './components/CreateGroupModal.jsx'

export default function App() {
  const [isCreateOpen, setIsCreateOpen] = useState(false)

  return (
    <>
      <div className="app-shell">
        <Sidebar onCreateNewGroup={() => setIsCreateOpen(true)} />
        <EmptyState />
      </div>

      <CreateGroupModal
        open={isCreateOpen}
        onClose={() => setIsCreateOpen(false)}
        onSubmit={(payload) => {
          console.log('Create group:', payload)
          setIsCreateOpen(false)
        }}
      />
    </>
  )
}
