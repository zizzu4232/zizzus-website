
import React from 'react';
import { CheckCircle2 } from "lucide-react";

const AboutSection = () => {
  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <div className="relative">
              <div className="absolute -top-6 -left-6 right-16 bottom-6 bg-gradient-to-br from-purple-600 to-blue-500 rounded-lg"></div>
              <img 
                src="https://images.unsplash.com/photo-1649972904349-6e44c42644a7"
                alt="Our team working" 
                className="relative rounded-lg shadow-lg w-full h-auto object-cover"
              />
            </div>
          </div>
          
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Elevating Digital Experiences Since 2015
            </h2>
            <p className="text-lg text-gray-600 mb-8">
              We're a team of passionate designers and developers who love creating beautiful, 
              functional websites that help businesses succeed online. Our approach combines 
              cutting-edge technology with timeless design principles.
            </p>
            
            <div className="space-y-4">
              <div className="flex items-start">
                <CheckCircle2 className="h-6 w-6 text-purple-600 mr-3 mt-0.5 flex-shrink-0" />
                <p className="text-gray-700">
                  <span className="font-semibold">Strategic Planning</span> - We develop comprehensive digital strategies tailored to your business goals.
                </p>
              </div>
              <div className="flex items-start">
                <CheckCircle2 className="h-6 w-6 text-purple-600 mr-3 mt-0.5 flex-shrink-0" />
                <p className="text-gray-700">
                  <span className="font-semibold">Creative Design</span> - Our designers create stunning visuals that capture your brand's essence.
                </p>
              </div>
              <div className="flex items-start">
                <CheckCircle2 className="h-6 w-6 text-purple-600 mr-3 mt-0.5 flex-shrink-0" />
                <p className="text-gray-700">
                  <span className="font-semibold">Flawless Development</span> - We build responsive, high-performance websites with clean code.
                </p>
              </div>
              <div className="flex items-start">
                <CheckCircle2 className="h-6 w-6 text-purple-600 mr-3 mt-0.5 flex-shrink-0" />
                <p className="text-gray-700">
                  <span className="font-semibold">Ongoing Support</span> - We're there for you after launch with maintenance and updates.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
