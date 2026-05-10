import { Link, useParams, useNavigate } from "react-router";
import { useState, useEffect } from "react";

import progresso1 from "../assets/progress-projects.jpg";
import progresso2 from "../assets/progresso-dashboard.jpg";
import progresso3 from "../assets/progresso-task.jpg";

import Goldsmith1 from "../assets/dashboard.png";
import Goldsmith2 from "../assets/h&c login.png";

import Smartleaf1 from "../assets/smartleaf1.jpg";
import Smartleaf2 from "../assets/smartleaf2.jpg";
import Smartleaf3 from "../assets/smartleaf3.jpg";
import Smartleaf4 from "../assets/smartleaf4.jpg";

import findly1 from "../assets/findly1.png";
import findly2 from "../assets/findly2.png";
import findly3 from "../assets/findly3.png";
import findly4 from "../assets/findly4.png";

const projects = {
  progresso: {
    title: "Progresso",

    description:
      "Progresso is a construction project progress tracking mobile application designed to help teams manage on-site operations, monitor project updates, and improve coordination between project managers and field workers. Inspired by productivity tools like Asana, the app centralizes project activities such as task assignments, daily site logs, material tracking, issues on site, approvals, and project instructions into a single platform.",

    images: [progresso1, progresso2, progresso3],

    stack: [
      "React Native (Expo)",
      "TypeScript",
      "Node JS",
      "Express JS",
      "MySQL",
      "Prisma ORM",
      "Docker",
      "Github Actions",
    ],

    features: [
      "Role-Based Access Control",
      "Task Assignment",
      "Daily Site Logs",
      "Weekly Report Generation",
      "PDF Export",
      "Material Tracking",
      "Approvals & Instructions",
    ],
     github: "https://github.com/jraay12/progresso-backend.git",

    impact:
      "The system improves communication between field teams and project managers by centralizing updates, reports, and site activities into one organized workflow.",
  },

  Goldsmith: {
    title: "H&C Goldsmith",

    description:
      "An internal inventory and order management system built for small to medium jewelry operations, including stock tracking, order handling, and financial monitoring.",

    images: [Goldsmith1, Goldsmith2],

    stack: [
      "React JS",
      "JavaScript",
      "Node JS",
      "Express JS",
      "MySQL",
      "Prisma ORM",
      "Docker",
    ],

    features: [
      "Inventory Management",
      "Order Tracking",
      "Financial Monitoring",
      "User Management",
      "Reports & Records",
    ],

    github: "https://github.com/jraay12/inventory_v2.git",

    impact:
      "Helped streamline inventory operations and reduced manual tracking through centralized internal management tools.",
  },

  Findly: {
    title: "Findly",

    description:
      "Findly is a lost-and-found management platform that helps users register personal belongings using unique QR codes for easier recovery and ownership verification. The system allows owners to manage registered items through a dedicated dashboard while enabling the public to report found items with photos and detailed information. Designed to improve item recovery workflows, the platform also includes automated email notifications, public lost-item listings, and featured item/shop functionality.",

    images: [findly1, findly2, findly3, findly4],

    stack: [
      "React JS",
      "JavaScript",
      "Node JS",
      "Express JS",
      "MySQL",
      "Prisma ORM",
      "Docker",
    ],

    features: [
      "QR Code Generation for Registered Items",
      "Lost & Found Reporting with Photos",
      "Automated Email Notifications",
      "Owner Dashboard with Email Login",
      "Item Status Management",
      "Register Additional Items",
      "Public Lost Items Dashboard",
      "Featured Items & Shop Section",
    ],

    github: "https://github.com/jraay12/findly-backend.git",

    impact:
      "The platform simplifies the lost-and-found process by connecting item owners and finders through QR technology, centralized item management, and automated notifications for faster recovery and better tracking.",
  },

  smartleaf: {
    title: "Smart Leaf",

    description:
      "A mobile application that detects mango leaf diseases using AI-powered image analysis and machine learning models trained from Kaggle datasets.",

    images: [Smartleaf1, Smartleaf2, Smartleaf3, Smartleaf4],

    stack: ["React Native", "Python", "FastAPI", "Kaggle Dataset"],

    features: [
      "Leaf Disease Detection",
      "Image Upload & Analysis",
      "AI Prediction Results",
      "Mobile-friendly Interface",
    ],

    github: "https://github.com/jraay12/mango-new.git",

    impact:
      "Provided a faster and more accessible way to identify mango leaf diseases using mobile AI-assisted detection.",
  },
};

export default function ProjectDetails() {
  const { id } = useParams();
  const navigate = useNavigate();

  const project = id ? projects[id] : null;

  const [activeImage, setActiveImage] = useState(0);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [id]);

  if (!project) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-white text-slate-700">
        Project not found
      </div>
    );
  }

  return (
    <section className="bg-white px-6 py-16">
      <div className="mx-auto max-w-6xl">
        {/* BACK */}
        <Link
          to="#"
          onClick={(e) => {
            e.preventDefault();
            navigate(-1);
          }}
          className="text-sm text-slate-500 transition hover:text-slate-900"
        >
          ← Back to projects
        </Link>

        {/* HERO */}
        <div className="mt-10 grid gap-14 lg:grid-cols-[1.1fr_0.9fr]">
          {/* LEFT */}
          <div>
            <h1 className="text-5xl font-black tracking-tight text-slate-900">
              {project.title}
            </h1>

            <p className="mt-6 leading-8 text-slate-600">
              {project.description}
            </p>

            {/* STACK */}
            <div className="mt-8 flex flex-wrap gap-2">
              {project.stack.map((tech) => (
                <span
                  key={tech}
                  className="rounded-full bg-slate-100 px-4 py-2 text-sm text-slate-700"
                >
                  {tech}
                </span>
              ))}
            </div>

            {/* ACTIONS */}
            <div className="mt-8 flex flex-wrap gap-3">
              {project.github && (
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="
        inline-flex items-center gap-2 rounded-full
        bg-slate-900 px-5 py-2.5 text-sm font-medium
        text-white transition hover:bg-slate-800
      "
                >
                  GitHub Repository
                </a>
              )}

              {project.demo && (
                <a
                  href={project.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="
        inline-flex items-center gap-2 rounded-full
        border border-slate-200 bg-white px-5 py-2.5
        text-sm font-medium text-slate-700
        transition hover:bg-slate-100
      "
                >
                  Live Demo
                </a>
              )}
            </div>

            {/* FEATURES */}
            <div className="mt-14">
              <h2 className="text-lg font-semibold text-slate-900">
                Key Features
              </h2>

              <div className="mt-5 grid gap-3 sm:grid-cols-2">
                {project.features.map((feature) => (
                  <div
                    key={feature}
                    className="flex items-start gap-3 text-slate-700"
                  >
                    <div className="mt-2 h-2 w-2 rounded-full bg-slate-400" />

                    <p className="text-sm leading-7">{feature}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* IMPACT */}
            <div className="mt-14 border-l-2 border-slate-200 pl-6">
              <h2 className="text-lg font-semibold text-slate-900">
                Project Impact
              </h2>

              <p className="mt-4 leading-8 text-slate-600">{project.impact}</p>
            </div>
          </div>

          {/* RIGHT */}
          <div>
            {/* MAIN IMAGE */}
            <div className="overflow-hidden rounded-3xl border border-slate-200 bg-slate-50">
              <img
                src={project.images[activeImage]}
                alt={project.title}
                className="
                  w-full object-contain
                  max-h-[620px]
                "
              />
            </div>

            {/* THUMBNAILS */}
            <div className="mt-4 flex gap-3 overflow-x-auto pb-2">
              {project.images.map((img, index) => (
                <button
                  key={index}
                  onClick={() => setActiveImage(index)}
                  className={`
                    overflow-hidden rounded-2xl border transition
                    ${
                      activeImage === index
                        ? "border-slate-900"
                        : "border-slate-200 opacity-60"
                    }
                  `}
                >
                  <img src={img} className="h-20 w-24 object-cover" />
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
