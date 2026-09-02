"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";
import { FaBars } from "react-icons/fa";
import { FaX } from "react-icons/fa6";
import { FiSun, FiMoon, FiGlobe } from "react-icons/fi";
import { usePathname, useRouter } from "next/navigation";
import { useTheme } from "@/context/ThemeContext";
import { useLanguage } from "@/context/LanguageContext";
import MeImg from "@/assets/me.png";

const Navbar = () => {
  const [showResponsiveMenu, setShowResponsiveMenu] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const router = useRouter();
  const pathname = usePathname();
  const { theme, toggleTheme } = useTheme();
  const { lang, setLang, t } = useLanguage();

  const menus = [
    { title: t.nav.home, url: "/" },
    { title: t.nav.about, url: "/#aboutme" },
    { title: t.nav.experience, url: "/#experience" },
    { title: t.nav.skills, url: "/#skills" },
    { title: t.nav.achievements, url: "/#achievements" },
    { title: t.nav.projects, url: "/projects" },
    { title: t.nav.contact, url: "/contact" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(min-width: 1024px)");
    const handleResize = () => {
      if (mediaQuery.matches) {
        setShowResponsiveMenu(false);
      }
    };
    handleResize();
    mediaQuery.addEventListener("change", handleResize);
    return () => mediaQuery.removeEventListener("change", handleResize);
  }, []);

  return (
    <header
      className={`w-full fixed top-0 left-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/80 dark:bg-slate-950/80 backdrop-blur-md shadow-sm border-b border-slate-200/80 dark:border-slate-800/80 py-3"
          : "bg-transparent py-4"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Brand Logo */}
        <Link
          href="/"
          className="group flex items-center gap-2.5 text-xl sm:text-2xl font-extrabold tracking-tight"
        >
          <div className="relative w-8 h-8 sm:w-9 sm:h-9 rounded-full overflow-hidden border-2 border-sky-500/60 dark:border-sky-400/60 shadow-xs group-hover:scale-105 transition-transform shrink-0">
            <Image
              src={MeImg}
              alt="Pondfolio Avatar Logo"
              fill
              className="object-cover object-top"
              priority
            />
          </div>
          <span className="bg-gradient-to-r from-sky-500 via-teal-500 to-emerald-500 bg-clip-text text-transparent group-hover:opacity-90 transition-opacity">
            Pondfolio
          </span>
          <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse hidden sm:inline-block" />
        </Link>

        {/* Desktop Navigation Links */}
        <nav className="hidden lg:flex items-center gap-1 xl:gap-2">
          {menus.map((m) => {
            const isActive =
              pathname === m.url || (m.url !== "/" && pathname.startsWith(m.url));
            return (
              <Link
                key={m.url + m.title}
                href={m.url}
                className={`px-3 py-1.5 rounded-lg text-sm font-medium transition-all duration-200 ${
                  isActive
                    ? "text-sky-600 dark:text-sky-400 bg-sky-50 dark:bg-sky-950/40"
                    : "text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-800/60"
                }`}
              >
                {m.title}
              </Link>
            );
          })}
        </nav>

        {/* Right Actions: Lang Switcher, Theme Switcher, CTA */}
        <div className="hidden lg:flex items-center gap-3">
          {/* Language Switcher Pill */}
          <div className="flex items-center p-1 rounded-full bg-slate-100 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700/80 text-xs font-semibold">
            <button
              onClick={() => setLang("th")}
              className={`px-2.5 py-1 rounded-full transition-all ${
                lang === "th"
                  ? "bg-white dark:bg-slate-700 text-sky-600 dark:text-sky-300 shadow-xs"
                  : "text-slate-500 dark:text-slate-400 hover:text-slate-800 dark:hover:text-slate-200"
              }`}
              title="ภาษาไทย"
            >
              TH
            </button>
            <button
              onClick={() => setLang("en")}
              className={`px-2.5 py-1 rounded-full transition-all ${
                lang === "en"
                  ? "bg-white dark:bg-slate-700 text-sky-600 dark:text-sky-300 shadow-xs"
                  : "text-slate-500 dark:text-slate-400 hover:text-slate-800 dark:hover:text-slate-200"
              }`}
              title="English"
            >
              EN
            </button>
          </div>

          {/* Theme Toggle Button */}
          <button
            onClick={toggleTheme}
            aria-label="Toggle theme"
            className="p-2 rounded-full border border-slate-200 dark:border-slate-700 bg-slate-100 dark:bg-slate-800/80 text-slate-700 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors"
            title={theme === "dark" ? "Switch to Light Mode" : "Switch to Dark Mode"}
          >
            {theme === "dark" ? <FiSun size={18} className="text-amber-400" /> : <FiMoon size={18} className="text-slate-700" />}
          </button>

          {/* Hire Me / Contact CTA */}
          <Link
            href="/contact"
            className="inline-flex items-center justify-center px-4 py-2 text-sm font-semibold rounded-xl text-white bg-gradient-to-r from-sky-600 to-teal-600 hover:from-sky-500 hover:to-teal-500 shadow-sm hover:shadow-md transition-all active:scale-95"
          >
            {t.nav.hireMe}
          </Link>
        </div>

        {/* Mobile Actions & Hamburger Button */}
        <div className="flex lg:hidden items-center gap-2">
          {/* Quick Theme Toggle on Mobile */}
          <button
            onClick={toggleTheme}
            aria-label="Toggle theme"
            className="p-2 rounded-lg border border-slate-200 dark:border-slate-700 bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300"
          >
            {theme === "dark" ? <FiSun size={17} className="text-amber-400" /> : <FiMoon size={17} />}
          </button>

          {/* Quick Lang Switcher on Mobile */}
          <button
            onClick={() => setLang(lang === "th" ? "en" : "th")}
            className="px-2.5 py-1.5 rounded-lg border border-slate-200 dark:border-slate-700 bg-slate-100 dark:bg-slate-800 text-xs font-bold text-slate-700 dark:text-slate-300"
          >
            {lang === "th" ? "EN" : "TH"}
          </button>

          <button
            onClick={() => setShowResponsiveMenu(!showResponsiveMenu)}
            aria-label="Toggle Navigation Menu"
            className="p-2 rounded-lg border border-slate-200 dark:border-slate-700 bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700"
          >
            {showResponsiveMenu ? <FaX size={18} /> : <FaBars size={18} />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {showResponsiveMenu && (
        <div className="lg:hidden w-full bg-white/95 dark:bg-slate-950/95 backdrop-blur-md border-b border-slate-200 dark:border-slate-800 px-6 py-5 flex flex-col gap-3 shadow-xl animate-in fade-in slide-in-from-top-2 duration-200">
          <div className="flex flex-col gap-1">
            {menus.map((m) => (
              <button
                key={m.url + m.title}
                onClick={() => {
                  router.push(m.url);
                  setShowResponsiveMenu(false);
                }}
                className="text-left px-3 py-2.5 rounded-lg text-sm font-medium text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
              >
                {m.title}
              </button>
            ))}
          </div>

          <div className="pt-3 border-t border-slate-200 dark:border-slate-800 flex flex-col gap-3">
            <div className="flex items-center justify-between text-sm text-slate-600 dark:text-slate-400">
              <span>{lang === "th" ? "ภาษา / Language" : "Language"}</span>
              <div className="flex gap-1">
                <button
                  onClick={() => setLang("th")}
                  className={`px-3 py-1 rounded-md text-xs font-semibold ${
                    lang === "th"
                      ? "bg-sky-600 text-white"
                      : "bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300"
                  }`}
                >
                  ไทย
                </button>
                <button
                  onClick={() => setLang("en")}
                  className={`px-3 py-1 rounded-md text-xs font-semibold ${
                    lang === "en"
                      ? "bg-sky-600 text-white"
                      : "bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300"
                  }`}
                >
                  English
                </button>
              </div>
            </div>

            <Link
              href="/contact"
              onClick={() => setShowResponsiveMenu(false)}
              className="w-full text-center py-2.5 rounded-xl text-sm font-semibold text-white bg-gradient-to-r from-sky-600 to-teal-600 shadow-xs"
            >
              {t.nav.hireMe}
            </Link>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
