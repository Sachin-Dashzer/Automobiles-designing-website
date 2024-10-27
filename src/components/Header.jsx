import React from 'react'
import { Link, NavLink } from 'react-router-dom'

const Header = () => {
    return (
        <>

            <header className='h-20 w-full px-16 bg-transparent fixed top-0 left-0'>

                <div className="mainheader h-full w-full flex justify-between items-center">
                    <div className="logoBox">
                        <h3 className='text-4xl font-bold font-serif text-yellow-300 '>Future Cars</h3>
                    </div>
                    <div className="nav-links h-full">
                        <ul className='flex items-center gap-8 text-lg font-semibold h-full'>
                            <li>
                                <NavLink to="/" className={({ isActive }) => (isActive ? 'text-yellow-300 underline' : '')}>Home</NavLink>
                            </li>
                            <li>
                                <NavLink to="/about" className={({ isActive }) => (isActive ? 'text-yellow-300 underline' : '')}>About</NavLink>
                            </li>
                            <li>
                                <NavLink to="/launch" className={({ isActive }) => (isActive ? 'text-yellow-300 underline' : '')}>New Launches</NavLink>
                            </li>
                            <li>
                                <NavLink to="/upcoming" className={({ isActive }) => (isActive ? 'text-yellow-300 underline' : '')}>Upcomings</NavLink>
                            </li>
                            <li>
                                <NavLink to="/blogs" className={({ isActive }) => (isActive ? 'text-yellow-300 underline' : '')}>Blogs</NavLink>
                            </li>
                        </ul>
                    </div>
                    <div className="nav-icons">
                        <ul className='flex items-center gap-6 text-xl font-normal'>
                            <li><i className="fa-solid fa-user"></i></li>
                            <li><i className="fa-solid fa-bars"></i></li>
                        </ul>
                    </div>
                </div>

            </header>

        </>
    )
}

export default Header
