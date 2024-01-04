import React from 'react'
import { Link } from 'react-router-dom'
import Search from './Search'

const Navbar = () => {
  return (
    <div className="p-5 pb-0 flex flex-wrap sm:justify-between justify-center items-center border-b border-gray-700">
      <div className="flex justify-center items-center space-x-5 w-screen">
        <Link to="/">
          <p className="text-2xl font-bold py-1 px-2 bg-gray-500 text-gray-900 rounded">
            Google-Search-Clone
          </p>
        </Link>
        <Search />
      </div>
    </div>

  )
}

export default Navbar