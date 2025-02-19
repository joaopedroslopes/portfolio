import React, { useEffect, useState } from 'react';
import { FaLink } from 'react-icons/fa';

// import '../style/about.css'

function About() {
    const [skillsData, setSkillsData] = useState({});

    useEffect(() => {
        fetch('src/data/skill.json')
            .then(response => response.json())
            .then(data => setSkillsData(data))
            .catch(error => console.error('Error loading skills:', error));
    }, []);

    return (
        <main className="flex-grow container mx-auto mt-24 p-6">
            {/* <!-- <h1 className="text-3xl font-semibold mb-6 text-blue-500 text-center">About Me</h1> --> */}

            <section>
                <div className="flex flex-col md:flex-row items-center">
                    <img className="w-32 h-32 rounded-full mb-4 md:mb-0 md:mr-8" src="/images/me.jpeg" alt="Ganesh Epili" />
                    <div>
                        <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">João Pedro</h1>
                        <p className="text-gray-700 dark:text-gray-300">🎓 Software Engineer Student</p>
                        <p className="text-gray-700 dark:text-gray-300">📍 São Pualo, SP - Brazil</p>
                        <p className="text-gray-700 dark:text-gray-300">📧 Email: <a href="mailto:jp01.bao@gmail.com" className="text-blue-500">jp01.bao@gmail.com</a></p>
                        {/* <p className="text-gray-700 dark:text-gray-300">📞 Phone: <a href="tel:8984445951" className="text-blue-500">8984445951</a></p> */}
                    </div>
                </div>
            </section>
            {/* <div className="mt-8">
                <p className="text-gray-700 dark:text-gray-300 mb-4 font-light text-xl">Hello! I'm João Pedro, a passionate software developer and Software Enginner Student.</p>
            </div> */}

            <h2 className="relative inline-block mb-5 mt-8 text-2xl font-bold text-medium-purple">
                Education
                <span className="absolute bottom-[-5px] left-0 w-full h-[4px] bg-medium-purple"></span>
            </h2>

            <section className="bg-lighter-darker-purple/80 backdrop-blur-[10px] rounded-[10px] p-5 mb-10 cursor-default">
                <div className="transition-transform duration-500 hover:transform hover:translate-y-[-5px] hover:shadow-lg p-4 flex flex-col md:flex-row md:justify-between mx-2">
                    <div className="flex items-center">
                        <img className="w-10 h-10 mr-4" src="/images/fiap.png" alt="DAIICT" />
                        <div>
                            <h3 className="text-xl font-semibold text-white">Bacharelado em Engenharia de Software</h3>
                            <p className="italic text-gray-500">Faculdade de Informática e Administração Paulista (FIAP)</p>
                        </div>
                    </div>
                    <p className="text-right md:text-left text-gray-500 italic text-sm">february / 2024 - december / 2027</p>
                </div>
                {/* <div className="transition-transform duration-500 hover:transform hover:translate-y-[-5px] hover:shadow-lg p-4 flex flex-col md:flex-row md:justify-between mx-2">
                    <div className="flex items-center">
                        <img className="w-10 h-10 mr-4" src="/images/" alt="LPU" />
                        <div>
                            <h3 className="text-xl font-semibold text-white">Tecnólogo em Microeletrônica (Incompleto - 1º Semestre)</h3>
                            <p className="italic text-gray-500">Faculdade de Tecnologia de São Paulo (FATEC)</p>
                        </div>
                    </div>
                    <p className="text-right md:text-left text-gray-500 italic text-sm">january / 2023 - may / 2023</p>
                </div> */}
            </section>

            <h2 className="relative inline-block mb-5 text-2xl font-bold text-medium-purple">
                Courses & Certificates
                <span className="absolute bottom-[-5px] left-0 w-full h-[4px] bg-medium-purple"></span>
            </h2>
            <section className="bg-lighter-darker-purple/80 backdrop-blur-[10px] rounded-[10px] p-5 mb-10 cursor-default">
                <div className="transition-transform duration-500 hover:transform hover:translate-y-[-5px] hover:shadow-lg mb-4 p-4 flex flex-col md:flex-row md:justify-between mx-2">
                    <div className="flex items-center">
                        <img className="w-10 h-10 mr-4" src="images//fiap.png" alt="Fiap Logo"></img>
                        <div>
                            <h3 className="text-xl font-semibold text-white">Técnicas de Negociação</h3>
                            <p className="italic text-gray-500">
                                <span>Fiap</span>
                                <a href="https://on.fiap.com.br/pluginfile.php/1/local_nanocourses/certificado_nanocourse/128319/f83225846015026d388ecd3e97ad7b94/certificado.png" target="_blank" rel="noopener noreferrer" className="text-blue-500 underline inline-flex items-center">
                                    <FaLink className='ml-3 mr-1 size-3' /> Certificate
                                </a>
                            </p>
                        </div>
                    </div>
                    <p className="text-right md:text-left text-gray-500 italic text-sm">2024</p>
                </div>

                <div className="transition-transform duration-500 hover:transform hover:translate-y-[-5px] hover:shadow-lg mb-4 p-4 flex flex-col md:flex-row md:justify-between mx-2">
                    <div className="flex items-center">
                        <img className="w-10 h-10 mr-4" src="images//fiap.png" alt="Fiap Logo"></img>
                        <div>
                            <h3 className="text-xl font-semibold text-white">Design Thinking - Process</h3>
                            <p className="italic text-gray-500">
                                <span>Fiap</span>
                                <a href="https://on.fiap.com.br/pluginfile.php/1/local_nanocourses/certificado_nanocourse/110381/28447bb3598982f42796496d04d0c036/certificado.png" target="_blank" rel="noopener noreferrer" className="text-blue-500 underline inline-flex items-center">
                                    <FaLink className='ml-3 mr-1 size-3' /> Certificate
                                </a>
                            </p>
                        </div>
                    </div>
                    <p className="text-right md:text-left text-gray-500 italic text-sm">2024</p>
                </div>
                {/* <div className="transition-transform duration-500 hover:transform hover:translate-y-[-5px] hover:shadow-lg mb-4 p-4 flex flex-col md:flex-row md:justify-between mx-2">
                    <div className="flex items-center">
                        <img className="w-10 h-10 mr-4" src="images//fiap.png" alt="Fiap Logo"></img>
                        <div>
                            <h3 className="text-xl font-semibold text-white">Training and Fine-tuning Large Language Models (LLMs)</h3>
                            <p className="italic text-gray-500">
                                <span>Fiap</span>
                                <a href="https://www.wandb.courses/courses/training-fine-tuning-LLMs" target="_blank" rel="noopener noreferrer" className="text-blue-500 underline inline-flex items-center">
                                    <FaLink className='ml-3 mr-1 size-3' /> Certificate
                                </a>
                            </p>
                        </div>
                    </div>
                    <p className="text-right md:text-left text-gray-500 italic text-sm">2023</p>
                </div> */}

            </section>

            <h2 className="relative inline-block mb-5 text-2xl font-bold text-medium-purple">
                Skills
                <span className="absolute bottom-[-5px] left-0 w-full h-[4px] bg-medium-purple"></span>
            </h2>
            <section className="bg-lighter-darker-purple/80 backdrop-blur-[10px] rounded-[10px] p-5 mb-10 cursor-default">
                <div className="grid gap-6">
                    {Object.keys(skillsData).map(category => (
                        <div key={category} className="mb-5">
                            <h3 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white">{category}</h3>
                            <div className="grid-skills gap-2">
                                {skillsData[category].map(skill => (
                                    <div className="w-[100px] flex flex-col items-center bg-dark-purple/60 px-2 py-4 rounded-lg shadow-md hover:shadow-lg transition transform duration-300 hover:-translate-y-2">
                                        <img src={skill.logo} alt={skill.name} className="w-8 h-8 mb-1 object-contain" />
                                        <span className="text-center text-gray-900 dark:text-white text-sm">{skill.name}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </section>
        </main>
    );
}

export default About;