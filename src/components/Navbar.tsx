
import React from 'react';
import { Button } from "@/components/ui/button";
import { Layers, Menu, X } from "lucide-react";
import { useState } from "react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <div className="flex items-center">
            <Layers className="h-8 w-8 mr-2 text-purple-600" />
            <span className="font-bold text-xl bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-blue-500">
              WebCreative
            </span>
          </div>
          
          <div className="hidden md:flex space-x-6">
            <a href="#home" className="font-medium text-gray-700 hover:text-purple-600 transition-colors">Home</a>
            <a href="#services" className="font-medium text-gray-700 hover:text-purple-600 transition-colors">Services</a>
            <a href="#portfolio" className="font-medium text-gray-700 hover:text-purple-600 transition-colors">Portfolio</a>
            <a href="#about" className="font-medium text-gray-700 hover:text-purple-600 transition-colors">About</a>
            <a href="#contact" className="font-medium text-gray-700 hover:text-purple-600 transition-colors">Contact</a>
          </div>
          
          <div className="hidden md:block">
            <Button className="bg-gradient-to-r from-purple-600 to-blue-500 hover:from-purple-700 hover:to-blue-600 text-white font-medium">
              Get Started
            </Button>
          </div>
          
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-purple-600 focus:outline-none"
            >
              {isMenuOpen ? (
                <X className="block h-6 w-6" aria-hidden="true" />
              ) : (
                <Menu className="block h-6 w-6" aria-hidden="true" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden">
          <div className="pt-2 pb-4 space-y-1 bg-white/95 backdrop-blur-md">
            <a href="#home" className="block pl-3 pr-4 py-2 text-base font-medium text-gray-700 hover:bg-purple-50 hover:text-purple-600">
              Home
            </a>
            <a href="#services" className="block pl-3 pr-4 py-2 text-base font-medium text-gray-700 hover:bg-purple-50 hover:text-purple-600">
              Services
            </a>
            <a href="#portfolio" className="block pl-3 pr-4 py-2 text-base font-medium text-gray-700 hover:bg-purple-50 hover:text-purple-600">
              Portfolio
            </a>
            <a href="#about" className="block pl-3 pr-4 py-2 text-base font-medium text-gray-700 hover:bg-purple-50 hover:text-purple-600">
              About
            </a>
            <a href="#contact" className="block pl-3 pr-4 py-2 text-base font-medium text-gray-700 hover:bg-purple-50 hover:text-purple-600">
              Contact
            </a>
            <div className="pl-3 pr-4 py-2">
              <Button className="w-full bg-gradient-to-r from-purple-600 to-blue-500 hover:from-purple-700 hover:to-blue-600 text-white font-medium">
                Get Started
              </Button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
