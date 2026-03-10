import React from 'react'
import { Link } from 'react-router-dom'
import { PlusIcon } from 'lucide-react'

const Navbar = () => {
  return (
    <header className="bg-base-200 border-b border-base-300 shadow-sm">
      <div className="mx-auto max-w-6xl px-6 py-3">
        <div className="flex items-center justify-between">

          <h1 className="text-2xl font-bold text-primary font-mono tracking-wide">
            ThinkBoard
          </h1>

          <Link
            to="/created"
            className="btn btn-primary btn-sm flex items-center gap-2"
          >
            <PlusIcon size={18} />
            <span>Notes</span>
          </Link>

        </div>
      </div>
    </header>
  )
}

export default Navbar