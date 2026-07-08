import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useTranslation } from "react-i18next";
import { projects as projectsData } from "@/data/projects";
import SectionHeading from "@/components/SectionHeading";
import CornerFrame from "@/components/CornerFrame";

interface SkillsSectionProps {
  isDarkMode: boolean;
}

const SkillsSection = ({ isDarkMode }: SkillsSectionProps) => {
  const { t } = useTranslation();

  const skillCategories: Array<{ title: string; skills: string[]; accent: "cyan" | "lime" | "amber" }> = [
    {
      title: t("skills.categories.ml"),
      skills: ["Python", "TensorFlow", "PyTorch", "Scikit-learn", "Keras", "XGBoost", "LightGBM", "Random Forest"],
      accent: "cyan",
    },
    {
      title: t("skills.categories.cv"),
      skills: ["OpenCV", "PIL", "YOLO", "ResNet", "CNN", "ViT", "Transformers", "MediaPipe", "Object Detection"],
      accent: "lime",
    },
    {
      title: t("skills.categories.nlpSpeech"),
      skills: ["Whisper", "BERT", "GPT", "Transformers", "PaddleOCR", "OCR", "TimeSformer"],
      accent: "amber",
    },
    {
      title: t("skills.categories.dl"),
      skills: ["Neural Networks", "RNN", "LSTM", "GAN", "Transformer", "Fine-tuning", "Transfer Learning"],
      accent: "cyan",
    },
    {
      title: t("skills.categories.backend"),
      skills: ["FastAPI", "Django", "MySQL", "PostgreSQL", "Docker", "Git", "MLflow"],
      accent: "amber",
    },
    {
      title: t("skills.categories.tools"),
      skills: ["Pandas", "NumPy", "Matplotlib", "Seaborn", "Jupyter", "Streamlit", "Hugging Face"],
      accent: "lime",
    },
  ];

  const accentDot: Record<string, string> = {
    cyan: "bg-brand-1",
    lime: "bg-brand-2",
    amber: "bg-brand-3",
  };

  const stats = [
    { value: "3+", label: t("skills.stats.years"), accent: "text-brand-1" },
    { value: String(projectsData.length), label: t("skills.stats.projects"), accent: "text-brand-2" },
    { value: "12+", label: t("skills.stats.models"), accent: "text-brand-3" },
    { value: "95%", label: t("skills.stats.accuracy"), accent: "text-brand-1" },
  ];

  return (
    <div className="container mx-auto max-w-7xl">
      <SectionHeading index="04" kicker="SKILLS" title={t("skills.title")} isDarkMode={isDarkMode} />

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
        {skillCategories.map((category, index) => (
          <Card
            key={category.title}
            className={`relative transition-all duration-300 animate-fade-in ${
              isDarkMode ? "bg-white/5 border-white/10 hover:border-brand-1/40" : "bg-white border-black/10 hover:border-brand-1/40"
            }`}
            style={{ animationDelay: `${index * 100}ms` }}
          >
            <CardHeader>
              <CardTitle className={`${isDarkMode ? "text-white" : "text-black"} flex items-center font-display`}>
                <div className={`w-2.5 h-2.5 rounded-full ${accentDot[category.accent]} mr-3`}></div>
                {category.title}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex flex-wrap gap-2 font-mono text-xs">
                {category.skills.map((skill) => (
                  <Badge
                    key={skill}
                    variant="secondary"
                    className={`${isDarkMode ? "bg-white/5 text-slate-300 border border-white/10 hover:border-brand-1/40" : "bg-black/[0.03] text-gray-700 border border-black/10 hover:border-brand-1/40"} transition-colors cursor-default font-mono`}
                  >
                    {skill}
                  </Badge>
                ))}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Experience Stats */}
      <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-8 text-center">
        {stats.map((stat) => (
          <div key={stat.label} className={`relative space-y-2 rounded-lg border p-4 sm:p-6 ${isDarkMode ? "border-white/10 bg-white/5" : "border-black/10 bg-black/[0.02]"}`}>
            <CornerFrame accent={stat.accent === "text-brand-2" ? "lime" : "cyan"} visible={false} />
            <div className={`font-mono text-3xl sm:text-4xl font-bold ${stat.accent}`}>{stat.value}</div>
            <div className={`text-xs sm:text-sm ${isDarkMode ? "text-slate-300" : "text-gray-700"}`}>{stat.label}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SkillsSection;
