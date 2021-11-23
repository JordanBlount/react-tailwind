import React from 'react'
import { Link } from 'react-router-dom'

const HeroSection = () => {
    return (
        <section className="bg-home-hero-img bg-no-repeat :bg- bg-cover bg-center h-screen">
            <div className="flex flex-col items-center justify-center h-full">
                <h1 className="text-5xl md:text-6xl text-center text-white font-medium">Building Beautiful Websites.</h1>
                <Link to="/contact" className="text-white mt-2">
                    <button className="bg-blue-500 py-2.5 px-3.5 rounded-md hover:bg-blue-400">Let's Go</button>
                </Link>
            </div>
        </section>
    )
}

export default HeroSection
