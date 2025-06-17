
import { useState, useEffect } from "react";
import { ArrowRight, Download, Play } from "lucide-react";
import { Button } from "@/components/ui/button";

const Hero = () => {
  const [displayText, setDisplayText] = useState("");
  const fullText = "Data Scientist & Computer Vision Engineer";
  
  useEffect(() => {
    let index = 0;
    const timer = setInterval(() => {
      if (index < fullText.length) {
        setDisplayText(fullText.slice(0, index + 1));
        index++;
      } else {
        clearInterval(timer);
      }
    }, 100);
    
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="min-h-screen flex items-center justify-center px-4 sm:px-6 relative overflow-hidden">
      {/* Background with overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=2000&auto=format&fit=crop')`,
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-indigo-900/90 via-purple-900/85 to-pink-900/90"></div>
      </div>

      {/* Animated particles - responsive sizes */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-4 sm:left-10 w-3 h-3 sm:w-4 sm:h-4 bg-purple-400 rounded-full animate-ping"></div>
        <div className="absolute top-40 right-8 sm:right-20 w-4 h-4 sm:w-6 sm:h-6 bg-pink-400 rounded-full animate-pulse delay-1000"></div>
        <div className="absolute bottom-20 left-1/4 w-2 h-2 sm:w-3 sm:h-3 bg-indigo-400 rounded-full animate-bounce delay-2000"></div>
        <div className="absolute top-1/3 right-1/4 w-3 h-3 sm:w-5 sm:h-5 bg-purple-400 rounded-full animate-ping delay-500"></div>
        <div className="absolute bottom-1/3 right-1/4 w-3 h-3 sm:w-4 sm:h-4 bg-pink-400 rounded-full animate-pulse delay-1500"></div>
      </div>

      {/* Floating geometric shapes - responsive */}
      <div className="absolute top-20 left-4 sm:left-10 w-16 h-16 sm:w-20 sm:h-20 bg-purple-500/20 rounded-full blur-xl animate-pulse"></div>
      <div className="absolute top-40 right-8 sm:right-20 w-24 h-24 sm:w-32 sm:h-32 bg-pink-500/20 rounded-full blur-xl animate-pulse delay-1000"></div>
      <div className="absolute bottom-20 left-1/4 w-12 h-12 sm:w-16 sm:h-16 bg-indigo-500/20 rounded-full blur-xl animate-pulse delay-2000"></div>
      
      {/* Content */}
      <div className="container mx-auto max-w-6xl relative z-10">
        <div className="text-center space-y-6 sm:space-y-8">
          {/* Animated greeting - responsive text */}
          <div className="animate-fade-in">
            <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-bold text-white mb-2 sm:mb-4 drop-shadow-2xl px-2">
              Hello, I'm
              <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-indigo-400 bg-clip-text text-transparent animate-pulse">
                {" Alex"}
              </span>
            </h1>
          </div>
          
          {/* Typewriter effect - responsive */}
          <div className="h-12 sm:h-16 flex items-center justify-center px-4">
            <h2 className="text-lg sm:text-2xl md:text-3xl lg:text-4xl text-slate-200 font-light drop-shadow-lg text-center">
              {displayText}
              <span className="animate-pulse text-purple-400">|</span>
            </h2>
          </div>
          
          {/* Description with enhanced styling - responsive */}
          <div className="relative px-4">
            <p className="text-base sm:text-lg lg:text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed backdrop-blur-sm bg-white/5 p-4 sm:p-6 rounded-2xl border border-white/10 shadow-2xl">
              I transform complex data into intelligent solutions. Specializing in machine learning, 
              deep learning, and computer vision to solve real-world problems. Experience my models 
              in action through interactive demonstrations.
            </p>
          </div>
          
          {/* CTA Buttons with enhanced effects - responsive */}
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center pt-6 sm:pt-8 px-4">
            <Button 
              size="lg" 
              className="w-full sm:w-auto bg-gradient-to-r from-purple-600 via-pink-600 to-indigo-600 hover:from-purple-700 hover:via-pink-700 hover:to-indigo-700 text-white px-6 sm:px-8 py-3 rounded-full transition-all duration-300 transform hover:scale-105 shadow-2xl hover:shadow-purple-500/25 border border-white/20 text-sm sm:text-base"
            >
              View My Work
              <ArrowRight className="ml-2 h-4 w-4 sm:h-5 sm:w-5" />
            </Button>
            
            <Button 
              variant="outline" 
              size="lg"
              className="w-full sm:w-auto border-slate-300 bg-white/10 backdrop-blur-sm text-slate-200 hover:bg-white/20 px-6 sm:px-8 py-3 rounded-full transition-all duration-300 shadow-xl hover:shadow-white/10 text-sm sm:text-base"
            >
              <Download className="mr-2 h-4 w-4 sm:h-5 sm:w-5" />
              Download Resume
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
