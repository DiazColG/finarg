"use client";

import {
  ArrowRight,
  Clock,
  GraduationCap,
  CheckCircle,
  ChevronDown,
  ChevronUp,
  PlayCircle,
  BookOpen,
  Users,
  Star,
} from "lucide-react";
import Link from "next/link";
import { useState } from "react";

// Define course modules and lessons
const courseModules = [
  {
    title: "Módulo 1: Introducción a los mercados financieros",
    description:
      "Fundamentos básicos para entender cómo funcionan los mercados financieros y por qué son importantes.",
    lessons: [
      {
        title: "¿Qué es un mercado financiero?",
        duration: "18 min",
        description:
          "Definición, tipos de mercados, participantes y su función en la economía.",
      },
      {
        title: "El sistema financiero argentino",
        duration: "22 min",
        description:
          "Estructura, regulación, y características particulares del mercado local.",
      },
      {
        title: "Activos financieros: una introducción",
        duration: "25 min",
        description:
          "Clasificación de instrumentos financieros y sus características principales.",
      },
      {
        title: "Entendiendo el riesgo y el retorno",
        duration: "20 min",
        description:
          "Conceptos fundamentales de la relación riesgo-rentabilidad y su importancia.",
      },
    ],
  },
  {
    title: "Módulo 2: Bonos y renta fija",
    description:
      "Conoce los instrumentos de deuda, su funcionamiento y cómo incorporarlos a tu estrategia de inversión.",
    lessons: [
      {
        title: "Conceptos básicos de bonos",
        duration: "20 min",
        description:
          "Definición, partes de un bono, tipos de emisores y características principales.",
      },
      {
        title: "Precios, rendimientos y tasas",
        duration: "25 min",
        description:
          "Relación precio-tasa, cálculo de rendimientos y curva de tasas.",
      },
      {
        title: "Bonos soberanos argentinos",
        duration: "22 min",
        description:
          "Tipos de bonos emitidos por el gobierno, características y riesgos.",
      },
      {
        title: "Instrumentos de renta fija corporativa",
        duration: "18 min",
        description:
          "Obligaciones negociables, fideicomisos financieros y otros instrumentos corporativos.",
      },
    ],
  },
  {
    title: "Módulo 3: Acciones y equity",
    description:
      "Descubre cómo invertir en empresas a través del mercado de capitales y analizar oportunidades.",
    lessons: [
      {
        title: "¿Qué son las acciones?",
        duration: "16 min",
        description:
          "Definición, derechos que otorgan, tipos y características principales.",
      },
      {
        title: "El mercado accionario argentino",
        duration: "24 min",
        description:
          "Bolsa de Comercio, ByMA, tipos de operaciones y régimen de oferta pública.",
      },
      {
        title: "Análisis fundamental básico",
        duration: "28 min",
        description:
          "Ratios principales, interpretación de estados financieros y valoración básica.",
      },
      {
        title: "CEDEARs: Acceso al mercado internacional",
        duration: "20 min",
        description:
          "Certificados de depósito argentinos, ventajas, desventajas y operatoria.",
      },
    ],
  },
  {
    title: "Módulo 4: Fondos comunes de inversión",
    description:
      "Aprende sobre la inversión colectiva, tipos de fondos y cómo seleccionar el adecuado para tus objetivos.",
    lessons: [
      {
        title: "¿Qué son los FCIs?",
        duration: "15 min",
        description:
          "Definición, funcionamiento, ventajas y desventajas de la inversión colectiva.",
      },
      {
        title: "Tipos de fondos por asset class",
        duration: "22 min",
        description:
          "Money market, renta fija, renta variable, mixtos y alternativos.",
      },
      {
        title: "Selección de FCIs según objetivos",
        duration: "26 min",
        description:
          "Criterios de selección, lectura de fact sheets y evaluación de performance.",
      },
      {
        title: "Estrategias con FCIs para distintos perfiles",
        duration: "24 min",
        description:
          "Armado de carteras según horizonte, tolerancia al riesgo y objetivos financieros.",
      },
    ],
  },
];

export default function InversionBasicaPage() {
  const [expandedModule, setExpandedModule] = useState<number | null>(0);

  const toggleModule = (index: number) => {
    setExpandedModule(expandedModule === index ? null : index);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-slate-50/30 dark:to-slate-900/30">
      <div className="container mx-auto px-4 py-12">
        {/* Course Header */}
        <div className="grid md:grid-cols-3 gap-10 mb-16">
          <div className="md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <div className="px-3 py-1 bg-jpm-blue/10 text-jpm-blue rounded-full text-sm font-medium">
                Principiante
              </div>
              <div className="flex items-center text-slate-600 dark:text-slate-400 text-sm">
                <Clock className="h-4 w-4 mr-1" />4 semanas
              </div>
              <div className="flex items-center text-slate-600 dark:text-slate-400 text-sm">
                <Users className="h-4 w-4 mr-1" />
                2,340 estudiantes
              </div>
            </div>

            <h1 className="text-4xl md:text-5xl font-playfair font-bold text-slate-800 dark:text-slate-200 mb-4">
              Inversión Básica
            </h1>

            <p className="text-xl text-slate-600 dark:text-slate-400 mb-6 leading-relaxed">
              Curso introductorio diseñado por un experimentado profesor de
              finanzas, adaptado al nivel de estudiantes universitarios de
              primer año. Aprenderás los fundamentos de la inversión en el
              mercado argentino desde cero.
            </p>

            <div className="flex items-center mb-8">
              <div className="flex">
                {[1, 2, 3, 4, 5].map((_, index) => (
                  <Star
                    key={index}
                    className={`h-5 w-5 ${index < 4 ? "text-yellow-400 fill-yellow-400" : "text-yellow-400 fill-yellow-400"}`}
                  />
                ))}
              </div>
              <span className="ml-2 text-slate-700 dark:text-slate-300 font-medium">
                4.8
              </span>
              <span className="ml-1 text-slate-500 dark:text-slate-400">
                (186 valoraciones)
              </span>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="#contenido"
                className="inline-flex items-center justify-center px-6 py-3 bg-gradient-to-r from-jpm-blue to-blue-600 text-white font-medium rounded-xl hover:shadow-lg hover:shadow-jpm-blue/25 transition-all duration-300 hover:-translate-y-1"
              >
                Comenzar curso
                <ArrowRight className="h-4 w-4 ml-2" />
              </Link>
              <Link
                href="#contenido"
                className="inline-flex items-center justify-center px-6 py-3 border border-jpm-blue text-jpm-blue font-medium rounded-xl hover:bg-jpm-blue/5 transition-all duration-300"
              >
                Ver programa completo
                <BookOpen className="h-4 w-4 ml-2" />
              </Link>
            </div>
          </div>

          <div className="bg-white dark:bg-slate-800 rounded-2xl overflow-hidden shadow-lg border border-slate-200/50 dark:border-slate-700/50">
            <div className="p-6">
              <div className="text-center mb-6">
                <span className="text-4xl font-bold text-slate-800 dark:text-slate-200">
                  Gratis
                </span>
                <p className="text-slate-500 dark:text-slate-400 text-sm mt-1">
                  Acceso completo al contenido
                </p>
              </div>

              <div className="space-y-4 mb-6">
                <div className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 mr-3 flex-shrink-0" />
                  <p className="text-slate-700 dark:text-slate-300">
                    4 módulos completos
                  </p>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 mr-3 flex-shrink-0" />
                  <p className="text-slate-700 dark:text-slate-300">
                    16 lecciones en video
                  </p>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 mr-3 flex-shrink-0" />
                  <p className="text-slate-700 dark:text-slate-300">
                    Material de estudio descargable
                  </p>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 mr-3 flex-shrink-0" />
                  <p className="text-slate-700 dark:text-slate-300">
                    Ejercicios prácticos
                  </p>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 mr-3 flex-shrink-0" />
                  <p className="text-slate-700 dark:text-slate-300">
                    Certificado de finalización
                  </p>
                </div>
              </div>

              <button className="w-full py-3 bg-gradient-to-r from-jpm-blue to-blue-600 text-white font-medium rounded-xl hover:shadow-lg hover:shadow-jpm-blue/25 transition-all duration-300">
                Inscribirse
              </button>
            </div>
          </div>
        </div>

        {/* What You'll Learn */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-slate-800 dark:text-slate-200 mb-6">
            Lo que aprenderás
          </h2>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="flex items-start">
              <CheckCircle className="h-5 w-5 text-jpm-blue mt-0.5 mr-3 flex-shrink-0" />
              <p className="text-slate-700 dark:text-slate-300">
                Entender cómo funcionan los mercados financieros y su
                importancia en la economía
              </p>
            </div>
            <div className="flex items-start">
              <CheckCircle className="h-5 w-5 text-jpm-blue mt-0.5 mr-3 flex-shrink-0" />
              <p className="text-slate-700 dark:text-slate-300">
                Conocer los diferentes tipos de activos financieros y sus
                características
              </p>
            </div>
            <div className="flex items-start">
              <CheckCircle className="h-5 w-5 text-jpm-blue mt-0.5 mr-3 flex-shrink-0" />
              <p className="text-slate-700 dark:text-slate-300">
                Analizar bonos, acciones y otros instrumentos del mercado
                argentino
              </p>
            </div>
            <div className="flex items-start">
              <CheckCircle className="h-5 w-5 text-jpm-blue mt-0.5 mr-3 flex-shrink-0" />
              <p className="text-slate-700 dark:text-slate-300">
                Construir una cartera diversificada según tu perfil de riesgo
              </p>
            </div>
            <div className="flex items-start">
              <CheckCircle className="h-5 w-5 text-jpm-blue mt-0.5 mr-3 flex-shrink-0" />
              <p className="text-slate-700 dark:text-slate-300">
                Interpretar información financiera básica para tomar decisiones
              </p>
            </div>
            <div className="flex items-start">
              <CheckCircle className="h-5 w-5 text-jpm-blue mt-0.5 mr-3 flex-shrink-0" />
              <p className="text-slate-700 dark:text-slate-300">
                Desarrollar estrategias de inversión adaptadas al contexto
                argentino
              </p>
            </div>
            <div className="flex items-start">
              <CheckCircle className="h-5 w-5 text-jpm-blue mt-0.5 mr-3 flex-shrink-0" />
              <p className="text-slate-700 dark:text-slate-300">
                Evaluar y seleccionar fondos comunes de inversión adecuados
              </p>
            </div>
            <div className="flex items-start">
              <CheckCircle className="h-5 w-5 text-jpm-blue mt-0.5 mr-3 flex-shrink-0" />
              <p className="text-slate-700 dark:text-slate-300">
                Aplicar conceptos de gestión de riesgo para proteger tu capital
              </p>
            </div>
          </div>
        </div>

        {/* Professor */}
        <div className="mb-16 bg-white dark:bg-slate-800 rounded-2xl p-8 border border-slate-200/50 dark:border-slate-700/50 shadow-sm">
          <h2 className="text-3xl font-bold text-slate-800 dark:text-slate-200 mb-6">
            Tu profesor
          </h2>

          <div className="flex flex-col md:flex-row items-start gap-6">
            <div className="w-32 h-32 rounded-full overflow-hidden bg-slate-200 dark:bg-slate-700 flex-shrink-0">
              <div className="w-full h-full flex items-center justify-center bg-jpm-blue/10 text-jpm-blue">
                <GraduationCap className="h-12 w-12" />
              </div>
            </div>

            <div>
              <h3 className="text-xl font-bold text-slate-800 dark:text-slate-200 mb-2">
                Dr. Martín Rodríguez
              </h3>
              <p className="text-jpm-blue font-medium mb-3">
                PhD en Economía Financiera | 15 años de experiencia docente
              </p>
              <p className="text-slate-600 dark:text-slate-400 mb-4 leading-relaxed">
                El Dr. Rodríguez es profesor titular de Finanzas en la
                Universidad de Buenos Aires y consultor financiero con amplia
                experiencia en mercados emergentes. Ha publicado numerosos
                artículos académicos sobre inversiones y mercados de capitales,
                y es conocido por su capacidad para explicar conceptos complejos
                de manera accesible para estudiantes que se inician en el mundo
                financiero.
              </p>
              <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                &ldquo;Mi objetivo con este curso es desmitificar el mundo de
                las inversiones y brindar herramientas prácticas para que
                cualquier persona, incluso sin conocimientos previos, pueda
                comenzar a invertir de manera inteligente en el contexto
                argentino.&rdquo;
              </p>
            </div>
          </div>
        </div>

        {/* Course Content */}
        <div id="contenido" className="mb-16">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-3xl font-bold text-slate-800 dark:text-slate-200">
              Contenido del curso
            </h2>
            <div className="text-slate-600 dark:text-slate-400">
              <span className="font-medium">4</span> módulos •{" "}
              <span className="font-medium">16</span> lecciones •{" "}
              <span className="font-medium">6.5</span> horas
            </div>
          </div>

          <div className="space-y-4">
            {courseModules.map((module, moduleIndex) => (
              <div
                key={moduleIndex}
                className="border border-slate-200 dark:border-slate-700 rounded-xl overflow-hidden bg-white dark:bg-slate-800"
              >
                <div
                  className="flex justify-between items-center p-6 cursor-pointer hover:bg-slate-50 dark:hover:bg-slate-800/80 transition-colors"
                  onClick={() => toggleModule(moduleIndex)}
                >
                  <div className="flex items-start">
                    <div className="w-8 h-8 rounded-full bg-jpm-blue/10 text-jpm-blue flex items-center justify-center mr-4 flex-shrink-0">
                      <span className="font-medium">{moduleIndex + 1}</span>
                    </div>
                    <div>
                      <h3 className="font-bold text-slate-800 dark:text-slate-200 mb-1">
                        {module.title}
                      </h3>
                      <p className="text-slate-600 dark:text-slate-400 text-sm">
                        {module.description}
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <span className="text-sm text-slate-500 dark:text-slate-400 mr-4">
                      {module.lessons.length} lecciones
                    </span>
                    {expandedModule === moduleIndex ? (
                      <ChevronUp className="h-5 w-5 text-slate-400" />
                    ) : (
                      <ChevronDown className="h-5 w-5 text-slate-400" />
                    )}
                  </div>
                </div>

                {expandedModule === moduleIndex && (
                  <div className="border-t border-slate-200 dark:border-slate-700">
                    {module.lessons.map((lesson, lessonIndex) => {
                      // Determinar la URL basada en el módulo y lección
                      let sectionLink = "#";
                      if (moduleIndex === 0) {
                        // Módulo 1 con secciones específicas
                        if (lessonIndex === 0) {
                          sectionLink =
                            "/educacion/cursos/inversion-basica/modulo-1/que-es-un-mercado-financiero#definicion";
                        } else if (lessonIndex === 1) {
                          sectionLink =
                            "/educacion/cursos/inversion-basica/modulo-1/el-sistema-financiero-argentino#estructura";
                        } else if (lessonIndex === 2) {
                          sectionLink =
                            "/educacion/cursos/inversion-basica/modulo-1/que-es-un-mercado-financiero#tipos";
                        } else if (lessonIndex === 3) {
                          sectionLink =
                            "/educacion/cursos/inversion-basica/modulo-1/que-es-un-mercado-financiero#importancia";
                        }
                      }

                      return (
                        <Link
                          href={sectionLink}
                          key={lessonIndex}
                          className="flex items-start p-4 hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-colors"
                        >
                          <PlayCircle className="h-5 w-5 text-jpm-blue mt-0.5 mr-3 flex-shrink-0" />
                          <div className="flex-grow">
                            <h4 className="font-medium text-slate-800 dark:text-slate-200 mb-1">
                              {lesson.title}
                            </h4>
                            <p className="text-slate-600 dark:text-slate-400 text-sm">
                              {lesson.description}
                            </p>
                          </div>
                          <div className="flex items-center text-slate-500 dark:text-slate-400 text-sm ml-4">
                            <Clock className="h-4 w-4 mr-1" />
                            {lesson.duration}
                          </div>
                        </Link>
                      );
                    })}

                    <div className="bg-slate-50 dark:bg-slate-800/50 p-4 border-t border-slate-200 dark:border-slate-700">
                      <Link
                        href={
                          moduleIndex === 0
                            ? "/educacion/cursos/inversion-basica/modulo-1/que-es-un-mercado-financiero"
                            : "#"
                        }
                        className="flex items-center"
                      >
                        <BookOpen className="h-4 w-4 text-jpm-blue mr-2" />
                        <span className="text-jpm-blue text-sm font-medium">
                          Ver contenido del módulo
                        </span>
                      </Link>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Requirements */}
        <div className="mb-16 bg-white dark:bg-slate-800 rounded-2xl p-8 border border-slate-200/50 dark:border-slate-700/50">
          <h2 className="text-3xl font-bold text-slate-800 dark:text-slate-200 mb-6">
            Requisitos previos
          </h2>

          <div className="space-y-4">
            <div className="flex items-start">
              <CheckCircle className="h-5 w-5 text-jpm-blue mt-0.5 mr-3 flex-shrink-0" />
              <p className="text-slate-700 dark:text-slate-300">
                No se requieren conocimientos previos de finanzas o economía
              </p>
            </div>
            <div className="flex items-start">
              <CheckCircle className="h-5 w-5 text-jpm-blue mt-0.5 mr-3 flex-shrink-0" />
              <p className="text-slate-700 dark:text-slate-300">
                Matemática básica (nivel secundario)
              </p>
            </div>
            <div className="flex items-start">
              <CheckCircle className="h-5 w-5 text-jpm-blue mt-0.5 mr-3 flex-shrink-0" />
              <p className="text-slate-700 dark:text-slate-300">
                Interés en aprender sobre inversiones y mercados financieros
              </p>
            </div>
            <div className="flex items-start">
              <CheckCircle className="h-5 w-5 text-jpm-blue mt-0.5 mr-3 flex-shrink-0" />
              <p className="text-slate-700 dark:text-slate-300">
                Acceso a una computadora con conexión a internet
              </p>
            </div>
          </div>
        </div>

        {/* FAQ */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-slate-800 dark:text-slate-200 mb-6">
            Preguntas frecuentes
          </h2>

          <div className="space-y-4">
            <div className="border border-slate-200 dark:border-slate-700 rounded-xl overflow-hidden bg-white dark:bg-slate-800 p-6">
              <h3 className="font-bold text-slate-800 dark:text-slate-200 mb-2">
                ¿Este curso es adecuado para alguien sin experiencia en
                inversiones?
              </h3>
              <p className="text-slate-600 dark:text-slate-400">
                Sí, está especialmente diseñado para principiantes. Partimos
                desde los conceptos más básicos y avanzamos gradualmente, con
                explicaciones claras y ejemplos prácticos.
              </p>
            </div>

            <div className="border border-slate-200 dark:border-slate-700 rounded-xl overflow-hidden bg-white dark:bg-slate-800 p-6">
              <h3 className="font-bold text-slate-800 dark:text-slate-200 mb-2">
                ¿Cuánto tiempo tengo para completar el curso?
              </h3>
              <p className="text-slate-600 dark:text-slate-400">
                Una vez inscripto, tendrás acceso ilimitado al contenido. Aunque
                está estructurado para completarse en 4 semanas, puedes avanzar
                a tu propio ritmo.
              </p>
            </div>

            <div className="border border-slate-200 dark:border-slate-700 rounded-xl overflow-hidden bg-white dark:bg-slate-800 p-6">
              <h3 className="font-bold text-slate-800 dark:text-slate-200 mb-2">
                ¿Obtendré un certificado al finalizar?
              </h3>
              <p className="text-slate-600 dark:text-slate-400">
                Sí, al completar todas las lecciones y aprobar la evaluación
                final, recibirás un certificado digital que podrás compartir en
                tu CV o redes profesionales.
              </p>
            </div>

            <div className="border border-slate-200 dark:border-slate-700 rounded-xl overflow-hidden bg-white dark:bg-slate-800 p-6">
              <h3 className="font-bold text-slate-800 dark:text-slate-200 mb-2">
                ¿El contenido está actualizado para el contexto económico
                actual?
              </h3>
              <p className="text-slate-600 dark:text-slate-400">
                Absolutamente. El curso se actualiza regularmente para reflejar
                la situación actual del mercado argentino y las mejores
                prácticas de inversión en nuestro contexto económico.
              </p>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="light-blue-gradient rounded-2xl p-8 border border-blue-200/30 dark:border-blue-500/30">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-slate-800 dark:text-slate-200 mb-4">
              Comienza tu camino como inversor hoy mismo
            </h2>
            <p className="text-slate-600 dark:text-slate-400 mb-8 text-lg">
              Más de 2,300 estudiantes ya han dado el primer paso hacia la
              independencia financiera con este curso. ¡Únete a ellos!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="#contenido"
                className="inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-jpm-blue to-blue-600 text-white font-medium rounded-xl hover:shadow-lg hover:shadow-jpm-blue/25 transition-all duration-300 hover:-translate-y-1"
              >
                Inscribirse gratis
                <ArrowRight className="h-4 w-4 ml-2" />
              </Link>
              <Link
                href="/educacion/cursos"
                className="inline-flex items-center justify-center px-6 py-4 border border-jpm-blue text-jpm-blue font-medium rounded-xl hover:bg-jpm-blue/5 transition-all duration-300"
              >
                Ver otros cursos
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
