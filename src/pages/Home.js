import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
    return (
        <>
            <section className="bg-home-hero-img bg-no-repeat bg-cover bg-center h-screen backdrop-opacity-40">
                <div className="flex flex-col items-center justify-center h-full">
                    <h1 className="text-6xl text-center text-white font-medium">Building Beautiful Websites.</h1>
                    <Link to="/contact" className="text-white mt-2">
                        <button className="bg-blue-500 py-2.5 px-3.5 rounded-md hover:bg-blue-400">Let's Go</button>
                    </Link>
                </div>
            </section>
            <section className="bg-white min-h-screen pt-10">
                <div className="mx-3 lg:container lg:mx-auto">
                    <h2 className="text-2xl text-center capitalize text-blue-500 font-medium">Services</h2>
                </div>
            </section>
        </>
    )
}

export default Home
