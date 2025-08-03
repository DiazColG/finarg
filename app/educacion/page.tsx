import { BookOpen, GraduationCap, TrendingUp, Users } from "lucide-react";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Educación Financiera",
  description:
    "Aprende macroeconomía, finanzas e inversiones con nuestros cursos y recursos educativos.",
};

const educationSections = [
  {
    title: "Conceptos Básicos",
    description:
      "Fundamentos esenciales de macroeconomía y finanzas que todo inversor debe conocer.",
    href: "/educacion/conceptos-basicos",
    icon: BookOpen,
    features: [
      "Inflación y deflación",
      "Política monetaria",
      "Tipos de inversión",
      "Análisis de riesgo",
    ],
  },
  {
    title: "Cursos Estructurados",
    description:
      "Programas de estudio completos desde nivel básico hasta avanzado.",
    href: "/educacion/cursos",
    icon: GraduationCap,
    features: [
      "Curso de Inversión Básica",
      "Análisis Técnico",
      "Renta Fija Avanzada",
      "Portfolio Management",
    ],
  },
  {
    title: "Glosario Financiero",
    description: "Diccionario completo de términos financieros y económicos.",
    href: "/educacion/glosario",
    icon: BookOpen,
    features: [
      "Términos de mercado",
      "Indicadores económicos",
      "Instrumentos financieros",
      "Ratios de análisis",
    ],
  },
];

const popularTopics = [
  { title: "¿Qué es el carry trade?", views: "2.3k" },
  { title: "Cómo leer un balance", views: "1.8k" },
  { title: "Diferencia entre bonos y acciones", views: "1.5k" },
  { title: "Análisis fundamental vs técnico", views: "1.2k" },
];

export default function EducacionPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-slate-50/30 dark:to-slate-900/30">
      <div className="container mx-auto px-4 py-12">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="flex justify-center mb-6">
            <div className="p-4 rounded-2xl bg-gradient-to-br from-jpm-blue/10 to-blue-600/10 border border-jpm-blue/20">
              <GraduationCap className="h-12 w-12 text-jpm-blue" />
            </div>
          </div>
          <h1 className="text-5xl font-playfair font-bold text-slate-800 dark:text-slate-200 mb-4">
            Educación Financiera
          </h1>
          <p className="text-xl text-slate-600 dark:text-slate-400 max-w-3xl mx-auto leading-relaxed">
            Desarrolla tus conocimientos en macroeconomía e inversiones con
            nuestros recursos educativos diseñados para todos los niveles.
          </p>
        </div>

        {/* Main Sections */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {educationSections.map((section) => {
            const Icon = section.icon;
            return (
              <Link key={section.href} href={section.href} className="group">
                <div className="bg-white/70 dark:bg-slate-800/70 backdrop-blur-sm border border-slate-200/50 dark:border-slate-700/50 rounded-2xl p-8 h-full transition-all duration-300 hover:shadow-2xl hover:shadow-jpm-blue/10 hover:border-jpm-blue/30 hover:-translate-y-1">
                  <div className="flex items-center mb-6">
                    <div className="p-3 rounded-xl bg-gradient-to-br from-jpm-blue/10 to-blue-600/10 border border-jpm-blue/20 mr-4">
                      <Icon className="h-6 w-6 text-jpm-blue" />
                    </div>
                    <h3 className="text-xl font-bold text-slate-800 dark:text-slate-200 group-hover:text-jpm-blue transition-colors">
                      {section.title}
                    </h3>
                  </div>

                  <p className="text-slate-600 dark:text-slate-400 mb-6 leading-relaxed">
                    {section.description}
                  </p>

                  <ul className="space-y-2">
                    {section.features.map((feature, index) => (
                      <li
                        key={index}
                        className="flex items-center text-sm text-slate-600 dark:text-slate-400"
                      >
                        <div className="w-1.5 h-1.5 rounded-full bg-jpm-blue mr-3 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>

                  <div className="mt-6 flex items-center text-jpm-blue font-medium group-hover:translate-x-2 transition-transform">
                    Explorar
                    <TrendingUp className="h-4 w-4 ml-2" />
                  </div>
                </div>
              </Link>
            );
          })}
        </div>

        {/* Popular Topics */}
        <div className="bg-white/70 dark:bg-slate-800/70 backdrop-blur-sm border border-slate-200/50 dark:border-slate-700/50 rounded-2xl p-8">
          <div className="flex items-center mb-6">
            <TrendingUp className="h-6 w-6 text-jmp-blue mr-3" />
            <h2 className="text-2xl font-bold text-slate-800 dark:text-slate-200">
              Temas Populares
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-4">
            {popularTopics.map((topic, index) => (
              <div
                key={index}
                className="flex items-center justify-between p-4 rounded-xl bg-slate-50/50 dark:bg-slate-700/50 border border-slate-200/30 dark:border-slate-600/30 hover:bg-slate-100/50 dark:hover:bg-slate-600/50 transition-colors cursor-pointer"
              >
                <span className="text-slate-700 dark:text-slate-300 font-medium">
                  {topic.title}
                </span>
                <span className="text-sm text-slate-500 dark:text-slate-400 flex items-center">
                  <Users className="h-4 w-4 mr-1" />
                  {topic.views}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center mt-16">
          <div className="bg-gradient-to-br from-jpm-blue/5 to-blue-600/5 border border-jpm-blue/20 rounded-2xl p-8">
            <h2 className="text-3xl font-bold text-slate-800 dark:text-slate-200 mb-4">
              ¿Nuevo en inversiones?
            </h2>
            <p className="text-slate-600 dark:text-slate-400 mb-6 max-w-2xl mx-auto">
              Comienza tu journey financiero con nuestro curso básico. Aprende
              desde cero y construye una base sólida para tus inversiones.
            </p>
            <Link
              href="/educacion/conceptos-basicos"
              className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-jpm-blue to-blue-600 text-white font-medium rounded-xl hover:shadow-lg hover:shadow-jpm-blue/25 transition-all duration-300 hover:-translate-y-1"
            >
              <BookOpen className="h-5 w-5 mr-2" />
              Empezar Ahora
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
