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
      "A mobile app for managing construction projects, daily site logs, and on-site updates to improve coordination and tracking.",
    images: [progresso1, progresso2, progresso3],
    stack: [
      "Prisma ORM",
      "MySQL",
      "Docker",
      "Github Actions",
      "Express JS",
      "Node JS",
      "TypeScript",
      "React Native (Expo)",
    ],
    features: [
      "Create and manage construction projects",
      "Daily site logging with progress tracking",
      "Real-time project updates for teams",
      "Organized documentation of site activities",
    ],
    challenges:
      "Designed a structured data system for daily logs and project tracking while ensuring smooth synchronization between mobile users and backend APIs.",
  },
  Goldsmith: {
    title: "H&C Goldsmith",
    description:
      "A web-based internal system for managing inventory, orders, users, and basic financial tracking for small to medium operations.",
    images: [Goldsmith1, Goldsmith2],
    stack: [
      "Prisma ORM",
      "MySQL",
      "Docker",
      "Github Actions",
      "Express JS",
      "JavaScript",
      "React JS",
      "Node JS",
    ],
    features: [
      "Create and manage construction projects",
      "Daily site logging with progress tracking",
      "Real-time project updates for teams",
      "Organized documentation of site activities",
    ],
    challenges:
      "Designed a structured data system for daily logs and project tracking while ensuring smooth synchronization between mobile users and backend APIs.",
  },
  Findly: {
    title: "Findly",
    description:
      "A web-based internal system for managing inventory, orders, users, and basic financial tracking for small to medium operations.",
    images: [findly1, findly2, findly3, findly4],
    stack: [
      "Prisma ORM",
      "MySQL",
      "Docker",
      "Github Actions",
      "Express JS",
      "JavaScript",
      "React JS",
      "Node JS",
    ],
    features: [
      "Create and manage construction projects",
      "Daily site logging with progress tracking",
      "Real-time project updates for teams",
      "Organized documentation of site activities",
    ],
    challenges:
      "Designed a structured data system for daily logs and project tracking while ensuring smooth synchronization between mobile users and backend APIs.",
  },
  smartleaf: {
    title: "Smart Leaf",
    description:
      "A mobile application that detects and analyzes mango leaf diseases using AI-powered image recognition and machine learning models trained with mango leaf datasets from Kaggle.",
    images: [Smartleaf1, Smartleaf2, Smartleaf3, Smartleaf4],
    stack: ["React Native", "Python", "FastAPI", "Kaggle Dataset"],
    features: [
      "Create and manage construction projects",
      "Daily site logging with progress tracking",
      "Real-time project updates for teams",
      "Organized documentation of site activities",
    ],
    challenges:
      "Designed a structured data system for daily logs and project tracking while ensuring smooth synchronization between mobile users and backend APIs.",
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
      <div className="flex min-h-screen items-center justify-center bg-slate-50 text-slate-700">
        Project not found
      </div>
    );
  }

  return (
    <section className="relative bg-slate-50 px-6 py-20">
      <div className="mx-auto max-w-7xl">
        {/* BACK */}
        <Link
          to="#"
          onClick={(e) => {
            e.preventDefault();
            navigate(-1);
          }}
        >
          ← Back to projects
        </Link>

        {/* HERO */}
        <div className="mt-10 grid gap-10 lg:grid-cols-2">
          {/* LEFT */}
          <div>
            <h1 className="text-5xl font-black text-slate-900">
              {project.title}
            </h1>

            <p className="mt-6 text-lg leading-8 text-slate-600">
              {project.description}
            </p>

            {/* STACK */}
            <div className="mt-8 flex flex-wrap gap-3">
              {project.stack.map((tech) => (
                <span
                  key={tech}
                  className="rounded-xl border border-slate-200 bg-white px-4 py-2 text-sm text-slate-700 shadow-sm"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* RIGHT - IMAGE GALLERY */}
          <div>
            {/* MAIN IMAGE */}
            <div className="overflow-hidden rounded-[2rem] border border-slate-200 bg-slate-100 shadow-xl">
              <img
                src={project.images[activeImage]}
                alt={project.title}
                className="
                  w-full object-contain
                  max-h-[600px] md:max-h-[520px]
                  transition duration-700 hover:scale-105
                "
              />
            </div>

            {/* THUMBNAILS */}
            <div className="mt-4 grid grid-cols-3 gap-3">
              {project.images.map((img, index) => (
                <button
                  key={index}
                  onClick={() => setActiveImage(index)}
                  className={`
                    overflow-hidden rounded-xl border transition
                    ${
                      activeImage === index
                        ? "border-slate-900"
                        : "border-slate-200 opacity-70"
                    }
                  `}
                >
                  <img
                    src={img}
                    className="
                      h-20 w-full object-cover
                      hover:scale-105 transition
                    "
                  />
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* FEATURES */}
        <div className="mt-32">
          <h2 className="text-4xl font-black text-slate-900">Key Features</h2>

          <div className="mt-8 grid gap-6 md:grid-cols-2">
            {project.features.map((feature) => (
              <div
                key={feature}
                className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm"
              >
                <p className="text-slate-700">{feature}</p>
              </div>
            ))}
          </div>
        </div>

        {/* CHALLENGES */}
        <div className="mt-32 rounded-[2rem] border border-slate-200 bg-white p-10 shadow-sm">
          <h2 className="text-4xl font-black text-slate-900">
            Challenges & Solutions
          </h2>

          <p className="mt-6 text-lg leading-8 text-slate-600">
            {project.challenges}
          </p>
        </div>
      </div>
    </section>
  );
}
