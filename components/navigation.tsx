import {
  BarChart3,
  BookOpen,
  Calculator,
  ChartArea,
  ChartNoAxesCombined,
  DollarSign,
  GraduationCap,
  LucideIcon,
  PieChart,
  Search,
  Users,
} from "lucide-react";
import Link from "next/link";
import { MobileNav } from "./mobile-nav";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "./ui/navigation-menu";

interface NavigationItem {
  title: string;
  url: string;
  description: string;
  icon?: LucideIcon;
  iconSrc: string;
  iconAlt: string;
  prefetch?: boolean;
}

interface NavigationGroup {
  title: string;
  url: string;
  items: NavigationItem[];
}

export const navMain: NavigationGroup[] = [
  {
    title: "Finanzas",
    url: "#",
    items: [
      {
        title: "Acciones",
        url: "/acciones",
        description: "Mirá los retornos del año del Merval.",
        icon: ChartNoAxesCombined,
        iconSrc: "/stocks.png",
        iconAlt: "Stock chart icon",
      },
      {
        title: "Carry Trade",
        url: "/carry-trade",
        description: "Fijate cuál es el mejor bono para hacer carry trade.",
        icon: DollarSign,
        iconSrc: "/money.png",
        iconAlt: "Money icon",
      },
      {
        title: "Duales TAMAR",
        url: "/bonos-duales",
        description: "Mirá un análisis avanzado de duales TAMAR.",
        icon: BarChart3,
        iconSrc: "/excel.png",
        iconAlt: "Excel chart icon",
        prefetch: false,
      },
      {
        title: "Renta Fija",
        url: "/fija",
        description: "Encontrá el mejor bono para invertir en renta fija.",
        icon: PieChart,
        iconSrc: "/charts.png",
        iconAlt: "Charts icon",
      },
    ],
  },
  {
    title: "BCRA",
    url: "#",
    items: [
      {
        title: "Macroeconomía",
        url: "/variables",
        description:
          "Mirá las principales estadísticas del BCRA: inflación, reservas, dólar, etc.",
        icon: ChartArea,
        iconSrc: "/trending.png",
        iconAlt: "Trending chart icon",
      },
      {
        title: "Central de Deudores",
        url: "/central-de-deudores",
        description:
          "Consultá información sobre deudores del sistema financiero",
        icon: Search,
        iconSrc: "/magnifying.png",
        iconAlt: "Magnifying glass icon",
        prefetch: true,
      },
      {
        title: "Calculadora de Inflación",
        url: "/calculadora-de-inflacion",
        description:
          "Mirá cuánto vale hoy tu compra, inversión o deuda del pasado.",
        icon: Calculator,
        iconSrc: "/calculator.png",
        iconAlt: "Calculator icon",
        prefetch: false,
      },
    ],
  },
  {
    title: "Educación",
    url: "#",
    items: [
      {
        title: "Conceptos Básicos",
        url: "/educacion/conceptos-basicos",
        description: "Aprende los fundamentos de macroeconomía y finanzas.",
        icon: BookOpen,
        iconSrc: "/education.png",
        iconAlt: "Education icon",
        prefetch: false,
      },
      {
        title: "Cursos",
        url: "/educacion/cursos",
        description: "Cursos estructurados sobre inversión y economía.",
        icon: GraduationCap,
        iconSrc: "/graduation.png",
        iconAlt: "Graduation cap icon",
        prefetch: false,
      },
      {
        title: "Glosario",
        url: "/educacion/glosario",
        description: "Diccionario de términos financieros y económicos.",
        icon: BookOpen,
        iconSrc: "/dictionary.png",
        iconAlt: "Dictionary icon",
        prefetch: false,
      },
    ],
  },
];

export const navigationLinks: NavigationItem[] = navMain.flatMap(
  (group) => group.items,
);

export const inversionesLinks: NavigationItem[] =
  navMain.find((group) => group.title === "Finanzas")?.items || [];

export function Navigation() {
  const finanzasGroup = navMain.find((group) => group.title === "Finanzas");
  const bcraGroup = navMain.find((group) => group.title === "BCRA");
  const educacionGroup = navMain.find((group) => group.title === "Educación");

  return (
    <nav className="sticky top-0 z-50 border-b border-slate-200/50 dark:border-slate-800/50 bg-white/80 dark:bg-slate-900/80 backdrop-blur-md supports-[backdrop-filter]:bg-white/60 dark:supports-[backdrop-filter]:bg-slate-900/60">
      <div className="container mx-auto flex h-20 items-center justify-between px-4 sm:px-6">
        <MobileNav />

        <div className="flex items-center sm:flex-initial flex-1 justify-center sm:justify-start">
          <Link href="/" className="flex items-center group" prefetch={true}>
            <div className="flex items-center space-x-3">
              <div className="relative">
                <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-jpm-dark to-jpm-blue flex items-center justify-center">
                  <span className="text-xl font-bold text-white">L</span>
                </div>
                <div className="absolute -top-1 -right-1 w-4 h-4 bg-gradient-to-br from-jpm-blue to-blue-700 rounded-full opacity-80" />
              </div>
              <div className="flex flex-col">
                <span className="text-2xl font-playfair font-bold text-slate-800 dark:text-slate-200 group-hover:text-jpm-blue dark:group-hover:text-blue-300 transition-colors">
                  La Macro
                </span>
                <span className="text-xs text-slate-500 dark:text-slate-400 -mt-1">
                  Professional Analytics
                </span>
              </div>
            </div>
          </Link>
        </div>

        <div className="hidden sm:flex">
          <NavigationMenu className="ml-2 text-left" viewport={false}>
            <NavigationMenuList className="space-x-1">
              {finanzasGroup && (
                <NavigationMenuItem>
                  <NavigationMenuTrigger className="font-medium text-slate-700 dark:text-slate-300 hover:text-jpm-blue dark:hover:text-blue-300 px-4 py-2 rounded-lg hover:bg-slate-100/80 dark:hover:bg-slate-800/80 transition-all">
                    {finanzasGroup.title}
                  </NavigationMenuTrigger>
                  <NavigationMenuContent className="group-data-[viewport=false]/navigation-menu:rounded-xl z-50 border-slate-200/50 dark:border-slate-800/50 bg-white/95 dark:bg-slate-900/95 backdrop-blur-md">
                    <ul className="grid w-sm p-2">
                      {finanzasGroup.items.map((item) => (
                        <li key={item.url}>
                          <NavigationMenuLink asChild>
                            <Link
                              href={item.url}
                              prefetch={item.prefetch}
                              className="block select-none space-y-1 rounded-lg p-4 leading-none no-underline outline-none transition-all hover:bg-slate-100/80 dark:hover:bg-slate-800/80 hover:shadow-md group"
                            >
                              <div className="flex items-center gap-3">
                                {item.icon && (
                                  <item.icon className="h-5 w-5 text-slate-600 dark:text-slate-400 group-hover:text-jpm-blue dark:group-hover:text-blue-400" />
                                )}
                                <div className="text-sm font-semibold leading-none text-slate-800 dark:text-slate-200 group-hover:text-jpm-blue dark:group-hover:text-blue-300">
                                  {item.title}
                                </div>
                              </div>
                              <p className="line-clamp-2 text-sm leading-snug text-slate-600 dark:text-slate-400 ml-8">
                                {item.description}
                              </p>
                            </Link>
                          </NavigationMenuLink>
                        </li>
                      ))}
                    </ul>
                  </NavigationMenuContent>
                </NavigationMenuItem>
              )}
              {bcraGroup?.items.map((item) => (
                <NavigationMenuItem key={item.url}>
                  <NavigationMenuLink asChild className="font-medium">
                    <Link
                      href={item.url}
                      prefetch={item.prefetch}
                      className="text-slate-700 dark:text-slate-300 hover:text-jpm-blue dark:hover:text-blue-300 px-4 py-2 rounded-lg hover:bg-slate-100/80 dark:hover:bg-slate-800/80 transition-all"
                    >
                      {item.title}
                    </Link>
                  </NavigationMenuLink>
                </NavigationMenuItem>
              ))}
              {educacionGroup && (
                <NavigationMenuItem>
                  <NavigationMenuTrigger className="font-medium text-slate-700 dark:text-slate-300 hover:text-jpm-blue dark:hover:text-blue-300 px-4 py-2 rounded-lg hover:bg-slate-100/80 dark:hover:bg-slate-800/80 transition-all">
                    {educacionGroup.title}
                  </NavigationMenuTrigger>
                  <NavigationMenuContent className="group-data-[viewport=false]/navigation-menu:rounded-xl z-50 border-slate-200/50 dark:border-slate-800/50 bg-white/95 dark:bg-slate-900/95 backdrop-blur-md">
                    <ul className="grid w-sm p-2">
                      {educacionGroup.items.map((item) => (
                        <li key={item.url}>
                          <NavigationMenuLink asChild>
                            <Link
                              href={item.url}
                              prefetch={item.prefetch}
                              className="block select-none space-y-1 rounded-lg p-4 leading-none no-underline outline-none transition-all hover:bg-slate-100/80 dark:hover:bg-slate-800/80 hover:shadow-md group"
                            >
                              <div className="flex items-center gap-3">
                                {item.icon && (
                                  <item.icon className="h-5 w-5 text-slate-600 dark:text-slate-400 group-hover:text-jpm-blue dark:group-hover:text-blue-400" />
                                )}
                                <div className="text-sm font-semibold leading-none text-slate-800 dark:text-slate-200 group-hover:text-jpm-blue dark:group-hover:text-blue-300">
                                  {item.title}
                                </div>
                              </div>
                              <p className="line-clamp-2 text-sm leading-snug text-slate-600 dark:text-slate-400 ml-8">
                                {item.description}
                              </p>
                            </Link>
                          </NavigationMenuLink>
                        </li>
                      ))}
                    </ul>
                  </NavigationMenuContent>
                </NavigationMenuItem>
              )}
            </NavigationMenuList>
          </NavigationMenu>
        </div>
        <div className="sm:hidden w-10"></div>
      </div>
    </nav>
  );
}
