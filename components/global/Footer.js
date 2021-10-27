import Link from 'next/link'
import { DeviceMobileIcon, AtSymbolIcon  } from '@heroicons/react/outline'

const Footer = () => {
    return (
        <footer className="bg-white border-t border-gray-200 text-center md:text-left">
            <div className="flex flex-col md:flex-row max-w-screen-lg mx-auto md:space-x-8 py-16 px-8 md:gap-x-6">
                <div className="flex-1 mb-6">
                    <Link href="/">
                        <a className="text-2xl font-semibold">
                            <span className="ml-2 text-indigo-700 transition-all hover:text-indigo-900">UXONOMY</span>
                        </a>
                    </Link>
                </div>
                <div className="flex flex-col md:flex-row flex-auto">
                    <div className="w-full md:flex-1">
                        <h4 className="text-md mb-4 font-medium text-gray-500">Services</h4>
                        <nav>
                            <ul className="text-md mb-4">
                                <li className="py-2">
                                    <Link href="/">
                                        <a className="text-gray-900 transition-all hover:text-indigo-900 hover:underline">Design</a>
                                    </Link>
                                </li>
                                <li className="py-2">
                                    <Link href="/">
                                        <a className="text-gray-900 transition-all hover:text-indigo-900 hover:underline">Development</a>
                                    </Link>
                                </li>
                                <li className="py-2">
                                    <Link href="/">
                                        <a className="text-gray-900 transition-all hover:text-indigo-900 hover:underline">UI/UX</a>
                                    </Link>
                                </li>
                                <li className="py-2">
                                    <Link href="/">
                                        <a className="text-gray-900 transition-all hover:text-indigo-900 hover:underline">Digital Marketing</a>
                                    </Link>
                                </li>
                            </ul>
                        </nav>
                    </div>
                    <div className="w-full md:flex-1">
                        <h4 className="text-md mb-4 font-medium text-gray-500">About</h4>
                        <nav>
                            <ul className="text-md mb-4">
                                <li className="py-2">
                                    <Link href="/">
                                        <a className="text-gray-900 transition-all hover:text-indigo-900 hover:underline">Our History</a>
                                    </Link>
                                </li>
                                <li className="py-2">
                                    <Link href="/">
                                        <a className="text-gray-900 transition-all hover:text-indigo-900 hover:underline">Help &amp; Support</a>
                                    </Link>
                                </li>
                                <li className="py-2">
                                    <Link href="/">
                                        <a className="text-gray-900 transition-all hover:text-indigo-900 hover:underline">Privacy Policy</a>
                                    </Link>
                                </li>
                                <li className="py-2">
                                    <Link href="/">
                                        <a className="text-gray-900 transition-all hover:text-indigo-900 hover:underline">Careers</a>
                                    </Link>
                                </li>
                            </ul>
                        </nav>
                    </div>
                    <div className="w-full md:flex-1">
                        <h4 className="text-md mb-4 font-medium text-gray-500">Get in Touch</h4>
                        <nav className="flex justify-center md:justify-start">
                            <ul className="text-md mb-4">
                                <li className="py-2 flex items-center">
                                    <DeviceMobileIcon width={18} height={18} className="text-gray-500 mr-2" /> <span>+63 919 123 4567</span>
                                </li>
                                <li className="py-2">
                                    <Link href="/">
                                        <a className="flex items-center text-gray-900 transition-all underline hover:no-underline">
                                            <AtSymbolIcon width={18} height={18} className="text-gray-500 mr-2" /> <span>hello@company.com</span>
                                        </a>
                                    </Link>
                                </li>
                            </ul>
                        </nav>
                    </div>
                </div>
            </div>
            <div className="flex flex-col max-w-screen-lg mx-auto pb-16 md:justify-start px-8">
               <p className="text-center text-sm text-gray-500">&copy; 2021. UXONOMY. All rights reserved.</p>
            </div>
        </footer>
    )
}

export default Footer
