
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
    <Card className="bg-slate-800 border-slate-700 hover:border-blue-500 transition-all duration-300 group overflow-hidden">
      <div className="relative overflow-hidden">
        <div className="h-48 bg-gradient-to-br from-blue-500/20 to-purple-500/20 flex items-center justify-center">
          <div className="text-6xl opacity-50">🤖</div>
        </div>
        <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center space-x-4">
          {project.hasLiveDemo && (
            <Button size="sm" className="bg-green-600 hover:bg-green-700">
              <Play className="h-4 w-4 mr-2" />
              Try Demo
            </Button>
          )}
          <Link to={`/project/${project.id}`}>
            <Button size="sm" variant="outline" className="border-white text-white hover:bg-white hover:text-black">
              <Eye className="h-4 w-4 mr-2" />
              View Details
            </Button>
          </Link>
        </div>
      </div>
      
      <CardHeader>
        <div className="flex items-center justify-between">
          <CardTitle className="text-white group-hover:text-blue-400 transition-colors">
            {project.title}
          </CardTitle>
          <Badge variant="secondary" className="bg-blue-600 text-white">
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
              <Badge key={tech} variant="outline" className="border-slate-600 text-slate-300">
                {tech}
              </Badge>
            ))}
          </div>
          
          <div className="flex space-x-3">
            <Button size="sm" variant="ghost" className="text-slate-300 hover:text-white">
              <Github className="h-4 w-4 mr-2" />
              Code
            </Button>
            {project.hasLiveDemo && (
              <Button size="sm" className="bg-gradient-to-r from-green-500 to-blue-500 hover:from-green-600 hover:to-blue-600">
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
