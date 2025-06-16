
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
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-slate-900/80 backdrop-blur-md border-b border-slate-700">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="text-2xl font-bold text-white">
              DS<span className="text-blue-400">Portfolio</span>
            </div>
            <div className="hidden md:flex space-x-8">
              <a href="#home" className="text-slate-300 hover:text-white transition-colors">Home</a>
              <a href="#about" className="text-slate-300 hover:text-white transition-colors">About</a>
              <a href="#projects" className="text-slate-300 hover:text-white transition-colors">Projects</a>
              <a href="#skills" className="text-slate-300 hover:text-white transition-colors">Skills</a>
              <a href="#contact" className="text-slate-300 hover:text-white transition-colors">Contact</a>
            </div>
            <div className="flex space-x-4">
              <Button variant="ghost" size="icon" className="text-slate-300 hover:text-white">
                <Github className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="icon" className="text-slate-300 hover:text-white">
                <Linkedin className="h-5 w-5" />
              </Button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="pt-20">
        <Hero />
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-6">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-4xl font-bold text-center text-white mb-12">About Me</h2>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="w-80 h-80 mx-auto bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center">
                <div className="text-6xl text-white">👨‍💻</div>
              </div>
            </div>
            <div className="space-y-6">
              <p className="text-lg text-slate-300 leading-relaxed">
                I'm a passionate Data Scientist and Computer Vision Engineer with expertise in developing 
                cutting-edge machine learning solutions. I specialize in transforming complex data into 
                actionable insights and building intelligent systems that can see and understand the world.
              </p>
              <p className="text-lg text-slate-300 leading-relaxed">
                My work spans across various domains including image processing, natural language processing, 
                and predictive analytics. I enjoy creating interactive demonstrations that make AI accessible 
                and understandable to everyone.
              </p>
              <div className="flex flex-wrap gap-3">
                <Badge variant="secondary" className="bg-blue-600 text-white">5+ Years Experience</Badge>
                <Badge variant="secondary" className="bg-purple-600 text-white">20+ Projects</Badge>
                <Badge variant="secondary" className="bg-green-600 text-white">PhD in Computer Science</Badge>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 px-6 bg-slate-800/50">
        <div className="container mx-auto max-w-7xl">
          <h2 className="text-4xl font-bold text-center text-white mb-12">Featured Projects</h2>
          
          {/* Category Filter */}
          <div className="flex justify-center mb-12">
            <div className="flex space-x-2 bg-slate-700 p-2 rounded-lg">
              {categories.map((category) => (
                <Button
                  key={category}
                  variant={selectedCategory === category ? "default" : "ghost"}
                  onClick={() => setSelectedCategory(category)}
                  className={selectedCategory === category 
                    ? "bg-blue-600 text-white" 
                    : "text-slate-300 hover:text-white"}
                >
                  {category}
                </Button>
              ))}
            </div>
          </div>

          {/* Projects Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
            {filteredProjects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 px-6">
        <SkillsSection />
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-6 bg-slate-800/50">
        <ContactSection />
      </section>

      {/* Footer */}
      <footer className="py-8 px-6 border-t border-slate-700">
        <div className="container mx-auto text-center">
          <p className="text-slate-400">
            © 2024 Data Science Portfolio. Built with React and Tailwind CSS.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
