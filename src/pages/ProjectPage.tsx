
import { useTheme } from "@/context/ThemeContext";
import { useParams, Link } from "react-router-dom";
import { ArrowLeft, Play, Sun, Moon } from "lucide-react";
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
  const hasVideo = Boolean(project?.demoVideo && project?.videoUrl);

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
            {/* {project.githubUrl && project.githubUrl !== "#" && (
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
            )} */}
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

        <div className={`grid gap-12 ${hasVideo ? 'lg:grid-cols-2' : 'grid-cols-1'}`}>
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
          {hasVideo && (
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
                  <div className="aspect-video w-full overflow-hidden rounded-lg">
                    <iframe
                      src={project.videoUrl}
                      title={`${project.title} demo video`}
                      className="w-full h-full"
                      loading="lazy"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                    />
                  </div>
                </CardContent>
              </Card>
            </div>
          )}

          {/* Car Model Recognition Results */}
          {project.id === 1 && (
            <div>
              <Card className={`transition-colors duration-300 ${
                isDarkMode 
                  ? 'bg-slate-800 border-slate-700' 
                  : 'bg-white border-gray-200'
              }`}>
                <CardHeader>
                  <CardTitle className={`transition-colors duration-300 ${
                    isDarkMode ? 'text-white' : 'text-black'
                  }`}>Model Performance Results</CardTitle>
                  <CardDescription className={`transition-colors duration-300 ${
                    isDarkMode ? 'text-slate-400' : 'text-gray-600'
                  }`}>
                    Real vehicle model classification results with confidence scores
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <img 
                    src="/lovable-uploads/8ecf2722-6365-4366-a317-e546d720458e.png" 
                    alt="Car model recognition predictions showing various vehicles with model classifications and probability scores" 
                    className="w-full rounded-lg border"
                  />
                </CardContent>
              </Card>
            </div>
          )}

          {/* Gender Detection Results */}
          {project.id === 3 && (
            <div>
              <Card className={`transition-colors duration-300 ${
                isDarkMode 
                  ? 'bg-slate-800 border-slate-700' 
                  : 'bg-white border-gray-200'
              }`}>
                <CardHeader>
                  <CardTitle className={`transition-colors duration-300 ${
                    isDarkMode ? 'text-white' : 'text-black'
                  }`}>Model Performance Results</CardTitle>
                  <CardDescription className={`transition-colors duration-300 ${
                    isDarkMode ? 'text-slate-400' : 'text-gray-600'
                  }`}>
                    Real gender classification results with confidence scores
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <img 
                    src="/lovable-uploads/9e2b643d-89f9-48a0-9b84-130e8f7c9537.png" 
                    alt="Gender detection predictions showing various faces with gender classifications and probability scores" 
                    className="w-full rounded-lg border"
                  />
                </CardContent>
              </Card>
            </div>
          )}

          {/* Age Detection Results */}
          {project.id === 4 && (
            <div>
              <Card className={`transition-colors duration-300 ${
                isDarkMode 
                  ? 'bg-slate-800 border-slate-700' 
                  : 'bg-white border-gray-200'
              }`}>
                <CardHeader>
                  <CardTitle className={`transition-colors duration-300 ${
                    isDarkMode ? 'text-white' : 'text-black'
                  }`}>Model Performance Results</CardTitle>
                  <CardDescription className={`transition-colors duration-300 ${
                    isDarkMode ? 'text-slate-400' : 'text-gray-600'
                  }`}>
                    Real age detection results with confidence scores
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <img 
                    src="/lovable-uploads/0f31b8a6-57e8-44f1-b644-02c5897bc4f4.png" 
                    alt="Age detection predictions showing various faces with age range classifications and probability scores" 
                    className="w-full rounded-lg border"
                  />
                </CardContent>
              </Card>
            </div>
          )}

          {/* Vehicle Color Recognition Results */}
          {project.id === 2 && (
            <div>
              <Card className={`transition-colors duration-300 ${
                isDarkMode 
                  ? 'bg-slate-800 border-slate-700' 
                  : 'bg-white border-gray-200'
              }`}>
                <CardHeader>
                  <CardTitle className={`transition-colors duration-300 ${
                    isDarkMode ? 'text-white' : 'text-black'
                  }`}>Model Performance Results</CardTitle>
                  <CardDescription className={`transition-colors duration-300 ${
                    isDarkMode ? 'text-slate-400' : 'text-gray-600'
                  }`}>
                    Real vehicle color classification results with confidence scores
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <img 
                    src="/lovable-uploads/a6872517-9e97-48fa-98d2-35cb3aa3451a.png" 
                    alt="Vehicle color recognition model predictions showing various cars with color classifications and probability scores" 
                    className="w-full rounded-lg border"
                  />
                </CardContent>
              </Card>
            </div>
          )}

          {/* Audio Examples for STT Model */}
          {project.id === 11 && (
            <div>
              <Card className={`transition-colors duration-300 ${
                isDarkMode 
                  ? 'bg-slate-800 border-slate-700' 
                  : 'bg-white border-gray-200'
              }`}>
                <CardHeader>
                  <CardTitle className={`transition-colors duration-300 ${
                    isDarkMode ? 'text-white' : 'text-black'
                  }`}>Audio Examples</CardTitle>
                  <CardDescription className={`transition-colors duration-300 ${
                    isDarkMode ? 'text-slate-400' : 'text-gray-600'
                  }`}>
                    Listen to sample audio files and see how the model transcribes them
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-6">
                    <div className="border-l-4 border-blue-500 pl-4">
                      <h4 className={`font-semibold mb-2 transition-colors duration-300 ${
                        isDarkMode ? 'text-white' : 'text-black'
                      }`}>Sample 1: News Broadcasting</h4>
                      <audio controls className="w-full mb-2">
                        <source src="/api/placeholder/audio" type="audio/mpeg" />
                        Your browser does not support the audio element.
                      </audio>
                      <p className={`text-sm transition-colors duration-300 ${
                        isDarkMode ? 'text-slate-300' : 'text-gray-700'
                      }`}>
                        <strong>Transcription:</strong> "Bugun O'zbekistonda yangi texnologiya sohasida muhim yutuqlarga erishildi. Raqamli transformatsiya jarayoni davom etmoqda."
                      </p>
                    </div>

                    <div className="border-l-4 border-green-500 pl-4">
                      <h4 className={`font-semibold mb-2 transition-colors duration-300 ${
                        isDarkMode ? 'text-white' : 'text-black'
                      }`}>Sample 2: Conversational Speech</h4>
                      <audio controls className="w-full mb-2">
                        <source src="/api/placeholder/audio" type="audio/mpeg" />
                        Your browser does not support the audio element.
                      </audio>
                      <p className={`text-sm transition-colors duration-300 ${
                        isDarkMode ? 'text-slate-300' : 'text-gray-700'
                      }`}>
                        <strong>Transcription:</strong> "Salom, qanday ahvolingiz? Men bugun juda band edim, lekin sizni ko'rish uchun vaqt topdim."
                      </p>
                    </div>

                    <div className="border-l-4 border-purple-500 pl-4">
                      <h4 className={`font-semibold mb-2 transition-colors duration-300 ${
                        isDarkMode ? 'text-white' : 'text-black'
                      }`}>Sample 3: Educational Content</h4>
                      <audio controls className="w-full mb-2">
                        <source src="/api/placeholder/audio" type="audio/mpeg" />
                        Your browser does not support the audio element.
                      </audio>
                      <p className={`text-sm transition-colors duration-300 ${
                        isDarkMode ? 'text-slate-300' : 'text-gray-700'
                      }`}>
                        <strong>Transcription:</strong> "Sun'iy intellekt zamonaviy dunyoda muhim o'rin tutadi. Machine learning algoritmlari hayotimizni osonlashtirmoqda."
                      </p>
                    </div>

                    <div className="border-l-4 border-red-500 pl-4">
                      <h4 className={`font-semibold mb-2 transition-colors duration-300 ${
                        isDarkMode ? 'text-white' : 'text-black'
                      }`}>Sample 4: Technical Discussion</h4>
                      <audio controls className="w-full mb-2">
                        <source src="/api/placeholder/audio" type="audio/mpeg" />
                        Your browser does not support the audio element.
                      </audio>
                      <p className={`text-sm transition-colors duration-300 ${
                        isDarkMode ? 'text-slate-300' : 'text-gray-700'
                      }`}>
                        <strong>Transcription:</strong> "Dasturlash tillarini o'rganish uchun amaliy mashqlar qilish kerak. Python tili juda sodda va tushunarli."
                      </p>
                    </div>

                    <div className="border-l-4 border-yellow-500 pl-4">
                      <h4 className={`font-semibold mb-2 transition-colors duration-300 ${
                        isDarkMode ? 'text-white' : 'text-black'
                      }`}>Sample 5: Casual Conversation</h4>
                      <audio controls className="w-full mb-2">
                        <source src="/api/placeholder/audio" type="audio/mpeg" />
                        Your browser does not support the audio element.
                      </audio>
                      <p className={`text-sm transition-colors duration-300 ${
                        isDarkMode ? 'text-slate-300' : 'text-gray-700'
                      }`}>
                        <strong>Transcription:</strong> "Ertaga do'stlarim bilan parkka boramiz. Havo juda yaxshi, sayr qilish uchun mukammal kun."
                      </p>
                    </div>

                    <div className="border-l-4 border-indigo-500 pl-4">
                      <h4 className={`font-semibold mb-2 transition-colors duration-300 ${
                        isDarkMode ? 'text-white' : 'text-black'
                      }`}>Sample 6: Business Presentation</h4>
                      <audio controls className="w-full mb-2">
                        <source src="/api/placeholder/audio" type="audio/mpeg" />
                        Your browser does not support the audio element.
                      </audio>
                      <p className={`text-sm transition-colors duration-300 ${
                        isDarkMode ? 'text-slate-300' : 'text-gray-700'
                      }`}>
                        <strong>Transcription:</strong> "Bizning kompaniya yangi mahsulotni bozorga chiqarmoqchi. Bu mahsulot mijozlarimiz uchun juda foydali bo'ladi."
                      </p>
                    </div>

                    <div className="border-l-4 border-pink-500 pl-4">
                      <h4 className={`font-semibold mb-2 transition-colors duration-300 ${
                        isDarkMode ? 'text-white' : 'text-black'
                      }`}>Sample 7: Interview Recording</h4>
                      <audio controls className="w-full mb-2">
                        <source src="/api/placeholder/audio" type="audio/mpeg" />
                        Your browser does not support the audio element.
                      </audio>
                      <p className={`text-sm transition-colors duration-300 ${
                        isDarkMode ? 'text-slate-300' : 'text-gray-700'
                      }`}>
                        <strong>Transcription:</strong> "Mening tajribam asosan web development sohasida. React va Node.js bilan ishlashni yaxshi bilaman."
                      </p>
                    </div>

                    <div className="border-l-4 border-teal-500 pl-4">
                      <h4 className={`font-semibold mb-2 transition-colors duration-300 ${
                        isDarkMode ? 'text-white' : 'text-black'
                      }`}>Sample 8: Cultural Content</h4>
                      <audio controls className="w-full mb-2">
                        <source src="/api/placeholder/audio" type="audio/mpeg" />
                        Your browser does not support the audio element.
                      </audio>
                      <p className={`text-sm transition-colors duration-300 ${
                        isDarkMode ? 'text-slate-300' : 'text-gray-700'
                      }`}>
                        <strong>Transcription:</strong> "O'zbek milliy oshpaziligida plov eng mashhur taom hisoblanadi. Har bir viloyatda o'ziga xos pishirish usuli bor."
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectPage;
