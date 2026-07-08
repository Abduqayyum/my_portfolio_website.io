
import { useTheme } from "@/context/ThemeContext";
import { useParams, Link } from "react-router-dom";
import { ArrowLeft, Sun, Moon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { projects, type Project } from "@/data/projects";
import { useTranslation } from "react-i18next";
import CornerFrame from "@/components/CornerFrame";

const CATEGORY_KEY: Record<string, string> = {
  "Computer Vision": "computerVision",
  "OCR/NLP": "ocrNlp",
  "Video Analysis": "videoAnalysis",
  "Speech/NLP": "speechNlp",
  "AI & Education": "aiEducation",
};

const ProjectPage = () => {
  const { id } = useParams();
  const { isDarkMode, toggleTheme } = useTheme();
  const { t, i18n } = useTranslation();

  const project = projects.find(p => p.id === parseInt(id || "1"));
  const hasVideo = Boolean(project?.demoVideo && project?.videoUrl);

  const title = project ? t(`projectList.${project.id}.title`, project.title) : "";
  const description = project ? t(`projectList.${project.id}.description`, project.description) : "";
  const longDescription = project ? t(`projectList.${project.id}.longDescription`, project.longDescription ?? "") : "";
  const categoryKey = project ? CATEGORY_KEY[project.category] : "";
  const categoryLabel = categoryKey ? t(`categories.${categoryKey}`) : (project?.category ?? "");
  const garbageDemoImages =
    project?.id === 18
      ? [
          "/lovable-uploads/garbage_detection_imgs/garbage-1.jpg",
          "/lovable-uploads/garbage_detection_imgs/garbage-2.jpg",
          "/lovable-uploads/garbage_detection_imgs/garbage-3.jpg",
          "/lovable-uploads/garbage_detection_imgs/garbage-4.jpg",
        ]
      : [];

  const sttBenchmarks =
    project?.id === 11
      ? [
          { dataset: "FeruzaSpeech", samples: 899, wer: "7.88%" },
          { dataset: "Common Voice 17.0 (uz)", samples: 12348, wer: "13.37%" },
          { dataset: "FLEURS (uz)", samples: 4165, wer: "14.40%" },
        ]
      : [];

  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-background transition-colors duration-300">
        <div className="text-center">
          <h1 className={`text-4xl font-bold mb-4 transition-colors duration-300 ${
            isDarkMode ? 'text-white' : 'text-black'
          }`}>{t("projectPage.notFoundTitle")}</h1>
          <Link to="/">
            <Button className="bg-brand-1 hover:bg-brand-1/90 text-primary-foreground">
              <ArrowLeft className="mr-2 h-4 w-4" />
              {t("projectPage.backHome")}
            </Button>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background relative transition-colors duration-300">
      <div className="fixed inset-0 bg-grid opacity-20 pointer-events-none" />
      {/* Navigation */}
      <nav className={`backdrop-blur-md border-b transition-colors duration-300 ${
        isDarkMode 
          ? 'bg-black/80 border-white/10' 
          : 'bg-white/80 border-black/10'
      }`}>
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <Link to="/" className={`flex items-center transition-colors ${
              isDarkMode 
                ? 'text-white hover:text-brand-1' 
                : 'text-black hover:text-brand-1'
            }`}>
              <ArrowLeft className="mr-2 h-5 w-5" />
              {t("projectPage.backPortfolio")}
            </Link>
            <div className="flex items-center space-x-4">
              <div className={`font-display text-2xl font-bold transition-colors duration-300 ${
                isDarkMode ? 'text-white' : 'text-black'
              }`}>
                <span className="text-brand-1">&lt;</span>DS<span className="text-brand-1">/&gt;</span>
              </div>
              <label className="sr-only" htmlFor="lang-project">
                {t("language.label")}
              </label>
              <select
                id="lang-project"
                value={i18n.language}
                onChange={(e) => i18n.changeLanguage(e.target.value)}
                className={`hidden sm:block h-10 rounded-md px-3 text-sm backdrop-blur-md border transition-colors ${
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
                className={`h-10 w-10 transition-colors ${
                  isDarkMode 
                    ? 'text-slate-300 hover:text-brand-1' 
                    : 'text-gray-600 hover:text-brand-1'
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
            <Badge variant="secondary" className="bg-brand-1/10 text-brand-1 border border-brand-1/30 font-mono">
              {categoryLabel}
            </Badge>
            <h1 className={`text-4xl font-bold transition-colors duration-300 ${
              isDarkMode ? 'text-white' : 'text-black'
            }`}>{title}</h1>
          </div>
          <p className={`text-xl mb-8 transition-colors duration-300 ${
            isDarkMode ? 'text-slate-300' : 'text-gray-700'
          }`}>{description}</p>
          
          {/* Project Stats */}
          {(project.accuracy || project.dataset || project.modelType) && (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              <Card className={`transition-colors duration-300 ${
                isDarkMode
                  ? 'bg-white/5 border-white/10'
                  : 'bg-white border-black/10'
              }`}>
                <CardHeader>
                  <CardTitle className={`text-lg transition-colors duration-300 ${
                    isDarkMode ? 'text-white' : 'text-black'
                  }`}>{t("projectPage.stats.accuracy")}</CardTitle>
                </CardHeader>
                <CardContent>
                  {sttBenchmarks.length > 0 ? (
                    <div className="space-y-1.5">
                      {sttBenchmarks.map((row) => (
                        <div key={row.dataset} className="flex items-baseline justify-between gap-3">
                          <span className={`text-sm truncate transition-colors duration-300 ${
                            isDarkMode ? 'text-slate-400' : 'text-gray-600'
                          }`}>{row.dataset}</span>
                          <span className="text-lg font-bold text-brand-2 whitespace-nowrap">{row.wer}</span>
                        </div>
                      ))}
                    </div>
                  ) : (
                    <p className="text-2xl font-bold text-brand-2">{project.accuracy}</p>
                  )}
                </CardContent>
              </Card>
              <Card className={`transition-colors duration-300 ${
                isDarkMode
                  ? 'bg-white/5 border-white/10'
                  : 'bg-white border-black/10'
              }`}>
                <CardHeader>
                  <CardTitle className={`text-lg transition-colors duration-300 ${
                    isDarkMode ? 'text-white' : 'text-black'
                  }`}>{t("projectPage.stats.dataset")}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className={`transition-colors duration-300 ${
                    isDarkMode ? 'text-slate-300' : 'text-gray-700'
                  }`}>{project.dataset}</p>
                </CardContent>
              </Card>
              <Card className={`transition-colors duration-300 ${
                isDarkMode
                  ? 'bg-white/5 border-white/10'
                  : 'bg-white border-black/10'
              }`}>
                <CardHeader>
                  <CardTitle className={`text-lg transition-colors duration-300 ${
                    isDarkMode ? 'text-white' : 'text-black'
                  }`}>{t("projectPage.stats.modelType")}</CardTitle>
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
          </div>
        </div>

        <div className={`grid gap-12 ${hasVideo ? 'lg:grid-cols-2' : 'grid-cols-1'}`}>
          {/* Project Details */}
          <div>
            <Card className={`mb-8 transition-colors duration-300 ${
              isDarkMode 
                ? 'bg-white/5 border-white/10' 
                : 'bg-white border-black/10'
            }`}>
              <CardHeader>
                <CardTitle className={`transition-colors duration-300 ${
                  isDarkMode ? 'text-white' : 'text-black'
                }`}>{t("projectPage.overview")}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className={`leading-relaxed mb-6 transition-colors duration-300 ${
                  isDarkMode ? 'text-slate-300' : 'text-gray-700'
                }`}>
                  {longDescription}
                </p>
                <div>
                  <h4 className={`font-semibold mb-3 transition-colors duration-300 ${
                    isDarkMode ? 'text-white' : 'text-black'
                  }`}>{t("projectPage.technologiesUsed")}</h4>
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

            {/* Demo Images (Garbage project) */}
            {garbageDemoImages.length > 0 && (
              <Card className={`transition-colors duration-300 ${
                isDarkMode
                  ? 'bg-white/5 border-white/10'
                  : 'bg-white border-black/10'
              }`}>
                <CardHeader>
                  <CardTitle className={`transition-colors duration-300 ${
                    isDarkMode ? 'text-white' : 'text-black'
                  }`}>{t("projectPage.demoImages")}</CardTitle>
                  <CardDescription className={`transition-colors duration-300 ${
                    isDarkMode ? 'text-slate-400' : 'text-gray-600'
                  }`}>
                    {t("projectPage.demoImagesSubtitle")}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {garbageDemoImages.map((src) => (
                      <a
                        key={src}
                        href={src}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="block group"
                      >
                        <div
                          className={`w-full overflow-hidden rounded-lg border transition-transform duration-200 group-hover:scale-[1.01] ${
                            isDarkMode ? "border-white/10" : "border-black/10"
                          }`}
                        >
                          <div className="aspect-video">
                            <img
                              src={src}
                              alt="Garbage detection demo result"
                              className="w-full h-full object-cover"
                              loading="lazy"
                            />
                          </div>
                        </div>
                      </a>
                    ))}
                  </div>
                </CardContent>
              </Card>
            )}
          </div>

          {/* Demo Video */}
          {hasVideo && (
            <div>
              <Card className={`transition-colors duration-300 ${
                isDarkMode
                  ? 'bg-white/5 border-white/10'
                  : 'bg-white border-black/10'
              }`}>
                <CardHeader>
                  <CardTitle className={`transition-colors duration-300 ${
                    isDarkMode ? 'text-white' : 'text-black'
                }`}>{t("projectPage.demoVideo")}</CardTitle>
                  <CardDescription className={`transition-colors duration-300 ${
                    isDarkMode ? 'text-slate-400' : 'text-gray-600'
                  }`}>
                  {t("projectPage.demoVideoSubtitle")}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="relative aspect-video w-full overflow-hidden">
                    <iframe
                      src={project.videoUrl}
                      title={`${title} demo video`}
                      className="w-full h-full"
                      loading="lazy"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                    />
                    <CornerFrame accent="cyan" />
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
                  ? 'bg-white/5 border-white/10'
                  : 'bg-white border-black/10'
              }`}>
                <CardHeader>
                  <CardTitle className={`transition-colors duration-300 ${
                    isDarkMode ? 'text-white' : 'text-black'
                  }`}>{t("projectPage.resultsTitle")}</CardTitle>
                  <CardDescription className={`transition-colors duration-300 ${
                    isDarkMode ? 'text-slate-400' : 'text-gray-600'
                  }`}>
                    {t("projectPage.resultsCar")}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="relative">
                    <img
                      src="/lovable-uploads/8ecf2722-6365-4366-a317-e546d720458e.png"
                      alt="Car model recognition predictions showing various vehicles with model classifications and probability scores"
                      className="w-full border"
                    />
                    <CornerFrame accent="lime" />
                  </div>
                </CardContent>
              </Card>
            </div>
          )}

          {/* Gender Detection Results */}
          {project.id === 3 && (
            <div>
              <Card className={`transition-colors duration-300 ${
                isDarkMode
                  ? 'bg-white/5 border-white/10'
                  : 'bg-white border-black/10'
              }`}>
                <CardHeader>
                  <CardTitle className={`transition-colors duration-300 ${
                    isDarkMode ? 'text-white' : 'text-black'
                  }`}>{t("projectPage.resultsTitle")}</CardTitle>
                  <CardDescription className={`transition-colors duration-300 ${
                    isDarkMode ? 'text-slate-400' : 'text-gray-600'
                  }`}>
                    {t("projectPage.resultsGender")}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="relative">
                    <img
                      src="/lovable-uploads/9e2b643d-89f9-48a0-9b84-130e8f7c9537.png"
                      alt="Gender detection predictions showing various faces with gender classifications and probability scores"
                      className="w-full border"
                    />
                    <CornerFrame accent="lime" />
                  </div>
                </CardContent>
              </Card>
            </div>
          )}

          {/* Age Detection Results */}
          {project.id === 4 && (
            <div>
              <Card className={`transition-colors duration-300 ${
                isDarkMode
                  ? 'bg-white/5 border-white/10'
                  : 'bg-white border-black/10'
              }`}>
                <CardHeader>
                  <CardTitle className={`transition-colors duration-300 ${
                    isDarkMode ? 'text-white' : 'text-black'
                  }`}>{t("projectPage.resultsTitle")}</CardTitle>
                  <CardDescription className={`transition-colors duration-300 ${
                    isDarkMode ? 'text-slate-400' : 'text-gray-600'
                  }`}>
                    {t("projectPage.resultsAge")}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="relative">
                    <img
                      src="/lovable-uploads/0f31b8a6-57e8-44f1-b644-02c5897bc4f4.png"
                      alt="Age detection predictions showing various faces with age range classifications and probability scores"
                      className="w-full border"
                    />
                    <CornerFrame accent="lime" />
                  </div>
                </CardContent>
              </Card>
            </div>
          )}

          {/* License Plate Recognition Results */}
          {project.id === 5 && (
            <div>
              <Card className={`transition-colors duration-300 ${
                isDarkMode
                  ? 'bg-white/5 border-white/10'
                  : 'bg-white border-black/10'
              }`}>
                <CardHeader>
                  <CardTitle className={`transition-colors duration-300 ${
                    isDarkMode ? 'text-white' : 'text-black'
                  }`}>{t("projectPage.resultsTitle")}</CardTitle>
                  <CardDescription className={`transition-colors duration-300 ${
                    isDarkMode ? 'text-slate-400' : 'text-gray-600'
                  }`}>
                    {t("projectPage.resultsPlate")}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="relative">
                    <img
                      src="/lovable-uploads/predictions_test_images_seed2.png"
                      alt="Uzbek license plate TrOCR predictions showing test images with predicted plate text"
                      className="w-full border"
                    />
                    <CornerFrame accent="lime" />
                  </div>
                </CardContent>
              </Card>
            </div>
          )}

          {/* Vehicle Color Recognition Results */}
          {project.id === 2 && (
            <div>
              <Card className={`transition-colors duration-300 ${
                isDarkMode
                  ? 'bg-white/5 border-white/10'
                  : 'bg-white border-black/10'
              }`}>
                <CardHeader>
                  <CardTitle className={`transition-colors duration-300 ${
                    isDarkMode ? 'text-white' : 'text-black'
                  }`}>{t("projectPage.resultsTitle")}</CardTitle>
                  <CardDescription className={`transition-colors duration-300 ${
                    isDarkMode ? 'text-slate-400' : 'text-gray-600'
                  }`}>
                    {t("projectPage.resultsColor")}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="relative">
                    <img
                      src="/lovable-uploads/a6872517-9e97-48fa-98d2-35cb3aa3451a.png"
                      alt="Vehicle color recognition model predictions showing various cars with color classifications and probability scores"
                      className="w-full border"
                    />
                    <CornerFrame accent="lime" />
                  </div>
                </CardContent>
              </Card>
            </div>
          )}

          {/* WER Benchmarks for STT Model */}
          {sttBenchmarks.length > 0 && (
            <div>
              <Card className={`mb-8 transition-colors duration-300 ${
                isDarkMode
                  ? 'bg-white/5 border-white/10'
                  : 'bg-white border-black/10'
              }`}>
                <CardHeader>
                  <CardTitle className={`transition-colors duration-300 ${
                    isDarkMode ? 'text-white' : 'text-black'
                  }`}>{t("projectPage.benchmarkTitle")}</CardTitle>
                  <CardDescription className={`transition-colors duration-300 ${
                    isDarkMode ? 'text-slate-400' : 'text-gray-600'
                  }`}>
                    {t("projectPage.benchmarkSubtitle")}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="overflow-x-auto">
                    <table className="w-full text-sm font-mono">
                      <thead>
                        <tr className={`border-b ${isDarkMode ? 'border-white/10' : 'border-black/10'}`}>
                          <th className={`text-left py-2 pr-4 font-semibold ${isDarkMode ? 'text-white' : 'text-black'}`}>
                            {t("projectPage.benchmarkDataset")}
                          </th>
                          <th className={`text-left py-2 pr-4 font-semibold ${isDarkMode ? 'text-white' : 'text-black'}`}>
                            {t("projectPage.benchmarkSamples")}
                          </th>
                          <th className={`text-left py-2 font-semibold ${isDarkMode ? 'text-white' : 'text-black'}`}>
                            {t("projectPage.benchmarkWer")}
                          </th>
                        </tr>
                      </thead>
                      <tbody>
                        {sttBenchmarks.map((row) => (
                          <tr key={row.dataset} className={`border-b last:border-0 ${isDarkMode ? 'border-white/5' : 'border-black/5'}`}>
                            <td className={`py-2 pr-4 ${isDarkMode ? 'text-slate-300' : 'text-gray-700'}`}>{row.dataset}</td>
                            <td className={`py-2 pr-4 ${isDarkMode ? 'text-slate-300' : 'text-gray-700'}`}>{row.samples.toLocaleString()}</td>
                            <td className="py-2 font-semibold text-brand-2">{row.wer}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </CardContent>
              </Card>
            </div>
          )}

          {/* Audio Examples for STT Model */}
          {project.id === 11 && (
            <div>
              <Card className={`transition-colors duration-300 ${
                isDarkMode
                  ? 'bg-white/5 border-white/10'
                  : 'bg-white border-black/10'
              }`}>
                <CardHeader>
                  <CardTitle className={`transition-colors duration-300 ${
                    isDarkMode ? 'text-white' : 'text-black'
                  }`}>{t("projectPage.audioExamples")}</CardTitle>
                  <CardDescription className={`transition-colors duration-300 ${
                    isDarkMode ? 'text-slate-400' : 'text-gray-600'
                  }`}>
                    {t("projectPage.audioExamplesSubtitle")}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-6">
                    <div className="border-l-4 border-brand-1 pl-4">
                      <h4 className={`font-semibold mb-2 transition-colors duration-300 ${
                        isDarkMode ? 'text-white' : 'text-black'
                      }`}>{t("projectPage.sample")} 1: </h4>
                      <audio controls className="w-full mb-2">
                        <source src="/audios/Mittivine_NmaGap_chunk_0041.mp3" type="audio/mpeg" />
                        {t("projectPage.browserNoAudio")}
                      </audio>
                      <p className={`text-sm transition-colors duration-300 ${
                        isDarkMode ? 'text-slate-300' : 'text-gray-700'
                      }`}>
                        <strong>{t("projectPage.transcription")}</strong> "Ti doljen byl, xotyabi trety poluchit', deyapti. Ne, aka, sizga uch-ikki yarashmaydi. Yo'q, video, aka. Yo'q, mana bunaqa holat, to'g'risi, mana shu yetti-sakkizgacha ulgurmadim. Ulgurmadim hammaga ball berishga-da. To yest' mana qog'ozda tez-tez nimadir yoq-bu yoq bo'ldi-da. I eng qiziq narsa, to yest ballni ko'rsatyapman, boshqa qilyapman. Meni galim kelganda, mayli, mana siz, boshqalar ko'taryapti-yu, eng qizig'i, mana juda yaqin bo'lgan tanish, kak juda yaqin."
                      </p>
                    </div>

                    <div className="border-l-4 border-brand-2 pl-4">
                      <h4 className={`font-semibold mb-2 transition-colors duration-300 ${
                        isDarkMode ? 'text-white' : 'text-black'
                      }`}>{t("projectPage.sample")} 2: </h4>
                      <audio controls className="w-full mb-2">
                        <source src="/audios/Sayohat_xarajatmi_yoki_investitsiya_Iwash_va_Jamshidxon_bilan_Podcast.mp3" type="audio/mpeg" />
                        {t("projectPage.browserNoAudio")}
                      </audio>
                      <p className={`text-sm transition-colors duration-300 ${
                        isDarkMode ? 'text-slate-300' : 'text-gray-700'
                      }`}>
                        <strong>{t("projectPage.transcription")}</strong> "Nima qilamiz? Nima yengilliklar? Qayerda asfalt qildinglar? Bu podkast, biz ham gapirishga haqlaymiz. Bu meni shoum deylik. Yo'q, realniy-da. O'shanga shuncha hasad. Ayniqsa topa-to'g'ri aytdingiz, Amerikada juda ham qiyin bo'ldi. Chunki men oldindan bu narsaga tayyor edim, tushungan edim. Odamlarda ro'zg'oyachiki bor, Amerikaga nisbatan. Boraman, zo'r bo'lib ketaman. Mana shunchasi zo'r bo'lib ketyapti, shunchasi uy quryapti, boshqa qilyapti. Shu narsani biluvdim, shto odamlarda bo'ladi. O'shaning uchun ham"
                      </p>
                    </div>

                    <div className="border-l-4 border-brand-3 pl-4">
                      <h4 className={`font-semibold mb-2 transition-colors duration-300 ${
                        isDarkMode ? 'text-white' : 'text-black'
                      }`}>{t("projectPage.sample")} 3: </h4>
                      <audio controls className="w-full mb-2">
                        <source src="/audios/Milliy_MrBeast_va_uning_bo'lajak_to'yi_haqida_IsomTV_Bu_Podcast.mp3" type="audio/mpeg" />
                        {t("projectPage.browserNoAudio")}
                      </audio>
                      <p className={`text-sm transition-colors duration-300 ${
                        isDarkMode ? 'text-slate-300' : 'text-gray-700'
                      }`}>
                        <strong>{t("projectPage.transcription")}</strong> "Situatsiya. Situatsiya A-da. Bizlarda bola bor, ishlamayotgan, u uylanayapti, takje ishlamayotgan qizga. I v dal'ney shu ular birgalikda o'sib, o'sib, o'sib, bola yestestvenno ish topyapti, birgalikda o'sib, hamma narsani sotib olishyapti. Uy sotib olishadi birgalikda, mashina sotib olishadi, qanaqadir moliyaviy savodxonligini oshirishyapti. Va hokazo. Tushunyapsiz-a? Bu situatsiya A. I situatsiya B. Bolada hamma narsa."
                      </p>
                    </div>

                    <div className="border-l-4 border-brand-1 pl-4">
                      <h4 className={`font-semibold mb-2 transition-colors duration-300 ${
                        isDarkMode ? 'text-white' : 'text-black'
                      }`}>{t("projectPage.sample")} 4: </h4>
                      <audio controls className="w-full mb-2">
                        <source src="/audios/Ortida_kim_bor_Nega_tez_mashxur_bo'lib_ketdi_Bir_oyda_qancha_chunk.mp3" type="audio/mpeg" />
                        {t("projectPage.browserNoAudio")}
                      </audio>
                      <p className={`text-sm transition-colors duration-300 ${
                        isDarkMode ? 'text-slate-300' : 'text-gray-700'
                      }`}>
                        <strong>{t("projectPage.transcription")}</strong> "shunaqangi qalbimda qolgan, olib kelib berdilar o'sha emotsiyani menga, ulanga xuddi kechagi kunday eslayman, o'sha xotira o'chmaydimi? Plyus yana dadezdan navidan berganman. Da, yashirib. Uni keyin bozorchidan bildim sal vaqt o'tib. Nimani anchadan beri qilishda rejalashtiryapsiz, lekin vaqt yetmayapti? Vaqtim yetib turibdi. Anchadan beri rejalashtirib yurgan narsamni boshladim, Xudoga shukur, shu protsessdaman. Ya'ni ota hovlimda po polniy programmani komfort qilishni boshladim. Saunadan tortib, zona otdixigacha."
                      </p>
                    </div>

                    <div className="border-l-4 border-brand-2 pl-4">
                      <h4 className={`font-semibold mb-2 transition-colors duration-300 ${
                        isDarkMode ? 'text-white' : 'text-black'
                      }`}>{t("projectPage.sample")} 5: </h4>
                      <audio controls className="w-full mb-2">
                        <source src="/audios/Alisher_Uzoqov_suhbat_nma_gap_chunk_0169.mp3" type="audio/mpeg" />
                        {t("projectPage.browserNoAudio")}
                      </audio>
                      <p className={`text-sm transition-colors duration-300 ${
                        isDarkMode ? 'text-slate-300' : 'text-gray-700'
                      }`}>
                        <strong>{t("projectPage.transcription")}</strong> "Vot. Yo'q, u yerda o'shanaqa qanaqadir vizov-da, o'sha qiziq. O'zimga o'zim takoy vizovni bilmayman. Bu qachonligi o'zi? Ili umringizni oxirigacha qo'yilgan narsammi? Men til o'rganib olay. To est, ya vapshe ne ponimayu. Ya primerno kak budto vy ponimayu, nu ya ne ponimayu, chunki juda og'ir deyaptilar, qaysi moment men ham adashib ketyapman. Yo'q, prosta boshida nima bo'ldi? Men til o'rganyapman, to est qilmoqchi bo'lgan qanaqadir ham biznes ideyalarim bor dedingiz. O'sha ideyalar, angliyskiy bilan bog'liqmi desam, ha dedingiz. Hozir misol uchun qanaqadir ham"
                      </p>
                    </div>

                    <div className="border-l-4 border-brand-3 pl-4">
                      <h4 className={`font-semibold mb-2 transition-colors duration-300 ${
                        isDarkMode ? 'text-white' : 'text-black'
                      }`}>{t("projectPage.sample")} 6: </h4>
                      <audio controls className="w-full mb-2">
                        <source src="/audios/Eski_Subyektiv_allaqachon_yo'q_Hammasi_siz_o'ylagandek_emas_JAMSHIDXON.mp3" type="audio/mpeg" />
                        {t("projectPage.browserNoAudio")}
                      </audio>
                      <p className={`text-sm transition-colors duration-300 ${
                        isDarkMode ? 'text-slate-300' : 'text-gray-700'
                      }`}>
                        <strong>{t("projectPage.transcription")}</strong> "o'rtog'im ko'rsatganda, mana ko'rasan, mana blogger, qarang, zo'r mana bu obzor qaysidir mashina chiqqan edi-da o'sha paytda. Nimaga? Choynakni qopqog'i? Mana shunaqa reaksiya bo'lganda. Menimcha 90% odamlarda birinchi reaksiyasi xuddi shunaqa. Birga boshlamaganmisiz? Menimcha bir vaqt o'zida Yo'q, yo'q, yo'q, yo'q, yo'q, yo'q, ancha oldin bo'lmagan. Chunki meni esimda bor, sizga ham, sizga ham Umid aka salom deb yuborsa bo'ladi-ku. Umid Gafur juda katta sababchi bo'lgan."
                      </p>
                    </div>

                    <div className="border-l-4 border-brand-1 pl-4">
                      <h4 className={`font-semibold mb-2 transition-colors duration-300 ${
                        isDarkMode ? 'text-white' : 'text-black'
                      }`}>{t("projectPage.sample")} 7: </h4>
                      <audio controls className="w-full mb-2">
                        <source src="/audios/KEYINGI_5_YILDA_DOLZARB_MUAMMOGA_AYLANADI_AXAD_XUDAYAROV_chunk_0189.mp3" type="audio/mpeg" />
                        {t("projectPage.browserNoAudio")}
                      </audio>
                      <p className={`text-sm transition-colors duration-300 ${
                        isDarkMode ? 'text-slate-300' : 'text-gray-700'
                      }`}>
                        <strong>{t("projectPage.transcription")}</strong> "Agar kachok bo'laman deb-da. Bemalol yasha oladi-da demak. Bemalol. Chunki yo'lda-yu. O'shani yo'lida. Sal tezlashadi, bo'ldi. U hozir tezlashishga rozi emas, bemalol, marafoncha yugurib yurib. Marafon yo'nalishda deylik, keyin xohlasa Usain Bolt yo'nalishiga o'tib, tezroq, tezroq, tezroq deydi-yu. Xohlagan yo'lida yuroladi. Zato yo'lda. Samoye glavnoye finishni tez berib qo'ymasin bo'ldi. O'sha yuraversin, ketaversin. Judayam to'g'ri. Har kuni chiqsam bo'ladimi deydi. Marhamat, agar yengil obyomda bo'lsa, qilaversin."
                      </p>
                    </div>

                    <div className="border-l-4 border-brand-2 pl-4">
                      <h4 className={`font-semibold mb-2 transition-colors duration-300 ${
                        isDarkMode ? 'text-white' : 'text-black'
                      }`}>{t("projectPage.sample")} 8: </h4>
                      <audio controls className="w-full mb-2">
                        <source src="/audios/nma_gap2.mp3" type="audio/mpeg" />
                        {t("projectPage.browserNoAudio")}
                      </audio>
                      <p className={`text-sm transition-colors duration-300 ${
                        isDarkMode ? 'text-slate-300' : 'text-gray-700'
                      }`}>
                        <strong>{t("projectPage.transcription")}</strong> "I anavi kecha qo'pol qilib aytganda-da, o'sha sahnani boshida yurgan stand-upchi bolalarni ko'rib, o'sha paytlar ko'rardim-da, i hozir otdelniy konsert desa, nima deyapman-da. Kak tak? I bir ikkitasini kirib, anavi kommentariyalarni o'qib, baribir analiz qilasiz-u, i juda yaxshi qabul qilinyapti-da. Odamlar mazza qilyapti-da. Ne to chto i ne plyus yumoriga, a vapshe v tselom-da, mana shu bo'layotgan narsaga. I"
                      </p>
                    </div>

                    <div className="border-l-4 border-brand-3 pl-4">
                      <h4 className={`font-semibold mb-2 transition-colors duration-300 ${
                        isDarkMode ? 'text-white' : 'text-black'
                      }`}>{t("projectPage.sample")} 9: </h4>
                      <audio controls className="w-full mb-2">
                        <source src="/audios/Pul_topish_va_millioner_bo'lishning_oson_yo'llari_chunk_0183.mp3" type="audio/mpeg" />
                        {t("projectPage.browserNoAudio")}
                      </audio>
                      <p className={`text-sm transition-colors duration-300 ${
                        isDarkMode ? 'text-slate-300' : 'text-gray-700'
                      }`}>
                        <strong>{t("projectPage.transcription")}</strong> "keyin u kuchayib ketdi. oyiga o'sha 10 000 topadigan bo'lib, chet elga ketib yubordi. ko'pchilik yozdi-da, Xitoyda o'zi Xitoyda ITshniklar tiqilib yotibdi. bo'lishi mumkin, Xitoyda ITshniklar tiqilib yotibdi, lekin aynan mana shunaqasi Xitoyda yo'q ekanda, Xitoyliklar 10 000, 15 000 berib olib ketyapti. Bekorga emas-da. Bekorga emas-da. Sizga ham o'xshagan tuning-chi, detailing-chi tiqilib yotibdi-yu, to'g'rimi? Aslida tiqilyapti. Siz bittasiz. Bilasizmi? Unik product. Alloh yaratgan, unik productmiz, har birimiz." 
                      </p>
                    </div>

                    <div className="border-l-4 border-brand-1 pl-4">
                      <h4 className={`font-semibold mb-2 transition-colors duration-300 ${
                        isDarkMode ? 'text-white' : 'text-black'
                      }`}>{t("projectPage.sample")} 10: </h4>
                      <audio controls className="w-full mb-2">
                        <source src="/audios/Axad_Xudayarov_Bilan_Tog’ri_Ozish_Semirish_va_Yashash_Xaqida_chunk.mp3" type="audio/mpeg" />
                        {t("projectPage.browserNoAudio")}
                      </audio>
                      <p className={`text-sm transition-colors duration-300 ${
                        isDarkMode ? 'text-slate-300' : 'text-gray-700'
                      }`}>
                        <strong>{t("projectPage.transcription")}</strong> "Mana shu yangi zalga kirib kelgan bolalarda, boya aytgandek xavotir ko'p bo'ladi-da. Hamma karochi katta tosh ko'targan, men chunki g'alati formada kelyapman. Xijolat bo'lib ketadi-da. I mana shunaqa paytda o'ziga odam qidiradi, bitta aka qidiradi. To chto maslahat bersa, yomon gapirmasa, bo'ldi. O'shani uka xona bo'la oladi-da. I menda qachon sizni yana videoyingizni bunaqa qiziqdim, qani kim? Menga kelyapti-da, mana sport pitaniya do'kon-ku."
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
