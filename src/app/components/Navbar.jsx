import React from 'react';
import Link from 'next/link';

const Navbar = () => {
  return (
    <header className="fixed left-0 right-0 py-4 z-50 font-mono">
     <h2 className="ml-10 text-white max-w-2xl">
  Photo Vibe
</h2>

         
      <nav className="flex gap-10 justify-center items-center">
      
        <Link
          href="#"
          className="uppercase font-semibold text-base text-white px-5 py-1  text-xl rounded-2xl hover:bg-green transition duration-500 ease-in-out"
        >
          Home
        </Link>

        <Link
          href="#"
          className="uppercase font-semibold text-base text-white px-5 py-1  text-xl rounded-2xl hover:bg-green transition duration-500 ease-in-out"
        >
          Albums
        </Link>

        <Link
          href="#"
          className="uppercase font-semibold text-base text-white px-5 py-1  text-xl rounded-2xl hover:bg-green transition duration-500 ease-in-out"
        >
          Gallery
        </Link>

        
        <Link
          href="#"
          className="uppercase font-semibold text-base text-white px-5 py-1  text-xl rounded-2xl hover:bg-green transition duration-500 ease-in-out"
        >
          About
        </Link>
      </nav>
    </header>
  );
};

export default Navbar;
