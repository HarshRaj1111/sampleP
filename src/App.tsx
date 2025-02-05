import React from 'react';
import { Github, Linkedin, Mail, Terminal, Database, Brain, Code, Server } from 'lucide-react';

function App() {
  return (
    <div className="min-h-screen bg-[#000000]">
      {/* Fixed Navigation Bar */}
      <div className="fixed top-0 left-0 right-0 z-50 px-4 py-3">
        <div className="max-w-7xl mx-auto">
          <div className="backdrop-blur-lg bg-[#150050]/30 rounded-full border border-[#610094]/20 shadow-lg">
            <div className="flex items-center justify-between px-8 py-3">
              <h1 className="text-2xl font-bold text-white">Harsh Raj</h1>
              <div className="flex space-x-6">
                <a href="https://github.com/HarshRaj1111" className="text-white/80 hover:text-purple-300 transition-all transform hover:scale-110" target="_blank">
                  <Github className="w-6 h-6" />
                </a>
                <a href="https://linkedin.com/in/harsh-raj-ai" className="text-white/80 hover:text-purple-300 transition-all transform hover:scale-110" target="_blank">
                  <Linkedin className="w-6 h-6" />
                </a>
                <a href="mailto:harshrajbpr@gmail.com" className="text-white/80 hover:text-purple-300 transition-all transform hover:scale-110" target="_blank">
                  <Mail className="w-6 h-6" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Hero Section */}
      <header className="bg-gradient-to-r from-[#150050] via-[#3F0071] to-[#610094] text-white pt-32">
        <div className="container mx-auto px-6 py-20 text-center">
          <h2 className="text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white to-purple-200">
            AI & Data Science Student
          </h2>
          <p className="text-xl text-purple-200 max-w-2xl mx-auto">
            Passionate about leveraging AI and data science to drive innovation and solve real-world challenges.
          </p>
        </div>
      </header>

      {/* About Section */}
      <section className="py-24">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-4xl font-bold text-white mb-12 text-center bg-clip-text text-transparent bg-gradient-to-r from-[#610094] to-purple-300">About Me</h2>
            <div className="bg-[#150050] rounded-2xl shadow-2xl p-8 border border-[#3F0071]">
              <p className="text-purple-200 leading-relaxed mb-6 text-lg">
                I'm a third-year engineering student specializing in Artificial Intelligence and Data Science. 
                With a strong foundation in both theoretical concepts and practical applications, I'm passionate 
                about leveraging AI and data science methodologies to drive innovation and solve real-world challenges.
              </p>
              <p className="text-purple-200 leading-relaxed text-lg">
                Experienced in both collaborative teamwork and independent project execution, I bring a 
                unique blend of technical expertise and creative problem-solving skills to every project.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-[#150050]">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-white mb-16 text-center bg-clip-text text-transparent bg-gradient-to-r from-[#610094] to-purple-300">Core Skills</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            <div className="bg-[#3F0071] rounded-2xl p-8 shadow-2xl hover:shadow-[#610094]/50 transition-all duration-300 transform hover:-translate-y-1 border border-[#610094]">
              <Brain className="w-14 h-14 text-purple-300 mb-6" />
              <h3 className="text-2xl font-semibold mb-3 text-white">Artificial Intelligence</h3>
              <p className="text-purple-200">Machine Learning, Deep Learning, Neural Networks</p>
            </div>
            <div className="bg-[#3F0071] rounded-2xl p-8 shadow-2xl hover:shadow-[#610094]/50 transition-all duration-300 transform hover:-translate-y-1 border border-[#610094]">
              <Database className="w-14 h-14 text-purple-300 mb-6" />
              <h3 className="text-2xl font-semibold mb-3 text-white">Data Science</h3>
              <p className="text-purple-200">Data Analysis, Visualization, Statistical Modeling</p>
            </div>
            <div className="bg-[#3F0071] rounded-2xl p-8 shadow-2xl hover:shadow-[#610094]/50 transition-all duration-300 transform hover:-translate-y-1 border border-[#610094]">
              <Code className="w-14 h-14 text-purple-300 mb-6" />
              <h3 className="text-2xl font-semibold mb-3 text-white">Programming</h3>
              <p className="text-purple-200">Python, R, SQL, TensorFlow, PyTorch</p>
            </div>
            <div className="bg-[#3F0071] rounded-2xl p-8 shadow-2xl hover:shadow-[#610094]/50 transition-all duration-300 transform hover:-translate-y-1 border border-[#610094]">
              <Terminal className="w-14 h-14 text-purple-300 mb-6" />
              <h3 className="text-2xl font-semibold mb-3 text-white">Development</h3>
              <p className="text-purple-200">HTML, CSS, Javascript, React, Vite</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-white mb-16 text-center bg-clip-text text-transparent bg-gradient-to-r from-[#610094] to-purple-300">Featured Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-5xl mx-auto">
            <div className="bg-[#150050] rounded-2xl overflow-hidden shadow-2xl hover:shadow-[#610094]/50 transition-all duration-300 transform hover:-translate-y-1 border border-[#3F0071]">
              <a href="https://github.com/HarshRaj1111/CyberGuardHackathon" target="_blank">
              <img 
                src="https://images.unsplash.com/photo-1555949963-aa79dcee981c?auto=format&fit=crop&w=800&q=80" 
                alt="AI Project"
                className="w-full h-56 object-cover hover:scale-105 transition-transform duration-300"
              />
              <div className="p-8">
                <h3 className="text-2xl font-semibold mb-3 text-white">Cybersecurity Threat Classification</h3>
                <p className="text-purple-200 mb-6">
                  Developed a NLP model for real-time cybersecurity threat classification.
                </p>
                <div className="flex space-x-3">
                  <span className="px-4 py-2 bg-[#3F0071] text-purple-300 rounded-full text-sm">Python</span>
                  <span className="px-4 py-2 bg-[#3F0071] text-purple-300 rounded-full text-sm">PyTorch</span>
                  <span className="px-4 py-2 bg-[#3F0071] text-purple-300 rounded-full text-sm">BERT</span>
                </div>
              </div>
              </a>
            </div>
            <div className="bg-[#150050] rounded-2xl overflow-hidden shadow-2xl hover:shadow-[#610094]/50 transition-all duration-300 transform hover:-translate-y-1 border border-[#3F0071]">
              <a href="https://github.com/HarshRaj1111/ArticulateAI" target="_blank">
              <img 
                src="./page1.jpg"
                alt="Data Science Project"
                className="w-full h-56 object-cover hover:scale-105 transition-transform duration-300"
              />
              <div className="p-8">
                <h3 className="text-2xl font-semibold mb-3 text-white">Articulate AI</h3>
                <p className="text-purple-200 mb-6">
                  Built an sentence rephraser browser extension.
                </p>
                <div className="flex space-x-3">
                  <span className="px-4 py-2 bg-[#3F0071] text-purple-300 rounded-full text-sm">HTML</span>
                  <span className="px-4 py-2 bg-[#3F0071] text-purple-300 rounded-full text-sm">CSS</span>
                  <span className="px-4 py-2 bg-[#3F0071] text-purple-300 rounded-full text-sm">Javascript</span>
                </div>
              </div>
              </a>
            </div>
          </div>
        </div>
      </section>

      <footer className="bg-[#150050] text-white py-12">
        <div className="container mx-auto px-6 text-center">
          <p className="mb-6 text-xl text-purple-200">Let's connect and create something amazing together.</p>
          <div className="flex justify-center space-x-6 mb-8">
            <a href="https://github.com/HarshRaj1111" className="hover:text-purple-300 transition-all transform hover:scale-110" target="_blank">
              <Github className="w-7 h-7" />
            </a>
            <a href="https://linkedin.com/in/harsh-raj-ai" className="hover:text-purple-300 transition-all transform hover:scale-110" target="_blank">
              <Linkedin className="w-7 h-7" />
            </a>
            <a href="mailto:harshrajbpr@gmail.com" className="hover:text-purple-300 transition-all transform hover:scale-110" target="_blank">
              <Mail className="w-7 h-7" />
            </a>
          </div>
          <p className="text-purple-400">© 2024 Harsh Raj. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;