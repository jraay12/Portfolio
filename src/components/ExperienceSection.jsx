export default function ExperienceSection() {
  const experiences = [
    {
      year: "2026",
      title: "Junior Full Stack Developer",
      company: "Freelance / Personal Projects",
      description:
        "Built full-stack applications including inventory systems, collaborative tools, and real-time features using modern web technologies.",
    },
    {
      year: "2025",
      title: "Construction Site Management App",
      company: "Capstone Project",
      description:
        "Developed a mobile application for managing construction projects, daily logs, and on-site updates for better team coordination.",
    },
    {
      year: "2025",
      title: "Inventory Management System",
      company: "Internal Business System",
      description:
        "Created an internal platform for inventory tracking, order management, and financial monitoring with role-based access.",
    },
    {
      year: "2024",
      title: "Started Full Stack Development",
      company: "Self Learning Journey",
      description:
        "Focused on learning React, Node.js, databases, APIs, and deployment while building real-world projects.",
    },
  ];

  return (
    <section
      id="experience"
      className="relative overflow-hidden bg-slate-50 px-6 py-32"
    >
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

      <div className="relative mx-auto max-w-5xl">

        {/* Header */}
        <div className="mb-20 text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-blue-600">
            Experience
          </p>

          <h2 className="mt-4 text-5xl font-black text-slate-900">
            Journey & Experience
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-slate-600">
            My development journey, projects, and experiences building
            scalable applications and solving real-world problems.
          </p>
        </div>

        {/* Timeline */}
        <div className="relative">

          {/* Vertical Line */}
          <div className="absolute left-4 top-0 h-full w-px bg-slate-200 md:left-1/2" />

          <div className="space-y-12">

            {experiences.map((item, index) => (
              <div
                key={index}
                className={`
                  relative flex flex-col gap-6 md:flex-row
                  ${index % 2 === 0 ? "md:flex-row-reverse" : ""}
                `}
              >

                {/* Empty Side */}
                <div className="hidden md:block md:w-1/2" />

                {/* Timeline Dot */}
                <div
                  className="
                    absolute left-4 top-8 z-10
                    h-4 w-4 rounded-full
                    border-4 border-white bg-blue-500
                    shadow-md md:left-1/2 md:-translate-x-1/2
                  "
                />

                {/* Card */}
                <div className="ml-12 md:ml-0 md:w-1/2">
                  <div
                    className="
                      group rounded-[2rem] border border-slate-200
                      bg-white p-8 shadow-sm
                      transition-all duration-300
                      hover:-translate-y-1 hover:shadow-xl
                    "
                  >

                    {/* Year */}
                    <div
                      className="
                        inline-flex rounded-full border border-blue-200
                        bg-blue-50 px-4 py-1
                        text-xs font-semibold uppercase tracking-[0.2em]
                        text-blue-600
                      "
                    >
                      {item.year}
                    </div>

                    {/* Title */}
                    <h3 className="mt-5 text-2xl font-bold text-slate-900">
                      {item.title}
                    </h3>

                    {/* Company */}
                    <p className="mt-2 text-sm font-medium text-slate-500">
                      {item.company}
                    </p>

                    {/* Description */}
                    <p className="mt-5 leading-8 text-slate-600">
                      {item.description}
                    </p>
                  </div>
                </div>

              </div>
            ))}
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-24 text-center text-sm text-slate-500">
          Continuously building, learning, and improving 🚀
        </div>
      </div>
    </section>
  );
}