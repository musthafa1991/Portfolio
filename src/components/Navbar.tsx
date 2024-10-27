import React, { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import { Link } from 'react-scroll';

const Navbar: React.FC = () => {
  const [nav, setNav] = useState<boolean>(false);

  interface LinkItem {
    id: number;
    link: string;
  }

  const links: LinkItem[] = [
    {
      id: 1,
      link: 'Home',
    },
    {
      id: 2,
      link: 'About',
    },
    {
      id: 3,
      link: 'Skill',
    },
    {
      id: 4,
      link: 'Works',
    },
    {
      id: 5,
      link: 'Contact',
    },
  ];

  return (
    <nav className="fixed top-0 left-0 w-full bg-black bg-opacity-90 text-white shadow-lg z-50">
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        <div className="text-3xl font-bold font-signature">
          <h1>Mohamed Musthafa</h1>
        </div>

        <ul className="hidden md:flex space-x-6">
          {links.map(({ id, link }) => (
            <li key={id}>
              <Link
                to={link}
                smooth
                duration={500}
                className="text-gray-300 hover:text-white transition-colors duration-300 text-lg font-medium"
              >
                {link}
              </Link>
            </li>
          ))}
        </ul>

        <div
          onClick={() => setNav(!nav)}
          className="md:hidden cursor-pointer text-gray-300 hover:text-white transition-colors duration-300"
        >
          {nav ? <FaTimes size={24} /> : <FaBars size={24} />}
        </div>
      </div>

      {nav && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {links.map(({ id, link }) => (
              <Link
                key={id}
                to={link}
                smooth
                duration={500}
                onClick={() => setNav(!nav)}
                className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
              >
                {link}
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
