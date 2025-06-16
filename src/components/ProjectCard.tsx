
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
    <Card className="bg-slate-800/90 backdrop-blur-sm border-slate-700 hover:border-emerald-500 transition-all duration-300 group overflow-hidden shadow-xl hover:shadow-2xl hover:shadow-emerald-500/10 transform hover:-translate-y-2">
      <div className="relative overflow-hidden">
        <div 
          className="h-48 bg-cover bg-center relative"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=800&auto=format&fit=crop')`
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/40 to-cyan-500/40"></div>
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-6xl opacity-70 filter drop-shadow-lg">🤖</div>
          </div>
        </div>
        <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-all duration-300 flex items-center justify-center space-x-4 backdrop-blur-sm">
          {project.hasLiveDemo && (
            <Button size="sm" className="bg-emerald-600 hover:bg-emerald-700 shadow-lg transform hover:scale-105 transition-transform">
              <Play className="h-4 w-4 mr-2" />
              Try Demo
            </Button>
          )}
          <Link to={`/project/${project.id}`}>
            <Button size="sm" variant="outline" className="border-white text-white hover:bg-white hover:text-black shadow-lg transform hover:scale-105 transition-transform">
              <Eye className="h-4 w-4 mr-2" />
              View Details
            </Button>
          </Link>
        </div>
      </div>
      
      <CardHeader>
        <div className="flex items-center justify-between">
          <CardTitle className="text-white group-hover:text-emerald-400 transition-colors">
            {project.title}
          </CardTitle>
          <Badge variant="secondary" className="bg-gradient-to-r from-emerald-600 to-cyan-600 text-white shadow-lg">
            {project.category}
          </Badge>
        </div>
        <CardDescription className="text-slate-400">
          {project.description}
        </CardDescription>
      </CardHeader>
      
      <CardContent>
        <div className="space-y-4">
          <div className="flex flex-wrap gap-2">
            {project.technologies.map((tech) => (
              <Badge key={tech} variant="outline" className="border-slate-600 text-slate-300 hover:border-emerald-400 hover:text-emerald-300 transition-colors">
                {tech}
              </Badge>
            ))}
          </div>
          
          <div className="flex space-x-3">
            <Button size="sm" variant="ghost" className="text-slate-300 hover:text-white hover:bg-slate-700 transition-all">
              <Github className="h-4 w-4 mr-2" />
              Code
            </Button>
            {project.hasLiveDemo && (
              <Button size="sm" className="bg-gradient-to-r from-emerald-500 to-cyan-500 hover:from-emerald-600 hover:to-cyan-600 shadow-lg transform hover:scale-105 transition-all">
                <Play className="h-4 w-4 mr-2" />
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
