
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
    <div className="min-h-screen flex items-center justify-center px-6 relative overflow-hidden">
      {/* Background with overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=2000&auto=format&fit=crop')`,
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900/90 via-emerald-900/85 to-cyan-900/90"></div>
      </div>

      {/* Animated particles */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-4 h-4 bg-emerald-400 rounded-full animate-ping"></div>
        <div className="absolute top-40 right-20 w-6 h-6 bg-cyan-400 rounded-full animate-pulse delay-1000"></div>
        <div className="absolute bottom-20 left-1/4 w-3 h-3 bg-teal-400 rounded-full animate-bounce delay-2000"></div>
        <div className="absolute top-1/3 left-3/4 w-5 h-5 bg-emerald-400 rounded-full animate-ping delay-500"></div>
        <div className="absolute bottom-1/3 right-1/4 w-4 h-4 bg-cyan-400 rounded-full animate-pulse delay-1500"></div>
      </div>

      {/* Floating geometric shapes */}
      <div className="absolute top-20 left-10 w-20 h-20 bg-emerald-500/20 rounded-full blur-xl animate-pulse"></div>
      <div className="absolute top-40 right-20 w-32 h-32 bg-cyan-500/20 rounded-full blur-xl animate-pulse delay-1000"></div>
      <div className="absolute bottom-20 left-1/4 w-16 h-16 bg-teal-500/20 rounded-full blur-xl animate-pulse delay-2000"></div>
      
      {/* Content */}
      <div className="container mx-auto max-w-6xl relative z-10">
        <div className="text-center space-y-8">
          {/* Animated greeting */}
          <div className="animate-fade-in">
            <h1 className="text-6xl md:text-8xl font-bold text-white mb-4 drop-shadow-2xl">
              Hello, I'm
              <span className="bg-gradient-to-r from-emerald-400 via-cyan-400 to-teal-400 bg-clip-text text-transparent animate-pulse">
                {" Alex"}
              </span>
            </h1>
          </div>
          
          {/* Typewriter effect */}
          <div className="h-16 flex items-center justify-center">
            <h2 className="text-2xl md:text-4xl text-slate-200 font-light drop-shadow-lg">
              {displayText}
              <span className="animate-pulse text-emerald-400">|</span>
            </h2>
          </div>
          
          {/* Description with enhanced styling */}
          <div className="relative">
            <p className="text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed backdrop-blur-sm bg-white/5 p-6 rounded-2xl border border-white/10 shadow-2xl">
              I transform complex data into intelligent solutions. Specializing in machine learning, 
              deep learning, and computer vision to solve real-world problems. Experience my models 
              in action through interactive demonstrations.
            </p>
          </div>
          
          {/* CTA Buttons with enhanced effects */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-8">
            <Button 
              size="lg" 
              className="bg-gradient-to-r from-emerald-600 via-cyan-600 to-teal-600 hover:from-emerald-700 hover:via-cyan-700 hover:to-teal-700 text-white px-8 py-3 rounded-full transition-all duration-300 transform hover:scale-105 shadow-2xl hover:shadow-emerald-500/25 border border-white/20"
            >
              View My Work
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            
            <Button 
              variant="outline" 
              size="lg"
              className="border-slate-300 bg-white/10 backdrop-blur-sm text-slate-200 hover:bg-white/20 px-8 py-3 rounded-full transition-all duration-300 shadow-xl hover:shadow-white/10"
            >
              <Download className="mr-2 h-5 w-5" />
              Download Resume
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
