"use client";

import { useState, useEffect } from "react";
import {
  ArrowRight,
  ChevronLeft,
  BookOpen,
  Share2,
  BookmarkPlus,
  List,
  ArrowUp,
  Link2,
} from "lucide-react";
import Link from "next/link";

export default function SistemaFinancieroArgentinoPage() {
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
    const title = "Curso de Inversión Básica: El Sistema Financiero Argentino";

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
    <main className="flex flex-col min-h-screen bg-background">
      {/* Barra de progreso */}
      <div className="fixed top-0 left-0 w-full h-1 bg-slate-200 dark:bg-slate-800 z-50">
        <div
          className="h-full bg-jpm-blue transition-all duration-300 ease-out"
          style={{ width: `${scrollProgress}%` }}
        ></div>
      </div>

      {/* Header con navegación */}
      <div className="sticky top-0 z-40 w-full bg-white/80 dark:bg-slate-900/80 backdrop-blur-md border-b border-slate-200 dark:border-slate-800">
        <div className="container flex items-center justify-between h-16 px-4">
          <div className="flex items-center">
            <Link
              href="/educacion/cursos/inversion-basica"
              className="flex items-center text-slate-600 hover:text-slate-900 dark:text-slate-400 dark:hover:text-slate-200 mr-4"
            >
              <ChevronLeft className="h-5 w-5 mr-1" />
              <span>Volver al curso</span>
            </Link>
          </div>

          <div className="flex items-center space-x-4">
            <button
              onClick={() => setIsTOCOpen(!isTOCOpen)}
              className="flex items-center text-slate-600 hover:text-slate-900 dark:text-slate-400 dark:hover:text-slate-200"
            >
              <List className="h-5 w-5" />
              <span className="ml-1 hidden sm:inline">Contenido</span>
            </button>

            <button
              onClick={() => setShowShareMenu(!showShareMenu)}
              className="flex items-center text-slate-600 hover:text-slate-900 dark:text-slate-400 dark:hover:text-slate-200"
            >
              <Share2 className="h-5 w-5" />
              <span className="ml-1 hidden sm:inline">Compartir</span>
            </button>

            <button
              onClick={handleSaveModule}
              className={`flex items-center ${isSaved ? "text-jpm-blue" : "text-slate-600 hover:text-slate-900 dark:text-slate-400 dark:hover:text-slate-200"}`}
            >
              <BookmarkPlus className="h-5 w-5" />
              <span className="ml-1 hidden sm:inline">
                {isSaved ? "Guardado" : "Guardar"}
              </span>
            </button>
          </div>
        </div>
      </div>

      {/* Menú de compartir */}
      {showShareMenu && (
        <div className="fixed top-16 right-4 sm:right-8 mt-2 p-4 bg-white dark:bg-slate-800 rounded-lg shadow-lg border border-slate-200 dark:border-slate-700 z-50">
          <div className="grid grid-cols-2 gap-2">
            <button
              onClick={() => handleShare("copy")}
              className="flex items-center justify-center p-2 hover:bg-slate-100 dark:hover:bg-slate-700 rounded-md transition-colors"
            >
              <Link2 className="h-5 w-5 mr-2" />
              <span>Copiar enlace</span>
            </button>
            <button
              onClick={() => handleShare("twitter")}
              className="flex items-center justify-center p-2 hover:bg-slate-100 dark:hover:bg-slate-700 rounded-md transition-colors"
            >
              <svg
                className="h-5 w-5 mr-2 text-[#1DA1F2]"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
              </svg>
              Twitter
            </button>
            <button
              onClick={() => handleShare("whatsapp")}
              className="flex items-center justify-center p-2 hover:bg-slate-100 dark:hover:bg-slate-700 rounded-md transition-colors"
            >
              <svg
                className="h-5 w-5 mr-2 text-[#25D366]"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
              WhatsApp
            </button>
            <button
              onClick={() => handleShare("linkedin")}
              className="flex items-center justify-center p-2 hover:bg-slate-100 dark:hover:bg-slate-700 rounded-md transition-colors"
            >
              <svg
                className="h-5 w-5 mr-2 text-[#0A66C2]"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
              </svg>
              LinkedIn
            </button>
          </div>
        </div>
      )}

      {/* Tabla de contenido (TOC) flotante */}
      {isTOCOpen && (
        <div className="fixed top-16 left-4 sm:left-8 mt-2 p-4 bg-white dark:bg-slate-800 rounded-lg shadow-lg border border-slate-200 dark:border-slate-700 z-50 w-64 sm:w-72">
          <h3 className="font-bold mb-2 text-slate-800 dark:text-slate-200">
            Contenido
          </h3>
          <ul className="space-y-1">
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
                onClick={() => scrollToSection("estructura")}
                className={`w-full text-left px-3 py-2 rounded-lg transition-colors ${activeSection === "estructura" ? "bg-jpm-blue/10 text-jpm-blue font-medium" : "text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-700"}`}
              >
                Estructura del Sistema
              </button>
            </li>
            <li>
              <button
                onClick={() => scrollToSection("reguladores")}
                className={`w-full text-left px-3 py-2 rounded-lg transition-colors ${activeSection === "reguladores" ? "bg-jpm-blue/10 text-jpm-blue font-medium" : "text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-700"}`}
              >
                Entes Reguladores
              </button>
            </li>
            <li>
              <button
                onClick={() => scrollToSection("entidades")}
                className={`w-full text-left px-3 py-2 rounded-lg transition-colors ${activeSection === "entidades" ? "bg-jpm-blue/10 text-jpm-blue font-medium" : "text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-700"}`}
              >
                Entidades Financieras
              </button>
            </li>
            <li>
              <button
                onClick={() => scrollToSection("mercado-capitales")}
                className={`w-full text-left px-3 py-2 rounded-lg transition-colors ${activeSection === "mercado-capitales" ? "bg-jpm-blue/10 text-jpm-blue font-medium" : "text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-700"}`}
              >
                Mercado de Capitales
              </button>
            </li>
            <li>
              <button
                onClick={() => scrollToSection("caracteristicas")}
                className={`w-full text-left px-3 py-2 rounded-lg transition-colors ${activeSection === "caracteristicas" ? "bg-jpm-blue/10 text-jpm-blue font-medium" : "text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-700"}`}
              >
                Características Particulares
              </button>
            </li>
            <li>
              <button
                onClick={() => scrollToSection("desafios")}
                className={`w-full text-left px-3 py-2 rounded-lg transition-colors ${activeSection === "desafios" ? "bg-jpm-blue/10 text-jpm-blue font-medium" : "text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-700"}`}
              >
                Desafíos y Oportunidades
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
      )}

      {/* Botón "volver arriba" */}
      {showBackToTop && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-6 right-6 z-40 w-12 h-12 rounded-full bg-white dark:bg-slate-800 shadow-lg border border-slate-200 dark:border-slate-700 flex items-center justify-center text-slate-600 dark:text-slate-400 hover:bg-slate-50 dark:hover:bg-slate-700 transition-all"
          aria-label="Volver arriba"
        >
          <ArrowUp className="h-5 w-5" />
        </button>
      )}

      {/* Contenido principal */}
      <div className="container max-w-4xl mx-auto px-4 py-8">
        {/* Encabezado */}
        <div className="mb-8">
          <div className="flex items-center text-sm text-slate-500 dark:text-slate-400 mb-2">
            <span>Módulo 1</span>
            <span className="mx-2">•</span>
            <span>Lección 2</span>
            <span className="mx-2">•</span>
            <span>22 min</span>
          </div>

          <h1 className="text-4xl font-bold text-slate-800 dark:text-slate-100 mb-4">
            El Sistema Financiero Argentino
          </h1>

          <p className="text-xl text-slate-600 dark:text-slate-300 mb-6">
            Estructura, regulación, y características particulares del mercado
            financiero local.
          </p>

          <div className="flex items-center justify-between">
            <div className="flex items-center text-sm">
              <span className="text-slate-500 dark:text-slate-400">
                Última actualización: Julio 2025
              </span>
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

        {/* Contenido del curso */}
        <div className="prose prose-slate max-w-none dark:prose-invert prose-headings:font-bold prose-headings:text-slate-800 dark:prose-headings:text-slate-200 prose-a:text-jpm-blue dark:prose-a:text-jpm-blue hover:prose-a:text-jpm-dark dark:hover:prose-a:text-blue-400 prose-img:rounded-xl">
          {/* Introducción */}
          <div
            id="introduccion"
            data-section="introduccion"
            className="light-blue-gradient rounded-2xl p-8 border border-blue-200/30 dark:border-blue-500/30 mb-8"
          >
            <h2 className="text-2xl font-bold text-slate-800 dark:text-slate-100 mt-0">
              Introducción
            </h2>
            <p className="mb-0">
              El sistema financiero argentino es el conjunto de instituciones,
              mercados e instrumentos que permiten canalizar el ahorro hacia la
              inversión en el país. Conocer su estructura, regulación y
              características particulares es fundamental para cualquier
              inversor que desee operar en este mercado. En esta lección,
              exploraremos cómo funciona este sistema, sus principales actores y
              sus particularidades en comparación con otros sistemas financieros
              del mundo.
            </p>
          </div>

          {/* Estructura del Sistema */}
          <h2 id="estructura" data-section="estructura">
            Estructura del Sistema Financiero Argentino
          </h2>

          <p>
            El sistema financiero argentino está compuesto por diversos
            elementos que interactúan entre sí:
          </p>

          <ul>
            <li>
              <strong>Sistema bancario:</strong> Comprende el Banco Central de
              la República Argentina (BCRA), bancos públicos, bancos privados
              nacionales, bancos extranjeros y entidades no bancarias.
            </li>
            <li>
              <strong>Mercado de capitales:</strong> Incluye la Bolsa de
              Comercio de Buenos Aires (BCBA), el Mercado de Valores de Buenos
              Aires (MERVAL), ahora unificados en Bolsas y Mercados Argentinos
              (BYMA), el Mercado Abierto Electrónico (MAE) y otros mercados
              regulados.
            </li>
            <li>
              <strong>Mercado de seguros:</strong> Regulado por la
              Superintendencia de Seguros de la Nación (SSN).
            </li>
            <li>
              <strong>Sistema previsional:</strong> Incluye la Administración
              Nacional de la Seguridad Social (ANSES) y fondos de pensiones.
            </li>
          </ul>

          <p>
            Esta estructura tiene una organización jerárquica donde los entes
            reguladores establecen las normas que deben cumplir los
            participantes del mercado. A continuación, un diagrama simplificado
            de esta estructura:
          </p>

          <div className="bg-slate-100 dark:bg-slate-800 p-6 rounded-lg mb-8">
            <div className="flex flex-col space-y-4">
              <div className="bg-jpm-blue text-white p-3 rounded-lg text-center font-medium">
                Ministerio de Economía
              </div>
              <div className="grid grid-cols-3 gap-4">
                <div className="bg-blue-500 text-white p-3 rounded-lg text-center font-medium col-span-1">
                  BCRA
                </div>
                <div className="bg-blue-500 text-white p-3 rounded-lg text-center font-medium col-span-1">
                  CNV
                </div>
                <div className="bg-blue-500 text-white p-3 rounded-lg text-center font-medium col-span-1">
                  SSN
                </div>
              </div>
              <div className="grid grid-cols-3 gap-4">
                <div className="bg-slate-200 dark:bg-slate-700 p-3 rounded-lg text-center col-span-1">
                  Sistema Bancario
                </div>
                <div className="bg-slate-200 dark:bg-slate-700 p-3 rounded-lg text-center col-span-1">
                  Mercado de Capitales
                </div>
                <div className="bg-slate-200 dark:bg-slate-700 p-3 rounded-lg text-center col-span-1">
                  Compañías de Seguros
                </div>
              </div>
            </div>
          </div>

          <p>
            Esta estructura permite la interacción entre ahorristas, inversores
            y demandantes de fondos, aunque con particularidades propias del
            contexto argentino que analizaremos más adelante.
          </p>

          {/* Entes Reguladores */}
          <h2 id="reguladores" data-section="reguladores">
            Principales Entes Reguladores
          </h2>

          <p>
            Los entes reguladores son fundamentales para el funcionamiento
            ordenado del sistema financiero. En Argentina, los principales son:
          </p>

          <h3>Banco Central de la República Argentina (BCRA)</h3>

          <p>
            El BCRA es la autoridad monetaria y financiera por excelencia. Sus
            principales funciones incluyen:
          </p>

          <ul>
            <li>Regular la cantidad de dinero y el crédito en la economía</li>
            <li>Actuar como agente financiero del Estado Nacional</li>
            <li>Supervisar el sistema financiero y bancario</li>
            <li>Administrar las reservas internacionales</li>
            <li>Emitir regulaciones para las entidades financieras</li>
            <li>Actuar como prestamista de última instancia</li>
          </ul>

          <p>
            El BCRA publica regularmente informes y estadísticas sobre el
            sistema financiero, que son de consulta obligada para cualquier
            inversor o analista del mercado argentino.
          </p>

          <h3>Comisión Nacional de Valores (CNV)</h3>

          <p>
            La CNV es el organismo encargado de regular y supervisar el mercado
            de capitales. Sus principales funciones son:
          </p>

          <ul>
            <li>Autorizar la oferta pública de valores negociables</li>
            <li>Supervisar a los participantes del mercado de capitales</li>
            <li>
              Fiscalizar el cumplimiento de las normas legales y reglamentarias
            </li>
            <li>Proteger a los inversores</li>
            <li>Promover la transparencia del mercado</li>
          </ul>

          <p>
            La CNV establece el marco normativo para la emisión y negociación de
            instrumentos financieros, como acciones, bonos y otros valores.
          </p>

          <h3>Superintendencia de Seguros de la Nación (SSN)</h3>

          <p>
            La SSN supervisa y regula el mercado asegurador, controlando a las
            compañías de seguros y reaseguros. Sus funciones incluyen:
          </p>

          <ul>
            <li>Autorizar el funcionamiento de aseguradoras</li>
            <li>Controlar la solvencia de las compañías</li>
            <li>Aprobar pólizas y planes de seguros</li>
            <li>Proteger los derechos de los asegurados</li>
          </ul>

          <h3>Unidad de Información Financiera (UIF)</h3>

          <p>
            Aunque no es un regulador financiero en sentido estricto, la UIF
            cumple un papel importante en la prevención del lavado de activos y
            la financiación del terrorismo dentro del sistema financiero
            argentino.
          </p>

          {/* Entidades Financieras */}
          <h2 id="entidades" data-section="entidades">
            Entidades Financieras en Argentina
          </h2>

          <p>
            El sistema financiero argentino cuenta con diversos tipos de
            entidades que ofrecen servicios financieros a individuos y empresas:
          </p>

          <h3>Bancos Comerciales</h3>

          <p>
            Los bancos comerciales constituyen el núcleo del sistema financiero.
            Se clasifican en:
          </p>

          <ul>
            <li>
              <strong>Bancos públicos:</strong> Como el Banco de la Nación
              Argentina, el Banco de la Provincia de Buenos Aires y otros bancos
              provinciales. Suelen tener un enfoque en políticas públicas y
              desarrollo regional.
            </li>
            <li>
              <strong>Bancos privados de capital nacional:</strong> Entidades
              como Banco Galicia, Banco Macro, entre otros.
            </li>
            <li>
              <strong>Bancos de capital extranjero:</strong> Como Santander,
              BBVA, HSBC, Citibank, etc.
            </li>
          </ul>

          <p>
            Los bancos comerciales ofrecen servicios de depósitos, préstamos,
            cambio de divisas, tarjetas de crédito y otros servicios
            financieros. Están bajo la supervisión directa del BCRA.
          </p>

          <h3>Compañías Financieras</h3>

          <p>
            Son entidades que, sin ser bancos comerciales, realizan actividades
            financieras específicas como financiamiento al consumo o leasing. No
            pueden recibir depósitos a la vista y están más orientadas a nichos
            específicos.
          </p>

          <h3>Sociedades de Bolsa y Agentes de Mercado</h3>

          <p>
            Estas entidades actúan como intermediarios en el mercado de
            capitales, facilitando la compra y venta de instrumentos
            financieros. Se dividen en:
          </p>

          <ul>
            <li>
              <strong>Agentes de Liquidación y Compensación (ALyC):</strong>{" "}
              Pueden operar en el mercado y liquidar operaciones propias y de
              terceros.
            </li>
            <li>
              <strong>Agentes de Negociación (AN):</strong> Solo pueden ejecutar
              operaciones pero no liquidarlas.
            </li>
            <li>
              <strong>Agentes Asesores de Mercado de Capitales:</strong> Brindan
              asesoramiento pero no ejecutan operaciones.
            </li>
          </ul>

          <h3>Administradoras de Fondos Comunes de Inversión</h3>

          <p>
            Estas sociedades administran fondos comunes de inversión (FCIs), que
            agrupan el capital de múltiples inversores para invertirlo en
            diversos instrumentos según la política de inversión de cada fondo.
          </p>

          {/* Mercado de Capitales */}
          <h2 id="mercado-capitales" data-section="mercado-capitales">
            El Mercado de Capitales Argentino
          </h2>

          <p>
            El mercado de capitales argentino es el ámbito donde se negocian
            títulos valores y otros instrumentos financieros. Los principales
            componentes son:
          </p>

          <h3>Bolsas y Mercados Argentinos (BYMA)</h3>

          <p>
            BYMA es el resultado de la fusión de la Bolsa de Comercio de Buenos
            Aires (BCBA) y el Mercado de Valores de Buenos Aires (MERVAL). Es el
            principal mercado de valores del país, donde se negocian:
          </p>

          <ul>
            <li>
              <strong>Acciones:</strong> Representan participaciones en el
              capital de empresas cotizantes.
            </li>
            <li>
              <strong>Bonos:</strong> Tanto soberanos (emitidos por el Estado)
              como corporativos (emitidos por empresas).
            </li>
            <li>
              <strong>CEDEARs:</strong> Certificados de depósito argentinos que
              representan acciones de empresas extranjeras.
            </li>
            <li>
              <strong>Obligaciones Negociables (ON):</strong> Títulos de deuda
              corporativa.
            </li>
            <li>
              <strong>Fideicomisos Financieros:</strong> Instrumentos que
              permiten la securitización de activos.
            </li>
            <li>
              <strong>Opciones y futuros:</strong> Instrumentos derivados.
            </li>
          </ul>

          <h3>Mercado Abierto Electrónico (MAE)</h3>

          <p>
            El MAE es un mercado electrónico donde se negocian principalmente
            títulos públicos, divisas, pases y otros instrumentos de renta fija.
            Es un mercado over-the-counter (OTC) donde operan principalmente
            bancos e instituciones financieras.
          </p>

          <h3>Mercado Argentino de Valores (MAV)</h3>

          <p>
            El MAV está enfocado en instrumentos para PyMEs como cheques de pago
            diferido, pagarés bursátiles y obligaciones negociables PyME.
          </p>

          <h3>Mercado a Término de Buenos Aires (MATBA) y ROFEX</h3>

          <p>
            Estos mercados, ahora fusionados en MATBA-ROFEX, se especializan en
            la negociación de contratos de futuros y opciones, principalmente
            sobre commodities agrícolas, divisas y tasas de interés.
          </p>

          {/* Características Particulares */}
          <h2 id="caracteristicas" data-section="caracteristicas">
            Características Particulares del Sistema Financiero Argentino
          </h2>

          <p>
            El sistema financiero argentino presenta características distintivas
            que lo diferencian de otros sistemas financieros:
          </p>

          <h3>Bimonetarismo</h3>

          <p>
            Una de las características más notables es la coexistencia del peso
            argentino con el dólar estadounidense como unidad de cuenta, reserva
            de valor y, en algunos casos, medio de pago. Esta dualidad monetaria
            influye en las decisiones de ahorro e inversión.
          </p>

          <h3>Alta volatilidad</h3>

          <p>
            El sistema financiero argentino ha experimentado históricamente alta
            volatilidad debido a crisis económicas recurrentes, cambios en las
            políticas económicas y episodios de inestabilidad macroeconómica.
          </p>

          <h3>Baja profundidad financiera</h3>

          <p>
            La relación entre crédito privado y PIB en Argentina es
            significativamente menor que en otros países de la región y del
            mundo desarrollado. Esto limita el acceso al financiamiento para
            empresas y particulares.
          </p>

          <div className="bg-slate-100 dark:bg-slate-800 p-6 rounded-lg my-6">
            <h4 className="text-center mb-4">
              Profundidad Financiera (Crédito Privado/PIB)
            </h4>
            <div className="space-y-4">
              <div className="flex items-center">
                <span className="w-1/3">Argentina</span>
                <div className="w-2/3 bg-gray-200 dark:bg-gray-700 rounded-full h-4">
                  <div
                    className="bg-jpm-blue h-4 rounded-full"
                    style={{ width: "15%" }}
                  ></div>
                </div>
                <span className="ml-2">15%</span>
              </div>
              <div className="flex items-center">
                <span className="w-1/3">Brasil</span>
                <div className="w-2/3 bg-gray-200 dark:bg-gray-700 rounded-full h-4">
                  <div
                    className="bg-jpm-blue h-4 rounded-full"
                    style={{ width: "65%" }}
                  ></div>
                </div>
                <span className="ml-2">65%</span>
              </div>
              <div className="flex items-center">
                <span className="w-1/3">Chile</span>
                <div className="w-2/3 bg-gray-200 dark:bg-gray-700 rounded-full h-4">
                  <div
                    className="bg-jpm-blue h-4 rounded-full"
                    style={{ width: "75%" }}
                  ></div>
                </div>
                <span className="ml-2">75%</span>
              </div>
              <div className="flex items-center">
                <span className="w-1/3">EE.UU.</span>
                <div className="w-2/3 bg-gray-200 dark:bg-gray-700 rounded-full h-4">
                  <div
                    className="bg-jpm-blue h-4 rounded-full"
                    style={{ width: "95%" }}
                  ></div>
                </div>
                <span className="ml-2">195%</span>
              </div>
            </div>
            <p className="text-xs text-center mt-2 text-gray-500">
              Fuente: Banco Mundial (datos aproximados para fines ilustrativos)
            </p>
          </div>

          <h3>Alta regulación y controles</h3>

          <p>
            En diferentes períodos, el sistema financiero argentino ha operado
            bajo significativas regulaciones y controles, incluyendo
            restricciones cambiarias (comúnmente llamadas &ldquo;cepo
            cambiario&rdquo;), controles de capitales y regulaciones sobre tasas
            de interés.
          </p>

          <h3>Desarrollo desigual de los mercados</h3>

          <p>
            Mientras que algunos segmentos del mercado financiero tienen un
            desarrollo razonable (como el mercado de bonos soberanos), otros
            están menos desarrollados (como el mercado hipotecario o el de
            capital de riesgo).
          </p>

          {/* Desafíos y Oportunidades */}
          <h2 id="desafios" data-section="desafios">
            Desafíos y Oportunidades
          </h2>

          <h3>Principales desafíos</h3>

          <p>
            El sistema financiero argentino enfrenta varios desafíos
            estructurales:
          </p>

          <ul>
            <li>
              <strong>Estabilidad macroeconómica:</strong> La volatilidad de
              variables como la inflación, el tipo de cambio y las tasas de
              interés afecta la previsibilidad necesaria para el desarrollo
              financiero.
            </li>
            <li>
              <strong>Confianza:</strong> Las crisis financieras pasadas han
              afectado la confianza de los ahorristas en el sistema.
            </li>
            <li>
              <strong>Inclusión financiera:</strong> Una porción significativa
              de la población no está bancarizada o tiene acceso limitado a
              servicios financieros.
            </li>
            <li>
              <strong>Desarrollo de mercados de largo plazo:</strong> La
              volatilidad macroeconómica dificulta el desarrollo de instrumentos
              financieros de largo plazo.
            </li>
          </ul>

          <h3>Oportunidades para los inversores</h3>

          <p>
            A pesar de los desafíos, el sistema financiero argentino presenta
            interesantes oportunidades:
          </p>

          <ul>
            <li>
              <strong>Alta rentabilidad potencial:</strong> La volatilidad y los
              riesgos suelen venir acompañados de retornos potencialmente más
              altos.
            </li>
            <li>
              <strong>Instrumentos indexados:</strong> Existen instrumentos que
              ofrecen cobertura contra la inflación o la depreciación del tipo
              de cambio.
            </li>
            <li>
              <strong>Diversificación:</strong> El mercado ofrece instrumentos
              variados que permiten diversificar carteras según diferentes
              perfiles de riesgo.
            </li>
            <li>
              <strong>Creciente digitalización:</strong> Las fintech están
              ampliando el acceso a servicios financieros y generando nuevas
              oportunidades de inversión.
            </li>
          </ul>

          <p>
            El conocimiento de las particularidades del sistema financiero
            argentino es fundamental para aprovechar estas oportunidades
            mientras se gestionan adecuadamente los riesgos asociados.
          </p>

          {/* Conclusiones */}
          <div
            id="conclusiones"
            data-section="conclusiones"
            className="light-blue-gradient rounded-2xl p-8 border border-blue-200/30 dark:border-blue-500/30 mb-8"
          >
            <h2 className="text-2xl font-bold text-slate-800 dark:text-slate-100 mt-0">
              Conclusiones
            </h2>

            <p>
              El sistema financiero argentino presenta características únicas
              que lo diferencian de otros sistemas financieros del mundo.
              Entender su estructura, regulación y particularidades es esencial
              para cualquier inversor que desee operar en este mercado.
            </p>

            <p>
              A pesar de su volatilidad y desafíos estructurales, ofrece
              diversas oportunidades para aquellos inversores que sepan
              interpretar adecuadamente el contexto y gestionar los riesgos
              asociados.
            </p>

            <p className="mb-0">
              En las próximas lecciones, profundizaremos en los distintos
              instrumentos financieros disponibles en el mercado argentino y las
              estrategias para operar en este entorno particular.
            </p>
          </div>

          {/* Actividades Prácticas */}
          <div
            id="actividades"
            data-section="actividades"
            className="bg-slate-50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700 rounded-xl p-6 mb-8"
          >
            <h2 className="text-2xl font-bold text-slate-800 dark:text-slate-100 mt-0">
              Actividades Prácticas
            </h2>

            <div className="space-y-6">
              <div>
                <h3 className="font-medium text-lg text-slate-800 dark:text-slate-200">
                  Actividad 1: Análisis comparativo
                </h3>
                <p className="text-slate-600 dark:text-slate-400">
                  Compara el sistema financiero argentino con el de otro país de
                  la región (Brasil, Chile o México). Identifica al menos tres
                  diferencias significativas y explica cómo podrían afectar las
                  decisiones de inversión.
                </p>
              </div>

              <div>
                <h3 className="font-medium text-lg text-slate-800 dark:text-slate-200">
                  Actividad 2: Mapa conceptual
                </h3>
                <p className="text-slate-600 dark:text-slate-400">
                  Elabora un mapa conceptual que muestre la estructura del
                  sistema financiero argentino, incluyendo reguladores,
                  intermediarios y mercados.
                </p>
              </div>

              <div>
                <h3 className="font-medium text-lg text-slate-800 dark:text-slate-200">
                  Actividad 3: Investigación
                </h3>
                <p className="text-slate-600 dark:text-slate-400">
                  Investiga sobre un evento histórico importante que haya
                  afectado al sistema financiero argentino (como el
                  &ldquo;corralito&rdquo; de 2001 o las crisis cambiarias). ¿Qué
                  medidas se tomaron? ¿Cómo afectó a los inversores? ¿Qué
                  lecciones se pueden extraer para el contexto actual?
                </p>
              </div>

              <div>
                <h3 className="font-medium text-lg text-slate-800 dark:text-slate-200">
                  Actividad 4: Análisis de noticia actual
                </h3>
                <p className="text-slate-600 dark:text-slate-400">
                  Selecciona una noticia reciente sobre el sistema financiero
                  argentino y analiza cómo podría impactar en las decisiones de
                  inversión. Comparte tu análisis en el foro del curso.
                </p>
              </div>

              <div className="flex items-center justify-center pt-4">
                <button className="bg-jpm-blue text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors">
                  Enviar respuestas
                </button>
              </div>
            </div>
          </div>

          {/* Navegación entre lecciones */}
          <div className="border-t border-slate-200 dark:border-slate-700 pt-8 mt-8">
            <div className="flex flex-col sm:flex-row justify-between items-center">
              <Link
                href="/educacion/cursos/inversion-basica/modulo-1/que-es-un-mercado-financiero"
                className="flex items-center text-jpm-blue mb-4 sm:mb-0"
              >
                <ChevronLeft className="h-5 w-5 mr-1" />
                Lección anterior: ¿Qué es un mercado financiero?
              </Link>

              <Link
                href="/educacion/cursos/inversion-basica/modulo-1/activos-financieros-introduccion"
                className="flex items-center text-jpm-blue"
              >
                Siguiente lección: Activos financieros: una introducción
                <ArrowRight className="h-5 w-5 ml-1" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
