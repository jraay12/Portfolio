export default function ContactSection() {
  const email = "johnraycaete@gmail.com";

  const copyEmail = async () => {
    await navigator.clipboard.writeText(email);
  };

  return (
    <section id="contact" className="bg-slate-50 px-6 py-32">
      <div className="mx-auto max-w-4xl text-center">

        {/* Header */}
        <p className="text-sm font-semibold uppercase tracking-[0.3em] text-blue-600">
          Contact
        </p>

        <h2 className="mt-4 text-5xl font-black text-slate-900">
          Let’s work together
        </h2>

        <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-slate-600">
          I’m currently open to opportunities as a Software or Web Developer.
          Feel free to reach out for collaboration or job opportunities.
        </p>

        {/* Email */}
        <div className="mt-10 flex flex-col items-center gap-4">

          <button
            onClick={copyEmail}
            className="
              rounded-2xl bg-slate-900 px-8 py-4
              text-sm font-medium text-white
              transition hover:bg-slate-800
            "
          >
            Copy Email
          </button>

          <a
            href={`mailto:${email}`}
            className="text-sm text-slate-500 hover:text-slate-900"
          >
            {email}
          </a>
        </div>

        {/* Socials with ICON IMAGES (no dependencies) */}
        <div className="mt-12 flex justify-center gap-4">

          {/* GitHub */}
          <a
            href="https://github.com/jraay12"
            target="_blank"
            className="
              flex items-center gap-2 rounded-2xl border border-slate-200
              bg-white px-5 py-3 text-sm text-slate-700
              shadow-sm transition hover:-translate-y-1 hover:shadow-md
            "
          >
            <img
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg"
              className="h-5 w-5"
              alt="GitHub"
            />
            GitHub
          </a>

          {/* LinkedIn */}
          <a
            href="https://www.linkedin.com/in/jraay12/"
            target="_blank"
            className="
              flex items-center gap-2 rounded-2xl border border-slate-200
              bg-white px-5 py-3 text-sm text-slate-700
              shadow-sm transition hover:-translate-y-1 hover:shadow-md
            "
          >
            <img
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linkedin/linkedin-original.svg"
              className="h-5 w-5"
              alt="LinkedIn"
            />
            LinkedIn
          </a>

        </div>
      </div>
    </section>
  );
}