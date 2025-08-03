"use client";

import { useState, useEffect } from "react";
import {
  ArrowRight,
  ChevronLeft,
  BookOpen,
  Share2,
  BookmarkPlus,
  List,
  Check,
  ArrowUp,
  Link2,
} from "lucide-react";
import Link from "next/link";

export default function MercadoFinancieroPage() {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [showBackToTop, setShowBackToTop] = useState(false);
  const [activeSection, setActiveSection] = useState("introduccion");
  const [isTOCOpen, setIsTOCOpen] = useState(false);
  const [isSaved, setIsSaved] = useState(false);
  const [showShareMenu, setShowShareMenu] = useState(false);

  // Manejo del scroll para barra de progreso y botón "volver arriba"
  useEffect(() => {
    const handleScroll = () => {
      // Calcular progreso de lectura
      const totalHeight = document.body.scrollHeight - window.innerHeight;
      const progress = (window.scrollY / totalHeight) * 100;
      setScrollProgress(progress);

      // Mostrar/ocultar botón "volver arriba"
      setShowBackToTop(window.scrollY > 400);

      // Actualizar sección activa basada en la posición de scroll
      const sections = document.querySelectorAll("[data-section]");
      sections.forEach((section) => {
        const sectionTop = section.getBoundingClientRect().top;
        if (sectionTop < 200 && sectionTop > -200) {
          setActiveSection(
            section.getAttribute("data-section") || "introduccion",
          );
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Función para guardar el módulo
  const handleSaveModule = () => {
    setIsSaved(!isSaved);
    // Aquí iría la lógica para guardar en localStorage o backend
  };

  // Función para compartir
  const handleShare = async (platform: string) => {
    const url = window.location.href;
    const title = "Curso de Inversión Básica: ¿Qué es un Mercado Financiero?";

    switch (platform) {
      case "copy":
        navigator.clipboard.writeText(url);
        alert("¡Enlace copiado al portapapeles!");
        break;
      case "twitter":
        window.open(
          `https://twitter.com/intent/tweet?url=${encodeURIComponent(url)}&text=${encodeURIComponent(title)}`,
          "_blank",
        );
        break;
      case "whatsapp":
        window.open(
          `https://api.whatsapp.com/send?text=${encodeURIComponent(title + " " + url)}`,
          "_blank",
        );
        break;
      case "linkedin":
        window.open(
          `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(url)}`,
          "_blank",
        );
        break;
      default:
        if (navigator.share) {
          try {
            await navigator.share({ title, url });
          } catch (err) {
            console.error("Error al compartir:", err);
          }
        }
    }

    setShowShareMenu(false);
  };

  // Función para desplazarse a una sección
  const scrollToSection = (sectionId: string) => {
    const section = document.querySelector(`[data-section="${sectionId}"]`);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
      setIsTOCOpen(false);
    }
  };

  // Función para volver arriba
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-slate-50/30 dark:to-slate-900/30">
      {/* Barra de progreso fija */}
      <div className="fixed top-0 left-0 w-full h-1 bg-slate-200 dark:bg-slate-700 z-50">
        <div
          className="h-full bg-gradient-to-r from-jpm-blue to-blue-600 transition-all duration-300"
          style={{ width: `${scrollProgress}%` }}
        ></div>
      </div>

      {/* Botón flotante "Volver arriba" */}
      {showBackToTop && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-6 right-6 p-3 rounded-full bg-jpm-blue text-white shadow-lg hover:bg-blue-600 transition-all z-40 animate-fade-in"
          aria-label="Volver arriba"
        >
          <ArrowUp size={20} />
        </button>
      )}

      {/* Índice de contenidos flotante */}
      <div
        className={`fixed top-1/2 transform -translate-y-1/2 ${isTOCOpen ? "left-0" : "-left-64"} transition-all duration-300 z-40`}
      >
        <div className="flex">
          <div className="bg-white dark:bg-slate-800 shadow-xl rounded-r-xl p-4 w-64 max-h-[80vh] overflow-y-auto border-r border-t border-b border-slate-200 dark:border-slate-700">
            <h4 className="font-bold text-slate-800 dark:text-slate-200 mb-3">
              Contenido del módulo
            </h4>
            <ul className="space-y-2 text-sm">
              <li>
                <button
                  onClick={() => scrollToSection("introduccion")}
                  className={`w-full text-left px-3 py-2 rounded-lg transition-colors ${activeSection === "introduccion" ? "bg-jpm-blue/10 text-jpm-blue font-medium" : "text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-700"}`}
                >
                  Introducción
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection("definicion")}
                  className={`w-full text-left px-3 py-2 rounded-lg transition-colors ${activeSection === "definicion" ? "bg-jpm-blue/10 text-jpm-blue font-medium" : "text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-700"}`}
                >
                  Definición y Conceptos
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection("tipos")}
                  className={`w-full text-left px-3 py-2 rounded-lg transition-colors ${activeSection === "tipos" ? "bg-jpm-blue/10 text-jpm-blue font-medium" : "text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-700"}`}
                >
                  Tipos de Mercados
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection("participantes")}
                  className={`w-full text-left px-3 py-2 rounded-lg transition-colors ${activeSection === "participantes" ? "bg-jpm-blue/10 text-jpm-blue font-medium" : "text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-700"}`}
                >
                  Participantes
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection("funciones")}
                  className={`w-full text-left px-3 py-2 rounded-lg transition-colors ${activeSection === "funciones" ? "bg-jpm-blue/10 text-jpm-blue font-medium" : "text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-700"}`}
                >
                  Funciones
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection("sistema-argentino")}
                  className={`w-full text-left px-3 py-2 rounded-lg transition-colors ${activeSection === "sistema-argentino" ? "bg-jpm-blue/10 text-jpm-blue font-medium" : "text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-700"}`}
                >
                  Sistema Financiero Argentino
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection("importancia")}
                  className={`w-full text-left px-3 py-2 rounded-lg transition-colors ${activeSection === "importancia" ? "bg-jpm-blue/10 text-jpm-blue font-medium" : "text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-700"}`}
                >
                  Importancia para Inversores
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection("empezar")}
                  className={`w-full text-left px-3 py-2 rounded-lg transition-colors ${activeSection === "empezar" ? "bg-jpm-blue/10 text-jpm-blue font-medium" : "text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-700"}`}
                >
                  Cómo Empezar
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection("conclusiones")}
                  className={`w-full text-left px-3 py-2 rounded-lg transition-colors ${activeSection === "conclusiones" ? "bg-jpm-blue/10 text-jpm-blue font-medium" : "text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-700"}`}
                >
                  Conclusiones
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection("actividades")}
                  className={`w-full text-left px-3 py-2 rounded-lg transition-colors ${activeSection === "actividades" ? "bg-jpm-blue/10 text-jpm-blue font-medium" : "text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-700"}`}
                >
                  Actividades Prácticas
                </button>
              </li>
            </ul>
          </div>
          <button
            onClick={() => setIsTOCOpen(!isTOCOpen)}
            className="self-start mt-5 p-2 bg-jpm-blue text-white rounded-r-lg shadow-lg hover:bg-blue-600 transition-colors"
            aria-label={isTOCOpen ? "Cerrar índice" : "Abrir índice"}
          >
            <List size={20} />
          </button>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12">
        {/* Navigation y Acciones */}
        <div className="flex items-center justify-between mb-8">
          <div className="flex items-center text-sm text-slate-600 dark:text-slate-400">
            <Link
              href="/educacion/cursos/inversion-basica"
              className="flex items-center hover:text-jpm-blue transition-colors"
            >
              <ChevronLeft className="h-4 w-4 mr-1" />
              Volver al curso
            </Link>
          </div>
          <div className="flex space-x-4">
            <button
              onClick={handleSaveModule}
              className={`flex items-center transition-colors ${isSaved ? "text-jpm-blue" : "text-slate-600 dark:text-slate-400 hover:text-jpm-blue"}`}
              aria-label={isSaved ? "Guardado" : "Guardar módulo"}
            >
              {isSaved ? (
                <>
                  <Check className="h-5 w-5 mr-1" />
                  <span className="hidden sm:inline">Guardado</span>
                </>
              ) : (
                <>
                  <BookmarkPlus className="h-5 w-5 mr-1" />
                  <span className="hidden sm:inline">Guardar</span>
                </>
              )}
            </button>

            <div className="relative">
              <button
                onClick={() => setShowShareMenu(!showShareMenu)}
                className="flex items-center text-slate-600 dark:text-slate-400 hover:text-jpm-blue transition-colors"
                aria-label="Compartir"
              >
                <Share2 className="h-5 w-5 mr-1" />
                <span className="hidden sm:inline">Compartir</span>
              </button>

              {showShareMenu && (
                <div className="absolute right-0 mt-2 w-48 bg-white dark:bg-slate-800 rounded-xl shadow-xl border border-slate-200 dark:border-slate-700 py-2 z-50 animate-fade-in">
                  <button
                    onClick={() => handleShare("copy")}
                    className="w-full text-left px-4 py-2 hover:bg-slate-100 dark:hover:bg-slate-700 flex items-center text-sm"
                  >
                    <Link2 className="h-4 w-4 mr-2 text-slate-500" />
                    Copiar enlace
                  </button>
                  <button
                    onClick={() => handleShare("twitter")}
                    className="w-full text-left px-4 py-2 hover:bg-slate-100 dark:hover:bg-slate-700 flex items-center text-sm"
                  >
                    <svg
                      className="h-4 w-4 mr-2 text-[#1DA1F2]"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                    >
                      <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
                    </svg>
                    Twitter
                  </button>
                  <button
                    onClick={() => handleShare("whatsapp")}
                    className="w-full text-left px-4 py-2 hover:bg-slate-100 dark:hover:bg-slate-700 flex items-center text-sm"
                  >
                    <svg
                      className="h-4 w-4 mr-2 text-[#25D366]"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                    >
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                    </svg>
                    WhatsApp
                  </button>
                  <button
                    onClick={() => handleShare("linkedin")}
                    className="w-full text-left px-4 py-2 hover:bg-slate-100 dark:hover:bg-slate-700 flex items-center text-sm"
                  >
                    <svg
                      className="h-4 w-4 mr-2 text-[#0A66C2]"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                    >
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                    </svg>
                    LinkedIn
                  </button>
                </div>
              )}
            </div>

            <Link
              href="/educacion/cursos/inversion-basica"
              className="flex items-center text-slate-600 dark:text-slate-400 hover:text-jpm-blue transition-colors"
            >
              <BookOpen className="h-5 w-5 mr-1" />
              <span className="hidden sm:inline">Ver curso completo</span>
            </Link>
          </div>
        </div>

        {/* Content Header */}
        <div className="mb-12">
          <div className="mb-6 flex flex-col md:flex-row md:items-center md:justify-between">
            <div className="flex items-center mb-4 md:mb-0">
              <div className="p-3 rounded-xl bg-gradient-to-br from-jpm-blue/10 to-blue-600/10 border border-jpm-blue/20 mr-4">
                <BookOpen className="h-6 w-6 text-jpm-blue" />
              </div>
              <div>
                <div className="text-sm font-medium text-jpm-blue mb-1">
                  Módulo 1 - Lección 1
                </div>
                <h1 className="text-3xl md:text-4xl font-playfair font-bold text-slate-800 dark:text-slate-200">
                  ¿Qué es un Mercado Financiero?
                </h1>
              </div>
            </div>

            <div className="flex items-center space-x-2 px-4 py-2 bg-slate-100 dark:bg-slate-800/60 rounded-lg self-start">
              <div className="text-sm font-medium">Progreso del curso:</div>
              <div className="w-32 h-2 bg-slate-200 dark:bg-slate-700 rounded-full overflow-hidden">
                <div
                  className="h-full bg-jpm-blue rounded-full"
                  style={{ width: "10%" }}
                ></div>
              </div>
              <div className="text-sm font-medium">10%</div>
            </div>
          </div>

          <p className="text-xl text-slate-600 dark:text-slate-400 mb-6 leading-relaxed max-w-4xl">
            Una introducción a los mercados financieros en el contexto
            argentino, su funcionamiento, participantes y rol en la economía.
          </p>

          <div className="flex flex-wrap gap-4 mb-6">
            <div className="flex items-center px-4 py-2 bg-slate-100 dark:bg-slate-800/60 rounded-lg">
              <svg
                className="h-5 w-5 text-slate-500 mr-2"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
              <span className="text-sm">Tiempo de lectura: 15 minutos</span>
            </div>

            <div className="flex items-center px-4 py-2 bg-slate-100 dark:bg-slate-800/60 rounded-lg">
              <svg
                className="h-5 w-5 text-slate-500 mr-2"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                />
              </svg>
              <span className="text-sm">
                Por Dr. Ricardo Fernández, PhD en Economía Financiera
              </span>
            </div>

            <div className="flex items-center px-4 py-2 bg-slate-100 dark:bg-slate-800/60 rounded-lg">
              <svg
                className="h-5 w-5 text-slate-500 mr-2"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"
                />
              </svg>
              <span className="text-sm">
                Última actualización: 1 de agosto, 2025
              </span>
            </div>
          </div>

          {/* Tarjetas de navegación rápida */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
            <div className="bg-white dark:bg-slate-800 rounded-xl p-4 border border-slate-200 dark:border-slate-700 hover:shadow-md transition-shadow">
              <button
                onClick={() => scrollToSection("introduccion")}
                className="w-full flex items-center text-left"
              >
                <div className="w-10 h-10 rounded-lg bg-jpm-blue/10 flex items-center justify-center mr-3 flex-shrink-0">
                  <span className="text-jpm-blue font-medium">01</span>
                </div>
                <div>
                  <h3 className="font-medium text-slate-800 dark:text-slate-200">
                    Introducción
                  </h3>
                  <p className="text-sm text-slate-500 dark:text-slate-400">
                    Conceptos básicos y definiciones
                  </p>
                </div>
              </button>
            </div>

            <div className="bg-white dark:bg-slate-800 rounded-xl p-4 border border-slate-200 dark:border-slate-700 hover:shadow-md transition-shadow">
              <button
                onClick={() => scrollToSection("sistema-argentino")}
                className="w-full flex items-center text-left"
              >
                <div className="w-10 h-10 rounded-lg bg-jpm-blue/10 flex items-center justify-center mr-3 flex-shrink-0">
                  <span className="text-jpm-blue font-medium">02</span>
                </div>
                <div>
                  <h3 className="font-medium text-slate-800 dark:text-slate-200">
                    Sistema Financiero Argentino
                  </h3>
                  <p className="text-sm text-slate-500 dark:text-slate-400">
                    Características y particularidades
                  </p>
                </div>
              </button>
            </div>

            <div className="bg-white dark:bg-slate-800 rounded-xl p-4 border border-slate-200 dark:border-slate-700 hover:shadow-md transition-shadow">
              <button
                onClick={() => scrollToSection("empezar")}
                className="w-full flex items-center text-left"
              >
                <div className="w-10 h-10 rounded-lg bg-jpm-blue/10 flex items-center justify-center mr-3 flex-shrink-0">
                  <span className="text-jpm-blue font-medium">03</span>
                </div>
                <div>
                  <h3 className="font-medium text-slate-800 dark:text-slate-200">
                    Cómo Empezar a Invertir
                  </h3>
                  <p className="text-sm text-slate-500 dark:text-slate-400">
                    Pasos prácticos para comenzar
                  </p>
                </div>
              </button>
            </div>
          </div>
        </div>

        <div className="prose prose-slate dark:prose-invert max-w-4xl mx-auto prose-headings:font-playfair prose-img:rounded-xl">
          {/* Introducción */}
          <div
            id="introduccion"
            data-section="introduccion"
            className="light-blue-gradient rounded-2xl p-8 border border-blue-200/30 dark:border-blue-500/30 mb-8"
          >
            <h2 className="text-2xl font-bold text-slate-800 dark:text-slate-200 mt-0">
              Introducción
            </h2>
            <p className="mb-0">
              Imaginen por un momento que tienen dinero que no necesitan usar
              inmediatamente. O al revés, que necesitan financiamiento para
              comprar algo que no pueden pagar ahora mismo. ¿Dónde irían? La
              respuesta es el mercado financiero. En esta lección, exploraremos
              qué son estos mercados, cómo funcionan en Argentina, y por qué son
              fundamentales para nuestra economía y decisiones de inversión.
            </p>
          </div>

          <h2 id="definicion" data-section="definicion">
            Definición y Conceptos Básicos
          </h2>
          <p>
            Un <strong>mercado financiero</strong> es un sistema o lugar (físico
            o virtual) donde se intercambian activos financieros entre
            compradores y vendedores. Estos activos incluyen acciones, bonos,
            divisas, commodities, y otros instrumentos financieros. La función
            principal de estos mercados es conectar a quienes tienen excedentes
            de capital con quienes lo necesitan.
          </p>

          <div className="bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl overflow-hidden mb-8">
            <div className="p-6">
              <h3 className="text-lg font-bold text-slate-800 dark:text-slate-200 mb-4">
                Características Esenciales de los Mercados Financieros
              </h3>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <div className="w-6 h-6 rounded-full bg-jpm-blue/10 text-jpm-blue flex items-center justify-center mr-3 flex-shrink-0 mt-0.5">
                    1
                  </div>
                  <div>
                    <strong>Liquidez:</strong> Facilidad para comprar o vender
                    activos rápidamente sin afectar significativamente su
                    precio.
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="w-6 h-6 rounded-full bg-jpm-blue/10 text-jpm-blue flex items-center justify-center mr-3 flex-shrink-0 mt-0.5">
                    2
                  </div>
                  <div>
                    <strong>Eficiencia:</strong> Capacidad del mercado para
                    incorporar toda la información disponible en los precios.
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="w-6 h-6 rounded-full bg-jpm-blue/10 text-jpm-blue flex items-center justify-center mr-3 flex-shrink-0 mt-0.5">
                    3
                  </div>
                  <div>
                    <strong>Transparencia:</strong> Disponibilidad de
                    información sobre precios, volúmenes y operaciones.
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="w-6 h-6 rounded-full bg-jpm-blue/10 text-jpm-blue flex items-center justify-center mr-3 flex-shrink-0 mt-0.5">
                    4
                  </div>
                  <div>
                    <strong>Profundidad:</strong> Existencia de órdenes de
                    compra y venta por encima y por debajo del precio actual.
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="w-6 h-6 rounded-full bg-jpm-blue/10 text-jpm-blue flex items-center justify-center mr-3 flex-shrink-0 mt-0.5">
                    5
                  </div>
                  <div>
                    <strong>Regulación:</strong> Conjunto de normas que buscan
                    proteger a los inversores y garantizar el buen
                    funcionamiento.
                  </div>
                </li>
              </ul>
            </div>
          </div>

          <h2 id="tipos" data-section="tipos">
            Tipos de Mercados Financieros
          </h2>
          <p>
            Los mercados financieros se pueden clasificar según diferentes
            criterios. A continuación, veremos los principales tipos y sus
            ejemplos en Argentina:
          </p>

          <div className="overflow-x-auto mb-8">
            <table className="min-w-full border border-slate-200 dark:border-slate-700 rounded-xl">
              <thead className="bg-slate-100 dark:bg-slate-800">
                <tr>
                  <th className="px-6 py-3 text-left text-sm font-bold text-slate-800 dark:text-slate-200">
                    Tipo de Mercado
                  </th>
                  <th className="px-6 py-3 text-left text-sm font-bold text-slate-800 dark:text-slate-200">
                    Descripción
                  </th>
                  <th className="px-6 py-3 text-left text-sm font-bold text-slate-800 dark:text-slate-200">
                    Ejemplo en Argentina
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white dark:bg-slate-800">
                <tr className="border-t border-slate-200 dark:border-slate-700">
                  <td className="px-6 py-4 text-sm font-medium text-slate-800 dark:text-slate-200">
                    Mercado de Capitales
                  </td>
                  <td className="px-6 py-4 text-sm text-slate-600 dark:text-slate-400">
                    Donde se negocian instrumentos de renta variable (acciones)
                    y renta fija (bonos) a mediano y largo plazo.
                  </td>
                  <td className="px-6 py-4 text-sm text-slate-600 dark:text-slate-400">
                    Bolsas y Mercados Argentinos (BYMA)
                  </td>
                </tr>
                <tr className="border-t border-slate-200 dark:border-slate-700">
                  <td className="px-6 py-4 text-sm font-medium text-slate-800 dark:text-slate-200">
                    Mercado Monetario
                  </td>
                  <td className="px-6 py-4 text-sm text-slate-600 dark:text-slate-400">
                    Donde se negocian activos de alta liquidez y corto plazo
                    (menos de un año).
                  </td>
                  <td className="px-6 py-4 text-sm text-slate-600 dark:text-slate-400">
                    Mercado de LECAPs, LELIQs, Pases
                  </td>
                </tr>
                <tr className="border-t border-slate-200 dark:border-slate-700">
                  <td className="px-6 py-4 text-sm font-medium text-slate-800 dark:text-slate-200">
                    Mercado de Divisas
                  </td>
                  <td className="px-6 py-4 text-sm text-slate-600 dark:text-slate-400">
                    Donde se compran y venden monedas extranjeras.
                  </td>
                  <td className="px-6 py-4 text-sm text-slate-600 dark:text-slate-400">
                    MULC, Mercado CCL, MEP, Blue
                  </td>
                </tr>
                <tr className="border-t border-slate-200 dark:border-slate-700">
                  <td className="px-6 py-4 text-sm font-medium text-slate-800 dark:text-slate-200">
                    Mercado de Derivados
                  </td>
                  <td className="px-6 py-4 text-sm text-slate-600 dark:text-slate-400">
                    Donde se negocian contratos cuyo valor deriva de un activo
                    subyacente.
                  </td>
                  <td className="px-6 py-4 text-sm text-slate-600 dark:text-slate-400">
                    MATBA-ROFEX
                  </td>
                </tr>
                <tr className="border-t border-slate-200 dark:border-slate-700">
                  <td className="px-6 py-4 text-sm font-medium text-slate-800 dark:text-slate-200">
                    Mercado de Crédito
                  </td>
                  <td className="px-6 py-4 text-sm text-slate-600 dark:text-slate-400">
                    Donde se otorgan préstamos y financiamiento.
                  </td>
                  <td className="px-6 py-4 text-sm text-slate-600 dark:text-slate-400">
                    Sistema Bancario, Fintech
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          <p>
            Es importante destacar que en Argentina estos mercados tienen
            particularidades propias, como la multiplicidad de tipos de cambio
            (oficial, MEP, CCL, blue) que no existen en otras economías más
            estables.
          </p>

          <div className="bg-slate-100 dark:bg-slate-800/50 rounded-xl p-6 border border-slate-200 dark:border-slate-700 mb-8">
            <h3 className="text-lg font-bold text-slate-800 dark:text-slate-200 mb-3">
              Caso Argentino: Particularidad de los Múltiples Tipos de Cambio
            </h3>
            <p className="text-slate-600 dark:text-slate-400 mb-4">
              A diferencia de economías desarrolladas, Argentina opera con
              varios tipos de cambio simultáneamente. Esta situación genera
              oportunidades y riesgos particulares para los inversores.
            </p>
            <div className="overflow-x-auto">
              <table className="min-w-full border border-slate-200 dark:border-slate-700 rounded-xl">
                <thead className="bg-white dark:bg-slate-700">
                  <tr>
                    <th className="px-4 py-2 text-left text-xs font-bold text-slate-800 dark:text-slate-200">
                      Tipo de Cambio
                    </th>
                    <th className="px-4 py-2 text-left text-xs font-bold text-slate-800 dark:text-slate-200">
                      Descripción
                    </th>
                    <th className="px-4 py-2 text-left text-xs font-bold text-slate-800 dark:text-slate-200">
                      Acceso
                    </th>
                    <th className="px-4 py-2 text-left text-xs font-bold text-slate-800 dark:text-slate-200">
                      Uso Principal
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white dark:bg-slate-800">
                  <tr className="border-t border-slate-200 dark:border-slate-700">
                    <td className="px-4 py-2 text-xs font-medium text-slate-800 dark:text-slate-200">
                      Oficial
                    </td>
                    <td className="px-4 py-2 text-xs text-slate-600 dark:text-slate-400">
                      Tipo de cambio controlado por el BCRA
                    </td>
                    <td className="px-4 py-2 text-xs text-slate-600 dark:text-slate-400">
                      Restringido según normativa cambiaria
                    </td>
                    <td className="px-4 py-2 text-xs text-slate-600 dark:text-slate-400">
                      Comercio exterior, pagos de deuda
                    </td>
                  </tr>
                  <tr className="border-t border-slate-200 dark:border-slate-700">
                    <td className="px-4 py-2 text-xs font-medium text-slate-800 dark:text-slate-200">
                      MEP (Dólar Bolsa)
                    </td>
                    <td className="px-4 py-2 text-xs text-slate-600 dark:text-slate-400">
                      Surge de comprar bonos en pesos y venderlos en dólares
                    </td>
                    <td className="px-4 py-2 text-xs text-slate-600 dark:text-slate-400">
                      Legal, a través de brokers
                    </td>
                    <td className="px-4 py-2 text-xs text-slate-600 dark:text-slate-400">
                      Inversiones, ahorro
                    </td>
                  </tr>
                  <tr className="border-t border-slate-200 dark:border-slate-700">
                    <td className="px-4 py-2 text-xs font-medium text-slate-800 dark:text-slate-200">
                      CCL (Contado con Liquidación)
                    </td>
                    <td className="px-4 py-2 text-xs text-slate-600 dark:text-slate-400">
                      Similar al MEP pero permite transferir al exterior
                    </td>
                    <td className="px-4 py-2 text-xs text-slate-600 dark:text-slate-400">
                      Legal, a través de brokers
                    </td>
                    <td className="px-4 py-2 text-xs text-slate-600 dark:text-slate-400">
                      Girar divisas al exterior
                    </td>
                  </tr>
                  <tr className="border-t border-slate-200 dark:border-slate-700">
                    <td className="px-4 py-2 text-xs font-medium text-slate-800 dark:text-slate-200">
                      Blue (Informal)
                    </td>
                    <td className="px-4 py-2 text-xs text-slate-600 dark:text-slate-400">
                      Mercado paralelo no regulado
                    </td>
                    <td className="px-4 py-2 text-xs text-slate-600 dark:text-slate-400">
                      Informal, &quot;cuevas&quot;
                    </td>
                    <td className="px-4 py-2 text-xs text-slate-600 dark:text-slate-400">
                      Ahorro, economía informal
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          <h2 id="participantes" data-section="participantes">
            Participantes del Mercado Financiero
          </h2>
          <p>
            En los mercados financieros interactúan diversos agentes, cada uno
            con objetivos y roles diferentes:
          </p>

          <div className="grid md:grid-cols-2 gap-6 mb-8">
            <div className="bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl p-6">
              <h3 className="text-lg font-bold text-slate-800 dark:text-slate-200 mb-3">
                Oferentes de Capital
              </h3>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <div className="w-2 h-2 rounded-full bg-jpm-blue mt-2 mr-2 flex-shrink-0"></div>
                  <div>
                    <strong>Individuos:</strong> Personas que invierten sus
                    ahorros.
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 rounded-full bg-jpm-blue mt-2 mr-2 flex-shrink-0"></div>
                  <div>
                    <strong>Instituciones:</strong> FCIs, AFJPs
                    (históricamente), compañías de seguros, fondos de pensión.
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 rounded-full bg-jpm-blue mt-2 mr-2 flex-shrink-0"></div>
                  <div>
                    <strong>Empresas:</strong> Con excedentes de capital
                    temporales.
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 rounded-full bg-jpm-blue mt-2 mr-2 flex-shrink-0"></div>
                  <div>
                    <strong>Gobierno:</strong> A través de organismos públicos.
                  </div>
                </li>
              </ul>
            </div>

            <div className="bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl p-6">
              <h3 className="text-lg font-bold text-slate-800 dark:text-slate-200 mb-3">
                Demandantes de Capital
              </h3>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <div className="w-2 h-2 rounded-full bg-jpm-blue mt-2 mr-2 flex-shrink-0"></div>
                  <div>
                    <strong>Empresas:</strong> Para financiar proyectos o
                    capital de trabajo.
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 rounded-full bg-jpm-blue mt-2 mr-2 flex-shrink-0"></div>
                  <div>
                    <strong>Gobierno:</strong> Nacional, provincial o municipal,
                    para financiar déficit.
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 rounded-full bg-jpm-blue mt-2 mr-2 flex-shrink-0"></div>
                  <div>
                    <strong>Individuos:</strong> A través de créditos
                    personales, hipotecarios, etc.
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 rounded-full bg-jpm-blue mt-2 mr-2 flex-shrink-0"></div>
                  <div>
                    <strong>Sector externo:</strong> Empresas extranjeras e
                    inversores internacionales.
                  </div>
                </li>
              </ul>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-6 mb-8">
            <div className="bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl p-6">
              <h3 className="text-lg font-bold text-slate-800 dark:text-slate-200 mb-3">
                Intermediarios
              </h3>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <div className="w-2 h-2 rounded-full bg-jpm-blue mt-2 mr-2 flex-shrink-0"></div>
                  <div>
                    <strong>Bancos:</strong> Comerciales, de inversión, públicos
                    y privados.
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 rounded-full bg-jpm-blue mt-2 mr-2 flex-shrink-0"></div>
                  <div>
                    <strong>Sociedades de Bolsa:</strong> Agentes de liquidación
                    y compensación (ALyCs).
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 rounded-full bg-jpm-blue mt-2 mr-2 flex-shrink-0"></div>
                  <div>
                    <strong>Agentes:</strong> Asesores financieros, agentes de
                    negociación.
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 rounded-full bg-jpm-blue mt-2 mr-2 flex-shrink-0"></div>
                  <div>
                    <strong>Fintech:</strong> Plataformas digitales de inversión
                    y préstamos.
                  </div>
                </li>
              </ul>
            </div>

            <div className="bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl p-6">
              <h3 className="text-lg font-bold text-slate-800 dark:text-slate-200 mb-3">
                Reguladores
              </h3>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <div className="w-2 h-2 rounded-full bg-jpm-blue mt-2 mr-2 flex-shrink-0"></div>
                  <div>
                    <strong>BCRA:</strong> Banco Central de la República
                    Argentina.
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 rounded-full bg-jpm-blue mt-2 mr-2 flex-shrink-0"></div>
                  <div>
                    <strong>CNV:</strong> Comisión Nacional de Valores.
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 rounded-full bg-jpm-blue mt-2 mr-2 flex-shrink-0"></div>
                  <div>
                    <strong>SSN:</strong> Superintendencia de Seguros de la
                    Nación.
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 rounded-full bg-jpm-blue mt-2 mr-2 flex-shrink-0"></div>
                  <div>
                    <strong>UIF:</strong> Unidad de Información Financiera.
                  </div>
                </li>
              </ul>
            </div>
          </div>

          <h2 id="funciones" data-section="funciones">
            Funciones de los Mercados Financieros
          </h2>
          <p>
            Los mercados financieros cumplen varias funciones cruciales para el
            funcionamiento de la economía:
          </p>

          <div className="relative mb-8">
            <div className="absolute inset-0 bg-gradient-to-r from-jpm-blue/5 to-blue-600/5 rounded-xl"></div>
            <div className="relative overflow-hidden rounded-xl">
              <div className="grid md:grid-cols-2 gap-px bg-slate-200 dark:bg-slate-700">
                <div className="bg-white dark:bg-slate-800 p-6">
                  <h3 className="text-lg font-bold text-slate-800 dark:text-slate-200 mb-3">
                    1. Canalización del Ahorro a la Inversión
                  </h3>
                  <p className="text-slate-600 dark:text-slate-400 mb-0">
                    Conectan a quienes tienen excedentes de capital con quienes
                    necesitan financiamiento, optimizando la asignación de
                    recursos en la economía.
                  </p>
                </div>
                <div className="bg-white dark:bg-slate-800 p-6">
                  <h3 className="text-lg font-bold text-slate-800 dark:text-slate-200 mb-3">
                    2. Descubrimiento de Precios
                  </h3>
                  <p className="text-slate-600 dark:text-slate-400 mb-0">
                    A través de la oferta y demanda, determinan el valor
                    &quot;justo&quot; de los activos, reflejando toda la
                    información disponible.
                  </p>
                </div>
                <div className="bg-white dark:bg-slate-800 p-6">
                  <h3 className="text-lg font-bold text-slate-800 dark:text-slate-200 mb-3">
                    3. Gestión del Riesgo
                  </h3>
                  <p className="text-slate-600 dark:text-slate-400 mb-0">
                    Permiten transferir y diversificar riesgos mediante
                    instrumentos como seguros, derivados y diversificación de
                    inversiones.
                  </p>
                </div>
                <div className="bg-white dark:bg-slate-800 p-6">
                  <h3 className="text-lg font-bold text-slate-800 dark:text-slate-200 mb-3">
                    4. Facilitación de Liquidez
                  </h3>
                  <p className="text-slate-600 dark:text-slate-400 mb-0">
                    Permiten convertir activos en efectivo rápidamente,
                    facilitando el comercio y la inversión.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <h2 id="sistema-argentino" data-section="sistema-argentino">
            El Sistema Financiero Argentino
          </h2>
          <p>
            Argentina tiene un sistema financiero que ha evolucionado a través
            de múltiples crisis y cambios regulatorios. Su estructura actual
            incluye:
          </p>

          <div className="mb-8">
            <div className="bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl overflow-hidden">
              <div className="px-6 py-4 bg-slate-50 dark:bg-slate-700">
                <h3 className="text-lg font-bold text-slate-800 dark:text-slate-200 mb-0">
                  Estructura del Sistema Financiero Argentino
                </h3>
              </div>
              <div className="p-6">
                <div className="flex flex-col md:flex-row gap-6">
                  <div className="md:w-1/2">
                    <h4 className="text-md font-bold text-slate-800 dark:text-slate-200 mb-3">
                      Mercado de Capitales
                    </h4>
                    <ul className="space-y-2">
                      <li className="flex items-start">
                        <div className="w-2 h-2 rounded-full bg-jpm-blue mt-2 mr-2 flex-shrink-0"></div>
                        <div className="text-slate-600 dark:text-slate-400">
                          <strong>BYMA:</strong> Bolsas y Mercados Argentinos,
                          principal mercado bursátil del país.
                        </div>
                      </li>
                      <li className="flex items-start">
                        <div className="w-2 h-2 rounded-full bg-jpm-blue mt-2 mr-2 flex-shrink-0"></div>
                        <div className="text-slate-600 dark:text-slate-400">
                          <strong>MAE:</strong> Mercado Abierto Electrónico,
                          para títulos públicos y privados.
                        </div>
                      </li>
                      <li className="flex items-start">
                        <div className="w-2 h-2 rounded-full bg-jpm-blue mt-2 mr-2 flex-shrink-0"></div>
                        <div className="text-slate-600 dark:text-slate-400">
                          <strong>MATBA-ROFEX:</strong> Mercado a Término y de
                          Futuros.
                        </div>
                      </li>
                    </ul>
                  </div>
                  <div className="md:w-1/2">
                    <h4 className="text-md font-bold text-slate-800 dark:text-slate-200 mb-3">
                      Sistema Bancario
                    </h4>
                    <ul className="space-y-2">
                      <li className="flex items-start">
                        <div className="w-2 h-2 rounded-full bg-jpm-blue mt-2 mr-2 flex-shrink-0"></div>
                        <div className="text-slate-600 dark:text-slate-400">
                          <strong>BCRA:</strong> Autoridad monetaria y regulador
                          bancario.
                        </div>
                      </li>
                      <li className="flex items-start">
                        <div className="w-2 h-2 rounded-full bg-jpm-blue mt-2 mr-2 flex-shrink-0"></div>
                        <div className="text-slate-600 dark:text-slate-400">
                          <strong>Bancos Públicos:</strong> Banco Nación, bancos
                          provinciales.
                        </div>
                      </li>
                      <li className="flex items-start">
                        <div className="w-2 h-2 rounded-full bg-jpm-blue mt-2 mr-2 flex-shrink-0"></div>
                        <div className="text-slate-600 dark:text-slate-400">
                          <strong>Bancos Privados:</strong> Nacionales y
                          extranjeros.
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl p-6 mb-8">
            <h3 className="text-lg font-bold text-slate-800 dark:text-slate-200 mb-4">
              Particularidades del Mercado Argentino
            </h3>
            <div className="space-y-4">
              <div className="flex items-start">
                <div className="w-8 h-8 rounded-full bg-jpm-blue/10 text-jpm-blue flex items-center justify-center mr-4 flex-shrink-0 mt-0.5">
                  <span>1</span>
                </div>
                <div>
                  <h4 className="font-bold text-slate-800 dark:text-slate-200">
                    Alta Volatilidad
                  </h4>
                  <p className="text-slate-600 dark:text-slate-400">
                    El mercado argentino se caracteriza por su alta volatilidad,
                    influenciada por factores políticos, regulatorios y
                    macroeconómicos. Los ciclos de boom-and-bust son más
                    pronunciados que en mercados desarrollados.
                  </p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="w-8 h-8 rounded-full bg-jpm-blue/10 text-jpm-blue flex items-center justify-center mr-4 flex-shrink-0 mt-0.5">
                  <span>2</span>
                </div>
                <div>
                  <h4 className="font-bold text-slate-800 dark:text-slate-200">
                    Múltiples Tipos de Cambio
                  </h4>
                  <p className="text-slate-600 dark:text-slate-400">
                    Como vimos anteriormente, la existencia de múltiples tipos
                    de cambio genera oportunidades de arbitraje pero también
                    riesgos y complejidades adicionales.
                  </p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="w-8 h-8 rounded-full bg-jpm-blue/10 text-jpm-blue flex items-center justify-center mr-4 flex-shrink-0 mt-0.5">
                  <span>3</span>
                </div>
                <div>
                  <h4 className="font-bold text-slate-800 dark:text-slate-200">
                    Contexto Inflacionario
                  </h4>
                  <p className="text-slate-600 dark:text-slate-400">
                    La inflación crónica afecta las decisiones de inversión,
                    generando preferencia por activos dolarizados o indexados
                    (CER, UVA) y acortando los plazos de inversión.
                  </p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="w-8 h-8 rounded-full bg-jpm-blue/10 text-jpm-blue flex items-center justify-center mr-4 flex-shrink-0 mt-0.5">
                  <span>4</span>
                </div>
                <div>
                  <h4 className="font-bold text-slate-800 dark:text-slate-200">
                    Baja Profundidad
                  </h4>
                  <p className="text-slate-600 dark:text-slate-400">
                    Comparado con mercados desarrollados, el mercado argentino
                    tiene menor cantidad de empresas cotizantes y menores
                    volúmenes operados, lo que afecta su liquidez.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <h2 id="importancia" data-section="importancia">
            Importancia para los Inversores
          </h2>
          <p>
            Para un inversor que recién comienza, entender los mercados
            financieros es fundamental por varias razones:
          </p>

          <div className="grid md:grid-cols-3 gap-4 mb-8">
            <div className="bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl p-6">
              <h3 className="text-lg font-bold text-slate-800 dark:text-slate-200 mb-3">
                Oportunidades de Inversión
              </h3>
              <p className="text-slate-600 dark:text-slate-400 mb-0">
                Conocer los diferentes mercados permite identificar
                oportunidades acordes a tu perfil de riesgo, horizonte temporal
                y objetivos financieros.
              </p>
            </div>
            <div className="bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl p-6">
              <h3 className="text-lg font-bold text-slate-800 dark:text-slate-200 mb-3">
                Gestión del Riesgo
              </h3>
              <p className="text-slate-600 dark:text-slate-400 mb-0">
                Permite diversificar inversiones y proteger el capital contra
                riesgos específicos como inflación, devaluación o caídas en
                determinados sectores.
              </p>
            </div>
            <div className="bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl p-6">
              <h3 className="text-lg font-bold text-slate-800 dark:text-slate-200 mb-3">
                Toma de Decisiones
              </h3>
              <p className="text-slate-600 dark:text-slate-400 mb-0">
                Facilita decisiones informadas sobre cuándo, dónde y cómo
                invertir, basadas en el conocimiento de los mecanismos de
                mercado.
              </p>
            </div>
          </div>

          <h2 id="empezar" data-section="empezar">
            Cómo Empezar a Invertir en Argentina
          </h2>
          <p>
            Si estás dando tus primeros pasos en el mundo de las inversiones en
            Argentina, te recomiendo seguir estos pasos:
          </p>

          <div className="bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl overflow-hidden mb-8">
            <div className="p-6">
              <ol className="space-y-4">
                <li className="flex items-start">
                  <div className="w-8 h-8 rounded-full bg-jpm-blue text-white flex items-center justify-center mr-4 flex-shrink-0 mt-0.5">
                    <span>1</span>
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-800 dark:text-slate-200">
                      Define tus objetivos financieros
                    </h4>
                    <p className="text-slate-600 dark:text-slate-400">
                      ¿Para qué estás invirtiendo? ¿Cuál es tu horizonte
                      temporal? ¿Cuánto riesgo estás dispuesto a asumir?
                    </p>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="w-8 h-8 rounded-full bg-jpm-blue text-white flex items-center justify-center mr-4 flex-shrink-0 mt-0.5">
                    <span>2</span>
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-800 dark:text-slate-200">
                      Educate constantemente
                    </h4>
                    <p className="text-slate-600 dark:text-slate-400">
                      Continúa con este curso y complementa con libros,
                      seminarios y otras fuentes confiables de información.
                    </p>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="w-8 h-8 rounded-full bg-jpm-blue text-white flex items-center justify-center mr-4 flex-shrink-0 mt-0.5">
                    <span>3</span>
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-800 dark:text-slate-200">
                      Abre una cuenta en un broker
                    </h4>
                    <p className="text-slate-600 dark:text-slate-400">
                      Elige un ALyC registrado en la CNV. Hay opciones
                      tradicionales y fintech con bajos costos operativos.
                    </p>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="w-8 h-8 rounded-full bg-jpm-blue text-white flex items-center justify-center mr-4 flex-shrink-0 mt-0.5">
                    <span>4</span>
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-800 dark:text-slate-200">
                      Comienza con inversiones simples
                    </h4>
                    <p className="text-slate-600 dark:text-slate-400">
                      FCIs, bonos soberanos o acciones de empresas conocidas son
                      buenas opciones para principiantes.
                    </p>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="w-8 h-8 rounded-full bg-jpm-blue text-white flex items-center justify-center mr-4 flex-shrink-0 mt-0.5">
                    <span>5</span>
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-800 dark:text-slate-200">
                      Diversifica tus inversiones
                    </h4>
                    <p className="text-slate-600 dark:text-slate-400">
                      No pongas todos los huevos en la misma canasta. Distribuye
                      tus inversiones entre diferentes clases de activos.
                    </p>
                  </div>
                </li>
              </ol>
            </div>
          </div>

          <div
            id="conclusiones"
            data-section="conclusiones"
            className="light-blue-gradient rounded-2xl p-8 border border-blue-200/30 dark:border-blue-500/30 mb-8"
          >
            <h2 className="text-2xl font-bold text-slate-800 dark:text-slate-200 mt-0">
              Conclusiones
            </h2>
            <p className="mb-4">
              Los mercados financieros son fundamentales para el funcionamiento
              de la economía y ofrecen oportunidades para inversores de todos
              los perfiles. En Argentina, tienen particularidades propias
              derivadas de nuestra historia económica y contexto actual.
            </p>
            <p className="mb-0">
              A medida que avances en tu formación como inversor, comprenderás
              mejor cómo aprovechar las oportunidades que ofrecen y cómo
              gestionar los riesgos asociados. Recuerda que la educación
              financiera es un proceso continuo y que cada mercado evoluciona
              con el tiempo.
            </p>
          </div>

          {/* Actividades Prácticas */}
          <div
            id="actividades"
            data-section="actividades"
            className="bg-slate-50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700 rounded-xl p-6 mb-8"
          >
            <h3 className="text-xl font-bold text-slate-800 dark:text-slate-200 mb-4">
              Actividades Prácticas
            </h3>
            <ol className="space-y-3">
              <li className="text-slate-600 dark:text-slate-400">
                <strong>Investigación:</strong> Elige un activo financiero
                (acción, bono, FCI) y averigua en qué mercado se opera, quiénes
                son los principales participantes y cómo ha evolucionado su
                precio en el último año.
              </li>
              <li className="text-slate-600 dark:text-slate-400">
                <strong>Análisis:</strong> Compara los precios de los distintos
                tipos de cambio (oficial, MEP, CCL, blue) durante las últimas
                semanas. ¿Qué factores influyeron en sus movimientos?
              </li>
              <li className="text-slate-600 dark:text-slate-400">
                <strong>Reflexión:</strong> Piensa en tus objetivos financieros
                personales. ¿Qué tipo de mercados e instrumentos serían más
                adecuados para ti según tu perfil de riesgo y horizonte
                temporal?
              </li>
            </ol>
          </div>

          {/* Referencias */}
          <div className="bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl p-6">
            <h3 className="text-xl font-bold text-slate-800 dark:text-slate-200 mb-4">
              Referencias y Recursos Adicionales
            </h3>
            <ul className="space-y-2">
              <li className="text-slate-600 dark:text-slate-400">
                <strong>Sitios Web:</strong> BYMA (byma.com.ar), CNV
                (cnv.gov.ar), BCRA (bcra.gov.ar)
              </li>
              <li className="text-slate-600 dark:text-slate-400">
                <strong>Libros:</strong> &quot;Invertir en Bolsa con Sentido
                Común&quot; (J. Bogle), &quot;El Inversor Inteligente&quot; (B.
                Graham)
              </li>
              <li className="text-slate-600 dark:text-slate-400">
                <strong>Informes:</strong> Reportes semanales de brokers como
                Cohen, Balanz, Portfolio Personal
              </li>
            </ul>
          </div>

          {/* Navigation */}
          <div className="flex justify-between items-center mt-12 pt-8 border-t border-slate-200 dark:border-slate-700">
            <div>
              <Link
                href="/educacion/cursos/inversion-basica"
                className="inline-flex items-center px-4 py-2 border border-slate-300 dark:border-slate-600 text-slate-700 dark:text-slate-300 font-medium rounded-xl hover:bg-slate-100 dark:hover:bg-slate-700 transition-colors"
              >
                <ChevronLeft className="h-4 w-4 mr-2" />
                Volver al índice
              </Link>
            </div>
            <Link
              href="/educacion/cursos/inversion-basica/modulo-1/sistema-financiero-argentino"
              className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-jpm-blue to-blue-600 text-white font-medium rounded-xl hover:shadow-lg hover:shadow-jpm-blue/25 transition-all duration-300 hover:-translate-y-1"
            >
              Siguiente lección
              <ArrowRight className="h-4 w-4 ml-2" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
