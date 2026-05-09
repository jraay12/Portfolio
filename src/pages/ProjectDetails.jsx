import { Link, useParams } from "react-router";

const projects = {
  "inventory-system": {
    title: "Inventory Management System",
    description:
      "A web-based internal system for managing inventory, orders, users, and financial tracking.",
    image:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2000",
    stack: ["React", "Node.js", "Socket.io", "PostgreSQL"],
    features: [
      "Real-time inventory updates",
      "Role-based access control",
      "Internal order management",
      "Financial tracking system",
    ],
    challenges:
      "Implemented real-time inventory synchronization using WebSockets to maintain stock consistency across multiple connected users.",
  },

  "docs-editor": {
    title: "Google Docs Inspired Editor",
    description:
      "Real-time collaborative document editor with multi-user support.",
    image:
      "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?q=80&w=2000",
    stack: ["React", "WebSockets", "Express"],
    features: [
      "Live collaboration",
      "Document sharing",
      "Auto-save support",
    ],
    challenges:
      "Handled concurrent editing and synchronization between multiple active users.",
  },
};

export default function ProjectDetails() {
  const { id } = useParams();

  const project = id ? projects[id] : null;

  if (!project) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-slate-50 text-slate-700">
        Project not found
      </div>
    );
  }

  return (
    <section className="relative overflow-hidden bg-slate-50 px-6 py-20">
      {/* Background Grid */}
      <div
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage: `
            linear-gradient(to right, #94a3b8 1px, transparent 1px),
            linear-gradient(to bottom, #94a3b8 1px, transparent 1px)
          `,
          backgroundSize: "28px 28px",
        }}
      />

      <div className="relative mx-auto max-w-7xl">

        {/* Back */}
        <Link
          to="/"
          className="inline-flex items-center gap-2 text-sm text-slate-500 transition hover:text-slate-900"
        >
          ← Back to projects
        </Link>

        {/* Hero Section */}
        <div className="mt-10 grid items-center gap-10 lg:grid-cols-2">

          {/* Left Content */}
          <div>

            <div className="inline-flex rounded-full border border-blue-200 bg-blue-50 px-4 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-blue-600">
              Project Showcase
            </div>

            <h1 className="mt-6 text-5xl font-black leading-tight text-slate-900 lg:text-6xl">
              {project.title}
            </h1>

            <p className="mt-6 max-w-xl text-lg leading-8 text-slate-600">
              {project.description}
            </p>

            {/* Stack */}
            <div className="mt-8 flex flex-wrap gap-3">
              {project.stack.map((tech) => (
                <span
                  key={tech}
                  className="
                    rounded-xl border border-slate-200 bg-white
                    px-4 py-2 text-sm text-slate-700
                    shadow-sm transition hover:-translate-y-0.5 hover:shadow-md
                  "
                >
                  {tech}
                </span>
              ))}
            </div>

            {/* Buttons */}
            <div className="mt-10 flex flex-wrap gap-4">
              <button
                className="
                  rounded-2xl bg-slate-900 px-6 py-3
                  text-sm font-medium text-white
                  transition hover:bg-slate-800
                "
              >
                View GitHub
              </button>

              <button
                className="
                  rounded-2xl border border-slate-200 bg-white px-6 py-3
                  text-sm font-medium text-slate-700
                  transition hover:bg-slate-100
                "
              >
                Documentation
              </button>
            </div>
          </div>

          {/* Right Preview */}
          <div className="relative">

            {/* Glow */}
            <div className="absolute -inset-4 rounded-[2rem] bg-blue-100/50 blur-3xl" />

            {/* Image Card */}
            <div
              className="
                relative overflow-hidden rounded-[2rem]
                border border-slate-200 bg-white p-3
                shadow-2xl
              "
            >

              {/* Fake Browser Header */}
              <div className="mb-3 flex items-center gap-2 px-2">
                <div className="h-3 w-3 rounded-full bg-red-300" />
                <div className="h-3 w-3 rounded-full bg-yellow-300" />
                <div className="h-3 w-3 rounded-full bg-green-300" />
              </div>

              <div className="overflow-hidden rounded-2xl">
                <img
                  src={project.image}
                  alt={project.title}
                  className="
                    h-full w-full object-cover
                    transition duration-700 hover:scale-105
                  "
                />
              </div>
            </div>
          </div>
        </div>

        {/* Features */}
        <div className="mt-32">
          <div className="mb-10">
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-blue-600">
              Highlights
            </p>

            <h2 className="mt-3 text-4xl font-black text-slate-900">
              Key Features
            </h2>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            {project.features.map((feature) => (
              <div
                key={feature}
                className="
                  group rounded-3xl border border-slate-200 bg-white p-6
                  shadow-sm transition-all duration-300
                  hover:-translate-y-1 hover:shadow-lg
                "
              >
                <div className="flex items-start gap-4">

                  <div
                    className="
                      mt-1 flex h-10 w-10 items-center justify-center
                      rounded-xl bg-blue-50 text-blue-600
                    "
                  >
                    ✦
                  </div>

                  <div>
                    <h3 className="font-semibold text-slate-900">
                      Feature
                    </h3>

                    <p className="mt-1 text-sm leading-7 text-slate-600">
                      {feature}
                    </p>
                  </div>

                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Challenges */}
        <div className="mt-32">
          <div className="mb-10">
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-blue-600">
              Engineering
            </p>

            <h2 className="mt-3 text-4xl font-black text-slate-900">
              Challenges & Solutions
            </h2>
          </div>

          <div
            className="
              relative overflow-hidden rounded-[2rem]
              border border-slate-200 bg-white p-10 shadow-sm
            "
          >
            {/* Background texture */}
            <div
              className="absolute inset-0 opacity-[0.03]"
              style={{
                backgroundImage: `
                  linear-gradient(to right, #94a3b8 1px, transparent 1px),
                  linear-gradient(to bottom, #94a3b8 1px, transparent 1px)
                `,
                backgroundSize: "26px 26px",
              }}
            />

            <p className="relative max-w-3xl text-lg leading-9 text-slate-600">
              {project.challenges}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}