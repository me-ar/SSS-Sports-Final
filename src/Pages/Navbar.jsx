import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Logo } from '../../public/assets'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-3 lg:px-0">
        <div className="flex justify-between h-40">
          <div className="flex-shrink-0 flex items-center justify-start">
            <Link to="/" className="text-blue font-bold">
              <img src={`${Logo}`} alt="Mylogo" className='h-[300px] w-[300px] '/>
            </Link>
          </div>
          <div className="hidden md:flex space-x-4 items-center text-[30px]">
            <Link to="/" className="text-navy-blue-500 font-bold hover:text-gray-300">
              Home
            </Link>
            <Link to="/spaces" className="text-black-300 font-bold hover:text-gray-300">
              Spaces
            </Link>
            <Link to="/about" className="text-black-300 font-bold hover:text-gray-300">
            About
            </Link>
            <Link to="/contact" className="text-black-300 font-bold hover:text-gray-300">
              Contact
            </Link>
          </div>
          <div className="flex items-center md:hidden">
            <button
              onClick={toggleMenu}
              className="text-black hover:text-gray-300 focus:outline-none"
            >
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d={isOpen ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16M4 18h16'}
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
      {isOpen && (
        <div className="md:hidden px-2 pt-2 pb-3 space-y-1">
          <Link to="/" className="block text-black hover:bg-blue-700 px-3 py-2 rounded-md text-base font-medium">
            Home
          </Link>
          <Link to="/spaces" className="block text-black hover:bg-blue-700 px-3 py-2 rounded-md text-base font-medium">
            Spaces
          </Link>
          <Link to="/about" className="block text-black hover:bg-blue-700 px-3 py-2 rounded-md text-base font-medium">
            About
          </Link>
          <Link to="/contact" className="block text-black hover:bg-blue-700 px-3 py-2 rounded-md text-base font-medium">
            Contact
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;