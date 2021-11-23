import React from 'react'
import { FaApple, FaGithub } from 'react-icons/fa'
import { SiLoom } from 'react-icons/si'
import WorkCard from '../components/WorkCard'

const WorkSection = () => {
    return (
        // TODO: Fix the spacing on larger screens. There is too much white space under the last WorkCard
        <section id="work" className="bg-white pt-10 pb-10 md:pb-0 min-h-screen">
            <div className="mx-3 lg:container lg:mx-auto">
                <h2 className="text-2xl text-center capitalize text-blue-500 font-medium mb-10">My work</h2>
                <div className="flex flex-col items-center space-y-10">
                    <WorkCard company="Apple" job="Senior Software Enginner" icon={<FaApple className="w-12 h-12" />} />
                    <WorkCard company="Github" job="Software Engineer 2" icon={<FaGithub className="w-12 h-12" />} />
                    <WorkCard company="Loom" job="Software Engineer, Entry-Level" icon={<SiLoom className="w-12 h-12" />} />
                </div>
            </div>
        </section>
    )
}

export default WorkSection
