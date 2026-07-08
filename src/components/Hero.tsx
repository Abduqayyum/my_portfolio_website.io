import { useState, useEffect } from "react";
import { ArrowRight, Download } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useTranslation } from "react-i18next";
import CornerFrame from "@/components/CornerFrame";

interface HeroProps {
  isDarkMode: boolean;
}

const Hero = ({ isDarkMode }: HeroProps) => {
  const { t } = useTranslation();
  const [displayText, setDisplayText] = useState("");
  // Set to true to show the download resume button, false to hide it
  const showResumeButton = false;
  const fullText = t("hero.role");

  useEffect(() => {
    let index = 0;
    setDisplayText("");
    const timer = setInterval(() => {
      if (index < fullText.length) {
        setDisplayText(fullText.slice(0, index + 1));
        index++;
      } else {
        clearInterval(timer);
      }
    }, 45);

    return () => clearInterval(timer);
  }, [fullText]);

  return (
    <div className="min-h-screen flex items-center px-4 sm:px-6 relative overflow-hidden py-20">
      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-aurora opacity-90" />
        <div className="absolute inset-0 bg-grid opacity-60" />
        <div className="absolute inset-0 bg-noise opacity-20" />
        <div
          className={`absolute inset-0 transition-colors duration-300 ${
            isDarkMode ? "bg-black/60" : "bg-white/50"
          }`}
        />
        <div className="hud-scanline opacity-40" />
      </div>

      <div className="container mx-auto max-w-6xl relative z-10">
        <div className="grid lg:grid-cols-[1.2fr_0.8fr] gap-12 lg:gap-16 items-center">
          {/* Text column */}
          <div className="space-y-6 sm:space-y-8 text-center lg:text-left">
            <span
              className={`inline-flex items-center gap-2 font-mono text-xs sm:text-sm tracking-widest px-3 py-1 rounded-md border ${
                isDarkMode ? "border-brand-2/40 text-brand-2 bg-brand-2/5" : "border-brand-2/40 text-brand-2 bg-brand-2/5"
              }`}
            >
              <span className="h-1.5 w-1.5 rounded-full bg-brand-2 animate-pulse" />
              SYSTEM ONLINE
            </span>

            <h1
              className={`text-4xl sm:text-6xl md:text-7xl font-bold leading-[1.05] transition-colors duration-300 ${
                isDarkMode ? "text-white" : "text-black"
              }`}
            >
              {t("hero.hello")}
              <span className="text-brand-1 text-glow">{" Abduqayum"}</span>
            </h1>

            {/* Terminal-style role readout */}
            <div
              className={`h-10 sm:h-12 flex items-center justify-center lg:justify-start font-mono text-base sm:text-xl md:text-2xl transition-colors duration-300 ${
                isDarkMode ? "text-slate-300" : "text-gray-700"
              }`}
            >
              <span className="text-brand-2 mr-2">&gt;</span>
              {displayText}
              <span className="ml-1 w-2.5 h-5 sm:h-6 bg-brand-1 animate-blink" />
            </div>

            <p
              className={`text-base sm:text-lg max-w-2xl mx-auto lg:mx-0 leading-relaxed transition-colors duration-300 ${
                isDarkMode ? "text-slate-300" : "text-gray-700"
              }`}
            >
              {t("hero.blurb")}
            </p>

            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center lg:justify-start items-center pt-2">
              <Button
                asChild
                className="w-full sm:w-auto bg-brand-1 hover:bg-brand-1/90 text-primary-foreground px-6 sm:px-8 py-3 rounded-md transition-all duration-300 shadow-glow font-medium"
              >
                <a href="/#projects" className="flex items-center">
                  {t("hero.ctaWork")}
                  <ArrowRight className="ml-2 h-4 w-4 sm:h-5 sm:w-5" />
                </a>
              </Button>

              {showResumeButton && (
                <Button
                  variant="outline"
                  size="lg"
                  className={`w-full sm:w-auto px-6 sm:px-8 py-3 rounded-md transition-all duration-300 ${
                    isDarkMode
                      ? "border-slate-600 bg-white/5 text-slate-200 hover:bg-white/10"
                      : "border-gray-300 bg-black/5 text-gray-800 hover:bg-black/10"
                  }`}
                >
                  <a href="/docs/Abduqayum_Rasulmuhamedov_CV.pdf" download="Abduqayum_Rasulmuhamedov_CV.pdf" className="flex items-center">
                    <Download className="mr-2 h-4 w-4 sm:h-5 sm:w-5" />
                    {t("hero.ctaResume")}
                  </a>
                </Button>
              )}
            </div>
          </div>

          {/* Framed portrait column */}
          <div className="relative mx-auto w-full max-w-xs sm:max-w-sm lg:max-w-none">
            <div className="relative group aspect-[4/5] overflow-hidden">
              <img
                src="/lovable-uploads/IMG_20250819_122823.jpg"
                alt="Abduqayum - Computer Vision Engineer"
                className="w-full h-full object-cover"
              />
              <div className={`absolute inset-0 ${isDarkMode ? "bg-gradient-to-t from-black/70 via-transparent to-transparent" : "bg-gradient-to-t from-black/40 via-transparent to-transparent"}`} />
              <div className="hud-scanline opacity-70" />
              <CornerFrame accent="cyan" />

              {/* Detection tag */}
              <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between gap-2 font-mono text-[11px] sm:text-xs">
                <span className="px-2 py-1 rounded bg-black/70 text-brand-2 border border-brand-2/50 backdrop-blur-sm">
                  ENGINEER
                </span>
                <span className="px-2 py-1 rounded bg-black/70 text-brand-1 border border-brand-1/50 backdrop-blur-sm">
                  CV · NLP
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
