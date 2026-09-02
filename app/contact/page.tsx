"use client";

import { useState } from "react";
import { Controller, useForm } from "react-hook-form";
import emailjs from "emailjs-com";
import toast, { Toaster } from "react-hot-toast";
import {
  Mail,
  Phone,
  MapPin,
  Send,
  Sparkles,
  FileText,
  AlertCircle,
} from "lucide-react";
import { FaFacebookF } from "react-icons/fa";
import FadeInSection from "@/components/fade-in-section";
import { useLanguage } from "@/context/LanguageContext";
import { useTheme } from "@/context/ThemeContext";

interface ContactFormData {
  sender_name: string;
  to_email: string;
  message: string;
}

export default function ContactPage() {
  const { t, lang } = useLanguage();
  const { theme } = useTheme();
  const [loading, setLoading] = useState(false);

  const {
    handleSubmit,
    formState: { errors },
    control,
    reset,
  } = useForm<ContactFormData>({
    defaultValues: {
      sender_name: "",
      to_email: "",
      message: "",
    },
  });

  const handleSendMessage = async (data: ContactFormData) => {
    setLoading(true);
    const loadingToast = toast.loading(t.contact.sending);
    try {
      const serviceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID || "service_6ssbld3";
      const templateId = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID || "template_okbkone";
      const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY || "cgIV56gtnk5b2bvwN";

      await emailjs.send(
        serviceId,
        templateId,
        {
          sender_name: data.sender_name,
          sender_email: data.to_email,
          sender_message: data.message,
        },
        publicKey
      );

      toast.dismiss(loadingToast);
      toast.success(t.contact.successMsg, {
        duration: 4000,
        position: "top-center",
      });

      reset();
    } catch (error: any) {
      toast.dismiss(loadingToast);
      toast.error(t.contact.errorMsg, {
        duration: 4000,
        position: "top-center",
      });
      console.error("Failed to send email:", error?.text || error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen py-16 px-4 sm:px-6 lg:px-8 bg-slate-50 dark:bg-slate-950 transition-colors duration-300">
      {/* Toast Notifications */}
      <Toaster
        toastOptions={{
          style: {
            background: theme === "dark" ? "#0f172a" : "#ffffff",
            color: theme === "dark" ? "#f1f5f9" : "#0f172a",
            border: theme === "dark" ? "1px solid #1e293b" : "1px solid #e2e8f0",
            boxShadow: "0 10px 15px -3px rgba(0, 0, 0, 0.1)",
            borderRadius: "0.75rem",
          },
          success: {
            iconTheme: {
              primary: "#10b981",
              secondary: "#ffffff",
            },
          },
          error: {
            iconTheme: {
              primary: "#ef4444",
              secondary: "#ffffff",
            },
          },
        }}
      />

      <div className="max-w-6xl mx-auto">
        {/* Header Title */}
        <FadeInSection className="text-center max-w-2xl mx-auto mb-14">
          <span className="text-xs font-bold tracking-widest text-sky-600 dark:text-sky-400 uppercase">
            {t.contact.tag}
          </span>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 dark:text-white mt-1">
            {t.contact.title}
          </h1>
          <p className="text-sm sm:text-base text-slate-600 dark:text-slate-400 mt-2">
            {t.contact.subtitle}
          </p>
        </FadeInSection>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* ============================================================ */}
          {/* 1. CONTACT FORM */}
          {/* ============================================================ */}
          <FadeInSection className="lg:col-span-7 p-6 sm:p-8 rounded-3xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 shadow-lg">
            <h2 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white">
              {t.contact.formTitle}
            </h2>
            <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 mt-1 mb-6">
              {t.contact.formDesc}
            </p>

            <form onSubmit={handleSubmit(handleSendMessage)} className="space-y-4">
              {/* Sender Name */}
              <div>
                <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-1.5">
                  {t.contact.nameLabel} <span className="text-red-500">*</span>
                </label>
                <Controller
                  name="sender_name"
                  control={control}
                  rules={{ required: t.contact.validation.nameRequired }}
                  render={({ field }) => (
                    <input
                      {...field}
                      type="text"
                      placeholder={t.contact.namePlaceholder}
                      className={`w-full px-4 py-2.5 rounded-xl border ${
                        errors.sender_name
                          ? "border-red-500 focus:ring-red-400"
                          : "border-slate-300 dark:border-slate-700 focus:border-sky-500 focus:ring-sky-500"
                      } bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-white placeholder:text-slate-400 dark:placeholder:text-slate-600 text-sm focus:outline-none focus:ring-2 transition-all`}
                    />
                  )}
                />
                {errors.sender_name && (
                  <p className="flex items-center gap-1 text-xs text-red-500 mt-1">
                    <AlertCircle size={12} />
                    <span>{errors.sender_name.message}</span>
                  </p>
                )}
              </div>

              {/* Email Address */}
              <div>
                <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-1.5">
                  {t.contact.emailLabel} <span className="text-red-500">*</span>
                </label>
                <Controller
                  name="to_email"
                  control={control}
                  rules={{
                    required: t.contact.validation.emailRequired,
                    pattern: {
                      value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                      message: t.contact.validation.emailInvalid,
                    },
                  }}
                  render={({ field }) => (
                    <input
                      {...field}
                      type="email"
                      placeholder={t.contact.emailPlaceholder}
                      className={`w-full px-4 py-2.5 rounded-xl border ${
                        errors.to_email
                          ? "border-red-500 focus:ring-red-400"
                          : "border-slate-300 dark:border-slate-700 focus:border-sky-500 focus:ring-sky-500"
                      } bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-white placeholder:text-slate-400 dark:placeholder:text-slate-600 text-sm focus:outline-none focus:ring-2 transition-all`}
                    />
                  )}
                />
                {errors.to_email && (
                  <p className="flex items-center gap-1 text-xs text-red-500 mt-1">
                    <AlertCircle size={12} />
                    <span>{errors.to_email.message}</span>
                  </p>
                )}
              </div>

              {/* Message */}
              <div>
                <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-1.5">
                  {t.contact.messageLabel} <span className="text-red-500">*</span>
                </label>
                <Controller
                  name="message"
                  control={control}
                  rules={{ required: t.contact.validation.messageRequired }}
                  render={({ field }) => (
                    <textarea
                      {...field}
                      rows={5}
                      placeholder={t.contact.messagePlaceholder}
                      className={`w-full px-4 py-2.5 rounded-xl border ${
                        errors.message
                          ? "border-red-500 focus:ring-red-400"
                          : "border-slate-300 dark:border-slate-700 focus:border-sky-500 focus:ring-sky-500"
                      } bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-white placeholder:text-slate-400 dark:placeholder:text-slate-600 text-sm focus:outline-none focus:ring-2 transition-all resize-y`}
                    />
                  )}
                />
                {errors.message && (
                  <p className="flex items-center gap-1 text-xs text-red-500 mt-1">
                    <AlertCircle size={12} />
                    <span>{errors.message.message}</span>
                  </p>
                )}
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={loading}
                className="w-full mt-4 py-3 px-6 rounded-xl font-semibold text-sm text-white bg-gradient-to-r from-sky-600 to-teal-600 hover:from-sky-500 hover:to-teal-500 shadow-md hover:shadow-lg transition-all flex items-center justify-center gap-2 disabled:opacity-50 active:scale-98"
              >
                {loading ? (
                  <div className="w-5 h-5 border-2 border-white/40 border-t-white rounded-full animate-spin" />
                ) : (
                  <>
                    <span>{t.contact.sendBtn}</span>
                    <Send size={15} />
                  </>
                )}
              </button>
            </form>
          </FadeInSection>

          {/* ============================================================ */}
          {/* 2. DIRECT CONTACT CHANNELS */}
          {/* ============================================================ */}
          <div className="lg:col-span-5 flex flex-col gap-4">
            <FadeInSection className="p-6 rounded-3xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 shadow-lg flex flex-col gap-4">
              <h3 className="text-lg font-bold text-slate-900 dark:text-white">
                {t.contact.cardsTitle}
              </h3>

              {/* Email Card */}
              <a
                href="mailto:pathomporn.wongsuwan@gmail.com"
                className="group p-4 rounded-2xl border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-950/60 hover:border-sky-400/60 transition-all flex items-center gap-4"
              >
                <div className="p-3 rounded-xl bg-sky-100 dark:bg-sky-950 text-sky-600 dark:text-sky-400 shrink-0">
                  <Mail size={20} />
                </div>
                <div className="overflow-hidden">
                  <p className="text-xs font-semibold text-slate-500 dark:text-slate-400">
                    {t.contact.info.email}
                  </p>
                  <p className="text-sm font-bold text-slate-800 dark:text-slate-200 group-hover:text-sky-600 dark:group-hover:text-sky-400 transition-colors truncate">
                    pathomporn.wongsuwan@gmail.com
                  </p>
                </div>
              </a>

              {/* Phone Card */}
              <a
                href="tel:0965850195"
                className="group p-4 rounded-2xl border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-950/60 hover:border-emerald-400/60 transition-all flex items-center gap-4"
              >
                <div className="p-3 rounded-xl bg-emerald-100 dark:bg-emerald-950 text-emerald-600 dark:text-emerald-400 shrink-0">
                  <Phone size={20} />
                </div>
                <div>
                  <p className="text-xs font-semibold text-slate-500 dark:text-slate-400">
                    {t.contact.info.phone}
                  </p>
                  <p className="text-sm font-bold text-slate-800 dark:text-slate-200 group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors">
                    +66 96-585-0195
                  </p>
                </div>
              </a>

              {/* Facebook Card */}
              <a
                href="https://www.facebook.com/pathomporn.wongsuwan"
                target="_blank"
                rel="noopener noreferrer"
                className="group p-4 rounded-2xl border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-950/60 hover:border-blue-400/60 transition-all flex items-center gap-4"
              >
                <div className="p-3 rounded-xl bg-blue-100 dark:bg-blue-950 text-blue-600 dark:text-blue-400 shrink-0">
                  <FaFacebookF size={20} />
                </div>
                <div>
                  <p className="text-xs font-semibold text-slate-500 dark:text-slate-400">
                    {t.contact.info.facebook}
                  </p>
                  <p className="text-sm font-bold text-slate-800 dark:text-slate-200 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                    Pathomporn Wongsuwan
                  </p>
                </div>
              </a>

              {/* Address Card */}
              <div className="p-4 rounded-2xl border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-950/60 flex items-center gap-4">
                <div className="p-3 rounded-xl bg-amber-100 dark:bg-amber-950 text-amber-600 dark:text-amber-400 shrink-0">
                  <MapPin size={20} />
                </div>
                <div>
                  <p className="text-xs font-semibold text-slate-500 dark:text-slate-400">
                    {t.contact.info.address}
                  </p>
                  <p className="text-sm font-bold text-slate-800 dark:text-slate-200">
                    {t.contact.info.addressValue}
                  </p>
                </div>
              </div>
            </FadeInSection>

            {/* Opportunity Card */}
            <FadeInSection className="p-6 rounded-3xl border border-sky-200 dark:border-sky-900/60 bg-gradient-to-br from-sky-50 to-teal-50 dark:from-sky-950/40 dark:to-slate-900 shadow-md">
              <div className="flex items-center gap-2 text-sky-700 dark:text-sky-300 font-bold text-sm mb-1">
                <Sparkles size={16} />
                <span>{t.contact.opportunityTitle}</span>
              </div>
              <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                {t.contact.opportunityDesc}
              </p>
              <a
                href="/files/Pathomporn_Wongsuwan_Resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-bold text-white bg-slate-900 dark:bg-slate-800 hover:bg-slate-800 dark:hover:bg-slate-700 shadow-xs transition-colors"
              >
                <FileText size={14} />
                <span>{lang === "th" ? "ดูเรซูเม่ฉบับเต็ม (PDF)" : "Download Resume (PDF)"}</span>
              </a>
            </FadeInSection>
          </div>
        </div>
      </div>
    </div>
  );
}
