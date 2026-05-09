import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import FloatingNavbar from "../components/NavBar";
import SkillsSection from "../components/SkillSections";
import FeaturedProjects from "../components/FeaturedProjects";
import ExperienceSection from "../components/ExperienceSection";
export default function MainPage() {
  const container = useRef(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      gsap.to(".bg", {
        yPercent: 10,
        scale: 1.1,
        ease: "none",
        scrollTrigger: {
          trigger: container.current,
          start: "top top",
          end: "bottom top",
          scrub: true,
        },
      });

      gsap.to(".code-layer", {
        yPercent: 100,
        ease: "none",
        scrollTrigger: {
          trigger: container.current,
          start: "top top",
          end: "bottom top",
          scrub: true,
        },
      });

      gsap.to(".floating-card", {
        yPercent: 200,
        rotation: 5,
        ease: "none",
        scrollTrigger: {
          trigger: container.current,
          start: "top top",
          end: "bottom top",
          scrub: true,
        },
      });

      gsap.to(".hero-text", {
        yPercent: 600,
        opacity: 0,
        ease: "none",
        scrollTrigger: {
          trigger: container.current,
          start: "top top",
          end: "bottom top",
          scrub: true,
        },
      });
    }, container);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={container} className="bg-white">
      <FloatingNavbar />
      {/* Hero */}
      <section className="relative h-[200vh] overflow-hidden bg-gradient-to-b from-white via-slate-50 to-slate-100">
        {/* Background Grid */}
        <div className="bg absolute inset-0 opacity-40">
          <div
            className="h-full w-full"
            style={{
              backgroundImage: `
                linear-gradient(to right, #e2e8f0 1px, transparent 1px),
                linear-gradient(to bottom, #e2e8f0 1px, transparent 1px)
              `,
              backgroundSize: "60px 60px",
            }}
          />
        </div>

        {/* Floating Code Window */}
        <div className="code-layer absolute left-1/2 top-32 w-[90%] max-w-5xl -translate-x-1/2 rounded-3xl border border-slate-200 bg-white shadow-2xl">
          {/* Mac Buttons */}
          <div className="flex items-center gap-2 border-b border-slate-100 p-4">
            <div className="h-3 w-3 rounded-full bg-red-400" />
            <div className="h-3 w-3 rounded-full bg-yellow-400" />
            <div className="h-3 w-3 rounded-full bg-green-400" />
          </div>

          {/* Fake Code */}
          <div className="space-y-4 p-8 font-mono text-sm md:text-base">
            <div className="text-purple-600">
              const <span className="text-blue-600">developer</span> = {"{"}
            </div>

            <div className="pl-6 text-slate-700">
              name: <span className="text-green-600">"John Ray"</span>,
            </div>

            <div className="pl-6 text-slate-700">
              role:{" "}
              <span className="text-green-600">"Full Stack Developer"</span>,
            </div>

            <div className="pl-6 text-slate-700">
              stack: [
              <span className="text-green-600">
                "React", "Node.js", "TypeScript"
              </span>
              ]
            </div>

            <div className="text-purple-600">{"}"}</div>
          </div>
        </div>

        {/* Floating Cards */}
        <div className="floating-card absolute bottom-32 left-20 hidden rounded-3xl border border-slate-200 bg-white p-6 shadow-xl lg:block">
          <p className="font-semibold text-slate-900">Frontend</p>

          <p className="text-slate-500">React • Tailwind</p>
        </div>

        <div className="floating-card absolute right-20 top-[45%] hidden rounded-3xl border border-slate-200 bg-white p-6 shadow-xl lg:block">
          <p className="font-semibold text-slate-900">Backend</p>

          <p className="text-slate-500">Node.js • Express • Prisma</p>
        </div>

        {/* Mobile Development */}
        <div className="floating-card absolute left-[12%] top-[55%] hidden rounded-3xl border border-slate-200 bg-white p-6 shadow-xl xl:block">
          <p className="font-semibold text-slate-900">Mobile Development</p>

          <p className="text-slate-500">Flutter • React Native</p>
        </div>

        {/* DevOps */}
        <div className="floating-card absolute bottom-24 right-[12%] hidden rounded-3xl border border-slate-200 bg-white p-6 shadow-xl xl:block">
          <p className="font-semibold text-slate-900">DevOps</p>

          <p className="text-slate-500">Docker • AWS • Nginx</p>
        </div>

        {/* Hero Text */}
        <div className="absolute inset-0 flex flex-col items-center justify-center">
          <div className="hero-text space-y-6 text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.4em] text-blue-600">
              Portfolio
            </p>

            <h1 className="text-6xl font-black tracking-tight text-slate-900 md:text-8xl">
              FULL STACK
              <br />
              DEVELOPER
            </h1>

            <p className="mx-auto max-w-xl text-lg text-slate-600">
              Building scalable web applications with modern technologies and
              smooth user experiences.
            </p>
          </div>
        </div>
      </section>
      <SkillsSection />
      <FeaturedProjects />
      <ExperienceSection />
    </div>
  );
}
