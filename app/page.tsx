"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import FadeInSection from "@/components/fade-in-section";
import { startupImages } from "@/libs/morestartup-img";
import MeImg from "@/assets/me.png";
import { useLanguage } from "@/context/LanguageContext";
import {
  FaArrowRight,
  FaDatabase,
  FaFacebookF,
  FaGithub,
  FaHtml5,
  FaCss3,
  FaJs,
  FaLine,
  FaLinkedin,
  FaNodeJs,
  FaReact,
  FaTrophy,
} from "react-icons/fa";
import {
  SiTypescript,
  SiNextdotjs,
  SiExpress,
  SiPrisma,
  SiPostgresql,
  SiMongodb,
  SiExpo,
  SiTailwindcss,
  SiBun,
  SiBootstrap,
  SiAxios,
  SiReacthookform,
  SiSpringboot,
  SiMysql,
  SiPostman,
  SiDocker,
  SiFigma,
  SiVercel,
  SiRender,
  SiJsonwebtokens,
  SiGit,
} from "react-icons/si";
import {
  Code2,
  FileText,
  Sparkles,
  X,
  Award,
  CheckCircle2,
  Layers,
  Server,
  Smartphone,
  ChevronRight,
  Wrench,
  Cloud,
  ShieldCheck,
  Layout,
  Terminal,
} from "lucide-react";

export default function HomePage() {
  const { t, lang } = useLanguage();
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  // Close lightbox on Escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setSelectedImage(null);
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  return (
    <div className="w-full flex flex-col">
      {/* ============================================================ */}
      {/* 1. HERO SECTION */}
      {/* ============================================================ */}
      <section className="relative min-h-[92vh] flex items-center justify-center py-20 px-4 sm:px-6 lg:px-8 overflow-hidden bg-slate-50 dark:bg-slate-950 transition-colors duration-300">
        {/* Subtle Ambient Background Lighting */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[350px] bg-sky-500/10 dark:bg-sky-500/15 blur-[120px] rounded-full pointer-events-none" />
        <div className="absolute top-1/3 left-1/3 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[300px] bg-teal-500/10 dark:bg-teal-500/15 blur-[100px] rounded-full pointer-events-none" />

        <div className="relative z-10 max-w-5xl mx-auto flex flex-col items-center text-center">
          {/* Welcome Badge */}
          <FadeInSection className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-sky-200 dark:border-sky-800/80 bg-sky-50/80 dark:bg-sky-950/50 text-sky-700 dark:text-sky-300 text-xs sm:text-sm font-medium mb-6 shadow-xs backdrop-blur-xs">
            <Sparkles size={14} className="text-sky-500 animate-spin-slow" />
            <span>{t.hero.badge}</span>
          </FadeInSection>

          {/* Headline Greeting */}
          <FadeInSection className="space-y-3">
            <h1 className="text-3xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-slate-900 dark:text-white">
              {t.hero.greeting}{" "}
              <span className="bg-gradient-to-r from-sky-600 via-teal-500 to-emerald-500 dark:from-sky-400 dark:via-teal-300 dark:to-emerald-400 bg-clip-text text-transparent">
                {t.hero.name}
              </span>
            </h1>
            <p className="text-lg sm:text-2xl font-semibold text-slate-700 dark:text-slate-200">
              <span className="text-sky-600 dark:text-sky-400">{t.hero.rolePrefix}</span>{" "}
              <span className="text-slate-400 dark:text-slate-500">{t.hero.roleMiddle}</span>{" "}
              <span className="text-teal-600 dark:text-teal-400">{t.hero.roleSuffix}</span>
            </p>
          </FadeInSection>

          {/* Subtitle Bio */}
          <FadeInSection className="max-w-2xl mt-5">
            <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed">
              {t.hero.bio}
            </p>
          </FadeInSection>

          {/* Call to Actions */}
          <FadeInSection className="flex flex-wrap items-center justify-center gap-3 sm:gap-4 mt-8">
            <Link
              href="/projects"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-semibold text-sm text-white bg-gradient-to-r from-sky-600 to-teal-600 hover:from-sky-500 hover:to-teal-500 shadow-md hover:shadow-lg transition-all active:scale-95"
            >
              <span>{t.hero.viewProjects}</span>
              <Code2 size={16} />
            </Link>
            <a
              href="/files/Pathomporn_Wongsuwan_Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-semibold text-sm text-slate-700 dark:text-slate-200 border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-900 hover:bg-slate-100 dark:hover:bg-slate-800 transition-all shadow-xs active:scale-95"
            >
              <FileText size={16} className="text-teal-500" />
              <span>{t.hero.myResume}</span>
            </a>
            <Link
              href="/#achievements"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-semibold text-sm text-amber-700 dark:text-amber-300 border border-amber-300 dark:border-amber-700/60 bg-amber-50 dark:bg-amber-950/40 hover:bg-amber-100 dark:hover:bg-amber-900/50 transition-all shadow-xs active:scale-95"
            >
              <Award size={16} className="text-amber-500" />
              <span>{t.hero.achievementsBtn}</span>
            </Link>
          </FadeInSection>

          {/* Quick Highlights / Stats Pill Group */}
          <FadeInSection className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4 mt-12 w-full max-w-3xl">
            <div className="p-3.5 rounded-xl border border-slate-200 dark:border-slate-800 bg-white/70 dark:bg-slate-900/60 backdrop-blur-xs flex items-center gap-3">
              <CheckCircle2 size={18} className="text-emerald-500 shrink-0" />
              <span className="text-xs sm:text-sm font-medium text-slate-700 dark:text-slate-300 text-left">
                {t.hero.quickStats.projects}
              </span>
            </div>
            <div className="p-3.5 rounded-xl border border-slate-200 dark:border-slate-800 bg-white/70 dark:bg-slate-900/60 backdrop-blur-xs flex items-center gap-3">
              <Award size={18} className="text-amber-500 shrink-0" />
              <span className="text-xs sm:text-sm font-medium text-slate-700 dark:text-slate-300 text-left">
                {t.hero.quickStats.award}
              </span>
            </div>
            <div className="p-3.5 rounded-xl border border-slate-200 dark:border-slate-800 bg-white/70 dark:bg-slate-900/60 backdrop-blur-xs flex items-center gap-3">
              <Sparkles size={18} className="text-sky-500 shrink-0" />
              <span className="text-xs sm:text-sm font-medium text-slate-700 dark:text-slate-300 text-left">
                {t.hero.quickStats.status}
              </span>
            </div>
          </FadeInSection>
        </div>
      </section>

      {/* ============================================================ */}
      {/* 2. ABOUT ME SECTION */}
      {/* ============================================================ */}
      <section
        id="aboutme"
        className="w-full py-20 lg:py-28 px-4 sm:px-6 lg:px-8 border-t border-slate-200 dark:border-slate-800/80 bg-white dark:bg-slate-900/50 transition-colors duration-300"
      >
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
            {/* Avatar Profile Image */}
            <FadeInSection className="w-full sm:w-80 lg:w-1/3 flex justify-center shrink-0">
              <div className="relative group">
                <div className="absolute -inset-1.5 rounded-3xl bg-gradient-to-r from-sky-500 to-teal-500 opacity-30 group-hover:opacity-50 blur-lg transition duration-500" />
                <div className="relative w-64 h-64 sm:w-72 sm:h-72 rounded-2xl overflow-hidden border-2 border-slate-200 dark:border-slate-700 bg-slate-100 dark:bg-slate-800 shadow-xl">
                  <Image
                    src={MeImg}
                    alt="Pathomporn Wongsuwan"
                    fill
                    className="object-cover object-center group-hover:scale-105 transition-transform duration-500"
                    priority
                  />
                </div>
              </div>
            </FadeInSection>

            {/* About Details */}
            <FadeInSection className="w-full lg:w-2/3 flex flex-col">
              <span className="text-xs font-bold tracking-widest text-sky-600 dark:text-sky-400 uppercase">
                {t.about.tag}
              </span>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 dark:text-white mt-1">
                {t.about.title}
              </h2>
              <p className="text-sm font-medium text-slate-500 dark:text-slate-400 mt-1">
                {t.about.subtitle}
              </p>

              {/* Bio Paragraphs */}
              <div className="mt-6 space-y-4 text-sm sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed">
                <p>{t.about.bioP1}</p>
                <p>{t.about.bioP2}</p>
                <p>{t.about.bioP3}</p>
              </div>

              {/* Info Matrix Cards */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-6 pt-6 border-t border-slate-200 dark:border-slate-800">
                {t.about.infoCards.map((item, i) => (
                  <div
                    key={i}
                    className="p-3 rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-800/40"
                  >
                    <p className="text-xs font-semibold text-slate-500 dark:text-slate-400">{item.label}</p>
                    <p className="text-sm font-bold text-slate-800 dark:text-slate-200 mt-0.5">{item.value}</p>
                  </div>
                ))}
              </div>

              {/* Social Channels */}
              <div className="mt-6 flex items-center gap-3">
                <span className="text-xs font-semibold text-slate-500 dark:text-slate-400">
                  {t.about.socialTitle}:
                </span>
                <div className="flex items-center gap-2">
                  <a
                    href="https://github.com/pathompornDevjr"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="GitHub"
                    className="p-2 rounded-lg border border-slate-200 dark:border-slate-700 bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:text-sky-600 transition-colors"
                  >
                    <FaGithub size={16} />
                  </a>
                  <a
                    href="https://www.facebook.com/pathomporn.wongsuwan"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Facebook"
                    className="p-2 rounded-lg border border-slate-200 dark:border-slate-700 bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:text-blue-500 transition-colors"
                  >
                    <FaFacebookF size={16} />
                  </a>
                  <a
                    href="https://line.me/ti/p/~pond0947035487"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Line"
                    className="p-2 rounded-lg border border-slate-200 dark:border-slate-700 bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:text-emerald-500 transition-colors"
                  >
                    <FaLine size={16} />
                  </a>
                  <a
                    href="https://linkedin.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="LinkedIn"
                    className="p-2 rounded-lg border border-slate-200 dark:border-slate-700 bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:text-sky-500 transition-colors"
                  >
                    <FaLinkedin size={16} />
                  </a>
                </div>
              </div>
            </FadeInSection>
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/* 3. SKILLS SECTION (Categorized as per Resume) */}
      {/* ============================================================ */}
      <section
        id="skills"
        className="w-full py-20 lg:py-28 px-4 sm:px-6 lg:px-8 border-t border-slate-200 dark:border-slate-800/80 bg-slate-50 dark:bg-slate-950 transition-colors duration-300"
      >
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <FadeInSection className="text-center max-w-2xl mx-auto mb-14">
            <span className="text-xs font-bold tracking-widest text-sky-600 dark:text-sky-400 uppercase">
              {t.skills.tag}
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white mt-1">
              {t.skills.title}
            </h2>
            <p className="text-sm sm:text-base text-slate-600 dark:text-slate-400 mt-2">
              {t.skills.subtitle}
            </p>
          </FadeInSection>

          {/* Skills Grid - 6 Categories from Resume */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* 1. Frontend */}
            <FadeInSection className="p-6 rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900/60 shadow-xs hover:border-slate-300 dark:hover:border-slate-700 transition-all duration-300 flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-3 mb-3">
                  <div className="p-2.5 rounded-xl bg-teal-100 dark:bg-teal-950/60 text-teal-600 dark:text-teal-400">
                    <Code2 size={22} />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-slate-900 dark:text-white">
                      {t.skills.categories.frontend.title}
                    </h3>
                    <p className="text-xs text-slate-500 dark:text-slate-400">
                      {t.skills.categories.frontend.desc}
                    </p>
                  </div>
                </div>
                <div className="flex flex-wrap gap-2 mt-4">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium bg-slate-100 dark:bg-slate-800 text-slate-800 dark:text-slate-200 border border-slate-200 dark:border-slate-700">
                    <FaHtml5 size={14} className="text-orange-500" /> HTML5
                  </span>
                  <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium bg-slate-100 dark:bg-slate-800 text-slate-800 dark:text-slate-200 border border-slate-200 dark:border-slate-700">
                    <FaCss3 size={14} className="text-blue-500" /> CSS3
                  </span>
                  <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium bg-slate-100 dark:bg-slate-800 text-slate-800 dark:text-slate-200 border border-slate-200 dark:border-slate-700">
                    <FaJs size={14} className="text-amber-500" /> JavaScript
                  </span>
                  <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium bg-slate-100 dark:bg-slate-800 text-slate-800 dark:text-slate-200 border border-slate-200 dark:border-slate-700">
                    <SiTypescript size={14} className="text-blue-500" /> TypeScript
                  </span>
                  <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium bg-slate-100 dark:bg-slate-800 text-slate-800 dark:text-slate-200 border border-slate-200 dark:border-slate-700">
                    <FaReact size={14} className="text-sky-400" /> React.js
                  </span>
                  <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium bg-slate-100 dark:bg-slate-800 text-slate-800 dark:text-slate-200 border border-slate-200 dark:border-slate-700">
                    <SiNextdotjs size={14} className="text-slate-900 dark:text-white" /> Next.js
                  </span>
                  <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium bg-slate-100 dark:bg-slate-800 text-slate-800 dark:text-slate-200 border border-slate-200 dark:border-slate-700">
                    <SiBootstrap size={14} className="text-purple-500" /> Bootstrap 5
                  </span>
                  <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium bg-slate-100 dark:bg-slate-800 text-slate-800 dark:text-slate-200 border border-slate-200 dark:border-slate-700">
                    <SiTailwindcss size={14} className="text-cyan-500" /> Tailwind CSS
                  </span>
                  <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium bg-slate-100 dark:bg-slate-800 text-slate-800 dark:text-slate-200 border border-slate-200 dark:border-slate-700">
                    <Layout size={14} className="text-emerald-500" /> Responsive Design
                  </span>
                  <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium bg-slate-100 dark:bg-slate-800 text-slate-800 dark:text-slate-200 border border-slate-200 dark:border-slate-700">
                    <SiAxios size={14} className="text-purple-400" /> Axios
                  </span>
                  <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium bg-slate-100 dark:bg-slate-800 text-slate-800 dark:text-slate-200 border border-slate-200 dark:border-slate-700">
                    <SiReacthookform size={14} className="text-pink-500" /> React Hook Form
                  </span>
                </div>
              </div>
            </FadeInSection>

            {/* 2. Backend */}
            <FadeInSection className="p-6 rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900/60 shadow-xs hover:border-slate-300 dark:hover:border-slate-700 transition-all duration-300 flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-3 mb-3">
                  <div className="p-2.5 rounded-xl bg-indigo-100 dark:bg-indigo-950/60 text-indigo-600 dark:text-indigo-400">
                    <Server size={22} />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-slate-900 dark:text-white">
                      {t.skills.categories.backend.title}
                    </h3>
                    <p className="text-xs text-slate-500 dark:text-slate-400">
                      {t.skills.categories.backend.desc}
                    </p>
                  </div>
                </div>
                <div className="flex flex-wrap gap-2 mt-4">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium bg-slate-100 dark:bg-slate-800 text-slate-800 dark:text-slate-200 border border-slate-200 dark:border-slate-700">
                    <FaNodeJs size={14} className="text-emerald-500" /> Node.js
                  </span>
                  <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium bg-slate-100 dark:bg-slate-800 text-slate-800 dark:text-slate-200 border border-slate-200 dark:border-slate-700">
                    <SiBun size={14} className="text-amber-500" /> Bun Runtime
                  </span>
                  <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium bg-slate-100 dark:bg-slate-800 text-slate-800 dark:text-slate-200 border border-slate-200 dark:border-slate-700">
                    <SiExpress size={14} className="text-slate-800 dark:text-slate-200" /> Express.js
                  </span>
                  <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium bg-slate-100 dark:bg-slate-800 text-slate-800 dark:text-slate-200 border border-slate-200 dark:border-slate-700">
                    <Code2 size={14} className="text-sky-500" /> Elysia.js
                  </span>
                  <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium bg-slate-100 dark:bg-slate-800 text-slate-800 dark:text-slate-200 border border-slate-200 dark:border-slate-700">
                    <SiSpringboot size={14} className="text-emerald-600" /> Java SpringBoot
                  </span>
                  <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium bg-slate-100 dark:bg-slate-800 text-slate-800 dark:text-slate-200 border border-slate-200 dark:border-slate-700">
                    <Layers size={14} className="text-sky-400" /> RESTful API
                  </span>
                  <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium bg-slate-100 dark:bg-slate-800 text-slate-800 dark:text-slate-200 border border-slate-200 dark:border-slate-700">
                    <SiJsonwebtokens size={14} className="text-pink-500" /> JWT Authentication
                  </span>
                  <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium bg-slate-100 dark:bg-slate-800 text-slate-800 dark:text-slate-200 border border-slate-200 dark:border-slate-700">
                    <SiPrisma size={14} className="text-teal-500" /> Prisma ORM
                  </span>
                </div>
              </div>
            </FadeInSection>

            {/* 3. Mobile */}
            <FadeInSection className="p-6 rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900/60 shadow-xs hover:border-slate-300 dark:hover:border-slate-700 transition-all duration-300 flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-3 mb-3">
                  <div className="p-2.5 rounded-xl bg-sky-100 dark:bg-sky-950/60 text-sky-600 dark:text-sky-400">
                    <Smartphone size={22} />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-slate-900 dark:text-white">
                      {t.skills.categories.mobile.title}
                    </h3>
                    <p className="text-xs text-slate-500 dark:text-slate-400">
                      {t.skills.categories.mobile.desc}
                    </p>
                  </div>
                </div>
                <div className="flex flex-wrap gap-2 mt-4">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium bg-slate-100 dark:bg-slate-800 text-slate-800 dark:text-slate-200 border border-slate-200 dark:border-slate-700">
                    <FaReact size={15} className="text-sky-400" /> React Native
                  </span>
                  <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium bg-slate-100 dark:bg-slate-800 text-slate-800 dark:text-slate-200 border border-slate-200 dark:border-slate-700">
                    <SiExpo size={14} className="text-slate-900 dark:text-white" /> Expo
                  </span>
                </div>
              </div>
            </FadeInSection>

            {/* 4. Database */}
            <FadeInSection className="p-6 rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900/60 shadow-xs hover:border-slate-300 dark:hover:border-slate-700 transition-all duration-300 flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-3 mb-3">
                  <div className="p-2.5 rounded-xl bg-emerald-100 dark:bg-emerald-950/60 text-emerald-600 dark:text-emerald-400">
                    <FaDatabase size={20} />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-slate-900 dark:text-white">
                      {t.skills.categories.database.title}
                    </h3>
                    <p className="text-xs text-slate-500 dark:text-slate-400">
                      {t.skills.categories.database.desc}
                    </p>
                  </div>
                </div>
                <div className="flex flex-wrap gap-2 mt-4">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium bg-slate-100 dark:bg-slate-800 text-slate-800 dark:text-slate-200 border border-slate-200 dark:border-slate-700">
                    <SiPostgresql size={14} className="text-sky-500" /> PostgreSQL
                  </span>
                  <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium bg-slate-100 dark:bg-slate-800 text-slate-800 dark:text-slate-200 border border-slate-200 dark:border-slate-700">
                    <SiMysql size={14} className="text-blue-500" /> MySQL
                  </span>
                  <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium bg-slate-100 dark:bg-slate-800 text-slate-800 dark:text-slate-200 border border-slate-200 dark:border-slate-700">
                    <SiMongodb size={14} className="text-emerald-500" /> MongoDB
                  </span>
                </div>
              </div>
            </FadeInSection>

            {/* 5. Tools */}
            <FadeInSection className="p-6 rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900/60 shadow-xs hover:border-slate-300 dark:hover:border-slate-700 transition-all duration-300 flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-3 mb-3">
                  <div className="p-2.5 rounded-xl bg-amber-100 dark:bg-amber-950/60 text-amber-600 dark:text-amber-400">
                    <Wrench size={22} />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-slate-900 dark:text-white">
                      {t.skills.categories.tools.title}
                    </h3>
                    <p className="text-xs text-slate-500 dark:text-slate-400">
                      {t.skills.categories.tools.desc}
                    </p>
                  </div>
                </div>
                <div className="flex flex-wrap gap-2 mt-4">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium bg-slate-100 dark:bg-slate-800 text-slate-800 dark:text-slate-200 border border-slate-200 dark:border-slate-700">
                    <SiGit size={14} className="text-orange-500" /> Git
                  </span>
                  <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium bg-slate-100 dark:bg-slate-800 text-slate-800 dark:text-slate-200 border border-slate-200 dark:border-slate-700">
                    <FaGithub size={14} /> GitHub
                  </span>
                  <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium bg-slate-100 dark:bg-slate-800 text-slate-800 dark:text-slate-200 border border-slate-200 dark:border-slate-700">
                    <SiPostman size={14} className="text-orange-500" /> Postman
                  </span>
                  <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium bg-slate-100 dark:bg-slate-800 text-slate-800 dark:text-slate-200 border border-slate-200 dark:border-slate-700">
                    <Terminal size={14} className="text-blue-500" /> VS Code
                  </span>
                  <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium bg-slate-100 dark:bg-slate-800 text-slate-800 dark:text-slate-200 border border-slate-200 dark:border-slate-700">
                    <SiDocker size={14} className="text-sky-500" /> Docker
                  </span>
                  <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium bg-slate-100 dark:bg-slate-800 text-slate-800 dark:text-slate-200 border border-slate-200 dark:border-slate-700">
                    <SiFigma size={14} className="text-purple-400" /> Figma
                  </span>
                  <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium bg-slate-100 dark:bg-slate-800 text-slate-800 dark:text-slate-200 border border-slate-200 dark:border-slate-700">
                    <SiPostgresql size={14} className="text-sky-500" /> PgAdmin4
                  </span>
                  <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium bg-slate-100 dark:bg-slate-800 text-slate-800 dark:text-slate-200 border border-slate-200 dark:border-slate-700">
                    <SiMongodb size={14} className="text-emerald-500" /> MongoDB Compass
                  </span>
                </div>
              </div>
            </FadeInSection>

            {/* 6. Cloud & Deployment */}
            <FadeInSection className="p-6 rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900/60 shadow-xs hover:border-slate-300 dark:hover:border-slate-700 transition-all duration-300 flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-3 mb-3">
                  <div className="p-2.5 rounded-xl bg-purple-100 dark:bg-purple-950/60 text-purple-600 dark:text-purple-400">
                    <Cloud size={22} />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-slate-900 dark:text-white">
                      {t.skills.categories.cloud.title}
                    </h3>
                    <p className="text-xs text-slate-500 dark:text-slate-400">
                      {t.skills.categories.cloud.desc}
                    </p>
                  </div>
                </div>
                <div className="flex flex-wrap gap-2 mt-4">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium bg-slate-100 dark:bg-slate-800 text-slate-800 dark:text-slate-200 border border-slate-200 dark:border-slate-700">
                    <SiVercel size={14} className="text-slate-900 dark:text-white" /> Vercel
                  </span>
                  <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium bg-slate-100 dark:bg-slate-800 text-slate-800 dark:text-slate-200 border border-slate-200 dark:border-slate-700">
                    <SiRender size={14} className="text-slate-900 dark:text-white" /> Render
                  </span>
                </div>
              </div>
            </FadeInSection>
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/* 4. COMPETITIONS & ACHIEVEMENTS SECTION */}
      {/* ============================================================ */}
      <section
        id="achievements"
        className="w-full py-20 lg:py-28 px-4 sm:px-6 lg:px-8 border-t border-slate-200 dark:border-slate-800/80 bg-white dark:bg-slate-900/50 transition-colors duration-300"
      >
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <FadeInSection className="text-center max-w-2xl mx-auto mb-14">
            <span className="text-xs font-bold tracking-widest text-amber-600 dark:text-amber-400 uppercase">
              {t.achievements.tag}
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white mt-1">
              {t.achievements.title}
            </h2>
            <p className="text-sm sm:text-base text-slate-600 dark:text-slate-400 mt-2">
              {t.achievements.subtitle}
            </p>
          </FadeInSection>

          {/* Achievement Spotlight Card */}
          <FadeInSection className="rounded-3xl border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-900/80 p-6 sm:p-8 lg:p-10 shadow-lg">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              {/* Banner Image */}
              <div className="lg:col-span-6 rounded-2xl overflow-hidden border border-slate-200 dark:border-slate-700 bg-slate-950">
                <img
                  src="/images/startup_banner.jpg"
                  alt="Startup Thailand League 2025"
                  className="w-full h-auto object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>

              {/* Achievement Content */}
              <div className="lg:col-span-6 flex flex-col">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-amber-300 dark:border-amber-700/60 bg-amber-50 dark:bg-amber-950/40 text-amber-700 dark:text-amber-300 text-xs font-bold w-fit mb-3">
                  <FaTrophy size={13} className="text-amber-500" />
                  <span>National Award Milestone</span>
                </div>
                <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white">
                  {t.achievements.startupTitle}
                </h3>
                <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 mt-1 mb-5">
                  {t.achievements.startupSub}
                </p>

                {/* Key Bullet Points */}
                <ul className="space-y-3">
                  {t.achievements.points.map((point, index) => (
                    <li key={index} className="flex items-start gap-3 text-sm text-slate-700 dark:text-slate-300">
                      <CheckCircle2 size={16} className="text-emerald-500 mt-0.5 shrink-0" />
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>

                {/* Link to Cartzy in Projects */}
                <div className="mt-6 pt-5 border-t border-slate-200 dark:border-slate-800">
                  <Link
                    href="/projects"
                    className="inline-flex items-center gap-2 text-sm font-semibold text-sky-600 dark:text-sky-400 hover:gap-3 transition-all"
                  >
                    <span>{t.achievements.viewProjectLink}</span>
                    <ChevronRight size={16} />
                  </Link>
                </div>
              </div>
            </div>

            {/* Photo Gallery Grid */}
            <div className="mt-12 pt-8 border-t border-slate-200 dark:border-slate-800">
              <div className="flex items-center justify-between mb-4">
                <h4 className="text-base font-bold text-slate-900 dark:text-white">
                  {t.achievements.galleryTitle}
                </h4>
                <span className="text-xs text-slate-500 dark:text-slate-400">
                  {t.achievements.clickToEnlarge}
                </span>
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-3">
                {startupImages.map((imgSrc, idx) => (
                  <button
                    key={idx}
                    type="button"
                    onClick={() => setSelectedImage(imgSrc)}
                    className="group relative h-24 sm:h-28 rounded-xl overflow-hidden border border-slate-200 dark:border-slate-700 focus:outline-none focus:ring-2 focus:ring-sky-500"
                  >
                    <img
                      src={imgSrc}
                      alt={`Startup Event ${idx + 1}`}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-slate-950/20 group-hover:bg-transparent transition-colors" />
                  </button>
                ))}
              </div>
            </div>
          </FadeInSection>
        </div>
      </section>

      {/* ============================================================ */}
      {/* 5. CALL TO ACTION BANNER */}
      {/* ============================================================ */}
      <section className="w-full py-20 px-4 sm:px-6 lg:px-8 border-t border-slate-200 dark:border-slate-800/80 bg-slate-50 dark:bg-slate-950 transition-colors duration-300">
        <div className="max-w-4xl mx-auto">
          <FadeInSection className="p-8 sm:p-12 rounded-3xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 shadow-xl text-center flex flex-col items-center">
            <blockquote className="text-lg sm:text-2xl font-semibold text-slate-800 dark:text-slate-200 max-w-2xl leading-relaxed">
              {t.cta.quote}
            </blockquote>
            <Link
              href="/contact"
              className="mt-8 inline-flex items-center gap-2.5 px-8 py-3.5 rounded-xl font-semibold text-sm text-white bg-gradient-to-r from-sky-600 to-teal-600 hover:from-sky-500 hover:to-teal-500 shadow-md hover:shadow-lg transition-all active:scale-95"
            >
              <span>{t.cta.action}</span>
              <FaArrowRight size={15} />
            </Link>
          </FadeInSection>
        </div>
      </section>

      {/* ============================================================ */}
      {/* LIGHTBOX MODAL FOR GALLERY IMAGES */}
      {/* ============================================================ */}
      {selectedImage && (
        <div
          onClick={() => setSelectedImage(null)}
          className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-slate-950/80 backdrop-blur-md animate-in fade-in duration-200"
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="relative max-w-4xl max-h-[85vh] rounded-2xl overflow-hidden border border-slate-700 bg-slate-900 shadow-2xl"
          >
            <button
              onClick={() => setSelectedImage(null)}
              aria-label="Close Image"
              className="absolute top-4 right-4 z-10 p-2 rounded-full bg-slate-950/70 border border-slate-700 text-slate-300 hover:text-white transition-colors"
            >
              <X size={20} />
            </button>
            <img
              src={selectedImage}
              alt="Enlarged Event View"
              className="w-full h-auto max-h-[80vh] object-contain"
            />
          </div>
        </div>
      )}
    </div>
  );
}
