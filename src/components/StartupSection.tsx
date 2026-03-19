import { Building2, ExternalLink } from "lucide-react";
import { useTranslation } from "react-i18next";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

interface StartupSectionProps {
  isDarkMode: boolean;
}

const StartupSection = ({ isDarkMode }: StartupSectionProps) => {
  const { t } = useTranslation();

  return (
    <div className="container mx-auto max-w-5xl">
      <h2
        className={`text-3xl sm:text-4xl font-bold text-center mb-8 sm:mb-12 transition-colors duration-300 ${
          isDarkMode ? "text-white" : "text-black"
        }`}
      >
        {t("startup.title")}
      </h2>

      <Card
        className={`transition-all duration-300 border shadow-xl ${
          isDarkMode
            ? "bg-slate-800/90 border-slate-700 hover:border-blue-500"
            : "bg-white/90 border-gray-200 hover:border-blue-500"
        }`}
      >
        <CardHeader>
          <div className="flex items-start justify-between gap-4">
            <div>
              <div className="flex items-center gap-3 mb-3">
                <Building2 className="h-6 w-6 text-blue-500" />
                <CardTitle
                  className={`text-2xl transition-colors duration-300 ${
                    isDarkMode ? "text-white" : "text-black"
                  }`}
                >
                  MizanPOS
                </CardTitle>
              </div>
              <CardDescription
                className={`text-base transition-colors duration-300 ${
                  isDarkMode ? "text-slate-300" : "text-gray-700"
                }`}
              >
                {t("startup.subtitle")}
              </CardDescription>
            </div>

            <Badge className="bg-gradient-to-r from-blue-600 to-teal-600 text-white">
              {t("startup.badge")}
            </Badge>
          </div>
        </CardHeader>

        <CardContent className="space-y-5">
          <p
            className={`leading-relaxed transition-colors duration-300 ${
              isDarkMode ? "text-slate-300" : "text-gray-700"
            }`}
          >
            {t("startup.description")}
          </p>

          <ul
            className={`list-disc pl-5 space-y-1 transition-colors duration-300 ${
              isDarkMode ? "text-slate-300" : "text-gray-700"
            }`}
          >
            <li>{t("startup.features.f1")}</li>
            <li>{t("startup.features.f2")}</li>
            <li>{t("startup.features.f3")}</li>
          </ul>

          <Button asChild className="bg-gradient-to-r from-blue-600 to-teal-600 hover:from-blue-700 hover:to-teal-700">
            <a href="https://mizanpos.uz/" target="_blank" rel="noopener noreferrer">
              {t("startup.visit")}
              <ExternalLink className="ml-2 h-4 w-4" />
            </a>
          </Button>
        </CardContent>
      </Card>
    </div>
  );
};

export default StartupSection;

