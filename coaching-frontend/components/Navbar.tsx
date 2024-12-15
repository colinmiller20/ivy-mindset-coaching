import Link from 'next/link';
import React from 'react';

const Navbar = () => {
  return (
    <nav style={{ padding: '10px', backgroundColor: '#333', color: 'white' }}>
      <Link href="/">Home</Link>
      <Link href="/about">About Us</Link>
      <Link href="/services">Services</Link>
      <Link href="/contacts">Contacts</Link>
    </nav>
  );
};

export default Navbar;
