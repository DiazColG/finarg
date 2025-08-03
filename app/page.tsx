import LinksFeed from "@/components/links-feed";

export default function Home() {
  return (
    <main className="relative min-h-screen">
      {/* Hero Section with Premium Design */}
      <div className="relative overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0 bg-gradient-to-br from-slate-50/50 via-white to-blue-50/30 dark:from-slate-900/50 dark:via-slate-800 dark:to-blue-950/30" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(220,238,255,0.3),transparent_50%)] dark:bg-[radial-gradient(circle_at_30%_20%,rgba(30,58,138,0.2),transparent_50%)]" />

        {/* Content */}
        <div className="relative px-6 sm:px-16 pt-16 pb-32">
          <div className="max-w-6xl mx-auto">
            {/* Premium Header */}
            <div className="text-center space-y-8 mb-16">
              <div className="space-y-4">
                <h1 className="text-5xl sm:text-7xl font-playfair font-bold tracking-tight">
                  <span className="text-gradient">La Macro</span>
                </h1>
                <div className="w-24 h-1 bg-gradient-to-r from-transparent via-jpm-blue to-transparent mx-auto" />
              </div>

              <div className="space-y-4 max-w-3xl mx-auto">
                <h2 className="text-2xl sm:text-3xl font-light text-slate-700 dark:text-slate-300">
                  Macroeconomía y Finanzas
                </h2>
                <h3 className="text-xl font-light text-slate-600 dark:text-slate-400">
                  República Argentina
                </h3>
                <p className="text-lg text-muted-foreground leading-relaxed max-w-2xl mx-auto">
                  Plataforma profesional de análisis financiero y datos
                  macroeconómicos en tiempo real
                </p>
              </div>
            </div>

            {/* Tools Section */}
            <div className="space-y-8">
              <div className="text-center">
                <h4 className="text-xl font-medium text-slate-700 dark:text-slate-300 mb-2">
                  Herramientas Profesionales
                </h4>
                <div className="w-16 h-0.5 bg-gradient-to-r from-navy to-jpm-blue mx-auto" />
              </div>

              <LinksFeed />
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
