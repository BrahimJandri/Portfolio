import React from 'react';
import { Code2, Layout, Database, GitBranch, Terminal, Book } from 'lucide-react';

const skillCategories = [
  {
    title: 'Programming Languages',
    icon: Code2,
    skills: ['C', 'C++', 'Basic Python', 'Shell Scripting']
  },
  {
    title: 'System Programming',
    icon: Terminal,
    skills: ['Memory Management', 'Process Control', 'System Calls', 'Threading']
  },
  {
    title: 'System Administration',
    icon: Layout,
    skills: ['Linux Basics', 'Network Configuration', 'Service Management', 'Shell Scripting']
  },
  {
    title: 'Development Tools',
    icon: GitBranch,
    skills: ['Git', 'GCC', 'Make', 'GDB']
  },
  {
    title: 'Databases',
    icon: Database,
    skills: ['Basic SQL', 'Database Design', 'Data Modeling']
  },
  {
    title: 'Learning',
    icon: Book,
    skills: ['Problem Solving', 'Algorithm Design', 'Documentation', 'Team Collaboration']
  }
];

const Skills = () => {
  return (
    <section id="skills" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:text-center">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">Skills</h2>
          <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
            Here are the technologies and skills I've developed
          </p>
        </div>
        <div className="mt-16 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {skillCategories.map((category) => {
            const Icon = category.icon;
            return (
              <div key={category.title} className="bg-white rounded-lg shadow-md p-6">
                <div className="flex items-center">
                  <Icon className="h-6 w-6 text-indigo-600" />
                  <h3 className="ml-3 text-xl font-medium text-gray-900">{category.title}</h3>
                </div>
                <ul className="mt-4 space-y-2">
                  {category.skills.map((skill) => (
                    <li key={skill} className="text-gray-600">{skill}</li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Skills;