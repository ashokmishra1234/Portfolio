import React, { useState, useEffect } from 'react';
import { 
  Mail, 
  Phone, 
  Github, 
  Linkedin, 
  ExternalLink, 
  Code, 
  User, 
  GraduationCap, 
  Briefcase, 
  Award, 
  Star,
  MapPin,
  Calendar,
  ChevronDown,
  Menu,
  X
} from 'lucide-react';

function App() {
  const [activeSection, setActiveSection] = useState('home');
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setActiveSection(sectionId);
      setIsMenuOpen(false);
    }
  };

  const projects = [
    {
      title: "Potato Disease Classification System",
      description: "Built a deep learning web app classifying potato leaf diseases with CNNs, achieving 97%+ accuracy. Developed and deployed using Streamlit for real-time disease prediction.",
      tech: ["Python", "TensorFlow", "Keras", "CNN", "Streamlit"],
      github: "https://github.com/ashokmishra1234/potato-disease-classification",
      accuracy: "97%+"
    },
    {
      title: "OCT Image Classification",
      description: "Developed a deep learning web application to classify Optical Coherence Tomography retinal images using ResNet, achieving high accuracy for medical diagnostics.",
      tech: ["Python", "PyTorch", "ResNet", "Streamlit", "Medical Imaging"],
      github: "https://github.com/ashokmishra1234/OCT-Image-Classification"
    },
    {
      title: "MyPortfolio",
      description: "Created a personal portfolio website showcasing projects, skills, and contact details with modern web technologies.",
      tech: ["HTML", "CSS", "JavaScript"],
      github: "https://github.com/ashokmishra1234/Portfolio"
    },
    {
      title: "Snake Game",
      description: "Developed a classic Snake game in C++ featuring real-time movement, collision detection, and random food placement using efficient data structures.",
      tech: ["C++"],
      github: "https://github.com/ashokmishra1234/snake_game"
    }
  ];

  const skills = {
    "Programming Languages": ["Python", "C", "C++", "JavaScript", "Matlab", "R"],
    "Frameworks & Libraries": ["TensorFlow", "Keras", "PyTorch", "Scikit-learn"],
    "Tools & Platforms": ["Git", "Linux", "Windows"],
    "Coursework": ["Data Structures", "Algorithms", "Object Oriented Programming"],
    "Soft Skills": ["Problem Solving", "Leadership", "Event Management", "Public Speaking", "Time Management"]
  };

  const education = [
    {
      institution: "National Institute of Technology, Silchar",
      degree: "B.Tech in Computer Science and Engineering",
      duration: "July 2023 - Present",
      location: "Assam, India",
      score: "CGPA: 8.31 (after 4 semesters)"
    },
    {
      institution: "Shakun Vidya Niketan, Prayagraj",
      degree: "Higher Secondary Certificate (HSC)",
      duration: "July 2020 - July 2022",
      location: "Uttar Pradesh, India",
      score: "Percentage: 93.4%"
    },
    {
      institution: "Kumudlata Convent School, Prayagraj",
      degree: "Secondary School Certificate (SSC)",
      duration: "May 2018 - July 2020",
      location: "Uttar Pradesh, India",
      score: "Percentage: 87.4%"
    }
  ];

  const positions = [
    {
      title: "Core Member (Web Domain)",
      organization: "GDG on Campus, NIT Silchar",
      duration: "Aug 2024 – Present",
      description: "Involved in web development projects and workshops."
    },
    {
      title: "PR Team Member",
      organization: "GDG on Campus, NIT Silchar",
      duration: "Aug 2024 – Present",
      description: "Managing outreach, promotions, and event publicity."
    },
    {
      title: "Junior Associate",
      organization: "Illuminits Club, NIT Silchar",
      duration: "Aug 2024 – Present",
      description: "Contributing to club events and creative initiatives."
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/90 backdrop-blur-md border-b border-gray-200 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="text-xl font-bold text-gray-800">Ashok Mishra</div>
            
            {/* Desktop Navigation */}
            <div className="hidden md:flex space-x-8">
              {['home', 'about', 'education', 'projects', 'skills', 'experience', 'contact'].map((section) => (
                <button
                  key={section}
                  onClick={() => scrollToSection(section)}
                  className={`capitalize transition-colors duration-200 ${
                    activeSection === section ? 'text-blue-600' : 'text-gray-600 hover:text-blue-600'
                  }`}
                >
                  {section}
                </button>
              ))}
            </div>

            {/* Mobile menu button */}
            <button
              className="md:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <div className="md:hidden py-4 space-y-2">
              {['home', 'about', 'education', 'projects', 'skills', 'experience', 'contact'].map((section) => (
                <button
                  key={section}
                  onClick={() => scrollToSection(section)}
                  className="block w-full text-left px-4 py-2 capitalize text-gray-600 hover:text-blue-600 hover:bg-gray-50 rounded-md transition-colors"
                >
                  {section}
                </button>
              ))}
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
        <div 
          className="absolute inset-0 bg-gradient-to-br from-blue-600 via-purple-600 to-teal-600"
          style={{
            transform: `translateY(${scrollY * 0.5}px)`,
          }}
        />
        <div className="absolute inset-0 bg-black/20" />
        
        <div className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto">
          <div className="w-32 h-32 mx-auto mb-8 rounded-full bg-gradient-to-r from-orange-400 to-pink-500 p-1">
            <div className="w-full h-full rounded-full bg-gray-300 flex items-center justify-center">
              <User size={48} className="text-gray-600" />
            </div>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-fade-in">
            Ashok Mishra
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-gray-200">
            Computer Science Engineering Student | AI/ML Enthusiast | Problem Solver
          </p>
          <p className="text-lg mb-12 text-gray-300 max-w-2xl mx-auto">
            Passionate about building innovative solutions with cutting-edge technology. 
            Currently pursuing B.Tech at NIT Silchar with a focus on machine learning and web development.
          </p>
          
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            <a href="mailto:ashokmishra1709@gmail.com" className="flex items-center gap-2 bg-white/10 backdrop-blur-md border border-white/20 px-6 py-3 rounded-full hover:bg-white/20 transition-all duration-300">
              <Mail size={20} />
              <span>Email</span>
            </a>
            <a href="https://github.com/ashokmishra1234" className="flex items-center gap-2 bg-white/10 backdrop-blur-md border border-white/20 px-6 py-3 rounded-full hover:bg-white/20 transition-all duration-300">
              <Github size={20} />
              <span>GitHub</span>
            </a>
            <a href="https://www.linkedin.com/in/ashok-mishra-nits27" className="flex items-center gap-2 bg-white/10 backdrop-blur-md border border-white/20 px-6 py-3 rounded-full hover:bg-white/20 transition-all duration-300">
              <Linkedin size={20} />
              <span>LinkedIn</span>
            </a>
            <a href="https://leetcode.com/ASHOKMISHRA" className="flex items-center gap-2 bg-white/10 backdrop-blur-md border border-white/20 px-6 py-3 rounded-full hover:bg-white/20 transition-all duration-300">
              <Code size={20} />
              <span>LeetCode</span>
            </a>
          </div>

          <button
            onClick={() => scrollToSection('about')}
            className="animate-bounce"
          >
            <ChevronDown size={32} />
          </button>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-16 text-gray-800">About Me</h2>
          
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-2xl font-semibold mb-6 text-gray-800">Hello! I'm Ashok</h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                I'm a passionate Computer Science Engineering student at NIT Silchar with a strong foundation in 
                machine learning, deep learning, and web development. I love solving complex problems and building 
                innovative solutions that make a real impact.
              </p>
              <p className="text-gray-600 mb-6 leading-relaxed">
                With experience in Python, C++, and JavaScript, I've developed several projects ranging from 
                medical image classification systems to classic games. I'm particularly interested in AI/ML 
                applications in healthcare and enjoy participating in competitive programming.
              </p>
              <p className="text-gray-600 leading-relaxed">
                When I'm not coding, you can find me contributing to college clubs, managing events, or 
                solving problems on LeetCode and other competitive programming platforms.
              </p>
            </div>
            
            <div className="space-y-6">
              <div className="bg-gradient-to-r from-blue-50 to-teal-50 p-6 rounded-xl border border-blue-100">
                <div className="flex items-center gap-3 mb-3">
                  <GraduationCap className="text-blue-600" size={24} />
                  <h4 className="font-semibold text-gray-800">Current Education</h4>
                </div>
                <p className="text-gray-600">B.Tech CSE at NIT Silchar</p>
                <p className="text-sm text-gray-500">CGPA: 8.31/10</p>
              </div>
              
              <div className="bg-gradient-to-r from-orange-50 to-red-50 p-6 rounded-xl border border-orange-100">
                <div className="flex items-center gap-3 mb-3">
                  <Code className="text-orange-600" size={24} />
                  <h4 className="font-semibold text-gray-800">Problem Solving</h4>
                </div>
                <p className="text-gray-600">350+ LeetCode Problems</p>
                <p className="text-sm text-gray-500">500+ across all platforms</p>
              </div>
              
              <div className="bg-gradient-to-r from-green-50 to-emerald-50 p-6 rounded-xl border border-green-100">
                <div className="flex items-center gap-3 mb-3">
                  <Award className="text-green-600" size={24} />
                  <h4 className="font-semibold text-gray-800">JEE Achievement</h4>
                </div>
                <p className="text-gray-600">AIR 12,818 (Top 1.1%)</p>
                <p className="text-sm text-gray-500">98.906 percentile in JEE Mains 2023</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section id="education" className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-16 text-gray-800">Education</h2>
          
          <div className="space-y-8">
            {education.map((edu, index) => (
              <div key={index} className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100">
                <div className="flex flex-col md:flex-row md:items-center justify-between mb-4">
                  <div>
                    <h3 className="text-xl font-semibold text-gray-800 mb-2">{edu.institution}</h3>
                    <p className="text-blue-600 font-medium">{edu.degree}</p>
                  </div>
                  <div className="text-right mt-4 md:mt-0">
                    <div className="flex items-center gap-2 text-gray-500 mb-1">
                      <Calendar size={16} />
                      <span>{edu.duration}</span>
                    </div>
                    <div className="flex items-center gap-2 text-gray-500">
                      <MapPin size={16} />
                      <span>{edu.location}</span>
                    </div>
                  </div>
                </div>
                <div className="bg-gradient-to-r from-blue-50 to-teal-50 p-4 rounded-lg">
                  <p className="text-gray-700 font-medium">{edu.score}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-16 text-gray-800">Featured Projects</h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <div key={index} className="bg-gradient-to-br from-white to-gray-50 rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 group">
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-xl font-semibold text-gray-800 group-hover:text-blue-600 transition-colors">
                    {project.title}
                  </h3>
                  <a 
                    href={project.github}
                    className="text-gray-400 hover:text-gray-600 transition-colors"
                  >
                    <Github size={20} />
                  </a>
                </div>
                
                {project.accuracy && (
                  <div className="inline-block bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-medium mb-4">
                    {project.accuracy} Accuracy
                  </div>
                )}
                
                <p className="text-gray-600 mb-6 leading-relaxed">{project.description}</p>
                
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech, techIndex) => (
                    <span key={techIndex} className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-16 text-gray-800">Skills & Technologies</h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {Object.entries(skills).map(([category, skillList], index) => (
              <div key={index} className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100">
                <h3 className="text-lg font-semibold text-gray-800 mb-4 flex items-center gap-2">
                  <div className="w-3 h-3 bg-gradient-to-r from-blue-500 to-teal-500 rounded-full"></div>
                  {category}
                </h3>
                <div className="space-y-2">
                  {skillList.map((skill, skillIndex) => (
                    <div key={skillIndex} className="flex items-center gap-3">
                      <Star size={12} className="text-orange-400 fill-current" />
                      <span className="text-gray-600">{skill}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-16 text-gray-800">Positions of Responsibility</h2>
          
          <div className="space-y-8">
            {positions.map((position, index) => (
              <div key={index} className="bg-gradient-to-r from-blue-50 to-teal-50 rounded-xl p-8 border border-blue-100 hover:shadow-lg transition-all duration-300">
                <div className="flex flex-col md:flex-row md:items-center justify-between mb-4">
                  <div>
                    <h3 className="text-xl font-semibold text-gray-800 mb-2">{position.title}</h3>
                    <p className="text-blue-600 font-medium">{position.organization}</p>
                  </div>
                  <div className="text-right mt-4 md:mt-0">
                    <div className="flex items-center gap-2 text-gray-500">
                      <Calendar size={16} />
                      <span>{position.duration}</span>
                    </div>
                  </div>
                </div>
                <p className="text-gray-600">{position.description}</p>
              </div>
            ))}
          </div>

          {/* Certifications */}
          <div className="mt-16">
            <h3 className="text-2xl font-semibold text-center mb-8 text-gray-800">Certifications</h3>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-gradient-to-r from-orange-50 to-red-50 p-6 rounded-xl border border-orange-100">
                <div className="flex items-center gap-3">
                  <Award className="text-orange-600" size={24} />
                  <div>
                    <h4 className="font-semibold text-gray-800">Supervised Machine Learning</h4>
                    <p className="text-sm text-gray-600">Completed comprehensive ML course</p>
                  </div>
                </div>
              </div>
              <div className="bg-gradient-to-r from-purple-50 to-pink-50 p-6 rounded-xl border border-purple-100">
                <div className="flex items-center gap-3">
                  <Award className="text-purple-600" size={24} />
                  <div>
                    <h4 className="font-semibold text-gray-800">Advanced Learning Algorithms</h4>
                    <p className="text-sm text-gray-600">Advanced ML techniques and applications</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-8 text-gray-800">Get In Touch</h2>
          <p className="text-xl text-gray-600 mb-12">
            I'm always open to discussing new opportunities, collaborations, or just having a chat about technology!
          </p>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            <a 
              href="mailto:ashokmishra1709@gmail.com"
              className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 group"
            >
              <Mail className="w-8 h-8 text-blue-600 mx-auto mb-4 group-hover:scale-110 transition-transform" />
              <h3 className="font-semibold text-gray-800 mb-2">Email</h3>
              <p className="text-sm text-gray-600">ashokmishra1709@gmail.com</p>
            </a>
            
            <a 
              href="tel:+918090142477"
              className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 group"
            >
              <Phone className="w-8 h-8 text-green-600 mx-auto mb-4 group-hover:scale-110 transition-transform" />
              <h3 className="font-semibold text-gray-800 mb-2">Phone</h3>
              <p className="text-sm text-gray-600">+91-8090142477</p>
            </a>
            
            <a 
              href="https://github.com/ashokmishra1234"
              className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 group"
            >
              <Github className="w-8 h-8 text-gray-800 mx-auto mb-4 group-hover:scale-110 transition-transform" />
              <h3 className="font-semibold text-gray-800 mb-2">GitHub</h3>
              <p className="text-sm text-gray-600">ashokmishra1234</p>
            </a>
            
            <a 
              href="https://www.linkedin.com/in/ashok-mishra-nits27"
              className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 group"
            >
              <Linkedin className="w-8 h-8 text-blue-700 mx-auto mb-4 group-hover:scale-110 transition-transform" />
              <h3 className="font-semibold text-gray-800 mb-2">LinkedIn</h3>
              <p className="text-sm text-gray-600">ashok-mishra-nits27</p>
            </a>
          </div>
          
          <div className="bg-white p-8 rounded-xl shadow-lg border border-gray-100">
            <h3 className="text-xl font-semibold mb-4 text-gray-800">Let's Connect!</h3>
            <p className="text-gray-600 mb-6">
              Whether you want to discuss a project, collaboration, or just say hello, I'd love to hear from you.
            </p>
            <a 
              href="mailto:ashokmishra1709@gmail.com"
              className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-600 to-teal-600 text-white px-8 py-3 rounded-full font-medium hover:from-blue-700 hover:to-teal-700 transition-all duration-300 transform hover:scale-105"
            >
              <Mail size={20} />
              Send Message
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-8">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <p className="text-gray-400">
            © 2024 Ashok Mishra. Built with React & Tailwind CSS.
          </p>
        </div>
      </footer>
    </div>
  );
}

export default App;