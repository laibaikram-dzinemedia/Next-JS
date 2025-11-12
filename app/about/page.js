import React from "react";
import Image from "next/image";

export default function About() {
  return (
    <div className="max-w-[800px] mx-auto flex items-center justify-center flex-col h-screen">
      <h1 className="text-4xl font-bold text-blue-600">About Us</h1>
      <p className="text-gray-600 leading-relaxed text-center">
        Welcome to <span className="font-semibold text-blue-500">DemoSite</span>{" "}
        — your trusted partner for creative and modern web solutions. We
        specialize in delivering user-friendly, high-performing websites and
        applications tailored to your needs.
      </p>

      <h2 className="text-2xl font-semibold text-gray-800 mb-2">Our Mission</h2>
      <p className="text-gray-600 text-center">
        To empower businesses and individuals through modern, accessible, and
        beautiful web experiences — helping them thrive in the digital world.
      </p>

      <div className="mt-12 text-center text-gray-600">
        <p>© 2025 DemoSite. All rights reserved.</p>
      </div>
    </div>
  );
}
