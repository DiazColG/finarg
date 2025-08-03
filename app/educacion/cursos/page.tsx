import {
  ArrowRight,
  Clock,
  GraduationCap,
  Star,
  Users,
  CheckCircle,
} from "lucide-react";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Cursos - Educación Financiera",
  description:
    "Cursos estructurados sobre inversión y economía, desde nivel básico hasta avanzado.",
};

const courses = [
  {
    id: "inversion-basica",
    title: "Inversión Básica",
    level: "Principiante",
    duration: "4 semanas",
    students: "2,340",
    rating: 4.8,
    description:
      "Aprende los fundamentos de la inversión en el mercado argentino desde cero.",
    features: [
      "Conceptos básicos de inversión",
      "Análisis de instrumentos financieros",
      "Estrategias de diversificación",
      "Gestión de riesgo para principiantes",
    ],
    modules: [
      "Introducción a los mercados financieros",
      "Bonos y renta fija",
      "Acciones y equity",
      "Fondos comunes de inversión",
    ],
    price: "Gratis",
    featured: true,
  },
  {
    id: "analisis-tecnico",
    title: "Análisis Técnico",
    level: "Intermedio",
    duration: "6 semanas",
    students: "1,850",
    rating: 4.7,
    description:
      "Domina las herramientas del análisis técnico para timing de mercado.",
    features: [
      "Lectura de gráficos",
      "Indicadores técnicos principales",
      "Patrones de precio",
      "Estrategias de trading",
    ],
    modules: [
      "Fundamentos del análisis técnico",
      "Soportes y resistencias",
      "Indicadores de momento",
      "Estrategias de entrada y salida",
    ],
    price: "$15,000",
  },
  {
    id: "renta-fija-avanzada",
    title: "Renta Fija Avanzada",
    level: "Avanzado",
    duration: "8 semanas",
    students: "920",
    rating: 4.9,
    description:
      "Análisis profundo de bonos, curva de rendimientos y estrategias avanzadas.",
    features: [
      "Análisis de duration y convexidad",
      "Estrategias de carry trade",
      "Gestión de carteras de RF",
      "Análisis de crédito",
    ],
    modules: [
      "Matemáticas financieras avanzadas",
      "Análisis de la curva de rendimientos",
      "Estrategias de trading en RF",
      "Gestión de riesgo de crédito",
    ],
    price: "$25,000",
  },
  {
    id: "portfolio-management",
    title: "Portfolio Management",
    level: "Avanzado",
    duration: "10 semanas",
    students: "650",
    rating: 4.8,
    description:
      "Gestión profesional de carteras y asset allocation estratégico.",
    features: [
      "Teoría moderna de carteras",
      "Asset allocation estratégico",
      "Medición de performance",
      "Gestión de riesgo institucional",
    ],
    modules: [
      "Teoría de Markowitz",
      "Modelos de asset pricing",
      "Optimización de carteras",
      "Performance attribution",
    ],
    price: "$35,000",
  },
];

const testimonials = [
  {
    name: "María González",
    course: "Inversión Básica",
    comment:
      "Excelente curso para comenzar. Los conceptos están muy bien explicados y aplicados al mercado argentino.",
    rating: 5,
  },
  {
    name: "Carlos Rodríguez",
    course: "Análisis Técnico",
    comment:
      "Muy práctico y con ejemplos reales. Ahora puedo analizar gráficos con confianza.",
    rating: 5,
  },
];

function LevelBadge({ level }: { level: string }) {
  const colors = {
    Principiante:
      "bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-300",
    Intermedio:
      "bg-yellow-100 text-yellow-800 dark:bg-yellow-900/30 dark:text-yellow-300",
    Avanzado: "bg-red-100 text-red-800 dark:bg-red-900/30 dark:text-red-300",
  };

  return (
    <span
      className={`px-3 py-1 rounded-full text-xs font-medium ${colors[level as keyof typeof colors]}`}
    >
      {level}
    </span>
  );
}

export default function CursosPage() {
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
            Cursos de Inversión
          </h1>
          <p className="text-xl text-slate-600 dark:text-slate-400 max-w-3xl mx-auto leading-relaxed">
            Programas estructurados para llevar tus conocimientos financieros al
            siguiente nivel, desde conceptos básicos hasta estrategias
            avanzadas.
          </p>
        </div>

        {/* Navigation Breadcrumb */}
        <div className="flex items-center text-sm text-slate-600 dark:text-slate-400 mb-8">
          <Link
            href="/educacion"
            className="hover:text-jpm-blue transition-colors"
          >
            Educación
          </Link>
          <ArrowRight className="h-4 w-4 mx-2" />
          <span className="text-slate-800 dark:text-slate-200">Cursos</span>
        </div>

        {/* Courses Grid */}
        <div className="grid lg:grid-cols-2 gap-8 mb-16">
          {courses.map((course) => (
            <div
              key={course.id}
              className={`bg-white/70 dark:bg-slate-800/70 backdrop-blur-sm border border-slate-200/50 dark:border-slate-700/50 rounded-2xl p-8 hover:shadow-2xl hover:shadow-jpm-blue/10 hover:border-jpm-blue/30 transition-all duration-300 ${
                course.featured ? "ring-2 ring-jpm-blue/20" : ""
              }`}
            >
              {course.featured && (
                <div className="flex items-center mb-4">
                  <Star className="h-4 w-4 text-yellow-500 mr-2" />
                  <span className="text-sm font-medium text-jpm-blue">
                    Curso Destacado
                  </span>
                </div>
              )}

              <div className="flex items-start justify-between mb-4">
                <div>
                  <h3 className="text-2xl font-bold text-slate-800 dark:text-slate-200 mb-2">
                    {course.title}
                  </h3>
                  <LevelBadge level={course.level} />
                </div>
                <div className="text-right">
                  <div className="text-2xl font-bold text-jpm-blue mb-1">
                    {course.price}
                  </div>
                  {course.price !== "Gratis" && (
                    <div className="text-xs text-slate-500 dark:text-slate-400">
                      Pago único
                    </div>
                  )}
                </div>
              </div>

              <p className="text-slate-600 dark:text-slate-400 mb-6 leading-relaxed">
                {course.description}
              </p>

              <div className="flex items-center gap-6 mb-6 text-sm text-slate-600 dark:text-slate-400">
                <div className="flex items-center">
                  <Clock className="h-4 w-4 mr-2" />
                  {course.duration}
                </div>
                <div className="flex items-center">
                  <Users className="h-4 w-4 mr-2" />
                  {course.students} estudiantes
                </div>
                <div className="flex items-center">
                  <Star className="h-4 w-4 mr-2 text-yellow-500" />
                  {course.rating}
                </div>
              </div>

              <div className="mb-6">
                <h4 className="font-semibold text-slate-800 dark:text-slate-200 mb-3">
                  Lo que aprenderás:
                </h4>
                <ul className="space-y-2">
                  {course.features.map((feature, index) => (
                    <li
                      key={index}
                      className="flex items-center text-sm text-slate-600 dark:text-slate-400"
                    >
                      <CheckCircle className="h-4 w-4 text-green-500 mr-3 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mb-6">
                <h4 className="font-semibold text-slate-800 dark:text-slate-200 mb-3">
                  Módulos del curso:
                </h4>
                <ul className="space-y-1">
                  {course.modules.map((module, index) => (
                    <li
                      key={index}
                      className="text-sm text-slate-600 dark:text-slate-400"
                    >
                      {index + 1}. {module}
                    </li>
                  ))}
                </ul>
              </div>

              <Link
                href={`/educacion/cursos/${course.id}`}
                className="block w-full"
              >
                <button className="w-full bg-gradient-to-r from-jpm-blue to-blue-600 text-white font-medium py-3 px-6 rounded-xl hover:shadow-lg hover:shadow-jpm-blue/25 transition-all duration-300 hover:-translate-y-1">
                  {course.price === "Gratis"
                    ? "Comenzar Gratis"
                    : "Inscribirse"}
                </button>
              </Link>
            </div>
          ))}
        </div>

        {/* Testimonials */}
        <div className="bg-white/70 dark:bg-slate-800/70 backdrop-blur-sm border border-slate-200/50 dark:border-slate-700/50 rounded-2xl p-8">
          <h2 className="text-2xl font-bold text-slate-800 dark:text-slate-200 mb-8 text-center">
            Lo que dicen nuestros estudiantes
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="p-6 bg-slate-50/50 dark:bg-slate-700/50 rounded-xl border border-slate-200/30 dark:border-slate-600/30"
              >
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star
                      key={i}
                      className="h-4 w-4 text-yellow-500 fill-current"
                    />
                  ))}
                </div>
                <p className="text-slate-700 dark:text-slate-300 mb-4 italic">
                  &ldquo;{testimonial.comment}&rdquo;
                </p>
                <div>
                  <div className="font-semibold text-slate-800 dark:text-slate-200">
                    {testimonial.name}
                  </div>
                  <div className="text-sm text-slate-500 dark:text-slate-400">
                    Curso: {testimonial.course}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
