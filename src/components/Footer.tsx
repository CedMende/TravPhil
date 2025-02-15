import React from "react";
import { MapPin, Phone, Mail, Facebook, Instagram, Twitter } from "lucide-react";
import { Link } from "react-router-dom";
export const Footer = () => {
  return <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center mb-4">
              <MapPin className="h-6 w-6 text-green-500" />
              <span className="ml-2 text-xl font-semibold text-white">
                Nueva Ecija Travel
              </span>
            </div>
            <p className="text-sm">
              Discover the beauty and culture of the Rice Granary of the
              Philippines
            </p>
          </div>
          <div>
            <h3 className="text-white font-semibold mb-4">Quick Links</h3>
            <div className="space-y-2">
              <Link to="/destinations" className="block hover:text-green-500">
                Destinations
              </Link>
              <Link to="/activities" className="block hover:text-green-500">
                Activities
              </Link>
              <Link to="/stay" className="block hover:text-green-500">
                Where to Stay
              </Link>
              <Link to="/events" className="block hover:text-green-500">
                Events
              </Link>
              <Link to="/reviews" className="block hover:text-green-500">
                Reviews
              </Link>
            </div>
          </div>
          <div>
            <h3 className="text-white font-semibold mb-4">Contact</h3>
            <div className="space-y-2">
              <div className="flex items-center">
                <Phone className="h-4 w-4 mr-2" />
                <span>+63 123 456 7890</span>
              </div>
              <div className="flex items-center">
                <Mail className="h-4 w-4 mr-2" />
                <span>info@nuevaecija.travel</span>
              </div>
              <div className="flex items-center">
                <MapPin className="h-4 w-4 mr-2" />
                <span>Nueva Ecija, Philippines</span>
              </div>
            </div>
          </div>
          <div>
            <h3 className="text-white font-semibold mb-4">Follow Us</h3>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-green-500">
                <Facebook className="h-6 w-6" />
              </a>
              <a href="#" className="hover:text-green-500">
                <Instagram className="h-6 w-6" />
              </a>
              <a href="#" className="hover:text-green-500">
                <Twitter className="h-6 w-6" />
              </a>
            </div>
          </div>
        </div>
        <div className="border-t border-gray-800 mt-8 pt-8 text-sm text-center">
          <p>
            &copy; {new Date().getFullYear()} Nueva Ecija Travel. All rights
            reserved.
          </p>
        </div>
      </div>
    </footer>;
};