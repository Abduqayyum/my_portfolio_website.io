
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

interface SkillsSectionProps {
  isDarkMode: boolean;
}

const SkillsSection = ({ isDarkMode }: SkillsSectionProps) => {
  const skillCategories = [
    {
      title: "Machine Learning",
      skills: ["Python", "TensorFlow", "PyTorch", "Scikit-learn", "Keras", "XGBoost", "LightGBM"],
      color: "bg-blue-600"
    },
    {
      title: "Computer Vision",
      skills: ["OpenCV", "PIL", "YOLO", "ResNet", "CNN", "Image Processing", "Object Detection"],
      color: "bg-purple-600"
    },
    {
      title: "Data Science",
      skills: ["Pandas", "NumPy", "Matplotlib", "Seaborn", "Jupyter", "R", "SQL"],
      color: "bg-green-600"
    },
    {
      title: "Deep Learning",
      skills: ["Neural Networks", "RNN", "LSTM", "GAN", "Transformer", "BERT", "GPT"],
      color: "bg-orange-600"
    },
    {
      title: "Tools & Platforms",
      skills: ["Docker", "AWS", "GCP", "Git", "MLflow", "Streamlit", "FastAPI"],
      color: "bg-red-600"
    },
    {
      title: "Languages",
      skills: ["Python", "R", "SQL", "JavaScript", "C++", "MATLAB"],
      color: "bg-pink-600"
    }
  ];

  return (
    <div className="container mx-auto max-w-7xl">
      <h2 className={`text-4xl font-bold text-center mb-12 ${isDarkMode ? 'text-white' : 'text-black'}`}>Skills & Technologies</h2>
      
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
          <div className="text-4xl font-bold text-blue-400">5+</div>
          <div className={`${isDarkMode ? 'text-slate-300' : 'text-gray-700'}`}>Years Experience</div>
        </div>
        <div className="space-y-2">
          <div className="text-4xl font-bold text-purple-400">20+</div>
          <div className={`${isDarkMode ? 'text-slate-300' : 'text-gray-700'}`}>Projects Completed</div>
        </div>
        <div className="space-y-2">
          <div className="text-4xl font-bold text-green-400">15+</div>
          <div className={`${isDarkMode ? 'text-slate-300' : 'text-gray-700'}`}>Models Deployed</div>
        </div>
        <div className="space-y-2">
          <div className="text-4xl font-bold text-orange-400">94%</div>
          <div className={`${isDarkMode ? 'text-slate-300' : 'text-gray-700'}`}>Avg Model Accuracy</div>
        </div>
      </div>
    </div>
  );
};

export default SkillsSection;
