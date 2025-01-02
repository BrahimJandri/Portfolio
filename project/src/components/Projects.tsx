import React from 'react';
import { ExternalLink, Github } from 'lucide-react';

const projects = [
  {
    title: 'System Resource Monitor',
    description: 'A C++ application that monitors system resources like CPU, memory, and processes',
    image: 'https://images.unsplash.com/photo-1551636898-47668aa61de2?auto=format&fit=crop&w=500&q=80',
    technologies: ['C++', 'Linux API', 'System Calls', 'Performance Monitoring'],
    githubUrl: 'https://github.com/brahim-jandri/system-monitor',
    liveUrl: '#'
  },
  {
    title: 'Memory Management Library',
    description: 'Custom memory management implementation in C with various allocation strategies',
    image: 'https://images.unsplash.com/photo-1515879218367-8466d910aaa4?auto=format&fit=crop&w=500&q=80',
    technologies: ['C', 'Memory Management', 'Data Structures', 'Optimization'],
    githubUrl: 'https://github.com/brahim-jandri/memory-lib',
    liveUrl: '#'
  },
  {
    title: 'Linux System Administration Tools',
    description: 'Collection of shell scripts for automated system administration tasks',
    image: 'https://images.unsplash.com/photo-1629654297299-c8506221ca97?auto=format&fit=crop&w=500&q=80',
    technologies: ['Shell Scripting', 'Linux', 'System Administration', 'Automation'],
    githubUrl: 'https://github.com/brahim-jandri/sysadmin-tools',
    liveUrl: '#'
  }
];

const Projects = () => {
  return (
    <section id="projects" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:text-center">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">Projects</h2>
          <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
            Here are some of my key projects in systems programming and administration
          </p>
        </div>
        <div className="mt-16 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
            <div key={project.title} className="bg-gray-50 rounded-lg overflow-hidden shadow-md">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-lg font-medium text-gray-900">{project.title}</h3>
                <p className="mt-2 text-gray-600">{project.description}</p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-2 py-1 text-sm bg-indigo-100 text-indigo-700 rounded"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="mt-4 flex space-x-4">
                  <a
                    href={project.githubUrl}
                    className="flex items-center text-gray-600 hover:text-gray-900"
                  >
                    <Github className="w-5 h-5 mr-1" />
                    Code
                  </a>
                  <a
                    href={project.liveUrl}
                    className="flex items-center text-gray-600 hover:text-gray-900"
                  >
                    <ExternalLink className="w-5 h-5 mr-1" />
                    Demo
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;