
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
    <div className="min-h-screen flex items-center justify-center px-6">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center space-y-8">
          {/* Animated greeting */}
          <div className="animate-fade-in">
            <h1 className="text-6xl md:text-8xl font-bold text-white mb-4">
              Hello, I'm
              <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                {" Alex"}
              </span>
            </h1>
          </div>
          
          {/* Typewriter effect */}
          <div className="h-16 flex items-center justify-center">
            <h2 className="text-2xl md:text-4xl text-slate-300 font-light">
              {displayText}
              <span className="animate-pulse">|</span>
            </h2>
          </div>
          
          {/* Description */}
          <p className="text-xl text-slate-400 max-w-3xl mx-auto leading-relaxed">
            I transform complex data into intelligent solutions. Specializing in machine learning, 
            deep learning, and computer vision to solve real-world problems. Experience my models 
            in action through interactive demonstrations.
          </p>
          
          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-8">
            <Button 
              size="lg" 
              className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-3 rounded-full transition-all duration-300 transform hover:scale-105"
            >
              View My Work
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            
            <Button 
              variant="outline" 
              size="lg"
              className="border-slate-400 text-slate-300 hover:bg-slate-700 px-8 py-3 rounded-full transition-all duration-300"
            >
              <Download className="mr-2 h-5 w-5" />
              Download Resume
            </Button>
          </div>
          
          {/* Floating elements */}
          <div className="absolute top-20 left-10 w-20 h-20 bg-blue-500/20 rounded-full blur-xl animate-pulse"></div>
          <div className="absolute top-40 right-20 w-32 h-32 bg-purple-500/20 rounded-full blur-xl animate-pulse delay-1000"></div>
          <div className="absolute bottom-20 left-1/4 w-16 h-16 bg-pink-500/20 rounded-full blur-xl animate-pulse delay-2000"></div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
