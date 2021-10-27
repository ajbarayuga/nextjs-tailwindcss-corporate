import Link from 'next/link'

const Navbar = () => {
    return (
        <nav className="border-b border-gray-200">
            <div className="flex justify-between items-center py-6 md:justify-start md:space-x-8 max-w-screen-lg mx-auto md:py-4 px-8">
                <Link href="/">
                   <a className="flex justify-start lg:w-0 lg:flex-1">
                        <span className="w-auto">Corpora8</span>
                    </a>
                </Link>
                <div className="-mr-2 -my-2 md:hidden">
                    <a href="/" className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
                        </svg>
                    </a>
                </div>
                <ul className="hidden md:flex space-x-8">
                    <li>
                        <a href="/">Home</a>
                    </li>
                    <li>
                        <a href="/">About</a>
                    </li>
                    <li>
                        <a href="/">Services</a>
                    </li>
                    <li>
                        <a href="/">Contact</a>
                    </li>
                </ul>
                <div className="hidden md:flex items-center justify-end md:flex-1 lg:w-0">
                    <button className="inline-block py-2 px-4 bg-indigo-700 text-white text-md rounded">
                        Get in Touch
                    </button>
                </div>
            </div>
        </nav>
    )
}

export default Navbar
