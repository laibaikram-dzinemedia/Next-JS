import React from "react";
import Link from "next/link";
const Navbar = () => {
  return (
    <nav className="flex items-center justify-between py-4 px-6  ">
      {/* Logo */}
      <div className="text-2xl font-bold">
        <Link href="/">Logo</Link>
      </div>

      {/* Navigation Links */}
      <div className="flex space-x-6">
        <Link href="/" className="hover:text-gray-200">
          Home
        </Link>
        <Link href="/about" className="hover:text-gray-200">
          About
        </Link>
        <Link href="/contact" className="hover:text-gray-200">
          Contact
        </Link>
      </div>

      {/* Action Button */}
      <div>
        <Link
          href="/login"
          className="bg-white   px-4 py-2 rounded-md font-medium hover:bg-gray-200 transition"
        >
          Login
        </Link>
        <Link
          href="/signup"
          className="bg-white   px-4 py-2 rounded-md font-medium hover:bg-gray-200 transition"
        >
          signup
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
