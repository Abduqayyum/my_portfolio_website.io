
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useTranslation } from "react-i18next";

interface SkillsSectionProps {
  isDarkMode: boolean;
}

const SkillsSection = ({ isDarkMode }: SkillsSectionProps) => {
  const { t } = useTranslation();

  const skillCategories = [
    {
      title: t("skills.categories.ml"),
      skills: ["Python", "TensorFlow", "PyTorch", "Scikit-learn", "Keras", "XGBoost", "LightGBM", "Random Forest"],
      color: "bg-blue-600"
    },
    {
      title: t("skills.categories.cv"),
      skills: ["OpenCV", "PIL", "YOLO", "ResNet", "CNN", "ViT", "Transformers", "MediaPipe", "Object Detection"],
      color: "bg-purple-600"
    },
    {
      title: t("skills.categories.nlpSpeech"),
      skills: ["Whisper", "BERT", "GPT", "Transformers", "PaddleOCR", "OCR", "TimeSformer"],
      color: "bg-green-600"
    },
    {
      title: t("skills.categories.dl"),
      skills: ["Neural Networks", "RNN", "LSTM", "GAN", "Transformer", "Fine-tuning", "Transfer Learning"],
      color: "bg-orange-600"
    },
    {
      title: t("skills.categories.backend"),
      skills: ["FastAPI", "Django", "MySQL", "PostgreSQL", "Docker", "Git", "MLflow"],
      color: "bg-red-600"
    },
    {
      title: t("skills.categories.tools"),
      skills: ["Pandas", "NumPy", "Matplotlib", "Seaborn", "Jupyter", "Streamlit", "Hugging Face"],
      color: "bg-pink-600"
    }
  ];

  return (
    <div className="container mx-auto max-w-7xl">
      <h2 className={`text-4xl font-bold text-center mb-12 ${isDarkMode ? 'text-white' : 'text-black'}`}>
        {t("skills.title")}
      </h2>
      
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {skillCategories.map((category, index) => (
          <Card 
            key={category.title} 
            className={`${isDarkMode ? 'bg-slate-800 border-slate-700' : 'bg-white border-gray-200'} hover:border-blue-500 transition-all duration-300 animate-fade-in`}
            style={{ animationDelay: `${index * 100}ms` }}
          >
            <CardHeader>
              <CardTitle className={`${isDarkMode ? 'text-white' : 'text-black'} flex items-center`}>
                <div className={`w-3 h-3 rounded-full ${category.color} mr-3`}></div>
                {category.title}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <Badge 
                    key={skill} 
                    variant="secondary" 
                    className={`${isDarkMode ? 'bg-slate-700 text-slate-300 hover:bg-slate-600' : 'bg-gray-200 text-gray-700 hover:bg-gray-300'} transition-colors cursor-default`}
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
      <div className="mt-16 grid md:grid-cols-4 gap-8 text-center">
        <div className="space-y-2">
          <div className="text-4xl font-bold text-blue-400">2+</div>
          <div className={`${isDarkMode ? 'text-slate-300' : 'text-gray-700'}`}>{t("skills.stats.years")}</div>
        </div>
        <div className="space-y-2">
          <div className="text-4xl font-bold text-purple-400">13</div>
          <div className={`${isDarkMode ? 'text-slate-300' : 'text-gray-700'}`}>{t("skills.stats.projects")}</div>
        </div>
        <div className="space-y-2">
          <div className="text-4xl font-bold text-green-400">12+</div>
          <div className={`${isDarkMode ? 'text-slate-300' : 'text-gray-700'}`}>{t("skills.stats.models")}</div>
        </div>
        <div className="space-y-2">
          <div className="text-4xl font-bold text-orange-400">95%</div>
          <div className={`${isDarkMode ? 'text-slate-300' : 'text-gray-700'}`}>{t("skills.stats.accuracy")}</div>
        </div>
      </div>
    </div>
  );
};

export default SkillsSection;
