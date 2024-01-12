import React from 'react';
import Link from 'next/link';

const Navbar = () => {
    return (
        <div className="bg-white p-4">
            <div className="container mx-auto">
                <div className="flex items-center justify-between">
                    <Link href="/" className='bg-black rounded-full w-16 h-16'>
                        <h4 className='text-xl font-bold text-white text-center pt-4'>Logo</h4>
                    </Link>
                    <nav>
                        <ul className="flex space-x-4">
                            <li><a href="#" className="hover:text-gray-400 text-blue-700">Home</a></li>
                        </ul>
                    </nav>

                    <Link href="/register">
                        <button className="bg-[#2A4B6A] px-4 py-2 rounded-full hover:bg-blue-600">Sign in</button>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default Navbar;