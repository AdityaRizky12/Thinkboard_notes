import React from "react"
import { Routes, Route } from "react-router-dom"
import Homepage from "./pages/Homepage"
import CreatePage from "./pages/CreatePage"
import NotesDetail from "./pages/NotesDetail"

const App = () => {
  return (
    <div className="relative min-h-screen bg-base-200">

      <div className="absolute inset-0 -z-10 
      bg-[radial-gradient(circle_at_top,#00FF9D22,transparent_60%)]" />

      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/created" element={<CreatePage />} />
        <Route path="/notes/:id" element={<NotesDetail />} />
      </Routes>

    </div>
  )
}

export default App