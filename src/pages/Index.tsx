import { useState } from "react";
import { useTheme } from "@/context/ThemeContext";
import { Linkedin, Sun, Moon } from "lucide-react";
import { Button } from "@/components/ui/button";
import Hero from "@/components/Hero";
import ProjectCard from "@/components/ProjectCard";
import SkillsSection from "@/components/SkillsSection";
import ContactSection from "@/components/ContactSection";
import StartupSection from "@/components/StartupSection";
import SectionHeading from "@/components/SectionHeading";
import CornerFrame from "@/components/CornerFrame";
import { projects as projectsData } from "@/data/projects";
import { useTranslation } from "react-i18next";

const Index = () => {
  const { isDarkMode, toggleTheme } = useTheme();
  const { t, i18n } = useTranslation();
  
  const projects = projectsData;

  const [selectedCategory, setSelectedCategory] = useState("All");
  const categories: Array<{ key: string; value: string; label: string }> = [
    { key: "all", value: "All", label: t("categories.all") },
    { key: "computerVision", value: "Computer Vision", label: t("categories.computerVision") },
    { key: "ocrNlp", value: "OCR/NLP", label: t("categories.ocrNlp") },
    { key: "videoAnalysis", value: "Video Analysis", label: t("categories.videoAnalysis") },
    { key: "speechNlp", value: "Speech/NLP", label: t("categories.speechNlp") },
    { key: "aiEducation", value: "AI & Education", label: t("categories.aiEducation") },
  ];

  const filteredProjects = selectedCategory === "All" 
    ? projects 
    : projects.filter(project => project.category === selectedCategory);

  // Using toggleTheme from ThemeContext

  return (
    <div className="min-h-screen transition-colors duration-300">
      {/* Navigation */}
      <nav className={`fixed top-0 w-full z-50 backdrop-blur-md border-b transition-colors duration-300 ${
        isDarkMode
          ? 'bg-black/80 border-white/10'
          : 'bg-white/80 border-black/10'
      }`}>
        <div className="container mx-auto px-4 sm:px-6 py-4">
          <div className="flex items-center justify-between">
            <div className={`font-display text-xl sm:text-2xl font-bold transition-colors duration-300 ${
              isDarkMode ? 'text-white' : 'text-black'
            }`}>
              <span className="text-brand-1">&lt;</span>DS<span className="text-brand-1">/&gt;</span>
            </div>
            <div className="hidden md:flex space-x-6 lg:space-x-8 font-mono text-sm">
              <a href="#home" className={`transition-colors ${
                isDarkMode
                  ? 'text-slate-300 hover:text-brand-1'
                  : 'text-gray-600 hover:text-brand-1'
              }`}>{t("nav.home")}</a>
              <a href="#about" className={`transition-colors ${
                isDarkMode
                  ? 'text-slate-300 hover:text-brand-1'
                  : 'text-gray-600 hover:text-brand-1'
              }`}>{t("nav.about")}</a>
              <a href="#projects" className={`transition-colors ${
                isDarkMode
                  ? 'text-slate-300 hover:text-brand-1'
                  : 'text-gray-600 hover:text-brand-1'
              }`}>{t("nav.projects")}</a>
              <a href="#startup" className={`transition-colors ${
                isDarkMode
                  ? 'text-slate-300 hover:text-brand-1'
                  : 'text-gray-600 hover:text-brand-1'
              }`}>{t("nav.startup")}</a>
              <a href="#skills" className={`transition-colors ${
                isDarkMode
                  ? 'text-slate-300 hover:text-brand-1'
                  : 'text-gray-600 hover:text-brand-1'
              }`}>{t("nav.skills")}</a>
              <a href="#contact" className={`transition-colors ${
                isDarkMode
                  ? 'text-slate-300 hover:text-brand-1'
                  : 'text-gray-600 hover:text-brand-1'
              }`}>{t("nav.contact")}</a>
            </div>
            <div className="flex space-x-2 sm:space-x-4">
              <label className="sr-only" htmlFor="lang">
                {t("language.label")}
              </label>
              <select
                id="lang"
                value={i18n.language}
                onChange={(e) => i18n.changeLanguage(e.target.value)}
                className={`hidden sm:block h-10 rounded-md px-3 text-sm font-mono backdrop-blur-md border transition-colors ${
                  isDarkMode
                    ? "bg-white/5 border-white/10 text-slate-200"
                    : "bg-black/5 border-black/10 text-gray-800"
                }`}
              >
                <option value="en">EN</option>
                <option value="ru">RU</option>
                <option value="uz">UZ</option>
              </select>
              <Button
                variant="ghost"
                size="icon"
                onClick={toggleTheme}
                className={`h-8 w-8 sm:h-10 sm:w-10 transition-colors ${
                  isDarkMode
                    ? 'text-slate-300 hover:text-brand-1'
                    : 'text-gray-600 hover:text-brand-1'
                }`}
              >
                {isDarkMode ? <Sun className="h-4 w-4 sm:h-5 sm:w-5" /> : <Moon className="h-4 w-4 sm:h-5 sm:w-5" />}
              </Button>
              <Button
                variant="ghost"
                size="icon"
                className={`h-8 w-8 sm:h-10 sm:w-10 transition-colors ${
                  isDarkMode
                    ? 'text-slate-300 hover:text-brand-1'
                    : 'text-gray-600 hover:text-brand-1'
                }`}
                asChild
              >
                <a href="https://www.linkedin.com/in/abduqayum-rasulmukhamedov-computer-vision-engineer/" target="_blank" rel="noopener noreferrer">
                  <Linkedin className="h-4 w-4 sm:h-5 sm:w-5" />
                </a>
              </Button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="pt-16 sm:pt-20">
        <Hero isDarkMode={isDarkMode} />
      </section>

      {/* About Section */}
      <section id="about" className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6 relative">
        <div className="absolute inset-0 bg-grid opacity-20 pointer-events-none" />

        <div className="container mx-auto max-w-4xl relative z-10">
          <SectionHeading index="01" kicker="ABOUT" title={t("about.title")} isDarkMode={isDarkMode} />

          <div className="grid sm:grid-cols-3 gap-3 sm:gap-4 mb-8 sm:mb-10">
            <div className={`relative rounded-lg border p-4 sm:p-5 text-center ${isDarkMode ? "border-white/10 bg-white/5" : "border-black/10 bg-black/[0.02]"}`}>
              <CornerFrame accent="cyan" />
              <div className="font-mono text-2xl sm:text-3xl font-bold text-brand-1">3+</div>
              <div className={`text-xs sm:text-sm mt-1 ${isDarkMode ? "text-slate-400" : "text-gray-600"}`}>{t("about.badges.years")}</div>
            </div>
            <div className={`relative rounded-lg border p-4 sm:p-5 text-center ${isDarkMode ? "border-white/10 bg-white/5" : "border-black/10 bg-black/[0.02]"}`}>
              <CornerFrame accent="lime" />
              <div className="font-mono text-2xl sm:text-3xl font-bold text-brand-2">{projectsData.length}</div>
              <div className={`text-xs sm:text-sm mt-1 ${isDarkMode ? "text-slate-400" : "text-gray-600"}`}>{t("about.badges.projects")}</div>
            </div>
            <div className={`relative rounded-lg border p-4 sm:p-5 text-center ${isDarkMode ? "border-white/10 bg-white/5" : "border-black/10 bg-black/[0.02]"}`}>
              <CornerFrame accent="cyan" />
              <div className="font-mono text-sm sm:text-base font-bold text-brand-1">{t("about.badges.specialty")}</div>
            </div>
          </div>

          <div className="space-y-4 sm:space-y-6">
            <p className={`text-base sm:text-lg leading-relaxed transition-colors duration-300 ${
              isDarkMode ? 'text-slate-300' : 'text-gray-700'
            }`}>
              {t("about.p1")}
            </p>
            <p className={`text-base sm:text-lg leading-relaxed transition-colors duration-300 ${
              isDarkMode ? 'text-slate-300' : 'text-gray-700'
            }`}>
              {t("about.p2")}
            </p>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section
        id="projects"
        className={`py-12 sm:py-16 lg:py-20 px-4 sm:px-6 relative transition-colors duration-300 ${
          isDarkMode ? "bg-slate-950/40" : "bg-slate-50"
        }`}
      >
        {/* Animated background */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-aurora opacity-60 animate-aurora" />
          <div className="absolute inset-0 bg-grid opacity-30" />
        </div>

        <div className="container mx-auto max-w-7xl relative z-10">
          <SectionHeading index="02" kicker="PROJECTS" title={t("projects.title")} isDarkMode={isDarkMode} />

          {/* Category Filter */}
          <div className="flex justify-center mb-8 sm:mb-12 px-2">
            <div className={`flex flex-wrap justify-center gap-2 backdrop-blur-sm p-2 rounded-lg shadow-xl max-w-full font-mono text-xs sm:text-sm transition-colors duration-300 ${
              isDarkMode
                ? 'bg-white/5 border border-white/10'
                : 'bg-white/80 border border-black/10'
            }`}>
              {categories.map((category) => (
                <Button
                  key={category.key}
                  variant="ghost"
                  onClick={() => setSelectedCategory(category.value)}
                  className={`text-xs sm:text-sm px-3 py-2 rounded-md transition-colors ${selectedCategory === category.value
                    ? "bg-brand-1 text-primary-foreground shadow-glow hover:bg-brand-1/90"
                    : (isDarkMode ? "text-slate-300 hover:text-white hover:bg-white/10" : "text-gray-600 hover:text-black hover:bg-black/5")}`}
                >
                  {category.label}
                </Button>
              ))}
            </div>
          </div>

          {/* Projects Grid */}
          <div className="grid sm:grid-cols-2 gap-6 sm:gap-8">
            {filteredProjects.map((project) => (
              <ProjectCard key={project.id} project={project} isDarkMode={isDarkMode} />
            ))}
          </div>
        </div>
      </section>

      {/* Startup Section */}
      <section
        id="startup"
        className={`py-12 sm:py-16 lg:py-20 px-4 sm:px-6 transition-colors duration-300 ${
          isDarkMode ? "bg-slate-900/40" : "bg-white"
        }`}
      >
        <StartupSection isDarkMode={isDarkMode} />
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6">
        <SkillsSection isDarkMode={isDarkMode} />
      </section>

      {/* Contact Section */}
      <section id="contact" className={`py-12 sm:py-16 lg:py-20 px-4 sm:px-6 transition-colors duration-300 ${
        isDarkMode ? 'bg-slate-900/50' : 'bg-gray-50'
      }`}>
        <ContactSection isDarkMode={isDarkMode} />
      </section>

      {/* Footer */}
      <footer className={`py-6 sm:py-8 px-4 sm:px-6 border-t transition-colors duration-300 ${
        isDarkMode
          ? 'border-white/10'
          : 'border-black/10'
      }`}>
        <div className="container mx-auto text-center font-mono text-xs sm:text-sm">
          <p className={`transition-colors duration-300 ${
            isDarkMode ? 'text-slate-400' : 'text-gray-600'
          }`}>
            {t("footer.text")}
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
