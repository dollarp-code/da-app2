'use client';

import Image from 'next/image';
import Link from 'next/link';
import React, { useState } from 'react';

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const logoWhite = '/logoWhite.png';
  const logoBlack = '/logoBlack.png';
  const navLinks = [
    { label: 'Blog', url: '/' },
    { label: 'Pricing', url: '/' },
  ];
  const actionButtons = [
    { label: 'Log in', url: '/' },
    { label: 'Start free trial', url: '/' },
  ];

  return (
    <nav className="w-full bg-white">
      <div className="max-w-7xl mx-auto flex items-center justify-between  sm:px-6 lg:px-8 h-16">
        {/* logo-links */}
        <div className="logo-link flex items-center z-50 px-6">
          <div className="shrink-0 flex items-center">
            {isOpen ? (
              <Link href={'/'}>
                <Image
                  className="h-8 w-auto "
                  src={logoWhite}
                  alt="Logo"
                  width={100}
                  height={100}
                />
              </Link>
            ) : (
              <Link href={'/'}>
                <Image
                  className="h-8 w-auto"
                  src={logoBlack}
                  alt="Logo"
                  width={100}
                  height={100}
                />
              </Link>
            )}
          </div>

          {/* links */}
          <div className="hidden sm:flex sm:space-x-8 ml-8">
            {navLinks.map((link) => (
              <a
                key={link.url}
                href={link.url}
                className="text-gray-500 hover:text-gray-700 inline-flex items-center px-1 pt-1 text-sm font-medium"
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>

        {/* Buttons */}
        <div className="buttons hidden sm:flex">
          {actionButtons.map((button) => (
            <a
              key={button.url}
              href={button.url}
              className={`ml-4 px-4 py-2 rounded-[8px] text-sm font-medium ${
                button.label === 'Start free trial'
                  ? 'text-white bg-purple-600 hover:bg-purple-700'
                  : 'text-gray-700 bg-white hover:bg-gray-100 border border-gray-300'
              }`}
            >
              {button.label}
            </a>
          ))}
        </div>

        {/* hamburger */}
        <div
          onClick={toggleMenu}
          className="sm:hidden relative h-6 w-6   flex justify-center items-center z-50 "
        >
          <div
            className={`w-full h-0.5 bg-current absolute right-6 transition-transform duration-300 ease-in-out ${
              isOpen ? 'rotate-45 bg-gray-50' : '-translate-y-1.5'
            }`}
          />
          <div
            className={`w-full h-0.5 bg-current absolute right-6 transition-opacity duration-300 ease-in-out ${
              isOpen ? 'opacity-0 ' : 'opacity-100'
            }`}
          />
          <div
            className={`w-full h-0.5 bg-current absolute right-6 transition-transform duration-300 ease-in-out ${
              isOpen ? '-rotate-45 bg-gray-50' : 'translate-y-1.5'
            }`}
          />
        </div>
      </div>

      {/* mobile menu */}
      {isOpen && (
        <nav className="sm:hidden bg-[#5A34C6] fixed top-0 inset-x-0 h-72 px-4 pt-20">
          <div className="flex flex-col justify-between gap-4">
            <ul className="px-4 text-white flex flex-col gap-4">
              {navLinks.map((link) => (
                <li key={link.url}>
                  <a href={link.url}>{link.label}</a>
                </li>
              ))}
            </ul>

            {/* mobile buttons */}
            <div className="buttons flex gap-4 px-4 mt-4">
              {actionButtons.map((button) => (
                <a
                  key={button.url}
                  href={button.url}
                  className={`w-full text-center px-4 py-2 rounded-md text-base font-medium ${
                    button.label === 'Start free trial'
                      ? 'bg-white text-[#5A34C6] hover:bg-gray-100'
                      : 'bg-[#5A34C6] text-white border border-white hover:bg-purple-800'
                  }`}
                >
                  {button.label}
                </a>
              ))}
            </div>
          </div>
        </nav>
      )}
    </nav>
  );
};

export default Header;
