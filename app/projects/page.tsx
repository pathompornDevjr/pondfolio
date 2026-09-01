"use client";

import { useState, useEffect } from "react";
import {
  ExternalLink,
  Github,
  X,
  ArrowRight,
  Code2,
  Users,
  Check,
  Download,
  Layers,
  Sparkles,
} from "lucide-react";
import {
  SiNextdotjs,
  SiTailwindcss,
  SiBun,
  SiPostgresql,
  SiPrisma,
  SiReact,
  SiNodedotjs,
  SiExpress,
  SiMongodb,
  SiExpo,
  SiGoogle,
  SiGooglemaps,
} from "react-icons/si";
import FadeInSection from "@/components/fade-in-section";
import { useLanguage } from "@/context/LanguageContext";

const stackIconMap: Record<string, any> = {
  "Next.js": SiNextdotjs,
  "Tailwind CSS": SiTailwindcss,
  "Bun Runtime": SiBun,
  Bun: SiBun,
  PostgreSQL: SiPostgresql,
  "Prisma ORM": SiPrisma,
  Prisma: SiPrisma,
  React: SiReact,
  "React Native": SiReact,
  "Node.js": SiNodedotjs,
  Express: SiExpress,
  MongoDB: SiMongodb,
  Expo: SiExpo,
  "Google API": SiGoogle,
  "GoogleMap API": SiGooglemaps,
};

function StackIcon({ tech, size = 14 }: { tech: string; size?: number }) {
  const Icon = stackIconMap[tech] || Code2;
  return <Icon size={size} className="shrink-0" />;
}

// Bilingual Project Data
const getProjectsData = (lang: "th" | "en") => [
  {
    id: "alumni-system",
    type: "web",
    title:
      lang === "th"
        ? "ระบบสารสนเทศเครือข่ายศิษย์เก่า (Alumni Network)"
        : "Alumni Network Information System",
    tag: lang === "th" ? "Web Application" : "Web Application",
    cover: "/images/alumni_thumnail.png",
    summary:
      lang === "th"
        ? "ระบบบริหารจัดการและเชื่อมโยงเครือข่ายศิษย์เก่ากับมหาวิทยาลัย เพื่อการติดตามกิจกรรม ข้อมูลศิษย์เก่า และรายงานสถิติแบบครบวงจร"
        : "An end-to-end alumni management platform enabling universities to manage alumni records, track career paths, and foster university-alumni engagement.",
    description:
      lang === "th"
        ? "ระบบสารสนเทศเครือข่ายศิษย์เก่า ออกแบบและพัฒนาเพื่อตอบโจทย์สถาบันการศึกษาในการจัดเก็บและสืบค้นข้อมูลศิษย์เก่า ติดตามประวัติการทำงานและการศึกษาต่อ การกระจายข่าวสาร ประชาสัมพันธ์กิจกรรม การส่งอีเมลแจ้งเตือนแบบกลุ่ม และการออกรายงานสถิติสำหรับผู้บริหาร"
        : "An alumni management system that enables the institution to efficiently store data, track activities, generate analytics, and build sustainable networks between alumni and the university.",
    stack: [
      "Next.js",
      "Tailwind CSS",
      "Elysia.js",
      "Bun Runtime",
      "PostgreSQL",
      "Prisma ORM",
      "Google API",
    ],
    role: lang === "th" ? "Full-stack Developer (Sole Developer)" : "Full-stack Developer",
    liveUrl: "https://alumni.rmu.ac.th/",
    githubUrl: "#",
    showCode: false,
    userRoles:
      lang === "th"
        ? [
            {
              name: "ศิษย์เก่า (Alumni)",
              capabilities: [
                "ลงทะเบียนและเข้าสู่ระบบด้วยความปลอดภัย",
                "จัดการข้อมูลส่วนตัว ข้อมูลติดต่อ และการทำงานปัจจุบัน",
                "ตั้งค่าความเป็นส่วนตัวของข้อมูล",
                "ค้นหาและเชื่อมโยงเครือข่ายศิษย์เก่าในสาขาวิชา",
                "รับข่าวสารและประกาศจากทางมหาวิทยาลัย",
                "ส่งและรับข้อความข่าวสารผ่านระบบอีเมล",
              ],
            },
            {
              name: "อาจารย์ / สาขาวิชา (Lecturer)",
              capabilities: [
                "ดูแดชบอร์ดสถิติการมีงานทำของศิษย์เก่าระดับสาขาวิชา",
                "ค้นหาและตรวจสอบสถานะการทำงานของศิษย์เก่า",
                "สร้างและส่งออกรายงานศิษย์เก่าประจำสาขา",
                "ส่งอีเมลแจ้งเตือนและข่าวสารเฉพาะกลุ่ม",
              ],
            },
            {
              name: "ผู้บริหาร (Executive)",
              capabilities: [
                "ดูแดชบอร์ดภาพรวมสถิติและแนวโน้มระดับมหาวิทยาลัย",
                "เข้าถึงรายงานข้อมูลแยกตามคณะและสาขาวิชา",
                "ส่งข้อความข่าวสารประชาสัมพันธ์ภาพรวม (Broadcast)",
              ],
            },
            {
              name: "ผู้ดูแลระบบ (Administrator)",
              capabilities: [
                "อนุมัติและจัดการสิทธิ์ผู้ใช้งานทุกระดับ",
                "นำเข้าข้อมูลศิษย์เก่าจากไฟล์ Excel และส่งออกรายงานสถิติ",
                "ส่งอีเมลแจ้งเตือนแบบกลุ่ม (Bulk Email)",
                "ตั้งค่าระบบสำรองข้อมูลอัตโนมัติขึ้น Google Drive",
                "ดูแลรักษาความปลอดภัยและความสมบูรณ์ของฐานข้อมูล",
              ],
            },
          ]
        : [
            {
              name: "Alumni",
              capabilities: [
                "Register and authenticate user accounts securely",
                "Manage personal profile, contact information, and career history",
                "Control privacy settings and visibility of personal records",
                "Search directory and network with fellow alumni",
                "Receive university announcements and email notifications",
              ],
            },
            {
              name: "Lecturer",
              capabilities: [
                "View department-level alumni employment statistics dashboard",
                "Search and monitor alumni information and contacts",
                "Generate department alumni reports",
                "Send targeted notifications and announcements to department alumni",
              ],
            },
            {
              name: "Executive",
              capabilities: [
                "View university-wide analytics and employment metrics dashboard",
                "Access cross-faculty summaries and download statistics",
                "Broadcast announcements to selected groups",
              ],
            },
            {
              name: "Administrator",
              capabilities: [
                "Manage user roles, approvals, and permissions",
                "Batch import alumni data from Excel sheets & export reports",
                "Send automated bulk email communications",
                "Configure automated Google Drive backups and disaster recovery",
              ],
            },
          ],
  },
  {
    id: "lawintern-system",
    type: "web",
    title:
      lang === "th"
        ? "ระบบบริหารจัดการการฝึกประสบการณ์วิชาชีพ (Internship Management)"
        : "Internship Management System",
    tag: lang === "th" ? "Web Application" : "Web Application",
    cover: "/images/lawintern_thumnail.png",
    summary:
      lang === "th"
        ? "ระบบจัดการการฝึกงานแบบครบวงจร ตั้งแต่การสมัคร สถานที่ฝึกงาน การบันทึกไดอารี่ การนิเทศ และการประเมินผลออนไลน์"
        : "A web-based internship platform streamlining student applications, supervision schedules, daily logbooks, and online evaluations.",
    description:
      lang === "th"
        ? "ระบบที่ช่วยยกระดับกระบวนการฝึกงานของนักศึกษาให้เป็นระบบดิจิทัล 100% เชื่อมโยง 5 ภาคส่วน: นักศึกษา, อาจารย์นิเทศก์, สถานประกอบการ, ผู้บริหาร และผู้ดูแลระบบ ให้สามารถทำงานร่วมกันได้อย่างราบรื่นและโปร่งใส"
        : "A web-based internship management system designed to streamline internship applications, supervision, evaluations, and progress tracking for students, lecturers, partner organizations, and administrators.",
    stack: [
      "Next.js",
      "Tailwind CSS",
      "Elysia.js",
      "Bun Runtime",
      "PostgreSQL",
      "Prisma ORM",
    ],
    role: lang === "th" ? "Full-stack Developer (Sole Developer)" : "Full-stack Developer",
    liveUrl: "https://lawinternship.rmu.ac.th/",
    githubUrl: "#",
    showCode: false,
    userRoles:
      lang === "th"
        ? [
            {
              name: "นักศึกษา (Student)",
              capabilities: [
                "ค้นหาสถานประกอบการและตำแหน่งงานฝึกงานที่เปิดรับ",
                "ยื่นใบสมัครและติดตามสถานะการตอบรับ",
                "บันทึกและแก้ไขบันทึกการฝึกงานประจำวัน (Daily Log)",
                "ตรวจสอบตารางการนิเทศงานของอาจารย์",
                "ดูผลการประเมินและดาวน์โหลดหนังสือรับรองการฝึกงาน",
              ],
            },
            {
              name: "อาจารย์นิเทศก์ (Supervisor Lecturer)",
              capabilities: [
                "ตรวจสอบตารางการนิเทศงานและแผนการเข้าตรวจเยี่ยมนักศึกษา",
                "ตรวจและให้ข้อเสนอแนะบันทึกการฝึกงานของนักศึกษา",
                "ประเมินผลการฝึกงานและบันทึกคะแนนในระบบ",
                "ดูอันดับความพึงพอใจของสถานประกอบการ",
              ],
            },
            {
              name: "สถานประกอบการ (Organization)",
              capabilities: [
                "ลงทะเบียนสถานประกอบการและประกาศตำแหน่งฝึกงาน",
                "ตรวจและอนุมัติบันทึกการฝึกงานประจำวันของนักศึกษา",
                "ประเมินพฤติกรรมและผลการปฏิบัติงานของนักศึกษา",
              ],
            },
            {
              name: "ผู้ดูแลระบบ (Administrator)",
              capabilities: [
                "กำหนดรอบและช่วงเวลาการสมัครฝึกงาน",
                "จัดการข้อมูลนักศึกษา อาจารย์ และสถานประกอบการ",
                "จัดสรรอาจารย์นิเทศก์ประจำกลุ่มนักศึกษา",
                "สร้างและจัดการแบบฟอร์มการประเมินผลออนไลน์",
              ],
            },
          ]
        : [
            {
              name: "Student",
              capabilities: [
                "Browse approved internship host companies and open positions",
                "Submit applications and track admission approval status",
                "Submit and update daily internship progress logbooks",
                "Check supervisor inspection schedules",
                "View evaluation results and download completion certificates",
              ],
            },
            {
              name: "Supervisor Lecturer",
              capabilities: [
                "Manage inspection schedules and review assigned students",
                "Review, comment, and verify student daily log entries",
                "Conduct online evaluations and submit final scores",
              ],
            },
            {
              name: "Host Organization",
              capabilities: [
                "Post available internship openings and requirements",
                "Verify and sign off on student daily attendance and logs",
                "Submit workplace performance appraisals",
              ],
            },
            {
              name: "Administrator",
              capabilities: [
                "Configure internship terms, periods, and criteria",
                "Pair students with qualified supervising lecturers",
                "Manage evaluation matrices and generate compliance reports",
              ],
            },
          ],
  },
  {
    id: "cartzy",
    type: "mobile",
    title: "Cartzy (Real-Time Street Food Locator)",
    tag: lang === "th" ? "Mobile Application" : "Mobile Application",
    liveUrl:
      "https://expo.dev/accounts/pond2547/projects/hubre/builds/54a529ca-3f2b-4986-9c34-b6c56d3c4c00",
    cover: "/images/cartzy_thumnail.png",
    summary:
      lang === "th"
        ? "แอปพลิเคชันค้นหาและระบุตำแหน่งร้านค้ารถเข็นสตรีทฟู้ดแบบ Real-time GPS เพื่อเพิ่มยอดขายให้พ่อค้าแม่ค้าและอำนวยความสะดวกลูกค้า"
        : "A real-time GPS platform connecting street food cart vendors with nearby food lovers on the go.",
    description:
      lang === "th"
        ? "Cartzy เป็นโมบายแอปพลิเคชันที่สร้างขึ้นเพื่อแก้ปัญหาความไม่แน่นอนของตำแหน่งและเวลาเปิดปิดของร้านค้ารถเข็นสตรีทฟู้ด (Street Food Carts) ผ่านเทคโนโลยี Real-time GPS Tracking ช่วยให้ผู้บริโภคพบเจอของอร่อยใกล้ตัว และช่วยให้พ่อค้าแม่ค้ามีตัวตนบนแผนที่ดิจิทัล พร้อมระบบวิเคราะห์ทำเลและเมนูขายดี ผลงานนี้ได้รับรางวัล Top 100 ในโครงการ Startup Thailand League 2025"
        : "Cartzy bridges street food cart vendors and customers using real-time GPS location technology. Vendors get live presence and route analytics, while customers can easily track and discover moving food carts nearby in real time.",
    stack: ["React Native", "Expo", "Elysia.js", "Prisma ORM", "GoogleMap API"],
    role:
      lang === "th"
        ? "Co-Founder & App Developer"
        : "Co-Founder & CTO — App Developer",
    githubUrl: "#",
    showCode: false,
    userRoles:
      lang === "th"
        ? [
            {
              name: "พ่อค้าแม่ค้ารถเข็น (Vendor)",
              capabilities: [
                "เปิด-ปิดสถานะร้านค้า พร้อมอัปเดตตำแหน่ง GPS บนแผนที่แบบ Real-time",
                "จัดการโปรไฟล์ร้านค้า เมนู รูปภาพ และเวลาทำการ",
                "สร้างและจัดการโปรโมชั่นส่วนลดพิเศษ",
                "ดูสถิติเมนูขายดีและคำแนะนำจุดจอดขายที่มีลูกค้าหนาแน่น",
                "ติดตามจำนวนผู้ติดตามและคะแนนรีวิวจากลูกค้า",
              ],
            },
            {
              name: "ลูกค้า / ผู้ใช้งานทั่วไป (Customer)",
              capabilities: [
                "ค้นหาร้านค้ารถเข็นและสตรีทฟู้ดใกล้ตัวบนแผนที่แบบสดๆ",
                "ดูตำแหน่งร้านค้าที่กำลังเคลื่อนที่หรือเปิดบริการอยู่",
                "กดติดตามร้านโปรดเพื่อรับการแจ้งเตือนเมื่อเปิดร้าน",
                "ดูรายละเอียดเมนู ราคา และรีวิวจากผู้ใช้งานคนอื่น",
              ],
            },
          ]
        : [
            {
              name: "Street Cart Vendor",
              capabilities: [
                "Toggle shop open/closed with real-time GPS location streaming",
                "Manage menu items, pricing, photos, and regular operating hours",
                "Launch custom promotional campaigns",
                "Access analytics on popular dishes and high-traffic hotspot suggestions",
                "Review follower counts and customer ratings",
              ],
            },
            {
              name: "Customer",
              capabilities: [
                "Discover nearby open street food carts on a live interactive map",
                "Track moving vendors in real time as they change locations",
                "Follow favorite food carts to receive instant opening alerts",
                "Explore menu pricing, food photos, and community reviews",
              ],
            },
          ],
  },
];

function ProjectCard({
  project,
  onOpen,
  t,
}: {
  project: any;
  onOpen: (p: any) => void;
  t: any;
}) {
  return (
    <div
      onClick={() => onOpen(project)}
      className="group cursor-pointer rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900/70 overflow-hidden hover:border-sky-400/60 dark:hover:border-sky-500/50 hover:shadow-xl transition-all duration-300 hover:-translate-y-1 flex flex-col justify-between"
    >
      <div>
        {/* Cover Image */}
        <div className="relative overflow-hidden aspect-video bg-slate-950">
          <img
            src={project.cover}
            alt={project.title}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          />
          <span className="absolute top-3 left-3 text-xs font-semibold px-3 py-1 rounded-full bg-white/90 dark:bg-slate-900/90 backdrop-blur-xs text-sky-700 dark:text-sky-300 border border-slate-200 dark:border-slate-700 shadow-xs">
            {project.tag}
          </span>
        </div>

        {/* Card Body */}
        <div className="p-6">
          <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-2 group-hover:text-sky-600 dark:group-hover:text-sky-400 transition-colors line-clamp-1">
            {project.title}
          </h3>
          <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed mb-4 line-clamp-2">
            {project.summary}
          </p>

          {/* Tech Stack Chips */}
          <div className="flex flex-wrap gap-1.5 mb-2">
            {project.stack.slice(0, 4).map((tech: string) => (
              <span
                key={tech}
                className="inline-flex items-center gap-1 text-xs px-2.5 py-1 rounded-lg bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-700/80"
              >
                <StackIcon tech={tech} size={12} />
                {tech}
              </span>
            ))}
            {project.stack.length > 4 && (
              <span className="text-xs px-2 py-1 rounded-lg bg-slate-100 dark:bg-slate-800 text-slate-500 dark:text-slate-400 font-medium">
                +{project.stack.length - 4}
              </span>
            )}
          </div>
        </div>
      </div>

      {/* Card Footer Action */}
      <div className="px-6 pb-6 pt-2 border-t border-slate-100 dark:border-slate-800/80 flex items-center justify-between">
        <span className="text-xs text-slate-500 dark:text-slate-400 font-medium truncate max-w-[180px]">
          {project.role}
        </span>
        <div className="inline-flex items-center gap-1.5 text-xs font-semibold text-sky-600 dark:text-sky-400 group-hover:translate-x-1 transition-transform">
          <span>{t.projects.viewDetails}</span>
          <ArrowRight size={14} />
        </div>
      </div>
    </div>
  );
}

function ProjectModal({
  project,
  onClose,
  t,
}: {
  project: any;
  onClose: () => void;
  t: any;
}) {
  if (!project) return null;

  return (
    <div
      onClick={onClose}
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-slate-950/80 backdrop-blur-sm animate-in fade-in duration-200"
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="relative w-full max-w-3xl max-h-[90vh] overflow-y-auto rounded-2xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900 shadow-2xl"
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          aria-label="Close modal"
          className="absolute top-4 right-4 z-10 p-2 rounded-full bg-white/80 dark:bg-slate-900/80 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300 hover:text-slate-950 dark:hover:text-white transition-colors"
        >
          <X size={18} />
        </button>

        {/* Modal Cover Image */}
        <div className="w-full bg-slate-950 overflow-hidden border-b border-slate-200 dark:border-slate-800">
          <img
            src={project.cover}
            alt={project.title}
            className="w-full h-auto max-h-72 object-cover object-top"
          />
        </div>

        {/* Modal Content */}
        <div className="p-6 sm:p-8">
          <span className="inline-flex items-center gap-1 text-xs font-bold px-2.5 py-1 rounded-full bg-sky-50 dark:bg-sky-950/60 text-sky-700 dark:text-sky-400 border border-sky-200 dark:border-sky-800">
            {project.tag}
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white mt-2">
            {project.title}
          </h2>
          <p className="text-xs sm:text-sm font-semibold text-slate-500 dark:text-slate-400 mt-1 mb-4">
            {t.projects.roleLabel}: <span className="text-slate-700 dark:text-slate-200">{project.role}</span>
          </p>

          <p className="text-sm sm:text-base text-slate-700 dark:text-slate-300 leading-relaxed mb-6">
            {project.description}
          </p>

          {/* Tech Stack List */}
          <div className="mb-6">
            <h4 className="flex items-center gap-2 text-sm font-bold text-slate-900 dark:text-white mb-2.5">
              <Code2 size={16} className="text-sky-500" />
              {t.projects.techStackTitle}
            </h4>
            <div className="flex flex-wrap gap-2">
              {project.stack.map((tech: string) => (
                <span
                  key={tech}
                  className="inline-flex items-center gap-1.5 text-xs px-3 py-1.5 rounded-lg bg-slate-100 dark:bg-slate-800 text-slate-800 dark:text-slate-200 border border-slate-200 dark:border-slate-700"
                >
                  <StackIcon tech={tech} size={14} />
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Role Capabilities Breakdown */}
          {project.userRoles?.length > 0 && (
            <div className="mb-8">
              <h4 className="flex items-center gap-2 text-sm font-bold text-slate-900 dark:text-white mb-3">
                <Users size={16} className="text-teal-500" />
                {t.projects.userRolesTitle} ({project.userRoles.length})
              </h4>
              <div className="space-y-3">
                {project.userRoles.map((userRole: any) => (
                  <div
                    key={userRole.name}
                    className="rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-800/40 p-4"
                  >
                    <p className="text-sm font-bold text-slate-900 dark:text-white mb-2">
                      {userRole.name}
                    </p>
                    <ul className="space-y-1.5">
                      {userRole.capabilities.map((capability: string, idx: number) => (
                        <li
                          key={idx}
                          className="flex items-start gap-2 text-xs sm:text-sm text-slate-600 dark:text-slate-300"
                        >
                          <Check
                            size={14}
                            className="text-emerald-500 mt-0.5 shrink-0"
                          />
                          <span>{capability}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Action Links */}
          <div className="flex flex-wrap items-center gap-3 pt-4 border-t border-slate-200 dark:border-slate-800">
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl font-semibold text-sm text-white bg-gradient-to-r from-sky-600 to-teal-600 hover:from-sky-500 hover:to-teal-500 shadow-md transition-all active:scale-95"
            >
              {project.type === "mobile" ? (
                <>
                  <span>{t.projects.downloadApp}</span>
                  <Download size={16} />
                </>
              ) : (
                <>
                  <span>{t.projects.liveSite}</span>
                  <ExternalLink size={16} />
                </>
              )}
            </a>
            {project.showCode && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl font-semibold text-sm text-slate-700 dark:text-slate-200 border border-slate-300 dark:border-slate-700 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
              >
                <Github size={16} />
                <span>{t.projects.sourceCode}</span>
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default function ProjectsPage() {
  const { t, lang } = useLanguage();
  const [filter, setFilter] = useState<"all" | "web" | "mobile">("all");
  const [activeProject, setActiveProject] = useState<any>(null);

  const allProjects = getProjectsData(lang);
  const filteredProjects =
    filter === "all"
      ? allProjects
      : allProjects.filter((p) => p.type === filter);

  // Close modal on Escape
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setActiveProject(null);
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  return (
    <div className="min-h-screen py-16 px-4 sm:px-6 lg:px-8 bg-slate-50 dark:bg-slate-950 transition-colors duration-300">
      <div className="max-w-6xl mx-auto">
        {/* Header Title */}
        <div className="text-center max-w-2xl mx-auto mb-10">
          <span className="text-xs font-bold tracking-widest text-sky-600 dark:text-sky-400 uppercase">
            {t.projects.tag}
          </span>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 dark:text-white mt-1">
            {t.projects.title}
          </h1>
          <p className="text-sm sm:text-base text-slate-600 dark:text-slate-400 mt-2">
            {t.projects.subtitle}
          </p>

          {/* Filter Tabs */}
          <div className="inline-flex items-center p-1 rounded-xl bg-slate-200/80 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700/80 mt-6 text-xs font-semibold">
            <button
              onClick={() => setFilter("all")}
              className={`px-4 py-2 rounded-lg transition-all ${
                filter === "all"
                  ? "bg-white dark:bg-slate-900 text-sky-600 dark:text-sky-400 shadow-xs"
                  : "text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white"
              }`}
            >
              {t.projects.filterAll}
            </button>
            <button
              onClick={() => setFilter("web")}
              className={`px-4 py-2 rounded-lg transition-all ${
                filter === "web"
                  ? "bg-white dark:bg-slate-900 text-sky-600 dark:text-sky-400 shadow-xs"
                  : "text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white"
              }`}
            >
              {t.projects.filterWeb}
            </button>
            <button
              onClick={() => setFilter("mobile")}
              className={`px-4 py-2 rounded-lg transition-all ${
                filter === "mobile"
                  ? "bg-white dark:bg-slate-900 text-sky-600 dark:text-sky-400 shadow-xs"
                  : "text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white"
              }`}
            >
              {t.projects.filterMobile}
            </button>
          </div>
        </div>

        {/* Project Cards Grid */}
        <FadeInSection className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project) => (
            <ProjectCard
              key={project.id}
              project={project}
              onOpen={setActiveProject}
              t={t}
            />
          ))}
        </FadeInSection>
      </div>

      {/* Project Detail Modal */}
      <ProjectModal
        project={activeProject}
        onClose={() => setActiveProject(null)}
        t={t}
      />
    </div>
  );
}
