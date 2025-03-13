
import React from 'react';
import { Badge } from "@/components/ui/badge";
import { ExternalLink } from "lucide-react";

interface ProjectCardProps {
  title: string;
  category: string;
  image: string;
  color: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ title, category, image, color }) => {
  return (
    <a 
      href="#" 
      className="project-card group relative overflow-hidden rounded-xl block"
    >
      <div className={`absolute inset-0 ${color} opacity-90 transition-opacity group-hover:opacity-95`}></div>
      
      <img 
        src={image} 
        alt={title} 
        className="w-full h-full object-cover object-center absolute inset-0 mix-blend-overlay opacity-70 group-hover:opacity-40 transition-opacity"
      />
      
      <div className="relative p-6 md:p-8 h-full flex flex-col justify-between">
        <Badge variant="outline" className="self-start bg-white/20 text-white border-0 backdrop-blur-sm">
          {category}
        </Badge>
        
        <div>
          <h3 className="text-xl md:text-2xl font-bold text-white mt-4 group-hover:underline">
            {title}
          </h3>
          <div className="mt-2 opacity-0 group-hover:opacity-100 transition-opacity flex items-center text-white">
            <span className="mr-2">View examples</span>
            <ExternalLink className="h-4 w-4" />
          </div>
        </div>
      </div>
    </a>
  );
};

const ProjectGrid = () => {
  const projects = [
    {
      title: "E-commerce Excellence",
      category: "Online Stores",
      image: "https://images.unsplash.com/photo-1531297484001-80022131f5a1",
      color: "bg-gradient-to-br from-blue-600 to-indigo-700"
    },
    {
      title: "Portfolio Perfection",
      category: "Creative Portfolios",
      image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085",
      color: "bg-gradient-to-br from-pink-600 to-purple-700"
    },
    {
      title: "Corporate Clarity",
      category: "Business Websites",
      image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d",
      color: "bg-gradient-to-br from-green-600 to-teal-700"
    },
    {
      title: "Blogging Brilliance",
      category: "Content Platforms",
      image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158",
      color: "bg-gradient-to-br from-orange-600 to-red-700"
    },
    {
      title: "Creative Concepts",
      category: "Artistic Websites",
      image: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7",
      color: "bg-gradient-to-br from-yellow-500 to-orange-600"
    }
  ];

  return (
    <section id="portfolio" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Explore Our Website Categories</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Click on any category to see examples of websites we've created for clients in that industry
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <ProjectCard
              key={index}
              title={project.title}
              category={project.category}
              image={project.image}
              color={project.color}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectGrid;
