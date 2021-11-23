import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
    return (
        <nav className="w-full fixed z-50">
            <div className="mx-auto lg:container px-4 lg:px-0 flex items-center justify-between h-16">
                <div className="flex items-center space-x-4">
                    <Link to="/" className="text-white text-2xl font-bold">Jordan Blount</Link>
                    <span className="text-sm text-gray-300 font-light border-l-4 border-blue-300 pl-3 pt-0.5 pb-0.5 leading-tight">Software Engineer<br />(Frontend / Full-stack)</span>
                </div>
                <button className="h-12 w-12 flex justify-center items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white lg:hidden" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path className="p-2" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h8m-8 6h16" />
                    </svg>
                </button>
                <div className="hidden lg:block items-center">
                    <ui className="hidden lg:flex items-center space-x-10 list-none text-white">
                        <li>
                            <Link to="/" className="hover:text-blue-200">Home</Link>
                        </li>
                        <li>
                            <Link to="/about" className="hover:text-blue-200">About</Link>
                        </li>
                        <li>
                            <Link to="/articles" className="hover:text-blue-200">Work</Link>
                        </li>
                        <li>
                            <Link to="/contact" className="">
                                <button className="bg-blue-500 py-1.5 px-2.5 rounded-md hover:bg-blue-400">Contact Me</button>
                            </Link>
                        </li>
                    </ui>
                </div>
            </div>
        </nav>
    )
}

export default Navbar
