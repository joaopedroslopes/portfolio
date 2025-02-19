import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FaGithub } from "react-icons/fa";

function Home() {
    useEffect(() => {
        const roles = ["João Pedro", "Brazillian", "a Software Developer", "a Software Engineer Student"];
        let roleIndex = 0;
        let charIndex = 0;
        const typingSpeed = 150;
        const deletingSpeed = 50;
        const delayBetweenRoles = 2000;
        const roleElement = document.getElementById("role");

        // Remove any existing span to avoid duplication
        while (roleElement.firstChild) {
            roleElement.removeChild(roleElement.firstChild);
        }

        const roleSpan = document.createElement('span');
        roleSpan.classList.add('text-medium-purple');
        roleElement.appendChild(roleSpan);

        function typeRole() {
            if (charIndex < roles[roleIndex].length) {
                roleSpan.textContent += roles[roleIndex].charAt(charIndex);
                charIndex++;
                setTimeout(typeRole, typingSpeed);
            } else {
                setTimeout(deleteRole, delayBetweenRoles);
            }
        }

        function deleteRole() {
            if (charIndex > 0) {
                roleSpan.textContent = roles[roleIndex].substring(0, charIndex - 1);
                charIndex--;
                setTimeout(deleteRole, deletingSpeed);
            } else {
                roleIndex = (roleIndex + 1) % roles.length;
                setTimeout(typeRole, typingSpeed);
            }
        }

        setTimeout(typeRole, typingSpeed);
    }, []);

    return (
        <section className="flex-grow flex items-center pt-16 md:pt-24">
            <div className="grid max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">

                <div className="flex justify-center lg:mt-0 lg:col-span-5 lg:flex">
                    <img className="w-full max-w-[300px] h-auto mx-auto rounded-full" src="./images/me.jpeg" alt="profile"></img>
                </div>

                <div className="mr-auto place-self-center lg:col-span-7">
                    <h1 className="max-w-2xl mb-4 text-2xl font-extrabold tracking-tight leading-none md:text-3xl xl:text-4xl text-white">Hey There! <span className="animate-waving-hand">👋</span>  <br />I'm <span className="typing" id="role"></span></h1>

                    <p className="max-w-2xl mb-6 font-light text-gray-400/90 lg:mb-8 md:text-lg lg:text-xl">Full-Stack developer looking for the first oportunity in the area.</p>

                    <Link to="Contact" className="inline-flex items-center justify-center px-5 py-3 mr-3 text-base font-medium text-center text-white rounded-lg bg-medium-purple hover:bg-medium-darker-purple focus:ring-0">
                        Contact Me
                        <svg className="w-5 h-5 ml-2 -mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
                    </Link>
                    <Link to="Projects" className="inline-flex items-center justify-center px-5 py-3 text-base font-medium text-center text-white border border-bdr rounded-lg hover:bg-bdr focus:ring-0">
                        <FaGithub className='mr-2' /> See my work
                    </Link>
                    
                </div>
            </div>
        </section>
    );
}

export default Home;