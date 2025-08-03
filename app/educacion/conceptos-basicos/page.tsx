"use client";

import {
  ArrowRight,
  BookOpen,
  DollarSign,
  TrendingUp,
  Target,
  ChevronDown,
  ChevronUp,
} from "lucide-react";
import Link from "next/link";
import { useState } from "react";

const basicConcepts = [
  {
    category: "Macroeconomía",
    icon: TrendingUp,
    concepts: [
      {
        title: "Inflación",
        description:
          "Aumento generalizado y sostenido de los precios de bienes y servicios en una economía.",
        details:
          "La inflación reduce el poder adquisitivo del dinero. En Argentina, es un factor clave para las decisiones de inversión.",
        expertExplanation: `La inflación es uno de los fenómenos macroeconómicos más relevantes para cualquier inversor, especialmente en Argentina. Como economista especializado en mercados emergentes, puedo explicarte que la inflación no es simplemente 'precios que suben', sino un proceso complejo que refleja desequilibrios fundamentales en la economía.

En términos técnicos, la inflación surge cuando la demanda agregada supera la oferta agregada de manera sostenida, o cuando hay expansión monetaria excesiva (más dinero persiguiendo los mismos bienes). En Argentina, históricamente hemos visto ambos factores: déficit fiscal financiado con emisión monetaria y rigideces estructurales que limitan la oferta.

Para un inversor, la inflación tiene tres efectos cruciales: 1) Erosiona el valor real de activos nominales (como pesos en el banco), 2) Beneficia a deudores en moneda local (porque devuelven pesos 'más baratos'), y 3) Crea oportunidades en activos reales como acciones de empresas con pricing power o bonos indexados.

El concepto clave es la 'tasa real' vs 'tasa nominal'. Si un plazo fijo paga 50% anual pero la inflación es 100% anual, estás perdiendo 33% de poder adquisitivo real. Por eso en Argentina es fundamental pensar en términos de rentabilidad real, no nominal. Los mejores inversores argentinos siempre buscan activos que superen la inflación: dólares, acciones de empresas exportadoras, bonos ajustados por CER, o propiedades en zonas premium.

La medición también importa: el INDEC mide el IPC, pero hay inflación núcleo (sin alimentos y energía), inflación mayorista, y diferentes canastas. Como inversor, debes entender qué índice afecta más tu consumo personal para tomar mejores decisiones de asset allocation.`,
      },
      {
        title: "Política Monetaria",
        description:
          "Conjunto de medidas que toma el Banco Central para controlar la cantidad de dinero en circulación.",
        details:
          "El BCRA utiliza herramientas como la tasa de interés y las operaciones de mercado abierto.",
        expertExplanation: `La política monetaria es el arte y la ciencia de manejar la cantidad de dinero en una economía. Como profesor de finanzas, siempre explico que el Banco Central es como el 'termostato' de la economía: puede enfriarla o calentarla, pero no puede cambiar el clima estructural.

El BCRA tiene tres herramientas principales: 1) Tasa de política monetaria (TPM), que influye en todas las tasas de la economía, 2) Operaciones de mercado abierto (compra/venta de bonos para inyectar o drenar liquidez), y 3) Encajes bancarios (cuánto dinero deben guardar los bancos sin prestar).

En Argentina, la política monetaria es particularmente compleja porque el BCRA tiene múltiples objetivos a veces contradictorios: controlar inflación, mantener estabilidad cambiaria, financiar el déficit fiscal, y preservar el empleo. Esta 'dominancia fiscal' significa que el BCRA muchas veces no puede hacer política monetaria independiente.

Para inversores, es crucial entender el 'transmission mechanism': cuando el BCRA sube tasas, encarece el crédito, reduce inversión y consumo, y eventualmente baja la inflación. Pero en el camino, puede impactar negativamente las acciones (mayor costo de capital) y positivamente los bonos (mayores rendimientos).

El concepto de 'credibilidad' es fundamental. Si el mercado no cree que el BCRA puede/va a controlar la inflación, las expectativas se desanclan y la política monetaria pierde efectividad. Por eso las comunicaciones del BCRA, los forward guidance, y la consistencia entre dichos y hechos son tan importantes para los mercados.

Un inversor sofisticado debe seguir las actas del COPOM, entender la curva de rendimientos, y anticipar cambios en el stance monetario para posicionarse antes que el mercado.`,
      },
      {
        title: "PIB",
        description:
          "Producto Interno Bruto: valor total de bienes y servicios producidos en un país durante un período.",
        details:
          "Indicador principal del crecimiento económico y la salud de la economía.",
        expertExplanation: `El PIB es la medida más importante de la actividad económica de un país, pero como economista debo advertirte que es más complejo de lo que parece. El PIB mide el valor agregado de toda la producción dentro de las fronteras de un país en un período determinado, típicamente un año.

Existen tres enfoques para calcularlo: 1) Por el lado de la producción (suma del valor agregado de todos los sectores), 2) Por el lado del gasto (Consumo + Inversión + Gasto Público + Exportaciones Netas), y 3) Por el lado del ingreso (sueldos + ganancias + impuestos). En teoría, los tres dan igual, pero en la práctica hay discrepancias estadísticas.

Para inversores argentinos, es crucial distinguir entre PIB nominal (en pesos corrientes) vs PIB real (ajustado por inflación) vs PIB en dólares. Con alta inflación, el PIB nominal crece mucho pero el real puede estar cayendo. Y con devaluaciones, el PIB en dólares puede colapsar aunque la economía real esté creciendo.

El crecimiento del PIB impacta directamente los mercados: mayor crecimiento implica mayores ganancias empresarias (bueno para acciones), mayor recaudación fiscal (mejor para bonos soberanos), y mayor demanda de crédito (sube tasas). Pero cuidado con el 'timing': los mercados son forward-looking y ya descuentan el crecimiento esperado.

También es importante entender la composición del crecimiento: ¿es traccionado por consumo (menos sostenible) o inversión (más sostenible)? ¿Depende de commodities (volátil) o industria/servicios (más estable)? En Argentina, históricamente hemos tenido crecimiento muy volátil, con booms y crisis recurrentes.

Para un portfolio manager, el PIB es fundamental para asset allocation sectorial: en expansión sobreponderar cíclicos (bancos, construcción, consumo), en recesión sobreponderar defensivos (utilities, alimentos, farma).`,
      },
      {
        title: "Tipo de Cambio",
        description:
          "Precio de una moneda expresado en términos de otra moneda.",
        details:
          "En Argentina tenemos múltiples tipos de cambio: oficial, MEP, CCL, blue, etc.",
        expertExplanation: `El tipo de cambio es quizás la variable más crítica para entender los mercados argentinos. Como especialista en mercados emergentes, puedo asegurarte que en Argentina el tipo de cambio no es solo un precio, sino el epicentro de toda la macroeconomía.

Conceptualmente, hay dos regímenes: tipo de cambio fijo (el gobierno fija el precio) vs flexible (lo determina el mercado). Argentina ha oscilado entre ambos, generalmente con resultados subóptimos por problemas de credibilidad y sostenibilidad fiscal.

La multiplicity de tipos de cambio argentinos refleja controles cambiarios y fricciones regulatorias: 1) Oficial (para comercio exterior), 2) MEP (comprando bonos en pesos y vendiéndolos en dólares), 3) CCL (para sacar dólares del país), 4) Blue (mercado paralelo), 5) Tarjeta (para consumos en el exterior). Esta fragmentación crea oportunidades de arbitraje pero también distorsiones enormes.

Para inversores, el tipo de cambio es crucial porque determina la competitividad de las empresas: una devaluación beneficia exportadores (agro, minería, energía) pero perjudica importadores (retail, textiles, automotrices). También afecta la valoración relativa: acciones argentinas en dólares pueden verse baratas post-devaluación.

El 'pass-through' a precios es otro concepto clave: cuánto de una devaluación se traslada a inflación. En Argentina es alto (60-80%) por la memoria inflacionaria y indexación generalizada. Esto limita la efectividad de devaluaciones para ganar competitividad.

La sustentabilidad cambiaria depende del balance fiscal, la cuenta corriente, las reservas del BCRA, y las expectativas de los agentes. Un tipo de cambio 'atrasado' genera presión especulativa, fuga de capitales, y eventual crisis cambiaria. Por eso seguir el REER (tipo de cambio real efectivo) es fundamental para anticipar devaluaciones.`,
      },
    ],
  },
  {
    category: "Instrumentos Financieros",
    icon: DollarSign,
    concepts: [
      {
        title: "Bonos",
        description:
          "Títulos de deuda que emiten gobiernos o empresas para financiarse.",
        details:
          "Pagan una tasa de interés (cupón) y devuelven el capital al vencimiento.",
        expertExplanation: `Los bonos son instrumentos de deuda que representan un préstamo que haces al emisor. Como profesor de renta fija, siempre enfatizo que son mucho más complejos que 'pagas y te devuelven con interés'. Entender bonos es esencial para cualquier portfolio sofisticado.

Un bono tiene varios componentes: valor nominal (cuánto paga al vencimiento), cupón (interés periódico), frecuencia de pago (semestral, anual), y vencimiento. El precio del bono fluctúa inversamente a las tasas de interés: cuando suben tasas, bajan precios de bonos existentes, y viceversa.

En Argentina tenemos bonos soberanos (emitidos por el Tesoro Nacional), provinciales, corporativos (ON), y del BCRA (LEBACs/LELIQs). Los soberanos tienen riesgo país pero mayor liquidez; los corporativos mayor yield pero menor liquidez. La moneda también importa: pesos, dólares, o UVAs (ajustados por inflación).

El concepto de duration es fundamental: mide la sensibilidad del precio del bono ante cambios en tasas. Un bono con duration 5 pierde 5% si las tasas suben 1%. Bonos largos tienen mayor duration (más riesgo/volatilidad) pero mayor yield. Es el trade-off riesgo-retorno aplicado a renta fija.

Para inversores argentinos, los bonos son especialmente relevantes por la alta volatilidad macroeconómica. Durante crisis, los bonos soberanos pueden perder 50-70% del valor (como en 2018-2019), pero también pueden dar retornos extraordinarios en normalizaciones (como en 2016 o post-reestructuración 2020).

La curva de rendimientos (yields vs vencimientos) es una herramienta crucial. Una curva invertida (corto rinde más que largo) suele anticipar recesión. En Argentina, la curva suele ser muy empinada por la incertidumbre de largo plazo.

Para construir un portfolio de bonos, considera: diversificación por emisor, duration matching con tus obligaciones, y el carry vs roll-down return.`,
      },
      {
        title: "Acciones",
        description:
          "Participaciones en la propiedad de una empresa que cotizan en bolsa.",
        details:
          "Su valor fluctúa según el desempeño de la empresa y las condiciones del mercado.",
        expertExplanation: `Las acciones representan ownership (propiedad) en una empresa. Cuando compras una acción, te conviertes en socio minoritario con derecho a dividendos y voto. Como especialista en equity markets, puedo asegurarte que las acciones son el vehículo de creación de riqueza de largo plazo más poderoso de la historia.

El valor de una acción refleja el valor presente de todos los flujos de caja futuros que la empresa generará para sus accionistas. Pero en el corto plazo, los precios son impulsados por sentiment, momentum, y factores técnicos. De ahí la famosa frase de Graham: 'En el corto plazo, el mercado es una máquina de votar; en el largo plazo, es una máquina de pesar'.

En Argentina, las acciones cotizan en BYMA (ex-Merval) pero las más grandes también tienen ADRs en NYSE. Esto crea oportunidades de arbitraje pero también volatilidad adicional por el riesgo país y cambiario. Una acción puede subir en pesos pero bajar en dólares si hay devaluación.

El análisis fundamental busca determinar el 'valor intrínseco' mediante DCF (flujos descontados), múltiplos comparables (P/E, EV/EBITDA), o sum-of-the-parts. El análisis técnico estudia patrones de precios y volúmenes para timing de compra/venta. Ambos enfoques son complementarios.

Para invertir en acciones argentinas, es crucial entender la macro: empresas exportadoras (YPF, Tenaris, Ternium) se benefician con devaluación; empresas domésticas (bancos, utilities, telecom) sufren con recesión pero se benefician con estabilidad y crecimiento; empresas consumo masivo (Arcor, Molinos) tienen modelos defensivos.

La diversificación es clave: por sector, por tamaño (large/mid/small caps), por estilo (growth/value), y por geografía (local vs ADRs vs internacional). En mercados volátiles como Argentina, el dollar-cost averaging (invertir montos fijos periódicamente) puede ser muy efectivo para reducir el riesgo de timing.

Recordá que las acciones son para el largo plazo. En horizontes de 10+ años, históricamente han superado todos los otros activos.`,
      },
      {
        title: "FCI",
        description:
          "Fondos Comunes de Inversión: vehículos que agrupan dinero de muchos inversores.",
        details:
          "Permiten diversificar con montos pequeños y acceder a gestión profesional.",
        expertExplanation: `Los Fondos Comunes de Inversión (FCI) son vehículos de inversión colectiva que permiten a inversores pequeños acceder a diversificación y gestión profesional. Como especialista en asset management, considero que son una herramienta fundamental para democratizar las inversiones sofisticadas.

Un FCI funciona así: muchos inversores aportan dinero a un fondo, el cual invierte ese pool en una cartera diversificada de activos según su política de inversión. Cada inversor posee 'cuotapartes' proporcionales a su aporte. El valor de la cuotaparte fluctúa diariamente según el valor de la cartera subyacente.

En Argentina hay varios tipos: FCIs de renta fija (bonos), renta variable (acciones), money market (liquidez), balanceados (mix de activos), y especializados (sector específico, geográfico, etc.). También hay FCIs que invierten en el exterior, permitiendo diversificación internacional sin los costos/complejidades de abrir cuentas offshore.

Las ventajas son claras: 1) Diversificación instantánea (en lugar de comprar 20 acciones, comprás un FCI que las tiene todas), 2) Gestión profesional (fund managers con experiencia y recursos), 3) Economías de escala (costos menores por pooling), 4) Liquidez (podés rescatar diariamente en la mayoría), y 5) Transparencia (regulados por CNV).

Pero también hay desventajas: 1) Fees (comisión de gestión anual, típicamente 1-3%), 2) Pérdida de control (no elegís qué compra/vende el gestor), 3) Style drift (el fondo puede cambiar su estrategia), y 4) Cash drag (mantienen cash para rescates, reduciendo exposición).

Para elegir un FCI, considerá: 1) Performance histórica vs benchmark, 2) Consistencia del equipo gestor, 3) Fees total expense ratio, 4) Tamaño del fondo (muy chico o muy grande pueden tener problemas), 5) Fit con tu asset allocation target.

En Argentina, dada la volatilidad macro, los FCIs pueden ser especialmente útiles para navegar ciclos económicos complejos. Un buen gestor local entiende las particularidades del mercado argentino mejor que un inversor individual.`,
      },
      {
        title: "Cauciones",
        description:
          "Operaciones de préstamo de dinero a corto plazo utilizando títulos como garantía.",
        details:
          "Alternativa de renta fija para plazos muy cortos (1 a 30 días).",
        expertExplanation: `Las cauciones son operaciones de repo (repurchase agreement) que permiten prestar/tomar dinero a muy corto plazo usando títulos como garantía. Como especialista en mercados de dinero, puedo explicarte que son fundamentales para la liquidez del sistema financiero argentino.

En una caución, el tomador (quien necesita dinero) 'vende' títulos al colocador (quien tiene dinero) con el compromiso de recomprarlos a un precio mayor en una fecha futura cercana. La diferencia de precios es el interés implícito. Aunque técnicamente es una compra-venta, económicamente es un préstamo garantizado.

Los plazos típicos van de 1 a 30 días, aunque pueden extenderse hasta 1 año. Las tasas se negocian libremente y reflejan la liquidez del mercado, el riesgo crediticio del tomador, y la calidad del colateral. Los títulos elegibles incluyen bonos del Tesoro, BCRA, y ON de primera línea.

Para inversores, las cauciones ofrecen varias ventajas: 1) Liquidez (podés recuperar tu dinero en pocos días), 2) Seguridad (están garantizadas por títulos), 3) Rentabilidad superior a cuentas bancarias, 4) Flexibilidad (elegís plazo y contraparte), y 5) Acceso directo al mercado mayorista.

Los riesgos incluyen: 1) Riesgo de contraparte (aunque mitigado por garantías), 2) Riesgo de liquidez del colateral (si el título es poco líquido), 3) Riesgo operacional (settlement, custodio), y 4) Concentración (no diversificás contrapartes).

En Argentina, las cauciones son especialmente populares porque: 1) Los bancos pagan tasas muy bajas en cuentas corrientes, 2) Los plazos fijos tienen penalidades por rescate anticipado, 3) El mercado de capitales está más desarrollado que el bancario para estas operaciones.

Para optimizar cauciones: 1) Diversificá contrapartes, 2) Priorizá títulos líquidos como colateral, 3) Monitoreá las tasas diariamente (varían mucho), 4) Considerá el timing fiscal (fin de mes/trimestre hay más demanda), 5) Usá brokers con buena tecnología para agilizar operaciones.

Las cauciones son ideales para el 'cash management' de corto plazo, pero no para inversiones de largo plazo donde preferís activos con mayor potencial de retorno.`,
      },
    ],
  },
  {
    category: "Análisis de Inversiones",
    icon: Target,
    concepts: [
      {
        title: "Riesgo vs Rentabilidad",
        description:
          "Relación fundamental: a mayor riesgo, mayor rentabilidad esperada.",
        details:
          "Los inversores deben equilibrar sus expectativas de ganancia con su tolerancia al riesgo.",
        expertExplanation: `La relación riesgo-rentabilidad es el principio más fundamental de las finanzas. Como profesor de teoría de carteras, siempre comienzo explicando que no existe rentabilidad sin riesgo, y que el mercado premia el riesgo adicional con mayor rentabilidad esperada.

El riesgo en finanzas no es solo 'la posibilidad de perder dinero', sino la variabilidad de los retornos. Un activo muy volátil (alta desviación estándar) es más riesgoso que uno estable, aunque ambos tengan la misma rentabilidad promedio. El riesgo se mide típicamente con volatilidad (σ), Value at Risk (VaR), o Sharpe ratio.

Existen diferentes tipos de riesgo: 1) Riesgo sistemático (no diversificable, afecta a todo el mercado), 2) Riesgo específico (diversificable, particular de una empresa/sector), 3) Riesgo de liquidez (dificultad para vender), 4) Riesgo crediticio (default), 5) Riesgo cambiario, 6) Riesgo inflacionario, etc.

El CAPM (Capital Asset Pricing Model) formaliza esta relación: Retorno esperado = Rf + β(Rm - Rf), donde Rf es la tasa libre de riesgo, β mide la sensibilidad al mercado, y (Rm - Rf) es la prima de riesgo del mercado. Aunque tiene limitaciones, sigue siendo fundamental para pricing de activos.

En Argentina, la relación riesgo-retorno es particularmente compleja por la alta volatilidad macroeconómica. Los activos 'seguros' como bonos soberanos pueden ser muy riesgosos por el riesgo país. Los dólares cash parecen seguros pero tienen riesgo regulatorio (corralito, pesificación). Las acciones son volátiles pero pueden proteger contra inflación.

Para un inversor individual, es crucial: 1) Entender tu tolerancia al riesgo (función de edad, ingresos, obligaciones), 2) Diversificar para eliminar riesgo específico, 3) Tomar solo riesgo compensado (que pague prima), 4) Rebalancear periódicamente, 5) Tener horizonte de largo plazo para que el tiempo mitigue volatilidad.

La frontera eficiente de Markowitz muestra que para cada nivel de riesgo hay un portfolio óptimo que maximiza retorno. El arte del portfolio management es encontrar esa combinación óptima para cada perfil de inversor.`,
      },
      {
        title: "Diversificación",
        description:
          "Estrategia de reducir riesgo invirtiendo en diferentes activos, sectores y mercados.",
        details:
          "'No pongas todos los huevos en la misma canasta' - principio básico de inversión.",
        expertExplanation: `La diversificación es la única 'free lunch' en finanzas. Como especialista en gestión de riesgo, puedo asegurarte que es la herramienta más poderosa para mejorar el perfil riesgo-retorno de cualquier portfolio. La clave está en entender que no toda diversificación es igual.

El concepto matemático detrás es la correlación: cuando combinas activos con correlación menor a 1, reduces la volatilidad del portfolio sin sacrificar retorno esperado. Si dos activos están perfectamente correlacionados (+1), no hay beneficio de diversificación. Si están perfectamente anti-correlacionados (-1), podés eliminar todo el riesgo.

Hay múltiples dimensiones de diversificación: 1) Por clase de activo (acciones, bonos, commodities, real estate), 2) Por sector (tecnología, financiero, utilities, consumo), 3) Por geografía (local, emergentes, desarrollados), 4) Por estilo (growth/value, large/small cap), 5) Por factor (momentum, quality, low vol), 6) Por tiempo (dollar cost averaging).

En Argentina, la diversificación es especialmente crucial porque tenemos alta concentración: el mercado de acciones está dominado por pocas empresas (YPF, bancos, Tenaris), la economía depende mucho del agro y commodities, y tenemos alta correlación con Brasil. Por eso es fundamental diversificar internacionalmente.

Pero cuidado con las 'correlation breakdowns': durante crisis, las correlaciones tienden a converger a 1 (todos los activos caen juntos). Esto reduce justamente cuando más necesitás diversificación. Por eso algunos sugieren diversificar también por 'regímenes de mercado' o incluir activos alternativos (hedge funds, private equity).

La diversificación óptima no es necesariamente equiponderada (1/N). La teoría de Markowitz sugiere pesos que dependen de retornos esperados, volatilidades, y correlaciones. En la práctica, estos parámetros son difíciles de estimar, por lo que muchos prefieren enfoques más simples como risk parity (igualar contribución al riesgo).

Para un inversor individual en Argentina: 1) No más del 5-10% en una sola acción, 2) Diversificar entre sectores y países, 3) Incluir activos internacionales (30-50%), 4) Considerar diferentes monedas, 5) Rebalancear anualmente, 6) No over-diversificar (muchos fondos diluyen alfa).

Recordá que diversificación no garantiza ganancias, pero sí reduce dramáticamente la probabilidad de pérdidas catastróficas.`,
      },
      {
        title: "Horizonte de Inversión",
        description:
          "Tiempo que planeas mantener una inversión antes de necesitar el dinero.",
        details:
          "Determina qué tipos de activos son apropiados para tu estrategia.",
        expertExplanation: `El horizonte de inversión es probablemente la variable más importante para determinar tu asset allocation. Como asesor de patrimonios, siempre digo que 'el tiempo es tu mejor aliado' porque permite que el poder de la capitalización compuesta y la ley de grandes números trabajen a tu favor.

Conceptualmente, a mayor horizonte, mayor capacidad de asumir riesgo. ¿Por qué? Porque la volatilidad de corto plazo se suaviza en el largo plazo. Las acciones pueden caer 50% en un año, pero históricamente han tenido retornos positivos en períodos de 10+ años. El tiempo permite 'wait out' la volatilidad.

Horizontes típicos: 1) Corto plazo (< 2 años): liquidez, cauciones, money market, bonos cortos, 2) Mediano plazo (2-10 años): mix balanceado, bonos medianos, algunas acciones, 3) Largo plazo (> 10 años): mayor peso en acciones, activos alternativos, menos liquidez.

En Argentina, el horizonte se complica por la inestabilidad macroeconómica. Un horizonte 'largo' puede ser solo 3-5 años por los ciclos políticos y económicos. Esto limita la capacidad de hacer inversiones verdaderamente de largo plazo y sesga hacia mayor liquidez y activos hard.

El concepto de 'liability matching' es crucial: tus inversiones deben alinearse con tus necesidades futuras de dinero. Si necesitás comprar un auto en 2 años, no pongas esa plata en acciones. Si estás ahorrando para la jubilación en 20 años, no la tengas en plazo fijo.

También está el 'glide path': la asset allocation debería volverse más conservadora a medida que te acercás al objetivo. Un joven de 25 años puede tener 80% en acciones; alguien de 60 años tal vez 30%. La regla simple es '100 - edad = % en acciones', aunque muchos la consideran demasiado conservadora hoy.

Para inversores argentinos: 1) Definí múltiples horizontes (emergencia, objetivos mediano plazo, jubilación), 2) Considerá la inflación en horizontes largos, 3) Mantené flexibilidad por incertidumbre macro, 4) Usá el tiempo para dollar-cost averaging, 5) No cambies constantemente de horizonte por ruido del mercado.

El poder de la capitalización compuesta es extraordinario: $1000 al 10% anual se convierten en $17.449 en 30 años. Pero requiere disciplina y perspectiva de largo plazo.

La paciencia es la virtud más valiosa de un inversor exitoso.`,
      },
      {
        title: "Costo de Oportunidad",
        description:
          "Lo que renuncias al elegir una alternativa de inversión sobre otra.",
        details:
          "Siempre compara tus inversiones con alternativas disponibles en el mercado.",
        expertExplanation: `El costo de oportunidad es uno de los conceptos más importantes pero menos entendidos en finanzas. Como economista, puedo explicarte que no se trata solo de 'lo que podrías haber ganado', sino del framework mental para tomar decisiones de inversión racionales en un mundo de recursos limitados.

Formalmente, el costo de oportunidad de elegir la alternativa A es el retorno de la mejor alternativa B que rechazaste. Es implícito, no explícito. No aparece en tu estado de cuenta, pero es real porque representa valor económico perdido. El concepto viene de la economía: cuando usás recursos en una cosa, no podés usarlos en otra.

En inversiones, siempre tenés múltiples alternativas: acciones, bonos, plazo fijo, dólares, real estate, negocios propios, educación, etc. Cada peso que ponés en una alternativa tiene el costo de oportunidad de no ponerlo en la mejor de las otras. Por eso es crucial benchmarking: toda inversión debe medirse contra alternativas relevantes.

En Argentina, el costo de oportunidad es particularmente alto por la volatilidad y multiplicidad de opciones. Si comprás un departamento que se revalúa 30% anual en dólares, parece bueno. Pero si las acciones subían 50%, el costo de oportunidad fue 20%. Si tenías los dólares en el colchón mientras había bonos al 15% en dólares, el costo fue significativo.

El benchmark apropiado depende del riesgo. No podés comparar acciones con plazo fijo porque tienen diferente riesgo. La comparación correcta es risk-adjusted: acciones vs índice accionario, bonos vs índice de bonos, etc. El Sharpe ratio ayuda a comparar alternativas con diferente riesgo.

También está el 'opportunity cost of cash': mantener dinero líquido tiene el costo de no invertirlo. En ambientes inflacionarios como Argentina, este costo es altísimo. Pero cash también tiene valor por optionality: te permite aprovechar oportunidades cuando aparecen.

Para decisiones más complejas, usá NPV (valor presente neto): traé todos los flujos de las alternativas a valor presente y elegí la de mayor NPV. La tasa de descuento debería reflejar el costo de oportunidad del capital.

Como inversor: 1) Siempre pensá en términos de alternativas, 2) Establecé benchmarks relevantes para cada inversión, 3) Considerá el riesgo en las comparaciones, 4) No te enamores de una inversión si hay mejores alternativas, 5) Revisá periódicamente si tus holdings siguen siendo óptimos.

El costo de oportunidad también aplica al tiempo: cada hora que pasás analizando una inversión pequeña tiene el costo de no dedicarla a decisiones más importantes.`,
      },
    ],
  },
];

export default function ConceptosBasicosPage() {
  const [expandedConcept, setExpandedConcept] = useState<string | null>(null);

  const toggleConcept = (conceptKey: string) => {
    setExpandedConcept(expandedConcept === conceptKey ? null : conceptKey);
  };

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
            Conceptos Básicos
          </h1>
          <p className="text-xl text-slate-600 dark:text-slate-400 max-w-3xl mx-auto leading-relaxed">
            Fundamentos esenciales que necesitas conocer para comenzar a
            invertir con confianza en el mercado argentino.
          </p>
          <p className="text-sm text-slate-500 dark:text-slate-400 mt-4">
            💡 Haz clic en cualquier concepto para ver una explicación detallada
            por un experto
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
          <span className="text-slate-800 dark:text-slate-200">
            Conceptos Básicos
          </span>
        </div>

        {/* Concepts Sections */}
        <div className="space-y-16">
          {basicConcepts.map((section, sectionIndex) => {
            const Icon = section.icon;
            return (
              <div key={sectionIndex} className="space-y-8">
                <div className="flex items-center mb-8">
                  <div className="p-3 rounded-xl bg-gradient-to-br from-jpm-blue/10 to-blue-600/10 border border-jpm-blue/20 mr-4">
                    <Icon className="h-6 w-6 text-jpm-blue" />
                  </div>
                  <h2 className="text-3xl font-bold text-slate-800 dark:text-slate-200">
                    {section.category}
                  </h2>
                </div>

                <div
                  className={`grid md:grid-cols-2 gap-6 ${section.category === "Macroeconomía" ? "light-blue-gradient rounded-2xl p-6" : ""}`}
                >
                  {section.concepts.map((concept, conceptIndex) => {
                    const conceptKey = `${sectionIndex}-${conceptIndex}`;
                    const isExpanded = expandedConcept === conceptKey;

                    return (
                      <div
                        key={conceptIndex}
                        className={`bg-white/70 dark:bg-slate-800/70 backdrop-blur-sm border border-slate-200/50 dark:border-slate-700/50 rounded-2xl p-6 hover:shadow-lg hover:shadow-jpm-blue/5 hover:border-jpm-blue/30 transition-all duration-300 cursor-pointer ${
                          isExpanded
                            ? "md:col-span-2 ring-2 ring-jpm-blue/20"
                            : ""
                        }`}
                        onClick={() => toggleConcept(conceptKey)}
                      >
                        <div className="flex items-center justify-between mb-3">
                          <h3 className="text-xl font-bold text-slate-800 dark:text-slate-200">
                            {concept.title}
                          </h3>
                          <div className="flex-shrink-0 ml-4">
                            {isExpanded ? (
                              <ChevronUp className="h-5 w-5 text-jpm-blue" />
                            ) : (
                              <ChevronDown className="h-5 w-5 text-slate-400" />
                            )}
                          </div>
                        </div>

                        <p className="text-slate-600 dark:text-slate-400 mb-4 leading-relaxed">
                          {concept.description}
                        </p>

                        <div className="p-4 bg-slate-50/50 dark:bg-slate-700/50 rounded-xl border border-slate-200/30 dark:border-slate-600/30 mb-4">
                          <p className="text-sm text-slate-700 dark:text-slate-300 leading-relaxed">
                            💡 <strong>Tip:</strong> {concept.details}
                          </p>
                        </div>

                        {isExpanded && (
                          <div className="mt-6 pt-6 border-t border-slate-200/50 dark:border-slate-700/50">
                            <div className="flex items-center mb-4">
                              <div className="w-8 h-8 rounded-full bg-gradient-to-r from-jpm-blue to-blue-600 flex items-center justify-center mr-3">
                                <span className="text-white text-sm font-bold">
                                  E
                                </span>
                              </div>
                              <div>
                                <h4 className="font-semibold text-slate-800 dark:text-slate-200">
                                  Explicación Detallada
                                </h4>
                                <p className="text-xs text-slate-500 dark:text-slate-400">
                                  Por un PhD en Economía especializado en
                                  mercados argentinos
                                </p>
                              </div>
                            </div>

                            <div className="prose prose-slate dark:prose-invert max-w-none">
                              <div className="text-slate-700 dark:text-slate-300 leading-relaxed whitespace-pre-line">
                                {concept.expertExplanation}
                              </div>
                            </div>

                            <div className="mt-6 p-4 bg-gradient-to-r from-jpm-blue/5 to-blue-600/5 border border-jpm-blue/20 rounded-xl">
                              <p className="text-sm text-slate-600 dark:text-slate-400 italic">
                                📚 Esta explicación está diseñada para
                                inversores que buscan comprender los fundamentos
                                teóricos y prácticos del concepto en el contexto
                                del mercado argentino.
                              </p>
                            </div>
                          </div>
                        )}
                      </div>
                    );
                  })}
                </div>
              </div>
            );
          })}
        </div>

        {/* Next Steps */}
        <div className="mt-16 bg-gradient-to-br from-jpm-blue/5 to-blue-600/5 border border-jpm-blue/20 rounded-2xl p-8">
          <h2 className="text-2xl font-bold text-slate-800 dark:text-slate-200 mb-4 text-center">
            ¿Listo para el siguiente paso?
          </h2>
          <p className="text-slate-600 dark:text-slate-400 mb-6 text-center max-w-2xl mx-auto">
            Ahora que conoces los conceptos básicos, explora nuestros cursos
            estructurados para profundizar tu conocimiento.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/educacion/cursos"
              className="inline-flex items-center justify-center px-6 py-3 bg-gradient-to-r from-jpm-blue to-blue-600 text-white font-medium rounded-xl hover:shadow-lg hover:shadow-jpm-blue/25 transition-all duration-300 hover:-translate-y-1"
            >
              Ver Cursos
              <ArrowRight className="h-4 w-4 ml-2" />
            </Link>
            <Link
              href="/educacion/glosario"
              className="inline-flex items-center justify-center px-6 py-3 border border-jpm-blue text-jpm-blue font-medium rounded-xl hover:bg-jpm-blue/5 transition-all duration-300"
            >
              Explorar Glosario
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
