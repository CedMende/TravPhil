import React, { useState } from "react";
import { Menu, X, MapPin } from "lucide-react";
import { Link } from "react-router-dom";
export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navLinks = [{
    to: "/destinations",
    text: "Destinations"
  }, {
    to: "/activities",
    text: "Activities"
  }, {
    to: "/stay",
    text: "Where to Stay"
  }, {
    to: "/events",
    text: "Events"
  }, {
    to: "/reviews",
    text: "Reviews"
  }];
  return <header className="fixed top-0 left-0 right-0 bg-white/90 backdrop-blur-md z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex justify-between items-center py-4">
          <Link to="/" className="flex items-center">
            <MapPin className="h-6 w-6 text-green-600" />
            <span className="ml-2 text-xl font-semibold">
              Nueva Ecija Travel
            </span>
          </Link>
          <nav className="hidden md:flex space-x-8">
            {navLinks.map(link => <Link key={link.to} to={link.to} className="text-gray-600 hover:text-green-600">
                {link.text}
              </Link>)}
          </nav>
          <button className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </div>
      {isMenuOpen && <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navLinks.map(link => <Link key={link.to} to={link.to} className="block px-3 py-2 text-gray-600" onClick={() => setIsMenuOpen(false)}>
                {link.text}
              </Link>)}
          </div>
        </div>}
    </header>;
};