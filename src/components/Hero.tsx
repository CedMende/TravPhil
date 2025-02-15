import React from "react";
import { ChevronDown } from "lucide-react";
export const Hero = () => {
  return <div className="relative h-screen w-full">
      <div className="absolute inset-0 bg-cover bg-center" style={{
      backgroundImage: 'url("https://images.unsplash.com/photo-1464638681273-0962e9b53566?ixlib=rb-4.0.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80")'
    }}>
        <div className="absolute inset-0 bg-black/40" />
      </div>
      <div className="relative h-full flex flex-col justify-center items-center text-white text-center px-4">
        <h1 className="text-4xl md:text-6xl font-bold mb-4">
          Welcome to Nueva Ecija
        </h1>
        <p className="text-xl md:text-2xl mb-8">
          Discover the Rice Granary of the Philippines
        </p>
        <button className="bg-green-600 text-white px-8 py-3 rounded-full hover:bg-green-700 transition-colors">
          Explore Now
        </button>
        <div className="absolute bottom-8 animate-bounce">
          <ChevronDown size={32} />
        </div>
      </div>
    </div>;
};