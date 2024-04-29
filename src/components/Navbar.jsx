import React from 'react'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
  return (
    <header className='header'>
        <NavLink to='/' className='w-10 h-10 bg-white rounded-lg flex items-center justify-center shadow-md '>
            <p className='blue-gradient_text'>CH</p>
        </NavLink>
        <nav className='flex text-lg gap-7 font-medium'>
          <NavLink to='/about' className={({isActive}) => isActive? 'text-blue-500' : 'text-black'}>
            About
          </NavLink>
          <NavLink to='/projects' className={({isActive}) => isActive? 'text-blue-500' : 'text-black'}>
            Projects
          </NavLink>
        </nav>
    </header>
    // <div>Navbar</div>
  )
}

export default Navbar 