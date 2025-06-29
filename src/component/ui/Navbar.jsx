import React from 'react';
import { FaHeartPulse } from 'react-icons/fa6';

const IconCSS = 'w-7 h-7 mb-1 text-blue-500';
const NavMenuCSS = 'text-gray-200 hover:text-blue-400 transition-colors font-medium'

function Navbar() {
    return (
        <nav className="fixed inset-x-0 top-0 z-50 bg-gray-800 shadow-md">
            <div className="max-w-7xl mx-auto px-4 h-16 flex items-center justify-between">
                {/* Logo and Title */}
                <div className="flex items-center space-x-3">
                    <FaHeartPulse className={IconCSS} />
                    <span className="text-xl font-bold text-white tracking-wide">Quick Warfarin</span>
                </div>
                {/* Navigation Links */}
                <ul className="flex space-x-6">
                    <li>
                        <a href="#" className={NavMenuCSS}>Home</a>
                    </li>
                    <li>
                        <a href="#" className={NavMenuCSS}>About</a>
                    </li>
                    <li>
                        <a href="#" className={NavMenuCSS}>Ref</a>
                    </li>
                </ul>
            </div>
        </nav>
    );
}

export default Navbar;