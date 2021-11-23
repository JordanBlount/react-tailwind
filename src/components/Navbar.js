import React from 'react'
import { Link, animateScroll as scroll} from 'react-scroll';

const Navbar = () => {
    return (
        <nav className="w-full fixed z-50 bg-gray-700">
            <div className="mx-auto lg:container px-4 lg:px-0 flex items-center justify-between h-16">
                <div className="flex items-center space-x-4">
                    <Link to="hero" className="text-white text-2xl font-bold cursor-pointer">Jordan Blount</Link>
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
                            <Link to="#" spy={true} smooth={true} duration={200} className="hover:text-blue-200 cursor-pointer">Home</Link>
                        </li>
                        <li>
                            {/* NOTE: Create offsets to match the height of the navbar */}
                            <Link to="about" spy={true} smooth={true} duration={200} offset={-60} className="hover:text-blue-200 cursor-pointer">About</Link>
                        </li>
                        <li>
                            <Link to="work" spy={true} smooth={true} duration={200} offset={-60} className="hover:text-blue-200 cursor-pointer">Work</Link>
                        </li>
                        <li>
                            <Link to="contact" spy={true} smooth={true} duration={500} className="">
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
