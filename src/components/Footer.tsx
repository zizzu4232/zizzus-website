
import React from 'react';
import { Layers } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center mb-4">
              <Layers className="h-7 w-7 mr-2 text-purple-400" />
              <span className="font-bold text-xl bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-blue-400">
                ZizzuCreation
              </span>
            </div>
            <p className="text-gray-400 mb-4">
              We create beautiful, functional websites that help businesses succeed online.
            </p>
            <p className="text-gray-400">
              © 2023 WebCreative. All rights reserved.
            </p>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Services</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Custom Website Design</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">E-commerce Development</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Responsive Development</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Website Maintenance</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">SEO Optimization</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Website Types</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">E-commerce Stores</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Creative Portfolios</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Business Websites</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Content Platforms</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Artistic Websites</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="#home" className="text-gray-400 hover:text-white transition-colors">Home</a></li>
              <li><a href="#services" className="text-gray-400 hover:text-white transition-colors">Services</a></li>
              <li><a href="#portfolio" className="text-gray-400 hover:text-white transition-colors">Portfolio</a></li>
              <li><a href="#about" className="text-gray-400 hover:text-white transition-colors">About</a></li>
              <li><a href="#contact" className="text-gray-400 hover:text-white transition-colors">Contact</a></li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
