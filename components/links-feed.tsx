import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";
import Link from "next/link";
import { navMain } from "./navigation";

export default function LinksFeed() {
  return (
    <div className="py-12">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="space-y-16">
          {navMain.map((group, groupIndex) => (
            <div key={group.title} className="relative">
              {/* Group Header */}
              <div className="text-center mb-12">
                <h2 className="text-3xl font-playfair font-semibold text-slate-800 dark:text-slate-200 mb-3">
                  {group.title}
                </h2>
                <div className="w-20 h-0.5 bg-gradient-to-r from-navy to-jpm-blue mx-auto" />
              </div>

              {/* Cards Grid */}
              <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
                {group.items.map((feature, index) => (
                  <Link
                    key={feature.title}
                    href={feature.url}
                    className="group block"
                  >
                    <Card className="h-full premium-border corporate-shadow bg-white/80 dark:bg-slate-900/80 backdrop-blur-sm border-0 overflow-hidden transition-all duration-500 hover:scale-[1.02] hover:shadow-2xl">
                      <CardContent className="p-8">
                        <div className="flex flex-col items-center text-center space-y-6">
                          {/* Icon Container */}
                          <div className="relative">
                            <div className="w-20 h-20 rounded-full bg-gradient-to-br from-slate-100 to-slate-200 dark:from-slate-800 dark:to-slate-700 flex items-center justify-center group-hover:scale-110 transition-transform duration-500">
                              <Image
                                src={feature.iconSrc}
                                alt={feature.iconAlt}
                                width={44}
                                height={44}
                                className="transition-transform duration-500 group-hover:rotate-6"
                              />
                            </div>
                            {/* Floating accent */}
                            <div className="absolute -top-1 -right-1 w-6 h-6 bg-gradient-to-br from-jpm-blue to-blue-700 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                          </div>

                          {/* Content */}
                          <div className="space-y-3">
                            <h3 className="text-xl font-semibold text-slate-900 dark:text-slate-100 group-hover:text-navy dark:group-hover:text-blue-300 transition-colors">
                              {feature.title}
                            </h3>
                            <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                              {feature.description}
                            </p>
                          </div>

                          {/* Subtle Arrow */}
                          <div className="flex items-center justify-center w-8 h-8 rounded-full bg-slate-100 dark:bg-slate-800 group-hover:bg-jpm-blue dark:group-hover:bg-jpm-blue transition-all duration-300">
                            <svg
                              className="w-4 h-4 text-slate-600 dark:text-slate-400 group-hover:text-white transition-colors"
                              fill="none"
                              viewBox="0 0 24 24"
                              stroke="currentColor"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M9 5l7 7-7 7"
                              />
                            </svg>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </Link>
                ))}
              </div>

              {/* Decorative separator for non-last groups */}
              {groupIndex < navMain.length - 1 && (
                <div className="mt-16 flex justify-center">
                  <div className="w-32 h-px bg-gradient-to-r from-transparent via-slate-300 dark:via-slate-600 to-transparent" />
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
