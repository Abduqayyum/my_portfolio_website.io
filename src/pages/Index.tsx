import { useState } from "react";
import { useTheme } from "@/context/ThemeContext";
import { ArrowRight, Github, Linkedin, Mail, Eye, Code, FileText, Sun, Moon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Hero from "@/components/Hero";
import ProjectCard from "@/components/ProjectCard";
import SkillsSection from "@/components/SkillsSection";
import ContactSection from "@/components/ContactSection";
import { projects as projectsData } from "@/data/projects";

const Index = () => {
  const { isDarkMode, toggleTheme } = useTheme();
  
  const projects = projectsData;

  const [selectedCategory, setSelectedCategory] = useState("All");
  const categories = ["All", "Computer Vision", "OCR/NLP", "Video Analysis", "Speech/NLP"];

  const filteredProjects = selectedCategory === "All" 
    ? projects 
    : projects.filter(project => project.category === selectedCategory);

  // Using toggleTheme from ThemeContext

  return (
    <div className={`min-h-screen transition-colors duration-300 ${isDarkMode ? 'bg-black' : 'bg-white'}`}>
      {/* Navigation */}
      <nav className={`fixed top-0 w-full z-50 backdrop-blur-md border-b transition-colors duration-300 ${
        isDarkMode 
          ? 'bg-black/80 border-slate-700/30' 
          : 'bg-white/80 border-gray-200/30'
      }`}>
        <div className="container mx-auto px-4 sm:px-6 py-4">
          <div className="flex items-center justify-between">
            <div className={`text-xl sm:text-2xl font-bold transition-colors duration-300 ${
              isDarkMode ? 'text-white' : 'text-black'
            }`}>
              DS<span className={isDarkMode ? 'text-blue-400' : 'text-blue-600'}>Portfolio</span>
            </div>
            <div className="hidden md:flex space-x-6 lg:space-x-8">
              <a href="#home" className={`transition-colors text-sm lg:text-base ${
                isDarkMode 
                  ? 'text-slate-300 hover:text-blue-400' 
                  : 'text-gray-600 hover:text-blue-600'
              }`}>Home</a>
              <a href="#about" className={`transition-colors text-sm lg:text-base ${
                isDarkMode 
                  ? 'text-slate-300 hover:text-blue-400' 
                  : 'text-gray-600 hover:text-blue-600'
              }`}>About</a>
              <a href="#projects" className={`transition-colors text-sm lg:text-base ${
                isDarkMode 
                  ? 'text-slate-300 hover:text-blue-400' 
                  : 'text-gray-600 hover:text-blue-600'
              }`}>Projects</a>
              <a href="#skills" className={`transition-colors text-sm lg:text-base ${
                isDarkMode 
                  ? 'text-slate-300 hover:text-blue-400' 
                  : 'text-gray-600 hover:text-blue-600'
              }`}>Skills</a>
              <a href="#contact" className={`transition-colors text-sm lg:text-base ${
                isDarkMode 
                  ? 'text-slate-300 hover:text-blue-400' 
                  : 'text-gray-600 hover:text-blue-600'
              }`}>Contact</a>
            </div>
            <div className="flex space-x-2 sm:space-x-4">
              <Button 
                variant="ghost" 
                size="icon" 
                onClick={toggleTheme}
                className={`h-8 w-8 sm:h-10 sm:w-10 transition-colors ${
                  isDarkMode 
                    ? 'text-slate-300 hover:text-blue-400' 
                    : 'text-gray-600 hover:text-blue-600'
                }`}
              >
                {isDarkMode ? <Sun className="h-4 w-4 sm:h-5 sm:w-5" /> : <Moon className="h-4 w-4 sm:h-5 sm:w-5" />}
              </Button>
              <Button variant="ghost" size="icon" className={`h-8 w-8 sm:h-10 sm:w-10 transition-colors ${
                isDarkMode 
                  ? 'text-slate-300 hover:text-blue-400' 
                  : 'text-gray-600 hover:text-blue-600'
              }`}>
                <Github className="h-4 w-4 sm:h-5 sm:w-5" />
              </Button>
              <Button variant="ghost" size="icon" className={`h-8 w-8 sm:h-10 sm:w-10 transition-colors ${
                isDarkMode 
                  ? 'text-slate-300 hover:text-blue-400' 
                  : 'text-gray-600 hover:text-blue-600'
              }`}>
                <Linkedin className="h-4 w-4 sm:h-5 sm:w-5" />
              </Button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="pt-16 sm:pt-20">
        <Hero isDarkMode={isDarkMode} />
      </section>

      {/* About Section */}
      <section id="about" className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6 relative">
        {/* Background pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="h-full w-full bg-gradient-to-r from-blue-500 to-teal-500" 
               style={{
                 backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
               }}>
          </div>
        </div>
        
        <div className="container mx-auto max-w-4xl relative z-10">
          <h2 className={`text-3xl sm:text-4xl font-bold text-center mb-8 sm:mb-12 transition-colors duration-300 ${
            isDarkMode ? 'text-white' : 'text-black'
          }`}>About Me</h2>
          <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 items-center">
            <div className="relative group order-2 lg:order-1">
              <div className="relative overflow-hidden rounded-full shadow-2xl transform transition-all duration-300 group-hover:scale-105 aspect-square max-w-sm mx-auto">
                {/* Replace this div with your actual image */}
                <img 
                  src="/lovable-uploads/ac584144-1958-4833-a1e9-6b423b673386.png" 
                  alt="Alex - Data Scientist & Computer Vision Engineer" 
                  className="w-full h-full object-cover rounded-full border-4 border-blue-400/50"
                />
                {/* Fallback if image doesn't load */}
                <div className="absolute inset-0 bg-gradient-to-br from-blue-600 to-teal-600 flex items-center justify-center rounded-full border-4 border-blue-400/50" style={{display: 'none'}}>
                  <div className="text-center text-white px-4">
                    <div className="text-4xl sm:text-6xl mb-2 sm:mb-4">👨‍💻</div>
                    <p className="text-sm sm:text-lg font-medium">Your Photo Here</p>
                  </div>
                </div>
                <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-full"></div>
              </div>
              {/* Floating elements around image */}
              <div className="absolute -top-2 -right-2 sm:-top-4 sm:-right-4 w-6 h-6 sm:w-8 sm:h-8 bg-blue-500 rounded-full animate-bounce"></div>
              <div className="absolute -bottom-2 -left-2 sm:-bottom-4 sm:-left-4 w-4 h-4 sm:w-6 sm:h-6 bg-teal-500 rounded-full animate-ping"></div>
              <div className="absolute top-1/2 -left-4 sm:-left-8 w-3 h-3 sm:w-4 sm:h-4 bg-indigo-500 rounded-full animate-pulse"></div>
            </div>
            <div className="space-y-4 sm:space-y-6 order-1 lg:order-2">
              <p className={`text-base sm:text-lg leading-relaxed transition-colors duration-300 ${
                isDarkMode ? 'text-slate-300' : 'text-gray-700'
              }`}>
                I'm a passionate Data Scientist and Computer Vision Engineer with expertise in developing 
                cutting-edge machine learning solutions. I specialize in transforming complex data into 
                actionable insights and building intelligent systems that can see and understand the world.
              </p>
              <p className={`text-base sm:text-lg leading-relaxed transition-colors duration-300 ${
                isDarkMode ? 'text-slate-300' : 'text-gray-700'
              }`}>
                My work spans across various domains including image processing, natural language processing, 
                and predictive analytics. I enjoy creating interactive demonstrations that make AI accessible 
                and understandable to everyone.
              </p>
              <div className="flex flex-wrap gap-2 sm:gap-3">
                <Badge variant="secondary" className="bg-blue-600 text-white animate-pulse text-xs sm:text-sm">5+ Years Experience</Badge>
                <Badge variant="secondary" className="bg-teal-600 text-white animate-pulse delay-100 text-xs sm:text-sm">20+ Projects</Badge>
                <Badge variant="secondary" className="bg-indigo-600 text-white animate-pulse delay-200 text-xs sm:text-sm">PhD in Computer Science</Badge>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className={`py-12 sm:py-16 lg:py-20 px-4 sm:px-6 relative transition-colors duration-300 ${
        isDarkMode ? 'bg-slate-900/50' : 'bg-gray-50'
      }`}>
        {/* Animated background */}
        <div className="absolute inset-0">
          <div className="absolute top-10 left-10 w-24 h-24 sm:w-32 sm:h-32 bg-blue-500/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-10 right-10 w-32 h-32 sm:w-40 sm:h-40 bg-teal-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        </div>
        
        <div className="container mx-auto max-w-7xl relative z-10">
          <h2 className={`text-3xl sm:text-4xl font-bold text-center mb-8 sm:mb-12 transition-colors duration-300 ${
            isDarkMode ? 'text-white' : 'text-black'
          }`}>Featured Projects</h2>
          
          {/* Category Filter */}
          <div className="flex justify-center mb-8 sm:mb-12 px-2">
            <div className={`flex flex-wrap justify-center gap-2 backdrop-blur-sm p-2 rounded-lg shadow-xl max-w-full transition-colors duration-300 ${
              isDarkMode 
                ? 'bg-slate-700/80 border border-blue-600/30' 
                : 'bg-white/80 border border-gray-200/30'
            }`}>
              {categories.map((category) => (
                <Button
                  key={category}
                  variant={selectedCategory === category ? "default" : "ghost"}
                  onClick={() => setSelectedCategory(category)}
                  className={`text-xs sm:text-sm px-3 py-2 transition-colors ${selectedCategory === category 
                    ? (isDarkMode ? "bg-blue-600 text-white shadow-lg hover:bg-blue-700" : "bg-blue-600 text-white shadow-lg hover:bg-blue-700")
                    : (isDarkMode ? "text-slate-300 hover:text-white hover:bg-slate-600" : "text-gray-600 hover:text-black hover:bg-gray-200")}`}
                >
                  {category}
                </Button>
              ))}
            </div>
          </div>

          {/* Projects Grid */}
          <div className="grid sm:grid-cols-2 gap-6 sm:gap-8">
            {filteredProjects.map((project) => (
              <ProjectCard key={project.id} project={project} isDarkMode={isDarkMode} />
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6">
        <SkillsSection isDarkMode={isDarkMode} />
      </section>

      {/* Contact Section */}
      <section id="contact" className={`py-12 sm:py-16 lg:py-20 px-4 sm:px-6 transition-colors duration-300 ${
        isDarkMode ? 'bg-slate-900/50' : 'bg-gray-50'
      }`}>
        <ContactSection isDarkMode={isDarkMode} />
      </section>

      {/* Footer */}
      <footer className={`py-6 sm:py-8 px-4 sm:px-6 border-t transition-colors duration-300 ${
        isDarkMode 
          ? 'border-slate-700/30' 
          : 'border-gray-200/30'
      }`}>
        <div className="container mx-auto text-center">
          <p className={`text-sm sm:text-base transition-colors duration-300 ${
            isDarkMode ? 'text-slate-400' : 'text-gray-600'
          }`}>
            © 2024 Data Science Portfolio. Built with React and Tailwind CSS.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
