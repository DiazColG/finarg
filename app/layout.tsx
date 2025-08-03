import { Footer } from "@/components/footer";
import { Navigation } from "@/components/navigation";
import { PremiumBackground } from "@/components/premium-background";
import { ThemeProvider } from "@/components/theme-provider";
import type { Metadata, Viewport } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import { Toaster } from "sonner";
import "./globals.css";
import { PostHogProvider } from "./providers";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    template: "%s | La Macro",
    default: "La Macro - Macroeconomía y Finanzas Argentinas",
  },
  description:
    "Plataforma profesional de análisis financiero y macroeconómico. Central de deudores, inflación, reservas, dólar, tasas, y calculadora de carry trade.",
  authors: [{ name: "Tomas Malamud" }],
  openGraph: {
    type: "website",
    locale: "es_AR",
    url: "https://lamacro.ar",
    siteName: "La Macro",
  },
  twitter: {
    card: "summary_large_image",
    title: "La Macro - Macroeconomía y Finanzas Argentinas",
    description:
      "Plataforma profesional de análisis financiero y macroeconómico. Central de deudores, inflación, reservas, dólar, tasas, y calculadora de carry trade.",
    creator: "@tomasmalamud",
  },
};

export const viewport: Viewport = {
  colorScheme: "light dark",
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#ffffff" },
    { media: "(prefers-color-scheme: dark)", color: "#000000" },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" suppressHydrationWarning>
      <body
        className={`${inter.variable} ${playfair.variable} font-sans antialiased bg-gradient-to-br from-background via-background to-slate-50/30 dark:to-slate-900/30 min-h-screen`}
      >
        <PostHogProvider>
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
            <PremiumBackground />
            <Navigation />
            {children}
            <Footer />
            <Toaster richColors />
          </ThemeProvider>
        </PostHogProvider>
      </body>
    </html>
  );
}
