export default function SkillsSection() {
  const skills = [
    {
      title: "Frontend",
      items: [
        {
          name: "React",
          logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
        },
        {
          name: "TypeScript",
          logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg",
        },
        {
          name: "Tailwind",
          logo: "https://www.vectorlogo.zone/logos/tailwindcss/tailwindcss-icon.svg",
        },
      ],
    },
    {
      title: "Backend",
      items: [
        {
          name: "Node.js",
          logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
        },
        {
          name: "Express",
          logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg",
        },
        {
          name: "Prisma",
          logo: "https://avatars.githubusercontent.com/u/17219288?s=200&v=4",
        },
      ],
    },
    {
      title: "Mobile Development",
      items: [
        {
          name: "React Native",
          logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
        },
        {
          name: "Flutter",
          logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flutter/flutter-original.svg",
        },
        {
          name: "Firebase",
          logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg",
        },
      ],
    },
    {
      title: "DevOps",
      items: [
        {
          name: "Docker",
          logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg",
        },
        {
          name: "AWS",
          logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original.svg",
        },
        {
          name: "Nginx",
          logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nginx/nginx-original.svg",
        },
      ],
    },
  ];

  return (
    <section id="stack" className="min-h-screen bg-slate-50 px-6 py-32">
      <div className="mx-auto max-w-6xl">

        {/* Header */}
        <div className="mb-20 text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.4em] text-blue-600">
            Technical Expertise
          </p>

          <h2 className="mt-4 text-5xl font-black text-slate-900">
            Skills & Technologies
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-slate-600">
            A breakdown of technologies I use to build scalable, modern, and
            performant applications.
          </p>
        </div>

        {/* Grid */}
        <div className="grid gap-6 md:grid-cols-2">

          {skills.map((skill) => (
            <div
              key={skill.title}
              className="
                group rounded-2xl border border-slate-200 bg-white p-7
                shadow-sm transition-all duration-200
                hover:-translate-y-1 hover:shadow-md
              "
            >
              {/* Title */}
              <h3 className="text-xl font-semibold text-slate-900">
                {skill.title}
              </h3>

              {/* Divider */}
              <div className="my-4 h-px w-full bg-slate-100" />

              {/* Tools */}
              <div className="flex flex-wrap gap-3">
                {skill.items.map((item) => (
                  <div
                    key={item.name}
                    className="
                      flex items-center gap-2 rounded-xl border border-slate-200
                      bg-slate-50 px-3 py-2 text-sm text-slate-700
                      transition-all duration-200
                      hover:bg-white hover:shadow-sm
                    "
                  >
                    <img
                      src={item.logo}
                      alt={item.name}
                      className="h-5 w-5"
                    />
                    <span>{item.name}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}

        </div>

        {/* Bottom Note */}
        <div className="mt-20 text-center text-sm text-slate-500">
          Always learning and improving ⚡
        </div>
      </div>
    </section>
  );
}