import React, { useState, useEffect } from 'react';
import { FaGithub, FaPlay, FaSearch } from "react-icons/fa";

function Projects() {
    const [cardProps, setCardProps] = useState([]);

    useEffect(() => {
        fetch('/src/data/projects.json')
            .then(response => response.json())
            .then(data => setCardProps(data))
            .catch(error => console.error('Error loading skills:', error));
    }, []);

    return (
        <main className="flex-grow container mx-auto p-6 mt-16 max-w-6xl">
            <h1 className="text-3xl font-semibold mb-6 text-white text-center">Projects</h1>
            {/* <div className="relative mb-6 w-full md:w-2/3 mx-auto">
                <input type="text" id="search" className="w-full p-2 pl-10 rounded-lg bg-lighter-darker-purple text-white focus:outline-none" placeholder="Search projects"></input>
                <FaSearch className="fas fa-search absolute top-0 left-0 ml-3 mt-3 text-gray-400" />
            </div> */}

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {cardProps.map(({ title, description, tags, buttons, image }) => (
                    <div className="w-full max-w-sm bg-lighter-darker-purple/80 border border-bdr rounded-lg shadow p-4 flex flex-col items-start place-self-center sm:place-self-auto" key={title}>
                        <h2 className="text-xl font-bold mb-2 text-gray-900 dark:text-white">{title}</h2>
                        <p className="text-gray-700 dark:text-gray-400 mb-4">{description}</p>
                        <img src={image} alt={title} className="w-full h-48 object-cover rounded-lg mb-4"></img>
                        <div className="flex flex-wrap gap-2 mb-4">
                            {tags.map(tag => (
                                <span className="text-white bg-tag-grey px-2 py-1 rounded cursor-default" key={tag}>{tag}</span>
                            ))}
                        </div>

                        <div className="flex justify-between mt-auto w-full">
                            <a href={buttons[0].link} target="_blank" rel="noopener noreferrer" className="text-white bg-dark-purple hover:bg-dark-hover border border-bdr focus:ring-0 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center me-2 mb-2">
                                <FaGithub className='mr-2' /> GitHub
                            </a>
                            <a href={buttons[1].link} target="_blank" rel="noopener noreferrer" className="text-white bg-medium-purple hover:bg-medium-darker-purple focus:ring-0 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center me-2 mb-2">
                                <FaPlay className='mr-2' /> Demo
                            </a>
                        </div>
                    </div>
                ))}
            </div>
        </main>
    );
}

export default Projects;