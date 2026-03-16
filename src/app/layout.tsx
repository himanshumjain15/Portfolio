import type { Metadata } from "next";
import { Space_Grotesk, Inter, JetBrains_Mono } from "next/font/google";
import { ThemeProvider } from "@/components/ThemeProvider";
import "./globals.css";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-body",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Himanshu Jain — Data Science @ CU Boulder",
    template: "%s | Himanshu Jain",
  },
  description:
    "MS Data Science student at University of Colorado Boulder. Specializing in statistical analysis, data engineering, and applied ML. Previously at EY and LG Electronics.",
  keywords: [
    "data science",
    "machine learning",
    "Himanshu Jain",
    "CU Boulder",
    "data analyst",
    "Python",
    "SQL",
    "NLP",
  ],
  authors: [{ name: "Himanshu Jain" }],
  openGraph: {
    title: "Himanshu Jain — Data Science @ CU Boulder",
    description:
      "MS Data Science student at University of Colorado Boulder. Specializing in statistical analysis, data engineering, and applied ML.",
    type: "website",
    locale: "en_US",
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${spaceGrotesk.variable} ${inter.variable} ${jetbrainsMono.variable} font-body antialiased`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <a href="#main" className="skip-to-content">
            Skip to content
          </a>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
