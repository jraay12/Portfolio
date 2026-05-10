import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

export default function SkillsSection() {
  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
      offset: 120,
      easing: "ease-out",
    });
  }, []);

  const skills = [
    {
      title: "Languages",
      items: [
        {
          name: "JavaScript",
          logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
        },
        {
          name: "TypeScript",
          logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg",
        },
        {
          name: "PHP",
          logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg",
        },
      ],
    },
    {
      title: "Frontend",
      items: [
        {
          name: "React.js",
          logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
        },
        {
          name: "Tailwind CSS",
          logo: "https://www.vectorlogo.zone/logos/tailwindcss/tailwindcss-icon.svg",
        },
        {
          name: "React Native",
          logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
        },
        {
          name: "Flutter",
          logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flutter/flutter-original.svg",
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
          name: "Express.js",
          logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg",
        },
        {
          name: "CodeIgniter",
          logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/codeigniter/codeigniter-plain.svg",
        },
        {
          name: "Prisma ORM",
          logo: "https://avatars.githubusercontent.com/u/17219288?s=200&v=4",
        },
        {
          name: "Socket.IO",
          logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/socketio/socketio-original.svg",
        },
        {
          name: "Redis",
          logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redis/redis-original.svg",
        },
      ],
    },
    {
      title: "Databases",
      items: [
        {
          name: "MySQL",
          logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg",
        },
        {
          name: "MongoDB",
          logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg",
        },
        {
          name: "Firestore",
          logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg",
        },
      ],
    },
    {
      title: "Cloud & DevOps",
      items: [
        {
          name: "AWS EC2",
          logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original-wordmark.svg",
        },
        {
          name: "AWS S3",
          logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original-wordmark.svg",
        },
        {
          name: "Docker",
          logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg",
        },
        {
          name: "GitHub Actions",
          logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg",
        },
        {
          name: "Hostinger",
          logo: "https://cdn.worldvectorlogo.com/logos/hostinger.svg",
        },
      ],
    },
    {
      title: "Developer Tools",
      items: [
        {
          name: "Git",
          logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg",
        },
        {
          name: "GitHub",
          logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg",
        },
        {
          name: "Postman",
          logo: "https://www.vectorlogo.zone/logos/getpostman/getpostman-icon.svg",
        },
        {
          name: "Swagger",
          logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/swagger/swagger-original.svg",
        },
        {
          name: "Jest",
          logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jest/jest-plain.svg",
        },
      ],
    },
  ];

  return (
    <section
      id="stack"
      className="relative overflow-hidden bg-slate-50 px-6 py-32"
    >
      {/* Background Blur */}
      <div className="absolute left-0 top-0 h-72 w-72 rounded-full bg-blue-100 blur-3xl opacity-40" />
      <div className="absolute bottom-0 right-0 h-72 w-72 rounded-full bg-cyan-100 blur-3xl opacity-40" />

      <div className="relative mx-auto max-w-7xl">
        {/* Header */}
        <div data-aos="fade-up" className="mb-20 text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.4em] text-blue-600">
            Technical Expertise
          </p>

          <h2 className="mt-4 text-5xl font-black tracking-tight text-slate-900 md:text-6xl">
            Skills & Technologies
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-slate-600">
            Technologies and tools I use to build scalable web applications,
            mobile apps, APIs, and modern cloud-based systems.
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {skills.map((skill, i) => (
            <div
              key={skill.title}
              data-aos="fade-up"
              data-aos-delay={i * 100}
              className="
                group relative overflow-hidden rounded-3xl
                border border-slate-200/70 bg-white/80
                p-7 backdrop-blur-sm
                transition-all duration-300
                hover:-translate-y-2
                hover:border-blue-200
                hover:shadow-2xl hover:shadow-blue-100/40
              "
            >
              <div className="relative">
                {/* Title */}
                <div className="flex items-center justify-between">
                  <h3 className="text-xl font-bold text-slate-900">
                    {skill.title}
                  </h3>
                  <div className="h-2 w-2 rounded-full bg-blue-500" />
                </div>

                <div className="my-5 h-px w-full bg-gradient-to-r from-slate-200 via-slate-100 to-transparent" />

                {/* Items */}
                <div className="flex flex-wrap gap-3">
                  {skill.items.map((item) => (
                    <div
                      key={item.name}
                      className="
                        flex items-center gap-2 rounded-2xl
                        border border-slate-200 bg-slate-50
                        px-4 py-2.5 text-sm font-medium text-slate-700
                        transition-all duration-200
                        hover:scale-105 hover:bg-white hover:shadow-md
                      "
                    >
                      <img
                        src={item.logo}
                        alt={item.name}
                        className="h-5 w-5 object-contain"
                      />
                      <span>{item.name}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Note */}
        <div data-aos="fade-up" data-aos-delay="200" className="mt-24 text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-6 py-3 text-sm text-slate-600 shadow-sm">
            ⚡ Always learning and improving with modern technologies
          </div>
        </div>
      </div>
    </section>
  );
}