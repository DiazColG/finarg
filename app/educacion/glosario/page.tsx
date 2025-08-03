import { ArrowRight, BookOpen, Search } from "lucide-react";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Glosario Financiero - Educación Financiera",
  description:
    "Diccionario completo de términos financieros y económicos del mercado argentino.",
};

const glossaryTerms = [
  {
    category: "Instrumentos Financieros",
    terms: [
      {
        term: "Bono",
        definition:
          "Título de deuda emitido por gobiernos o empresas que paga una tasa de interés periódica y devuelve el capital al vencimiento.",
        example:
          "Los bonos del Tesoro argentino (como el AE38) pagan cupones semestrales en dólares.",
      },
      {
        term: "Acción",
        definition:
          "Título que representa una participación en la propiedad de una empresa cotizada en bolsa.",
        example:
          "Una acción de YPF te convierte en propietario de una pequeña parte de la petrolera.",
      },
      {
        term: "FCI",
        definition:
          "Fondo Común de Inversión. Vehículo que agrupa dinero de muchos inversores para invertir en una cartera diversificada.",
        example:
          "Un FCI de renta fija invierte en bonos de diferentes emisores y plazos.",
      },
      {
        term: "Caución",
        definition:
          "Operación de préstamo de dinero a corto plazo utilizando títulos como garantía.",
        example:
          "Puedes hacer una caución a 7 días con bonos como garantía para obtener liquidez.",
      },
      {
        term: "ON",
        definition:
          "Obligación Negociable. Bono emitido por empresas privadas para financiar sus operaciones.",
        example:
          "Las ON de Pampa Energía ofrecen rendimientos en pesos superiores a los plazos fijos.",
      },
    ],
  },
  {
    category: "Mercados y Operaciones",
    terms: [
      {
        term: "MEP",
        definition:
          "Mercado Electrónico de Pagos. Tipo de cambio que surge de comprar bonos en pesos y venderlos en dólares.",
        example:
          "El dólar MEP está a $1.420 comprando AL30 en pesos y vendiéndolo en dólares.",
      },
      {
        term: "CCL",
        definition:
          "Contado con Liquidación. Tipo de cambio para sacar dólares del país operando con bonos o acciones.",
        example:
          "Para transferir dólares al exterior usas el CCL comprando AL30 en Argentina y vendiéndolo en NYSE.",
      },
      {
        term: "Carry Trade",
        definition:
          "Estrategia que busca ganar la diferencia entre tasas de interés de diferentes monedas o instrumentos.",
        example:
          "Tomar deuda en dólares al 3% anual para invertir en bonos en pesos al 50% anual.",
      },
      {
        term: "Arbitraje",
        definition:
          "Operación que aprovecha diferencias de precios del mismo activo en diferentes mercados.",
        example:
          "Comprar AL30 en BYMA a $100 y venderlo simultáneamente en NYSE a USD 0.08.",
      },
      {
        term: "Short Selling",
        definition:
          "Venta de un activo que no se posee, esperando comprarlo más barato en el futuro.",
        example:
          "Hacer short en acciones de una empresa antes de resultados negativos esperados.",
      },
    ],
  },
  {
    category: "Indicadores y Ratios",
    terms: [
      {
        term: "TIR",
        definition:
          "Tasa Interna de Retorno. Rentabilidad anualizada que ofrece una inversión.",
        example:
          "Un bono con TIR del 25% anual en dólares ofrece esa rentabilidad si se mantiene hasta vencimiento.",
      },
      {
        term: "Duration",
        definition:
          "Medida de sensibilidad del precio de un bono ante cambios en las tasas de interés.",
        example:
          "Un bono con duration 5 pierde 5% de valor si las tasas suben 1 punto porcentual.",
      },
      {
        term: "Spread",
        definition:
          "Diferencia entre dos tasas de interés o precios, que refleja el riesgo adicional.",
        example:
          "El spread entre bonos argentinos y bonos del Tesoro de EE.UU. refleja el riesgo país.",
      },
      {
        term: "P/E Ratio",
        definition:
          "Precio sobre Beneficios. Ratio que compara el precio de una acción con sus ganancias por acción.",
        example:
          "Una acción con P/E de 15 significa que pagas 15 veces las ganancias anuales por acción.",
      },
      {
        term: "Sharpe Ratio",
        definition:
          "Medida de rentabilidad ajustada por riesgo de una inversión o cartera.",
        example:
          "Un Sharpe ratio de 1.5 indica buena rentabilidad relativa al riesgo asumido.",
      },
    ],
  },
  {
    category: "Macroeconomía",
    terms: [
      {
        term: "Inflación",
        definition:
          "Aumento generalizado y sostenido del nivel de precios en una economía.",
        example:
          "Argentina tuvo inflación del 211% anual en 2023 según el INDEC.",
      },
      {
        term: "Riesgo País",
        definition:
          "Indicador que mide la probabilidad de default de un país soberano, expresado en puntos básicos.",
        example:
          "Argentina tiene riesgo país de 1.500 puntos básicos, indicando alto riesgo de default.",
      },
      {
        term: "Política Monetaria",
        definition:
          "Conjunto de medidas del Banco Central para controlar la oferta monetaria y las tasas de interés.",
        example:
          "El BCRA sube la tasa de política monetaria para controlar la inflación.",
      },
      {
        term: "Reservas Internacionales",
        definition:
          "Activos en moneda extranjera que mantiene un Banco Central para respaldar su moneda.",
        example:
          "Las reservas del BCRA incluyen dólares, euros, oro y DEGs del FMI.",
      },
      {
        term: "Balanza Comercial",
        definition:
          "Diferencia entre exportaciones e importaciones de bienes de un país.",
        example:
          "Argentina tuvo superávit comercial de USD 15.000 millones en 2023.",
      },
    ],
  },
];

export default function GlosarioPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-slate-50/30 dark:to-slate-900/30">
      <div className="container mx-auto px-4 py-12">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="flex justify-center mb-6">
            <div className="p-4 rounded-2xl bg-gradient-to-br from-jpm-blue/10 to-blue-600/10 border border-jpm-blue/20">
              <BookOpen className="h-12 w-12 text-jpm-blue" />
            </div>
          </div>
          <h1 className="text-5xl font-playfair font-bold text-slate-800 dark:text-slate-200 mb-4">
            Glosario Financiero
          </h1>
          <p className="text-xl text-slate-600 dark:text-slate-400 max-w-3xl mx-auto leading-relaxed">
            Diccionario completo de términos financieros y económicos, con
            ejemplos aplicados al mercado argentino.
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
          <span className="text-slate-800 dark:text-slate-200">Glosario</span>
        </div>

        {/* Search Box */}
        <div className="mb-12">
          <div className="relative max-w-md mx-auto">
            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-slate-400" />
            <input
              type="text"
              placeholder="Buscar término..."
              className="w-full pl-12 pr-4 py-3 bg-white/70 dark:bg-slate-800/70 border border-slate-200/50 dark:border-slate-700/50 rounded-xl focus:outline-none focus:ring-2 focus:ring-jpm-blue/20 focus:border-jpm-blue/30 transition-all"
            />
          </div>
        </div>

        {/* Glossary Sections */}
        <div className="space-y-16">
          {glossaryTerms.map((section, sectionIndex) => (
            <div key={sectionIndex} className="space-y-6">
              <h2 className="text-3xl font-bold text-slate-800 dark:text-slate-200 mb-8 text-center">
                {section.category}
              </h2>

              <div className="grid gap-6">
                {section.terms.map((item, termIndex) => (
                  <div
                    key={termIndex}
                    className="bg-white/70 dark:bg-slate-800/70 backdrop-blur-sm border border-slate-200/50 dark:border-slate-700/50 rounded-2xl p-6 hover:shadow-lg hover:shadow-jpm-blue/5 hover:border-jpm-blue/30 transition-all duration-300"
                  >
                    <h3 className="text-xl font-bold text-jpm-blue mb-3">
                      {item.term}
                    </h3>
                    <p className="text-slate-700 dark:text-slate-300 mb-4 leading-relaxed">
                      {item.definition}
                    </p>
                    <div className="p-4 bg-slate-50/50 dark:bg-slate-700/50 rounded-xl border border-slate-200/30 dark:border-slate-600/30">
                      <p className="text-sm text-slate-600 dark:text-slate-400">
                        <strong className="text-jpm-blue">Ejemplo:</strong>{" "}
                        {item.example}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="mt-16 bg-gradient-to-br from-jpm-blue/5 to-blue-600/5 border border-jpm-blue/20 rounded-2xl p-8 text-center">
          <h2 className="text-2xl font-bold text-slate-800 dark:text-slate-200 mb-4">
            ¿No encontraste lo que buscabas?
          </h2>
          <p className="text-slate-600 dark:text-slate-400 mb-6 max-w-2xl mx-auto">
            Nuestro glosario se actualiza constantemente. Vuelve a nuestros
            cursos para aprender estos conceptos en profundidad.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/educacion/conceptos-basicos"
              className="inline-flex items-center justify-center px-6 py-3 bg-gradient-to-r from-jpm-blue to-blue-600 text-white font-medium rounded-xl hover:shadow-lg hover:shadow-jpm-blue/25 transition-all duration-300 hover:-translate-y-1"
            >
              Ver Conceptos Básicos
              <ArrowRight className="h-4 w-4 ml-2" />
            </Link>
            <Link
              href="/educacion/cursos"
              className="inline-flex items-center justify-center px-6 py-3 border border-jpm-blue text-jpm-blue font-medium rounded-xl hover:bg-jpm-blue/5 transition-all duration-300"
            >
              Explorar Cursos
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
