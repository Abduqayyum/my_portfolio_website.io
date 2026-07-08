import { Building2, ExternalLink } from "lucide-react";
import { useTranslation } from "react-i18next";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import SectionHeading from "@/components/SectionHeading";
import CornerFrame from "@/components/CornerFrame";

interface StartupSectionProps {
  isDarkMode: boolean;
}

const StartupSection = ({ isDarkMode }: StartupSectionProps) => {
  const { t } = useTranslation();

  return (
    <div className="container mx-auto max-w-5xl">
      <SectionHeading index="03" kicker="STARTUP" title={t("startup.title")} isDarkMode={isDarkMode} />

      <Card
        className={`relative transition-all duration-300 border shadow-xl group ${
          isDarkMode
            ? "bg-white/5 border-white/10 hover:border-brand-1/50"
            : "bg-white border-black/10 hover:border-brand-1/50"
        }`}
      >
        <CornerFrame accent="cyan" visible={false} />
        <CardHeader>
          <div className="flex items-start justify-between gap-4">
            <div>
              <div className="flex items-center gap-3 mb-3">
                <Building2 className="h-6 w-6 text-brand-1" />
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

            <Badge className="bg-brand-1 text-primary-foreground font-mono">
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

          <Button asChild className="bg-brand-1 hover:bg-brand-1/90 text-primary-foreground">
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
