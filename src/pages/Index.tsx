
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
      <section id="about" className="py-20 px-6 relative">
        {/* Background pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="h-full w-full bg-gradient-to-r from-blue-500 to-purple-500" 
               style={{
                 backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
               }}>
          </div>
        </div>
        
        <div className="container mx-auto max-w-4xl relative z-10">
          <h2 className="text-4xl font-bold text-center text-white mb-12">About Me</h2>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="relative">
              <div className="relative overflow-hidden rounded-2xl shadow-2xl">
                <img 
                  src="https://images.unsplash.com/photo-1461749280684-dccba630e2f6?q=80&w=800&auto=format&fit=crop"
                  alt="Data Science and Programming"
                  className="w-full h-80 object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-blue-900/50 to-transparent"></div>
                <div className="absolute bottom-4 left-4 text-white">
                  <div className="text-sm font-medium">Machine Learning in Action</div>
                </div>
              </div>
              {/* Floating elements around image */}
              <div className="absolute -top-4 -right-4 w-8 h-8 bg-blue-500 rounded-full animate-bounce"></div>
              <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-purple-500 rounded-full animate-ping"></div>
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
                <Badge variant="secondary" className="bg-blue-600 text-white animate-pulse">5+ Years Experience</Badge>
                <Badge variant="secondary" className="bg-purple-600 text-white animate-pulse delay-100">20+ Projects</Badge>
                <Badge variant="secondary" className="bg-green-600 text-white animate-pulse delay-200">PhD in Computer Science</Badge>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 px-6 bg-slate-800/50 relative">
        {/* Animated background */}
        <div className="absolute inset-0">
          <div className="absolute top-10 left-10 w-32 h-32 bg-blue-500/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-10 right-10 w-40 h-40 bg-purple-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        </div>
        
        <div className="container mx-auto max-w-7xl relative z-10">
          <h2 className="text-4xl font-bold text-center text-white mb-12">Featured Projects</h2>
          
          {/* Category Filter */}
          <div className="flex justify-center mb-12">
            <div className="flex space-x-2 bg-slate-700/80 backdrop-blur-sm p-2 rounded-lg border border-slate-600 shadow-xl">
              {categories.map((category) => (
                <Button
                  key={category}
                  variant={selectedCategory === category ? "default" : "ghost"}
                  onClick={() => setSelectedCategory(category)}
                  className={selectedCategory === category 
                    ? "bg-blue-600 text-white shadow-lg" 
                    : "text-slate-300 hover:text-white hover:bg-slate-600"}
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
