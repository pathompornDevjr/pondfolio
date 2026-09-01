import type { Metadata, Viewport } from "next";
import { Noto_Sans_Thai, Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/layouts/nav";
import Footer from "@/layouts/footer";
import { ThemeProvider } from "@/context/ThemeContext";
import { LanguageProvider } from "@/context/LanguageContext";

const notoThai = Noto_Sans_Thai({
  weight: ["300", "400", "500", "600", "700", "800"],
  subsets: ["thai"],
  variable: "--font-noto-thai",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Pondfolio | Pathomporn Wongsuwan - Full-Stack & Mobile Developer",
  description:
    "Portfolio of Pathomporn Wongsuwan (PangPond), Full-Stack & Mobile Developer specializing in React, Next.js, React Native, Node.js, and modern cloud solutions.",
  keywords: [
    "Pathomporn Wongsuwan",
    "PangPond",
    "Pondfolio",
    "Full-Stack Developer",
    "Mobile Developer",
    "React Native",
    "Next.js",
    "Software Engineer Thailand",
  ],
  authors: [{ name: "Pathomporn Wongsuwan" }],
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#f8fafc" },
    { media: "(prefers-color-scheme: dark)", color: "#090d16" },
  ],
};

const themeScript = `
(function() {
  try {
    var saved = localStorage.getItem('pond_portfolio_theme');
    var isDark = saved === 'dark' || (!saved && window.matchMedia('(prefers-color-scheme: dark)').matches);
    if (isDark) {
      document.documentElement.classList.add('dark');
      document.documentElement.classList.remove('light');
    } else {
      document.documentElement.classList.remove('dark');
      document.documentElement.classList.add('light');
    }
  } catch (e) {}
})();
`;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="th" suppressHydrationWarning className="dark">
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
      </head>
      <body className={`${notoThai.className} ${inter.variable} antialiased selection:bg-sky-500 selection:text-white`}>
        <ThemeProvider>
          <LanguageProvider>
            <div className="w-full min-h-screen flex flex-col bg-[var(--background)] text-[var(--foreground)] transition-colors duration-300">
              <Navbar />
              <main className="flex-1 w-full pt-16">{children}</main>
              <Footer />
            </div>
          </LanguageProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
