"use client";

import Link from "next/link";
import { Phone, Mail, MapPin, ArrowUpRight } from "lucide-react";
import {
  FaFacebookF,
  FaGithub,
  FaLine,
  FaLinkedin,
} from "react-icons/fa";
import { useLanguage } from "@/context/LanguageContext";

const Footer = () => {
  const { t } = useLanguage();
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    {
      name: "GitHub",
      href: "https://github.com/pathompornDevjr",
      icon: FaGithub,
      hoverClass: "hover:text-slate-900 dark:hover:text-white hover:border-slate-400 dark:hover:border-slate-500",
    },
    {
      name: "Facebook",
      href: "https://www.facebook.com/pathomporn.wongsuwan",
      icon: FaFacebookF,
      hoverClass: "hover:text-blue-500 hover:border-blue-400",
    },
    {
      name: "Line",
      href: "https://line.me/ti/p/~pond0947035487",
      icon: FaLine,
      hoverClass: "hover:text-emerald-500 hover:border-emerald-400",
    },
    {
      name: "LinkedIn",
      href: "https://linkedin.com",
      icon: FaLinkedin,
      hoverClass: "hover:text-sky-500 hover:border-sky-400",
    },
  ];

  return (
    <footer className="w-full border-t border-slate-200 dark:border-slate-800/80 bg-slate-50/50 dark:bg-slate-950/60 backdrop-blur-xs transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8">
          {/* Brand Col */}
          <div className="flex flex-col gap-4 lg:col-span-1">
            <Link href="/" className="inline-flex items-center gap-2">
              <span className="text-2xl font-bold bg-gradient-to-r from-sky-500 via-teal-500 to-emerald-500 bg-clip-text text-transparent">
                Pondfolio
              </span>
            </Link>
            <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
              Full-Stack & Mobile Developer specializing in building modern web applications, scalable backend APIs, and cross-platform mobile solutions.
            </p>
            {/* Social Icons */}
            <div className="flex items-center gap-2.5 mt-2">
              {socialLinks.map((s) => {
                const Icon = s.icon;
                return (
                  <a
                    key={s.name}
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={s.name}
                    className={`p-2.5 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 text-slate-600 dark:text-slate-400 transition-all duration-200 ${s.hoverClass}`}
                  >
                    <Icon size={16} />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Quick Navigation Links */}
          <div className="flex flex-col gap-3">
            <h4 className="text-sm font-semibold uppercase tracking-wider text-slate-900 dark:text-slate-100">
              {t.footer.quickLinks}
            </h4>
            <ul className="space-y-2 text-sm text-slate-600 dark:text-slate-400">
              <li>
                <Link href="/" className="hover:text-sky-600 dark:hover:text-sky-400 transition-colors">
                  {t.nav.home}
                </Link>
              </li>
              <li>
                <Link href="/#aboutme" className="hover:text-sky-600 dark:hover:text-sky-400 transition-colors">
                  {t.nav.about}
                </Link>
              </li>
              <li>
                <Link href="/#skills" className="hover:text-sky-600 dark:hover:text-sky-400 transition-colors">
                  {t.nav.skills}
                </Link>
              </li>
              <li>
                <Link href="/#achievements" className="hover:text-sky-600 dark:hover:text-sky-400 transition-colors">
                  {t.nav.achievements}
                </Link>
              </li>
              <li>
                <Link href="/projects" className="hover:text-sky-600 dark:hover:text-sky-400 transition-colors">
                  {t.nav.projects}
                </Link>
              </li>
            </ul>
          </div>

          {/* Key Projects */}
          <div className="flex flex-col gap-3">
            <h4 className="text-sm font-semibold uppercase tracking-wider text-slate-900 dark:text-slate-100">
              {t.footer.projects}
            </h4>
            <ul className="space-y-2 text-sm text-slate-600 dark:text-slate-400">
              <li>
                <a
                  href="https://alumni.rmu.ac.th"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 hover:text-sky-600 dark:hover:text-sky-400 transition-colors group"
                >
                  <span>Alumni Network System</span>
                  <ArrowUpRight size={14} className="opacity-60 group-hover:opacity-100 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </a>
              </li>
              <li>
                <a
                  href="https://lawinternship.rmu.ac.th"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 hover:text-sky-600 dark:hover:text-sky-400 transition-colors group"
                >
                  <span>Internship Management</span>
                  <ArrowUpRight size={14} className="opacity-60 group-hover:opacity-100 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </a>
              </li>
              <li>
                <Link
                  href="/projects"
                  className="inline-flex items-center gap-1 hover:text-sky-600 dark:hover:text-sky-400 transition-colors group"
                >
                  <span>Cartzy Mobile App</span>
                  <ArrowUpRight size={14} className="opacity-60 group-hover:opacity-100 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </Link>
              </li>
            </ul>
          </div>

          {/* Direct Contact Info */}
          <div className="flex flex-col gap-3">
            <h4 className="text-sm font-semibold uppercase tracking-wider text-slate-900 dark:text-slate-100">
              {t.footer.contact}
            </h4>
            <div className="flex flex-col gap-2.5 text-sm text-slate-600 dark:text-slate-400">
              <a
                href="mailto:pathomporn.wongsuwan@gmail.com"
                className="inline-flex items-center gap-2 hover:text-sky-600 dark:hover:text-sky-400 transition-colors"
              >
                <Mail size={16} className="text-sky-500 shrink-0" />
                <span className="truncate">pathomporn.wongsuwan@gmail.com</span>
              </a>
              <a
                href="tel:0965850195"
                className="inline-flex items-center gap-2 hover:text-sky-600 dark:hover:text-sky-400 transition-colors"
              >
                <Phone size={16} className="text-emerald-500 shrink-0" />
                <span>+66 96-585-0195</span>
              </a>
              <div className="inline-flex items-center gap-2">
                <MapPin size={16} className="text-amber-500 shrink-0" />
                <span>Maha Sarakham, Thailand</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-slate-200 dark:border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500 dark:text-slate-400">
          <p>© {currentYear} Pondfolio (Pathomporn Wongsuwan). {t.footer.rights}.</p>
          <p>{t.footer.builtWith}</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
