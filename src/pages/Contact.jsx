import { FaGithub, FaLinkedin } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

function Contact() {
    return ( 
        <main class="flex-grow flex flex-col items-center justify-center py-12">
            <section class="text-center px-4">
                <img src="/images/contact.png" alt="Contact Me Image" class="mx-auto mt-16 mb-6 h-32"></img>
                <h1 class="text-4xl font-bold text-white mb-6">Contact Me</h1>
                <p class="text-lg text-gray-300 mb-8 max-w-xl mx-auto">
                    I am passionate about Back-End Development, seeking opportunities that allow me to contribute and grow in these field.
                </p>
                <div class="flex flex-col sm:flex-row justify-center gap-4">
                    <a href="mailto:jp01.bao@gmail.com" target="_blank" class="flex items-center justify-center bg-red-600 hover:bg-red-700 text-white font-bold py-2 px-4 rounded">
                        <MdEmail className="mr-2" /> Email
                    </a>
                    <a href="https://github.com/joaopedroslopes" target="_blank" class="flex items-center justify-center bg-gray-800 hover:bg-gray-900 text-white font-bold py-2 px-4 rounded">
                        <FaGithub className="mr-2" />GitHub
                    </a>
                    <a href="https://www.linkedin.com/in/joaopedroslopes/" target="_blank" class="flex items-center justify-center bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                        <FaLinkedin className="mr-2" />LinkedIn
                    </a>
                </div>
            </section>
        </main>
     );
}

export default Contact;