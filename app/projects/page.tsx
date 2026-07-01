"use client";
import { useState } from "react";
import {
  ExternalLink,
  Github,
  X,
  ArrowRight,
  Code2,
  Users,
  Check,
  Download,
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

// 🧩 จับคู่ชื่อเทคโนโลยี (ต้องตรงกับชื่อใน stack ด้านล่าง) กับไอคอนของมัน
// ถ้าชื่อไหนไม่อยู่ในนี้ จะ fallback ไปใช้ไอคอนกลาง <Code2 /> ให้อัตโนมัติ
const stackIconMap = {
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

function StackIcon({ tech, size = 14 }: { tech: any; size: number }) {
  const Icon = (stackIconMap[tech] as any) || Code2;
  return <Icon size={size} className="shrink-0" />;
}

// ✏️ แก้ไขข้อมูลโปรเจคของคุณที่นี่
const projectsData = [
  {
    id: "alumni-system",
    title: "Alumni Network Information System",
    tag: "Web Application",
    cover: "/images/alumni_thumnail.png",
    summary: "Alumni Network Information System",
    description:
      "An alumni management system that enables the institution to efficiently store data, track activities, and build networks between alumni and the institution.",
    stack: [
      "Next.js",
      "Tailwind CSS",
      "Elysia.js",
      "Bun Runtime",
      "PostgreSQL",
      "Prisma ORM",
      "Google API",
    ],
    role: "Full-stack Developer",
    liveUrl: "https://alumni.rmu.ac.th/",
    githubUrl: "#",
    accent: "from-emerald-400 to-teal-300",
    userRoles: [
      {
        name: "Alumni",
        capabilities: [
          "Register and authenticate user accounts",
          "Manage personal profile, contact information, and address",
          "Control personal data privacy settings",
          "Manage employment and further education history",
          "Search and browse alumni directory",
          "View university news and announcements",
          "Receive and send email communications",
          "View message history",
          "Change account password",
        ],
      },
      {
        name: "Lecturer",
        capabilities: [
          "Authenticate and manage lecturer account",
          "View department-level alumni statistics dashboard",
          "Search and monitor alumni information",
          "Manage contact information for alumni",
          "Access university news and announcements",
          "Generate department alumni reports",
          "Send email notifications to alumni",
          "Change account password",
        ],
      },
      {
        name: "Executive",
        capabilities: [
          "Authenticate executive account",
          "View university-wide alumni analytics dashboard",
          "Access faculty and department reports",
          "Search alumni information",
          "Download alumni reports",
          "Send broadcast emails",
          "Manage personal contact information",
          "Change account password",
        ],
      },
      {
        name: "Administrator",
        capabilities: [
          "Manage administrator accounts",
          "Approve and suspend user accounts",
          "Manage user permissions",
          "Manage alumni records",
          "Manage university news and announcements",
          "Search and export alumni information",
          "Import alumni data from Excel",
          "Generate statistical reports",
          "Send bulk email notifications",
          "Manage email history",
          "Configure automated Google Drive backups",
          "Restore and maintain system data",
          "Change account password",
        ],
      },
    ],
    showCode: false,
  },
  {
    id: "lawintern-system",
    title: "Internship Management System",
    tag: "Web Application",
    cover: "/images/lawintern_thumnail.png",
    summary: "Internship Management System",
    description:
      "A web-based internship management system designed to streamline internship applications, supervision, evaluations, and progress tracking for students, lecturers, organizations, and administrators.",
    stack: [
      "Next.js",
      "Tailwind CSS",
      "Elysia.js",
      "Bun Runtime",
      "PostgreSQL",
      "Prisma ORM",
    ],
    role: "Full-stack Developer",
    liveUrl: "https://lawinternship.rmu.ac.th/",
    githubUrl: "#",
    accent: "from-emerald-400 to-teal-300",

    userRoles: [
      {
        name: "Student",
        capabilities: [
          "Register and authenticate user accounts",
          "Browse internship organizations and job positions",
          "Apply for internship opportunities",
          "Track internship application status",
          "Create, update, and manage daily internship logs",
          "View supervision schedules",
          "View internship evaluation results",
          "Download internship completion certificate",
          "Evaluate internship organizations",
          "Submit internship withdrawal requests",
        ],
      },
      {
        name: "Lecturer",
        capabilities: [
          "Monitor internship supervision schedules",
          "Review and manage student internship logs",
          "Evaluate student internship performance",
          "Monitor student progress and behavior",
          "View organization rankings based on student evaluations",
          "Submit internship withdrawal requests",
        ],
      },
      {
        name: "Organization",
        capabilities: [
          "Register and authenticate organization accounts",
          "Manage internship job positions",
          "Monitor student internship progress",
          "Review and approve internship logs",
          "Evaluate student internship performance",
          "Report student behavior",
          "View supervision schedules",
          "Submit internship withdrawal requests",
        ],
      },
      {
        name: "Executive",
        capabilities: [
          "View overall internship analytics dashboard",
          "Access reports and internship statistics",
          "Monitor organization rankings",
          "Review student internship information",
          "Approve administrative requests",
        ],
      },
      {
        name: "Administrator",
        capabilities: [
          "Manage internship periods and registration schedules",
          "Manage students, lecturers, executives, and user permissions",
          "Manage organizations and internship positions",
          "Manage internship applications",
          "Manage supervision schedules",
          "Review and manage daily internship logs",
          "Manage internship evaluations",
          "Create organization evaluation forms",
          "Process administrative requests",
        ],
      },
    ],
    showCode: false,
  },
  {
    id: "cartzy",
    title: "Cartzy",
    tag: "Mobile Application",
    liveUrl: `https://expo.dev/accounts/pond2547/projects/hubre/builds/54a529ca-3f2b-4986-9c34-b6c56d3c4c00`,
    cover: "/images/cartzy_thumnail.png",
    summary:
      "Real-time GPS platform that helps street food cart vendors get discovered and helps customers find nearby carts on the go.",
    description:
      "Cartzy connects street food cart vendors with customers through real-time GPS location technology. Mobile carts are hard to track, opening hours are unpredictable, and vendors lack any tool to understand their own sales patterns — Cartzy solves all three. Vendors get a live map presence and sales insights, while customers get an easy way to find great street food nearby in real time.",
    stack: ["React Native", "Expo", "Elysia", "Prisma ORM", "GoogleMap API"],
    role: "Co-Founder & CTO — App Developer",
    githubUrl: "#",
    accent: "from-fuchsia-400 to-pink-400",
    userRoles: [
      {
        name: "Vendor (Street Cart Owner)",
        capabilities: [
          "Toggle shop status open/closed — auto-updates location via GPS",
          "Manage shop profile, menu, and hours freely",
          "Create and run promotions independently",
          "View analytics on best-selling menu items",
          "Get suggested selling spots and routes based on local customer interest",
          "Track followers, reviews, and distance/stop-time stats",
        ],
      },
      {
        name: "Customer",
        capabilities: [
          "Search for nearby street food vendors in real time",
          "View currently open vendors live on a map",
          "Follow favorite vendors to receive special notifications",
          "See vendor locations update automatically as they move",
          "Check shop details: hours, menu, and promotions",
        ],
      },
    ],
  },
];

function ProjectCard({ project, onOpen }: { project: any; onOpen: any }) {
  return (
    <div
      onClick={() => onOpen(project)}
      className="group cursor-pointer rounded-2xl border border-slate-800 bg-slate-900/60 overflow-hidden hover:border-slate-700 transition-all duration-300 hover:-translate-y-1"
    >
      <div className="relative overflow-hidden">
        <img
          src={project.cover}
          alt={project.title}
          className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-500"
        />
        {/* <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent" /> */}
        <span
          className={`absolute top-3 left-3 text-xs font-semibold px-3 py-1 rounded-full bg-slate-950/70 border border-slate-700 bg-gradient-to-r ${project.accent} bg-clip-text text-transparent`}
        >
          {project.tag}
        </span>
      </div>

      <div className="p-5">
        <h3 className="text-lg font-bold text-white mb-2 group-hover:text-emerald-300 transition-colors">
          {project.title}
        </h3>
        <p className="text-sm text-slate-400 leading-relaxed mb-4 line-clamp-2">
          {project.summary}
        </p>

        <div className="flex flex-wrap gap-2 mb-4">
          {project.stack.slice(0, 3).map((tech: any) => (
            <span
              key={tech}
              className="inline-flex items-center gap-1.5 text-xs px-2.5 py-1 rounded-full bg-slate-800 text-slate-300 border border-slate-700"
            >
              <StackIcon tech={tech} size={12} />
              {tech}
            </span>
          ))}
          {project.stack.length > 3 && (
            <span className="text-xs px-2.5 py-1 rounded-full bg-slate-800 text-slate-400">
              +{project.stack.length - 3}
            </span>
          )}
        </div>

        <div className="flex items-center gap-1 text-sm font-medium text-cyan-400 group-hover:gap-2 transition-all">
          ดูรายละเอียด <ArrowRight size={16} />
        </div>
      </div>
    </div>
  );
}

function ProjectModal({ project, onClose }: { project: any; onClose: any }) {
  if (!project) return null;

  return (
    <FadeInSection
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-sm"
      onClick={onClose}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="relative w-full max-w-2xl max-h-[90vh] overflow-y-auto rounded-2xl border border-slate-700 bg-slate-900 shadow-2xl"
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 p-2 rounded-full bg-slate-950/70 border border-slate-700 text-slate-300 hover:text-white hover:border-slate-500 transition-colors"
        >
          <X size={18} />
        </button>

        <img
          src={project.cover}
          alt={project.title}
          className="w-full h-auto object-cover"
        />

        <div className="p-6">
          <span
            className={`text-xs font-semibold bg-gradient-to-r ${project.accent} bg-clip-text text-transparent`}
          >
            {project.tag}
          </span>
          <h2 className="text-2xl font-extrabold text-white mt-1 mb-1">
            {project.title}
          </h2>
          <p className="text-sm text-slate-400 mb-5">{project.role}</p>

          <p className="text-slate-300 leading-relaxed mb-6">
            {project.description}
          </p>

          <div className="mb-6">
            <h4 className="flex items-center gap-2 text-sm font-semibold text-slate-200 mb-2">
              <Code2 size={16} className="text-emerald-400" /> Tech Stack
            </h4>
            <div className="flex flex-wrap gap-2">
              {project.stack.map((tech: any) => (
                <span
                  key={tech}
                  className="inline-flex items-center gap-1.5 text-xs px-3 py-1.5 rounded-full bg-slate-800 text-slate-300 border border-slate-700"
                >
                  <StackIcon tech={tech} size={14} />
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {project.userRoles?.length > 0 && (
            <div className="mb-6">
              <h4 className="flex items-center gap-2 text-sm font-semibold text-slate-200 mb-3">
                <Users size={16} className="text-sky-400" />
                User Roles ({project.userRoles.length})
              </h4>
              <div className="space-y-3">
                {project.userRoles.map((userRole: any) => (
                  <div
                    key={userRole.name}
                    className="rounded-xl border border-slate-700 bg-slate-800/50 p-4"
                  >
                    <p className="text-sm font-semibold text-white mb-2">
                      {userRole.name}
                    </p>
                    <ul className="space-y-1.5">
                      {userRole.capabilities.map((capability: any) => (
                        <li
                          key={capability}
                          className="flex items-start gap-2 text-sm text-slate-300"
                        >
                          <Check
                            size={14}
                            className="text-emerald-400 mt-0.5 shrink-0"
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

          <div className="flex flex-wrap gap-3">
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg font-semibold text-white bg-gradient-to-r from-sky-500 to-cyan-400 hover:opacity-90 transition-opacity"
            >
              {project.tag === "Mobile Application" ? (
                <>
                  <p>Dowload App!</p>
                  <Download size={16} />
                </>
              ) : (
                <>
                  <p>Link to site</p> <ExternalLink size={16} />
                </>
              )}
            </a>
            {project.showCode && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg font-semibold text-slate-200 border border-slate-700 hover:border-slate-500 transition-colors"
              >
                <Github size={16} /> ซอร์สโค้ด
              </a>
            )}
          </div>
        </div>
      </div>
    </FadeInSection>
  );
}

export default function ProjectsPage() {
  const [activeProject, setActiveProject] = useState(null);

  return (
    <div className="min-h-screen bg-slate-950 px-6 py-16 md:py-24">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-14">
          <span className="text-sm font-semibold tracking-widest text-emerald-400 uppercase">
            My Work
          </span>
          <h1 className="text-4xl md:text-5xl font-extrabold mt-3 mb-4">
            <span className="bg-gradient-to-r from-emerald-400 via-cyan-400 to-sky-400 bg-clip-text text-transparent">
              Projects
            </span>
          </h1>
          <p className="text-slate-400 max-w-xl mx-auto">
            Some of the projects I've developed range from web applications to
            mobile apps.
          </p>
        </div>

        <FadeInSection className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projectsData.map((project) => (
            <ProjectCard
              key={project.id}
              project={project}
              onOpen={setActiveProject}
            />
          ))}
        </FadeInSection>
      </div>

      <ProjectModal
        project={activeProject}
        onClose={() => setActiveProject(null)}
      />
    </div>
  );
}
