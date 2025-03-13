
import React from 'react';
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const Hero = () => {
  return (
    <div id="home" className="relative min-h-screen flex items-center pt-16">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-600 via-blue-500 to-pink-500 opacity-90"></div>
      
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{ 
          backgroundImage: 'radial-gradient(circle at 30px 30px, white 2px, transparent 0)', 
          backgroundSize: '60px 60px' 
        }}></div>
      </div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="text-center md:text-left">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight">
              Transforming Ideas into <span className="text-yellow-300">Digital Reality</span>
            </h1>
            <p className="mt-6 text-lg md:text-xl text-white/90 max-w-2xl">
              We craft stunning, high-performing websites that elevate your brand and drive results. 
              Let's bring your vision to life with our creative web development solutions.
            </p>
            <div className="mt-10 flex flex-col sm:flex-row justify-center md:justify-start gap-4">
              <Button className="bg-white text-purple-700 hover:bg-yellow-300 hover:text-purple-800 text-lg px-8 py-6">
                Our Portfolio
              </Button>
              <Button variant="outline" className="bg-transparent border-white text-white hover:bg-white/10 text-lg px-8 py-6">
                Get in Touch <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </div>
          </div>
          
          <div className="animate-float hidden md:block">
            <div className="relative mx-auto w-full max-w-md">
              <div className="absolute inset-0 bg-gradient-to-tr from-pink-500 to-purple-600 rounded-lg blur opacity-40 animate-pulse-slow"></div>
              <div className="relative overflow-hidden rounded-lg bg-white/90 shadow-xl">
                <img
                  src="https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d"
                  alt="Web Development"
                  className="w-full h-auto object-cover aspect-video"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end">
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-white">Premium Web Experiences</h3>
                    <p className="text-white/80">Beautifully crafted websites that convert</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Wave divider */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M0 120L48 106.7C96 93.3 192 66.7 288 60C384 53.3 480 66.7 576 75C672 83.3 768 86.7 864 75C960 63.3 1056 36.7 1152 26.7C1248 16.7 1344 23.3 1392 26.7L1440 30V120H1392C1344 120 1248 120 1152 120C1056 120 960 120 864 120C768 120 672 120 576 120C480 120 384 120 288 120C192 120 96 120 48 120H0Z" fill="white"/>
        </svg>
      </div>
    </div>
  );
};

export default Hero;
