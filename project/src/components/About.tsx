import React from 'react';

const About = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:text-center">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">About Me</h2>
          <div className="mt-10 flex flex-col md:flex-row items-center gap-10">
            <div className="md:w-1/3">
              <img
                src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=500&q=80"
                alt="Profile"
                className="rounded-lg shadow-lg"
              />
            </div>
            <div className="md:w-2/3 space-y-4 text-gray-600">
              <p>
                I'm a second-year Software Engineering student with a strong foundation in systems programming. 
                My journey in software development has focused on mastering C and C++, which has given me a deep 
                understanding of computer systems and memory management.
              </p>
              <p>
                Currently expanding my knowledge in system administration, I'm passionate about building 
                efficient and reliable software solutions. My experience with low-level programming 
                languages has helped me develop strong problem-solving skills and attention to detail.
              </p>
              <p>
                I'm always eager to learn new technologies and take on challenging projects that help me 
                grow as a software engineer. Looking forward to opportunities where I can apply and expand 
                my skills in systems programming and software development.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;