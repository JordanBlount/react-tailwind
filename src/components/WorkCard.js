import React from 'react'
import { FaApple } from 'react-icons/fa';

const WorkCard = ({ company, job, icon, years }) => {
    return (
        <div className="w-1/2 border-2 rounded-md border-gray-200 p-8 shadow-sm flex">
            <div className="flex flex-col items-center">
                {icon}
                <h2>{company}</h2>
            </div>
            <div className="flex flex-col ml-8">
                <h2 className="text-lg">{job}</h2>
                <p className="text-sm text-gray-400">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam sodales risus eu sem aliquam, in consectetur mi lacinia. Sed justo urna, congue vitae porttitor sed, ultrices vel urna. Duis tellus dolor, interdum sed arcu vitae.
                </p>
            </div>
        </div>
    )
}

export default WorkCard
