import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
    return (
        <nav className="w-full fixed top-0">
            <div className="mx-auto lg:container px-3 flex items-center justify-between h-16">
                <div className="flex items-center space-x-4">
                    <Link to="/" className="text-white text-2xl font-bold">Jordan Blount</Link>
                    <span className="text-sm text-gray-300 font-light border-l-4 border-blue-300 pl-3 pt-0.5 pb-0.5 leading-tight">Software Engineer<br />(Frontend / Full-stack)</span>
                </div>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white lg:hidden" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h8m-8 6h16" />
                </svg>
                <div className="hidden lg:block items-center">
                    <ui className="hidden lg:flex items-center space-x-10 list-none text-white">
                        <li>
                            <a href="#" className="hover:text-blue-200">Home</a>
                        </li>
                        <li>
                            <a href="#" className="hover:text-blue-200">About</a>
                        </li>
                        <li>
                            <a href="#" className="hover:text-blue-200">Articles</a>
                        </li>
                        <li>
                            <a href="#" className="">
                                <button className="bg-blue-500 py-1.5 px-2.5 rounded-md hover:bg-blue-400">Contact Me</button>
                            </a>
                        </li>
                    </ui>
                </div>
            </div>
        </nav>
    )
}

export default Navbar
