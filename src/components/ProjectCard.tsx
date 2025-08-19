
import { Eye, Play } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";

import type { Project } from "@/data/projects";

interface ProjectCardProps {
  project: Project;
  isDarkMode: boolean;
}

const ProjectCard = ({ project, isDarkMode }: ProjectCardProps) => {
  return (
    <Card className={`backdrop-blur-sm border transition-all duration-300 group overflow-hidden shadow-xl transform hover:-translate-y-2 ${
      isDarkMode 
        ? 'bg-slate-800/90 border-slate-700 hover:border-blue-500 hover:shadow-2xl hover:shadow-blue-500/10' 
        : 'bg-white/90 border-gray-200 hover:border-blue-500 hover:shadow-2xl hover:shadow-blue-500/10'
    }`}>
      <div className="relative overflow-hidden">
        <div 
          className="h-40 sm:h-48 bg-cover bg-center relative"
          style={{
            backgroundImage: `url('${project.image}')`
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-br from-blue-500/40 to-teal-500/40"></div>
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-4xl sm:text-6xl opacity-70 filter drop-shadow-lg">🤖</div>
          </div>
        </div>
        <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-all duration-300 flex items-center justify-center space-x-2 sm:space-x-4 backdrop-blur-sm px-4">
          {project.hasLiveDemo && project.demoUrl && (
            <a href={project.demoUrl} target="_blank" rel="noopener noreferrer">
              <Button size="sm" className="bg-blue-600 hover:bg-blue-700 shadow-lg transform hover:scale-105 transition-transform text-xs sm:text-sm">
                <Play className="h-3 w-3 sm:h-4 sm:w-4 mr-1 sm:mr-2" />
                Try Demo
              </Button>
            </a>
          )}
          <Link to={`/project/${project.id}`}>
            <Button size="sm" className={`shadow-lg transform hover:scale-105 transition-transform text-xs sm:text-sm ${
              isDarkMode 
                ? 'bg-slate-700 text-white hover:bg-slate-600 border border-slate-500' 
                : 'bg-gray-700 text-white hover:bg-gray-600 border border-gray-500'
            }`}>
              <Eye className="h-3 w-3 sm:h-4 sm:w-4 mr-1 sm:mr-2" />
              View Details
            </Button>
          </Link>
        </div>
      </div>
      
      <CardHeader className="p-4 sm:p-6">
        <div className="flex items-start justify-between gap-2">
          <CardTitle className={`transition-colors text-base sm:text-lg leading-tight ${
            isDarkMode 
              ? 'text-white group-hover:text-blue-400' 
              : 'text-black group-hover:text-blue-600'
          }`}>
            {project.title}
          </CardTitle>
          <Badge variant="secondary" className="bg-gradient-to-r from-blue-600 to-teal-600 text-white shadow-lg text-xs shrink-0">
            {project.category}
          </Badge>
        </div>
        <CardDescription className={`text-sm sm:text-base leading-relaxed transition-colors duration-300 ${
          isDarkMode ? 'text-slate-400' : 'text-gray-600'
        }`}>
          {project.description}
        </CardDescription>
      </CardHeader>
      
      <CardContent className="p-4 sm:p-6 pt-0">
        <div className="space-y-3 sm:space-y-4">
          <div className="flex flex-wrap gap-1 sm:gap-2">
            {project.technologies.map((tech) => (
              <Badge key={tech} variant="outline" className={`transition-colors text-xs ${
                isDarkMode 
                  ? 'border-slate-600 text-slate-300 hover:border-blue-400 hover:text-blue-300' 
                  : 'border-gray-400 text-gray-700 hover:border-blue-500 hover:text-blue-600'
              }`}>
                {tech}
              </Badge>
            ))}
          </div>
          
          <div className="flex flex-row items-center gap-2 sm:gap-3">
            {/* {project.githubUrl && (
              <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                <Button size="sm" variant="ghost" className={`transition-all text-xs sm:text-sm h-8 ${
                  isDarkMode 
                    ? 'text-slate-300 hover:text-white hover:bg-slate-700' 
                    : 'text-gray-600 hover:text-black hover:bg-gray-100'
                }`}>
                  <Github className="h-3 w-3 sm:h-4 sm:w-4 mr-1 sm:mr-2" />
                  Code
                </Button>
              </a>
            )} */}
            {project.hasLiveDemo && project.demoUrl && (
              <a href={project.demoUrl} target="_blank" rel="noopener noreferrer">
                <Button size="sm" className="bg-gradient-to-r from-blue-500 to-teal-500 hover:from-blue-600 hover:to-teal-600 shadow-lg transform hover:scale-105 transition-all text-xs sm:text-sm h-8">
                  <Play className="h-3 w-3 sm:h-4 sm:w-4 mr-1 sm:mr-2" />
                  Live Demo
                </Button>
              </a>
            )}
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default ProjectCard;
