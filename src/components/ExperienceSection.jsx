export default function ExperienceSection() {
  const experiences = [
    {
      year: "Aug 2024 – Dec 2025",
      title: "Full Stack Developer",
      company: "Cerebrox Information Technology",
      description:
        "Developed full-stack web and mobile applications using Express.js, Next.js, Flutter, and Firestore. Built push notification services, maintained and deployed hotfixes for existing school systems, developed new system features, deployed Raspberry Pi tapping stations across schools, and created an offline eBook mobile application with integrated assessments.",
    },
    {
      year: "Jan 2024 – Jul 2024",
      title: "Backend Developer",
      company: "Freelance",
      description:
        "Built scalable backend services and RESTful APIs using Clean Architecture and Domain-Driven Design. Developed mobile applications with React Native and Flutter, implemented real-time features using Socket.IO, deployed applications with Docker and CI/CD pipelines, and designed scalable MongoDB and MySQL database schemas.",
    },
  ];

  return (
    <section
      id="experience"
      className="relative overflow-hidden bg-gradient-to-b from-slate-50 via-white to-slate-100 px-6 py-32"
    >
      {/* Background Effects */}
      <div className="absolute left-0 top-0 h-96 w-96 rounded-full bg-blue-100 blur-3xl opacity-40" />
      <div className="absolute bottom-0 right-0 h-96 w-96 rounded-full bg-cyan-100 blur-3xl opacity-40" />

      {/* Grid */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `
            linear-gradient(to right, #94a3b8 1px, transparent 1px),
            linear-gradient(to bottom, #94a3b8 1px, transparent 1px)
          `,
          backgroundSize: "32px 32px",
        }}
      />

      <div className="relative mx-auto max-w-6xl">
        {/* Header */}
        <div className="mb-24 text-center">
          <div
            className="
              inline-flex items-center gap-2 rounded-full
              border border-blue-200 bg-blue-50/80
              px-5 py-2 text-sm font-semibold
              uppercase tracking-[0.25em] text-blue-600
              backdrop-blur-sm
            "
          >
            <div className="h-2 w-2 rounded-full bg-blue-500 animate-pulse" />
            Experience
          </div>

          <h2 className="mt-6 text-5xl font-black tracking-tight text-slate-900 md:text-6xl">
            Journey & Experience
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-slate-600">
            Building scalable applications, solving real-world problems, and
            continuously improving through hands-on development experience.
          </p>
        </div>

        {/* Timeline */}
        <div className="relative z-10">
          {/* Center Line */}
          <div
            className="
    absolute left-4 top-0 z-20 h-full w-[2px]
    bg-gradient-to-b from-blue-400 via-cyan-400 to-transparent
    md:left-1/2 md:-translate-x-1/2
  "
          />

          <div className="space-y-14">
            {experiences.map((item, index) => (
              <div
                key={index}
                className={`
                  relative flex flex-col md:flex-row
                  ${index % 2 === 0 ? "md:flex-row-reverse" : ""}
                `}
              >
                {/* Empty Side */}
                <div className="hidden md:block md:w-1/2" />

                {/* Timeline Dot */}
                <div
                  className="
                    absolute left-4 top-10 z-20
                    flex h-5 w-5 items-center justify-center
                    rounded-full border-4 border-white
                    bg-gradient-to-r from-blue-500 to-cyan-500
                    shadow-[0_0_20px_rgba(59,130,246,0.5)]
                    md:left-1/2 md:-translate-x-1/2
                  "
                >
                  <div className="h-1.5 w-1.5 rounded-full bg-white" />
                </div>

                {/* Card */}
                <div className="ml-14 md:ml-0 md:w-1/2">
                  <div
                    className="
                      group relative overflow-hidden rounded-[2rem]
                      border border-white/60
                      bg-white/70 p-8 backdrop-blur-xl
                      shadow-[0_10px_40px_rgba(15,23,42,0.08)]
                      transition-all duration-500
                      hover:-translate-y-2
                      hover:shadow-[0_20px_60px_rgba(59,130,246,0.15)]
                    "
                  >
                    {/* Glow Hover */}
                    <div
                      className="
                        absolute inset-0 opacity-0 transition-opacity duration-500
                        group-hover:opacity-100
                        bg-gradient-to-br from-blue-50/80 via-transparent to-cyan-50/80
                      "
                    />

                    {/* Top Border Glow */}
                    <div
                      className="
                        absolute inset-x-0 top-0 h-[2px]
                        bg-gradient-to-r from-blue-500 via-cyan-400 to-blue-500
                      "
                    />

                    <div className="relative">
                      {/* Year */}
                      <div
                        className="
                          inline-flex items-center gap-2 rounded-full
                          border border-blue-200/60
                          bg-blue-50 px-4 py-1.5
                          text-xs font-bold uppercase tracking-[0.2em]
                          text-blue-600
                        "
                      >
                        <span className="h-2 w-2 rounded-full bg-blue-500" />
                        {item.year}
                      </div>

                      {/* Title */}
                      <h3 className="mt-6 text-3xl font-black tracking-tight text-slate-900">
                        {item.title}
                      </h3>

                      {/* Company */}
                      <p className="mt-2 text-sm font-semibold uppercase tracking-[0.15em] text-slate-500">
                        {item.company}
                      </p>

                      {/* Divider */}
                      <div className="my-6 h-px w-full bg-gradient-to-r from-slate-200 via-slate-100 to-transparent" />

                      {/* Description */}
                      <p className="leading-8 text-slate-600">
                        {item.description}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        
      </div>
    </section>
  );
}
