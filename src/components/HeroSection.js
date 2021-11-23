import React from 'react'
import { Link } from 'react-router-dom'

const HeroSection = () => {
    return (
        <section className="bg-home-hero-img bg-no-repeat :bg- bg-cover bg-center h-screen relative">
            <div className="flex flex-col items-center justify-center h-full">
                <h1 className="text-5xl md:text-6xl text-center text-white font-medium">Building Beautiful Websites.</h1>
                <Link to="/contact" className="text-white mt-2">
                    <button className="bg-blue-500 py-2.5 px-3.5 rounded-md hover:bg-blue-400">Let's Go</button>
                </Link>
            </div>
            <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-white absolute left-1/2 -ml-5 bottom-5 animate-pulse" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 13l-3 3m0 0l-3-3m3 3V8m0 13a9 9 0 110-18 9 9 0 010 18z" />
            </svg>
        </section>
    )
}

export default HeroSection
