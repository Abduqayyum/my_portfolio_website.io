import { useState } from "react";
import { ArrowRight, Github, Linkedin, Mail, Eye, Code, FileText } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Hero from "@/components/Hero";
import ProjectCard from "@/components/ProjectCard";
import SkillsSection from "@/components/SkillsSection";
import ContactSection from "@/components/ContactSection";

const Index = () => {
  const projects = [
    {
      id: 1,
      title: "Image Classification Model",
      description: "Deep learning model for multi-class image classification using CNN architecture. Achieved 94% accuracy on test dataset.",
      image: "/api/placeholder/400/250",
      technologies: ["Python", "TensorFlow", "Keras", "OpenCV"],
      demoUrl: "#",
      githubUrl: "#",
      hasLiveDemo: true,
      category: "Computer Vision"
    },
    {
      id: 2,
      title: "Object Detection System",
      description: "Real-time object detection using YOLO v8. Capable of detecting 80+ different object classes with high precision.",
      image: "/api/placeholder/400/250",
      technologies: ["PyTorch", "YOLO", "OpenCV", "Python"],
      demoUrl: "#",
      githubUrl: "#",
      hasLiveDemo: true,
      category: "Computer Vision"
    },
    {
      id: 3,
      title: "Sentiment Analysis Dashboard",
      description: "NLP model for analyzing sentiment in social media data with interactive visualization dashboard.",
      image: "/api/placeholder/400/250",
      technologies: ["Python", "NLTK", "Streamlit", "Pandas"],
      demoUrl: "#",
      githubUrl: "#",
      hasLiveDemo: false,
      category: "NLP"
    },
    {
      id: 4,
      title: "Predictive Analytics Model",
      description: "Machine learning model for forecasting business metrics using time series analysis and ensemble methods.",
      image: "/api/placeholder/400/250",
      technologies: ["Python", "Scikit-learn", "XGBoost", "Matplotlib"],
      demoUrl: "#",
      githubUrl: "#",
      hasLiveDemo: false,
      category: "Data Science"
    }
  ];

  const [selectedCategory, setSelectedCategory] = useState("All");
  const categories = ["All", "Computer Vision", "NLP", "Data Science"];

  const filteredProjects = selectedCategory === "All" 
    ? projects 
    : projects.filter(project => project.category === selectedCategory);

  return (
    <div className="min-h-screen bg-black">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-black/80 backdrop-blur-md border-b border-slate-700/30">
        <div className="container mx-auto px-4 sm:px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="text-xl sm:text-2xl font-bold text-white">
              DS<span className="text-purple-400">Portfolio</span>
            </div>
            <div className="hidden md:flex space-x-6 lg:space-x-8">
              <a href="#home" className="text-slate-300 hover:text-purple-400 transition-colors text-sm lg:text-base">Home</a>
              <a href="#about" className="text-slate-300 hover:text-purple-400 transition-colors text-sm lg:text-base">About</a>
              <a href="#projects" className="text-slate-300 hover:text-purple-400 transition-colors text-sm lg:text-base">Projects</a>
              <a href="#skills" className="text-slate-300 hover:text-purple-400 transition-colors text-sm lg:text-base">Skills</a>
              <a href="#contact" className="text-slate-300 hover:text-purple-400 transition-colors text-sm lg:text-base">Contact</a>
            </div>
            <div className="flex space-x-2 sm:space-x-4">
              <Button variant="ghost" size="icon" className="text-slate-300 hover:text-purple-400 h-8 w-8 sm:h-10 sm:w-10">
                <Github className="h-4 w-4 sm:h-5 sm:w-5" />
              </Button>
              <Button variant="ghost" size="icon" className="text-slate-300 hover:text-purple-400 h-8 w-8 sm:h-10 sm:w-10">
                <Linkedin className="h-4 w-4 sm:h-5 sm:w-5" />
              </Button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="pt-16 sm:pt-20">
        <Hero />
      </section>

      {/* About Section */}
      <section id="about" className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6 relative">
        {/* Background pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="h-full w-full bg-gradient-to-r from-purple-500 to-pink-500" 
               style={{
                 backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
               }}>
          </div>
        </div>
        
        <div className="container mx-auto max-w-4xl relative z-10">
          <h2 className="text-3xl sm:text-4xl font-bold text-center text-white mb-8 sm:mb-12">About Me</h2>
          <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 items-center">
            <div className="relative group order-2 lg:order-1">
              <div className="relative overflow-hidden rounded-full shadow-2xl transform transition-all duration-300 group-hover:scale-105 aspect-square max-w-sm mx-auto">
                {/* Replace this div with your actual image */}
                <img 
                  src="/api/placeholder/400/400" 
                  alt="Your Profile Photo" 
                  className="w-full h-full object-cover rounded-full border-4 border-purple-400/50"
                />
                {/* Fallback if image doesn't load */}
                <div className="absolute inset-0 bg-gradient-to-br from-purple-600 to-pink-600 flex items-center justify-center rounded-full border-4 border-purple-400/50" style={{display: 'none'}}>
                  <div className="text-center text-white px-4">
                    <div className="text-4xl sm:text-6xl mb-2 sm:mb-4">👨‍💻</div>
                    <p className="text-sm sm:text-lg font-medium">Your Photo Here</p>
                  </div>
                </div>
                <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-full"></div>
              </div>
              {/* Floating elements around image */}
              <div className="absolute -top-2 -right-2 sm:-top-4 sm:-right-4 w-6 h-6 sm:w-8 sm:h-8 bg-purple-500 rounded-full animate-bounce"></div>
              <div className="absolute -bottom-2 -left-2 sm:-bottom-4 sm:-left-4 w-4 h-4 sm:w-6 sm:h-6 bg-pink-500 rounded-full animate-ping"></div>
              <div className="absolute top-1/2 -left-4 sm:-left-8 w-3 h-3 sm:w-4 sm:h-4 bg-indigo-500 rounded-full animate-pulse"></div>
            </div>
            <div className="space-y-4 sm:space-y-6 order-1 lg:order-2">
              <p className="text-base sm:text-lg text-slate-300 leading-relaxed">
                I'm a passionate Data Scientist and Computer Vision Engineer with expertise in developing 
                cutting-edge machine learning solutions. I specialize in transforming complex data into 
                actionable insights and building intelligent systems that can see and understand the world.
              </p>
              <p className="text-base sm:text-lg text-slate-300 leading-relaxed">
                My work spans across various domains including image processing, natural language processing, 
                and predictive analytics. I enjoy creating interactive demonstrations that make AI accessible 
                and understandable to everyone.
              </p>
              <div className="flex flex-wrap gap-2 sm:gap-3">
                <Badge variant="secondary" className="bg-purple-600 text-white animate-pulse text-xs sm:text-sm">5+ Years Experience</Badge>
                <Badge variant="secondary" className="bg-pink-600 text-white animate-pulse delay-100 text-xs sm:text-sm">20+ Projects</Badge>
                <Badge variant="secondary" className="bg-indigo-600 text-white animate-pulse delay-200 text-xs sm:text-sm">PhD in Computer Science</Badge>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6 bg-slate-900/50 relative">
        {/* Animated background */}
        <div className="absolute inset-0">
          <div className="absolute top-10 left-10 w-24 h-24 sm:w-32 sm:h-32 bg-purple-500/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-10 right-10 w-32 h-32 sm:w-40 sm:h-40 bg-pink-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        </div>
        
        <div className="container mx-auto max-w-7xl relative z-10">
          <h2 className="text-3xl sm:text-4xl font-bold text-center text-white mb-8 sm:mb-12">Featured Projects</h2>
          
          {/* Category Filter */}
          <div className="flex justify-center mb-8 sm:mb-12 px-2">
            <div className="flex flex-wrap justify-center gap-2 bg-slate-700/80 backdrop-blur-sm p-2 rounded-lg border border-purple-600/30 shadow-xl max-w-full">
              {categories.map((category) => (
                <Button
                  key={category}
                  variant={selectedCategory === category ? "default" : "ghost"}
                  onClick={() => setSelectedCategory(category)}
                  className={`text-xs sm:text-sm px-3 py-2 ${selectedCategory === category 
                    ? "bg-purple-600 text-white shadow-lg hover:bg-purple-700" 
                    : "text-slate-300 hover:text-white hover:bg-slate-600"}`}
                >
                  {category}
                </Button>
              ))}
            </div>
          </div>

          {/* Projects Grid */}
          <div className="grid sm:grid-cols-2 gap-6 sm:gap-8">
            {filteredProjects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6">
        <SkillsSection />
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6 bg-slate-900/50">
        <ContactSection />
      </section>

      {/* Footer */}
      <footer className="py-6 sm:py-8 px-4 sm:px-6 border-t border-slate-700/30">
        <div className="container mx-auto text-center">
          <p className="text-slate-400 text-sm sm:text-base">
            © 2024 Data Science Portfolio. Built with React and Tailwind CSS.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
