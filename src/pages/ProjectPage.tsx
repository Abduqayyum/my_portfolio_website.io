
import { useState } from "react";
import { useParams, Link } from "react-router-dom";
import { ArrowLeft, Upload, Download, Github, Eye, Play } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

interface Project {
  id: number;
  title: string;
  description: string;
  longDescription: string;
  image: string;
  technologies: string[];
  demoUrl: string;
  githubUrl: string;
  hasLiveDemo: boolean;
  category: string;
  accuracy?: string;
  dataset?: string;
  modelType?: string;
}

const ProjectPage = () => {
  const { id } = useParams();
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [isProcessing, setIsProcessing] = useState(false);
  const [result, setResult] = useState<string | null>(null);
  const [previewUrl, setPreviewUrl] = useState<string | null>(null);

  // Mock project data - in a real app, this would come from an API
  const projects: Project[] = [
    {
      id: 1,
      title: "Image Classification Model",
      description: "Deep learning model for multi-class image classification using CNN architecture.",
      longDescription: "This advanced image classification model uses a Convolutional Neural Network (CNN) architecture built with TensorFlow and Keras. The model has been trained on a diverse dataset of over 100,000 images across 50 different categories. It employs data augmentation techniques, batch normalization, and dropout layers to achieve robust performance. The architecture includes multiple convolutional layers with ReLU activation, max-pooling layers for dimensionality reduction, and a fully connected layer for final classification. The model demonstrates excellent generalization capabilities and can accurately classify images in real-time.",
      image: "/api/placeholder/400/250",
      technologies: ["Python", "TensorFlow", "Keras", "OpenCV", "NumPy"],
      demoUrl: "#",
      githubUrl: "#",
      hasLiveDemo: true,
      category: "Computer Vision",
      accuracy: "94.2%",
      dataset: "Custom Dataset (100k images)",
      modelType: "CNN Architecture"
    },
    {
      id: 2,
      title: "Object Detection System",
      description: "Real-time object detection using YOLO v8 architecture.",
      longDescription: "This state-of-the-art object detection system leverages the YOLO v8 (You Only Look Once) architecture to detect and localize multiple objects in real-time. The model can identify 80+ different object classes with high precision and recall rates. It features advanced techniques like anchor-free detection, multi-scale training, and mosaic data augmentation. The system is optimized for both accuracy and speed, making it suitable for real-time applications. The model has been fine-tuned on custom datasets and can handle various lighting conditions and object scales.",
      image: "/api/placeholder/400/250",
      technologies: ["PyTorch", "YOLO v8", "OpenCV", "Python", "CUDA"],
      demoUrl: "#",
      githubUrl: "#",
      hasLiveDemo: true,
      category: "Computer Vision",
      accuracy: "89.7% mAP",
      dataset: "COCO + Custom Dataset",
      modelType: "YOLO v8"
    },
    {
      id: 3,
      title: "Sentiment Analysis Dashboard",
      description: "NLP model for analyzing sentiment in social media data.",
      longDescription: "This comprehensive sentiment analysis system processes and analyzes social media text data to determine emotional sentiment. Built using advanced NLP techniques including BERT transformers, the model can classify text into positive, negative, or neutral sentiments with high accuracy. The system includes preprocessing pipelines for text cleaning, tokenization, and feature extraction. It also features a real-time dashboard for visualizing sentiment trends and patterns. The model has been trained on millions of social media posts and can handle various text formats, slang, and emoticons.",
      image: "/api/placeholder/400/250",
      technologies: ["Python", "BERT", "NLTK", "Streamlit", "Pandas"],
      demoUrl: "#",
      githubUrl: "#",
      hasLiveDemo: false,
      category: "NLP",
      accuracy: "92.4%",
      dataset: "Social Media Dataset (2M posts)",
      modelType: "BERT Transformer"
    },
    {
      id: 4,
      title: "Predictive Analytics Model",
      description: "Machine learning model for forecasting business metrics.",
      longDescription: "This sophisticated predictive analytics model employs ensemble methods and time series analysis to forecast various business metrics. The system combines multiple algorithms including XGBoost, Random Forest, and LSTM networks to provide accurate predictions. It features automated feature engineering, hyperparameter optimization, and cross-validation techniques. The model can handle seasonal patterns, trends, and anomalies in the data. It includes comprehensive data preprocessing pipelines and can work with both structured and unstructured data sources.",
      image: "/api/placeholder/400/250",
      technologies: ["Python", "Scikit-learn", "XGBoost", "LSTM", "Matplotlib"],
      demoUrl: "#",
      githubUrl: "#",
      hasLiveDemo: false,
      category: "Data Science",
      accuracy: "87.3% MAE",
      dataset: "Business Metrics Dataset",
      modelType: "Ensemble Methods"
    }
  ];

  const project = projects.find(p => p.id === parseInt(id || "1"));

  if (!project) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-white mb-4">Project Not Found</h1>
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

  const handleFileSelect = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      setSelectedFile(file);
      const url = URL.createObjectURL(file);
      setPreviewUrl(url);
      setResult(null);
    }
  };

  const handleTestModel = async () => {
    if (!selectedFile) return;

    setIsProcessing(true);
    setResult(null);

    // Simulate model processing
    setTimeout(() => {
      // Mock results based on project type
      if (project.category === "Computer Vision") {
        if (project.id === 1) {
          setResult("Prediction: Cat (Confidence: 94.2%)");
        } else {
          setResult("Detected Objects: 2 cats, 1 dog, 1 person (Confidence: 89.7%)");
        }
      } else if (project.category === "NLP") {
        setResult("Sentiment: Positive (Confidence: 92.4%)");
      } else {
        setResult("Prediction: Upward trend expected (Confidence: 87.3%)");
      }
      setIsProcessing(false);
    }, 3000);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Navigation */}
      <nav className="bg-slate-900/80 backdrop-blur-md border-b border-slate-700">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <Link to="/" className="flex items-center text-white hover:text-blue-400 transition-colors">
              <ArrowLeft className="mr-2 h-5 w-5" />
              Back to Portfolio
            </Link>
            <div className="text-2xl font-bold text-white">
              DS<span className="text-blue-400">Portfolio</span>
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
            <h1 className="text-4xl font-bold text-white">{project.title}</h1>
          </div>
          <p className="text-xl text-slate-300 mb-8">{project.description}</p>
          
          {/* Project Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <Card className="bg-slate-800 border-slate-700">
              <CardHeader>
                <CardTitle className="text-white text-lg">Accuracy</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-2xl font-bold text-green-400">{project.accuracy}</p>
              </CardContent>
            </Card>
            <Card className="bg-slate-800 border-slate-700">
              <CardHeader>
                <CardTitle className="text-white text-lg">Dataset</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-slate-300">{project.dataset}</p>
              </CardContent>
            </Card>
            <Card className="bg-slate-800 border-slate-700">
              <CardHeader>
                <CardTitle className="text-white text-lg">Model Type</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-slate-300">{project.modelType}</p>
              </CardContent>
            </Card>
          </div>

          {/* Action Buttons */}
          <div className="flex gap-4 mb-8">
            <Button className="bg-gradient-to-r from-green-500 to-blue-500 hover:from-green-600 hover:to-blue-600">
              <Play className="mr-2 h-4 w-4" />
              Live Demo
            </Button>
            <Button variant="outline" className="border-slate-400 text-slate-300 hover:bg-slate-700">
              <Github className="mr-2 h-4 w-4" />
              View Code
            </Button>
            <Button variant="outline" className="border-slate-400 text-slate-300 hover:bg-slate-700">
              <Download className="mr-2 h-4 w-4" />
              Download Model
            </Button>
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Project Details */}
          <div>
            <Card className="bg-slate-800 border-slate-700 mb-8">
              <CardHeader>
                <CardTitle className="text-white">Project Overview</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-slate-300 leading-relaxed mb-6">
                  {project.longDescription}
                </p>
                <div>
                  <h4 className="text-white font-semibold mb-3">Technologies Used:</h4>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                      <Badge key={tech} variant="outline" className="border-slate-600 text-slate-300">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Model Testing */}
          <div>
            <Card className="bg-slate-800 border-slate-700">
              <CardHeader>
                <CardTitle className="text-white">Test the Model</CardTitle>
                <CardDescription className="text-slate-400">
                  Upload an image to see the model in action
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                {/* File Upload */}
                <div className="space-y-2">
                  <Label htmlFor="image-upload" className="text-white">
                    Select Image
                  </Label>
                  <div className="flex items-center gap-4">
                    <Input
                      id="image-upload"
                      type="file"
                      accept="image/*"
                      onChange={handleFileSelect}
                      className="bg-slate-700 border-slate-600 text-white"
                    />
                    <Button
                      onClick={handleTestModel}
                      disabled={!selectedFile || isProcessing}
                      className="bg-blue-600 hover:bg-blue-700"
                    >
                      {isProcessing ? (
                        <>Processing...</>
                      ) : (
                        <>
                          <Upload className="mr-2 h-4 w-4" />
                          Test Model
                        </>
                      )}
                    </Button>
                  </div>
                </div>

                {/* Image Preview */}
                {previewUrl && (
                  <div className="space-y-2">
                    <Label className="text-white">Preview</Label>
                    <div className="relative">
                      <img
                        src={previewUrl}
                        alt="Preview"
                        className="w-full h-64 object-cover rounded-lg border border-slate-600"
                      />
                    </div>
                  </div>
                )}

                {/* Results */}
                {result && (
                  <div className="space-y-2">
                    <Label className="text-white">Results</Label>
                    <Card className="bg-slate-700 border-slate-600">
                      <CardContent className="pt-6">
                        <p className="text-green-400 font-semibold">{result}</p>
                      </CardContent>
                    </Card>
                  </div>
                )}

                {/* Processing Indicator */}
                {isProcessing && (
                  <div className="flex items-center justify-center p-8">
                    <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-400"></div>
                    <span className="ml-3 text-slate-300">Processing your image...</span>
                  </div>
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
