import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { useTranslation } from "react-i18next";

const NotFound = () => {
  const location = useLocation();
  const { t } = useTranslation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex items-center justify-center relative overflow-hidden bg-background">
      <div className="absolute inset-0 bg-grid opacity-30 pointer-events-none" />
      <div className="text-center relative z-10 px-4">
        <div className="font-mono text-sm text-brand-2 mb-4">// ERROR — NO DETECTION</div>
        <h1 className="font-display text-6xl sm:text-7xl font-bold mb-4 text-brand-1 text-glow">404</h1>
        <p className="text-lg text-muted-foreground mb-6">{t("notFound.title")}</p>
        <a href="/" className="font-mono text-sm text-brand-1 hover:text-brand-2 underline underline-offset-4 transition-colors">
          {t("notFound.back")}
        </a>
      </div>
    </div>
  );
};

export default NotFound;
