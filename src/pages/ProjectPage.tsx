
import { useTheme } from "@/context/ThemeContext";
import { useParams, Link } from "react-router-dom";
import { ArrowLeft, Github, Play, Sun, Moon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { projects, type Project } from "@/data/projects";

// Project type imported from shared data

const ProjectPage = () => {
  const { id } = useParams();
  const { isDarkMode, toggleTheme } = useTheme();

// Projects are imported from shared data

  const project = projects.find(p => p.id === parseInt(id || "1"));

  // Using toggleTheme from ThemeContext

  if (!project) {
    return (
      <div className={`min-h-screen flex items-center justify-center transition-colors duration-300 ${
        isDarkMode ? 'bg-black' : 'bg-white'
      }`}>
        <div className="text-center">
          <h1 className={`text-4xl font-bold mb-4 transition-colors duration-300 ${
            isDarkMode ? 'text-white' : 'text-black'
          }`}>Project Not Found</h1>
          <Link to="/">
            <Button className="bg-blue-600 hover:bg-blue-700">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Home
            </Button>
          </Link>
        </div>
      </div>
    );
  }

  // Removed in-page testing per requirements

  return (
    <div className={`min-h-screen transition-colors duration-300 ${
      isDarkMode ? 'bg-black' : 'bg-white'
    }`}>
      {/* Navigation */}
      <nav className={`backdrop-blur-md border-b transition-colors duration-300 ${
        isDarkMode 
          ? 'bg-black/80 border-slate-700/30' 
          : 'bg-white/80 border-gray-200/30'
      }`}>
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <Link to="/" className={`flex items-center transition-colors ${
              isDarkMode 
                ? 'text-white hover:text-blue-400' 
                : 'text-black hover:text-blue-600'
            }`}>
              <ArrowLeft className="mr-2 h-5 w-5" />
              Back to Portfolio
            </Link>
            <div className="flex items-center space-x-4">
              <div className={`text-2xl font-bold transition-colors duration-300 ${
                isDarkMode ? 'text-white' : 'text-black'
              }`}>
                DS<span className={isDarkMode ? 'text-blue-400' : 'text-blue-600'}>Portfolio</span>
              </div>
              <Button 
                variant="ghost" 
                size="icon" 
                onClick={toggleTheme}
                className={`h-10 w-10 transition-colors ${
                  isDarkMode 
                    ? 'text-slate-300 hover:text-blue-400' 
                    : 'text-gray-600 hover:text-blue-600'
                }`}
              >
                {isDarkMode ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
              </Button>
            </div>
          </div>
        </div>
      </nav>

      <div className="container mx-auto px-6 py-12 max-w-6xl">
        {/* Project Header */}
        <div className="mb-12">
          <div className="flex items-center gap-4 mb-6">
            <Badge variant="secondary" className="bg-blue-600 text-white">
              {project.category}
            </Badge>
            <h1 className={`text-4xl font-bold transition-colors duration-300 ${
              isDarkMode ? 'text-white' : 'text-black'
            }`}>{project.title}</h1>
          </div>
          <p className={`text-xl mb-8 transition-colors duration-300 ${
            isDarkMode ? 'text-slate-300' : 'text-gray-700'
          }`}>{project.description}</p>
          
          {/* Project Stats */}
          {(project.accuracy || project.dataset || project.modelType) && (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              <Card className={`transition-colors duration-300 ${
                isDarkMode 
                  ? 'bg-slate-800 border-slate-700' 
                  : 'bg-white border-gray-200'
              }`}>
                <CardHeader>
                  <CardTitle className={`text-lg transition-colors duration-300 ${
                    isDarkMode ? 'text-white' : 'text-black'
                  }`}>Accuracy</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-2xl font-bold text-green-400">{project.accuracy}</p>
                </CardContent>
              </Card>
              <Card className={`transition-colors duration-300 ${
                isDarkMode 
                  ? 'bg-slate-800 border-slate-700' 
                  : 'bg-white border-gray-200'
              }`}>
                <CardHeader>
                  <CardTitle className={`text-lg transition-colors duration-300 ${
                    isDarkMode ? 'text-white' : 'text-black'
                  }`}>Dataset</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className={`transition-colors duration-300 ${
                    isDarkMode ? 'text-slate-300' : 'text-gray-700'
                  }`}>{project.dataset}</p>
                </CardContent>
              </Card>
              <Card className={`transition-colors duration-300 ${
                isDarkMode 
                  ? 'bg-slate-800 border-slate-700' 
                  : 'bg-white border-gray-200'
              }`}>
                <CardHeader>
                  <CardTitle className={`text-lg transition-colors duration-300 ${
                    isDarkMode ? 'text-white' : 'text-black'
                  }`}>Model Type</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className={`transition-colors duration-300 ${
                    isDarkMode ? 'text-slate-300' : 'text-gray-700'
                  }`}>{project.modelType}</p>
                </CardContent>
              </Card>
            </div>
          )}

          {/* Action Buttons */}
          <div className="flex gap-4 mb-8">
            {project.hasLiveDemo && project.demoUrl && (
              <a href={project.demoUrl} target="_blank" rel="noopener noreferrer">
                <Button className="bg-gradient-to-r from-green-500 to-blue-500 hover:from-green-600 hover:to-blue-600">
                  <Play className="mr-2 h-4 w-4" />
                  Live Demo
                </Button>
              </a>
            )}
            {project.githubUrl && project.githubUrl !== "#" && (
              <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                <Button variant="outline" className={`transition-colors duration-300 ${
                  isDarkMode 
                    ? 'border-slate-400 text-slate-300 hover:bg-slate-700' 
                    : 'border-gray-400 text-gray-700 hover:bg-gray-100'
                }`}>
                  <Github className="mr-2 h-4 w-4" />
                  View Code
                </Button>
              </a>
            )}
            {!project.hasLiveDemo && project.demoVideo && project.videoUrl && (
              <a href={project.videoUrl} target="_blank" rel="noopener noreferrer">
                <Button className="bg-gradient-to-r from-blue-500 to-teal-500 hover:from-blue-600 hover:to-teal-600">
                  <Play className="mr-2 h-4 w-4" />
                  Watch Demo
                </Button>
              </a>
            )}
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Project Details */}
          <div>
            <Card className={`mb-8 transition-colors duration-300 ${
              isDarkMode 
                ? 'bg-slate-800 border-slate-700' 
                : 'bg-white border-gray-200'
            }`}>
              <CardHeader>
                <CardTitle className={`transition-colors duration-300 ${
                  isDarkMode ? 'text-white' : 'text-black'
                }`}>Project Overview</CardTitle>
              </CardHeader>
              <CardContent>
                <p className={`leading-relaxed mb-6 transition-colors duration-300 ${
                  isDarkMode ? 'text-slate-300' : 'text-gray-700'
                }`}>
                  {project.longDescription}
                </p>
                <div>
                  <h4 className={`font-semibold mb-3 transition-colors duration-300 ${
                    isDarkMode ? 'text-white' : 'text-black'
                  }`}>Technologies Used:</h4>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                      <Badge key={tech} variant="outline" className={`transition-colors duration-300 ${
                        isDarkMode 
                          ? 'border-slate-600 text-slate-300' 
                          : 'border-gray-400 text-gray-700'
                      }`}>
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Demo Video */}
          <div>
            <Card className={`transition-colors duration-300 ${
              isDarkMode 
                ? 'bg-slate-800 border-slate-700' 
                : 'bg-white border-gray-200'
            }`}>
              <CardHeader>
                <CardTitle className={`transition-colors duration-300 ${
                  isDarkMode ? 'text-white' : 'text-black'
                }`}>Demo Video</CardTitle>
                <CardDescription className={`transition-colors duration-300 ${
                  isDarkMode ? 'text-slate-400' : 'text-gray-600'
                }`}>
                  Watch how this model works in practice
                </CardDescription>
              </CardHeader>
              <CardContent>
                {project.demoVideo && project.videoUrl ? (
                  <div className="aspect-video w-full overflow-hidden rounded-lg">
                    <iframe
                      src={project.videoUrl}
                      title={`${project.title} demo video`}
                      className="w-full h-full"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                    />
                  </div>
                ) : (
                  <p className={`${isDarkMode ? 'text-slate-300' : 'text-gray-700'}`}>
                    No demo video available for this project.
                  </p>
                )}
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectPage;
