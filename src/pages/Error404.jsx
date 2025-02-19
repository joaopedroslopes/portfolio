import { Link } from "react-router-dom";

function Error404() {
    return ( 
        <div className="flex-grow flex flex-col items-center justify-center text-center py-20">
            <h1 className="text-9xl font-extrabold text-medium-purple">404</h1>
            <p className="text-2xl font-semibold text-gray-900 dark:text-white mt-4">Page Not Found</p>
            <p className="text-lg text-gray-600 dark:text-gray-400 mt-2">Sorry, the page you're looking for doesn't exist.</p>
            <Link to="/" className="mt-6 text-white bg-medium-purple hover:bg-medium-darker-purple focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center">Go Back Home</Link>
        </div>
     );
}

export default Error404;