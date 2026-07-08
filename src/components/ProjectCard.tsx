import { Eye } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import CornerFrame from "@/components/CornerFrame";

import type { Project } from "@/data/projects";

const CATEGORY_KEY: Record<string, string> = {
  "Computer Vision": "computerVision",
  "OCR/NLP": "ocrNlp",
  "Video Analysis": "videoAnalysis",
  "Speech/NLP": "speechNlp",
  "AI & Education": "aiEducation",
};

interface ProjectCardProps {
  project: Project;
  isDarkMode: boolean;
}

const ProjectCard = ({ project, isDarkMode }: ProjectCardProps) => {
  const { t } = useTranslation();
  const title = t(`projectList.${project.id}.title`, project.title);
  const description = t(`projectList.${project.id}.description`, project.description);
  const categoryKey = CATEGORY_KEY[project.category];
  const categoryLabel = categoryKey ? t(`categories.${categoryKey}`) : project.category;

  return (
    <Card className={`group relative rounded-none backdrop-blur-sm border transition-all duration-300 overflow-hidden shadow-xl ${
      isDarkMode
        ? 'bg-white/5 border-white/10 hover:border-brand-1/50 hover:shadow-glow'
        : 'bg-white border-black/10 hover:border-brand-1/50 hover:shadow-glow'
    }`}>
      <div className="relative overflow-hidden">
        <div
          className="h-40 sm:h-48 bg-cover bg-center relative"
          style={{
            backgroundImage: `url('${project.image}')`
          }}
        >
          <div className="absolute inset-0 bg-grid opacity-30" />
          <div className={`absolute inset-0 ${isDarkMode ? 'bg-black/40' : 'bg-white/10'}`} />
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-4xl sm:text-6xl opacity-70 filter drop-shadow-lg">🤖</div>
          </div>
          <CornerFrame accent="cyan" visible={false} />
          {project.accuracy && (
            <span className="absolute top-2 left-2 font-mono text-[10px] sm:text-xs px-2 py-0.5 rounded bg-black/70 text-brand-2 border border-brand-2/50 backdrop-blur-sm max-w-[80%] truncate">
              {project.accuracy}
            </span>
          )}
        </div>
        <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-all duration-300 flex items-center justify-center backdrop-blur-sm px-4">
          <Link to={`/project/${project.id}`}>
            <Button size="sm" className="shadow-lg transform hover:scale-105 transition-transform text-xs sm:text-sm bg-brand-1 hover:bg-brand-1/90 text-primary-foreground">
              <Eye className="h-3 w-3 sm:h-4 sm:w-4 mr-1 sm:mr-2" />
              {t("projectCard.viewDetails")}
            </Button>
          </Link>
        </div>
      </div>

      <CardHeader className="p-4 sm:p-6">
        <div className="flex items-start justify-between gap-2">
          <CardTitle className={`transition-colors text-base sm:text-lg leading-tight font-display ${
            isDarkMode
              ? 'text-white group-hover:text-brand-1'
              : 'text-black group-hover:text-brand-1'
          }`}>
            {title}
          </CardTitle>
          <Badge variant="secondary" className="bg-brand-1/10 text-brand-1 border border-brand-1/30 text-xs shrink-0 font-mono">
            {categoryLabel}
          </Badge>
        </div>
        <CardDescription className={`text-sm sm:text-base leading-relaxed transition-colors duration-300 ${
          isDarkMode ? 'text-slate-400' : 'text-gray-600'
        }`}>
          {description}
        </CardDescription>
      </CardHeader>

      <CardContent className="p-4 sm:p-6 pt-0">
        <div className="flex flex-wrap gap-1 sm:gap-2 font-mono text-xs">
          {project.technologies.map((tech) => (
            <Badge key={tech} variant="outline" className={`transition-colors text-xs ${
              isDarkMode
                ? 'border-white/10 text-slate-300 hover:border-brand-2/50 hover:text-brand-2'
                : 'border-black/10 text-gray-700 hover:border-brand-2/50 hover:text-brand-2'
            }`}>
              {tech}
            </Badge>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

export default ProjectCard;
