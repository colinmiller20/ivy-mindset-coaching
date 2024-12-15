import Link from 'next/link';
import React from 'react';

const Navbar = () => {
  return (
    <nav className="bg-gray-800 text-white p-4 flex justify-around">
      <Link href="/" className="hover:text-gray-300">Home</Link>
      <Link href="/booking" className="hover:text-gray-300">Booking</Link>
      <Link href="/services" className="hover:text-gray-300">Services</Link>
      <Link href="/contacts" className="hover:text-gray-300">Contact Us</Link>
    </nav>
  );
};

export default Navbar;
