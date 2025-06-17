
import { Github, Eye, Play } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";

interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  technologies: string[];
  demoUrl: string;
  githubUrl: string;
  hasLiveDemo: boolean;
  category: string;
}

interface ProjectCardProps {
  project: Project;
}

const ProjectCard = ({ project }: ProjectCardProps) => {
  return (
    <Card className="bg-slate-800/90 backdrop-blur-sm border-slate-700 hover:border-purple-500 transition-all duration-300 group overflow-hidden shadow-xl hover:shadow-2xl hover:shadow-purple-500/10 transform hover:-translate-y-2">
      <div className="relative overflow-hidden">
        <div 
          className="h-40 sm:h-48 bg-cover bg-center relative"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=800&auto=format&fit=crop')`
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-br from-purple-500/40 to-pink-500/40"></div>
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-4xl sm:text-6xl opacity-70 filter drop-shadow-lg">🤖</div>
          </div>
        </div>
        <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-all duration-300 flex items-center justify-center space-x-2 sm:space-x-4 backdrop-blur-sm px-4">
          {project.hasLiveDemo && (
            <Button size="sm" className="bg-purple-600 hover:bg-purple-700 shadow-lg transform hover:scale-105 transition-transform text-xs sm:text-sm">
              <Play className="h-3 w-3 sm:h-4 sm:w-4 mr-1 sm:mr-2" />
              Try Demo
            </Button>
          )}
          <Link to={`/project/${project.id}`}>
            <Button size="sm" className="bg-slate-700 text-white hover:bg-slate-600 border border-slate-500 shadow-lg transform hover:scale-105 transition-transform text-xs sm:text-sm">
              <Eye className="h-3 w-3 sm:h-4 sm:w-4 mr-1 sm:mr-2" />
              View Details
            </Button>
          </Link>
        </div>
      </div>
      
      <CardHeader className="p-4 sm:p-6">
        <div className="flex items-start justify-between gap-2">
          <CardTitle className="text-white group-hover:text-purple-400 transition-colors text-base sm:text-lg leading-tight">
            {project.title}
          </CardTitle>
          <Badge variant="secondary" className="bg-gradient-to-r from-purple-600 to-pink-600 text-white shadow-lg text-xs shrink-0">
            {project.category}
          </Badge>
        </div>
        <CardDescription className="text-slate-400 text-sm sm:text-base leading-relaxed">
          {project.description}
        </CardDescription>
      </CardHeader>
      
      <CardContent className="p-4 sm:p-6 pt-0">
        <div className="space-y-3 sm:space-y-4">
          <div className="flex flex-wrap gap-1 sm:gap-2">
            {project.technologies.map((tech) => (
              <Badge key={tech} variant="outline" className="border-slate-600 text-slate-300 hover:border-purple-400 hover:text-purple-300 transition-colors text-xs">
                {tech}
              </Badge>
            ))}
          </div>
          
          <div className="flex flex-col sm:flex-row gap-2 sm:gap-3">
            <Button size="sm" variant="ghost" className="text-slate-300 hover:text-white hover:bg-slate-700 transition-all text-xs sm:text-sm">
              <Github className="h-3 w-3 sm:h-4 sm:w-4 mr-1 sm:mr-2" />
              Code
            </Button>
            {project.hasLiveDemo && (
              <Button size="sm" className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 shadow-lg transform hover:scale-105 transition-all text-xs sm:text-sm">
                <Play className="h-3 w-3 sm:h-4 sm:w-4 mr-1 sm:mr-2" />
                Live Demo
              </Button>
            )}
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default ProjectCard;
