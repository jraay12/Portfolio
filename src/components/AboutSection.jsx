import image1 from "../assets/image1.jpg";
import image2 from "../assets/image2.jpg";
import image3 from "../assets/image3.jpg";

export default function AboutSection() {
  const images = [image1, image2, image3];

  return (
    <section id="about" className="relative bg-white px-6 py-32">
      <div className="mx-auto grid max-w-6xl gap-16 lg:grid-cols-2 lg:items-start">
        {/* LEFT SIDE */}
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-blue-600">
            About Me
          </p>

          <h2 className="mt-4 text-5xl font-black text-slate-900">
            Full-stack developer building scalable and efficient systems.
          </h2>

          <p className="mt-6 text-lg leading-8 text-slate-600 text-justify">
            I specialize in developing full-stack web applications—designing
            responsive interfaces, building secure APIs, and managing structured
            data. I also develop mobile applications, enabling seamless
            cross-platform solutions from web to mobile environments.
          </p>

          <p className="mt-5 text-lg leading-8 text-slate-600 text-justify">
            I am passionate about continuous improvement and problem-solving. I
            focus on building reliable systems that solve real-world problems
            and deliver meaningful user experiences.
          </p>

          <div className="mt-10 text-sm text-slate-400">
            Focused on clean architecture and real-world applications ⚡
          </div>
        </div>

        {/* RIGHT SIDE - 3 IMAGE MODERN LAYOUT */}
        <div className="grid grid-cols-2 grid-rows-2 gap-4">
          {/* Large image (top-left, spans 2 rows) */}
          <div className="col-span-1 row-span-2 overflow-hidden rounded-2xl border border-slate-200 bg-slate-100 shadow-sm">
            <img
              src={images[0]}
              alt="experience-1"
              className="
                h-full w-full object-cover
                grayscale transition duration-500
                hover:grayscale-0 hover:scale-105
              "
            />
          </div>

          {/* Top-right */}
          <div className="overflow-hidden rounded-2xl border border-slate-200 bg-slate-100 shadow-sm">
            <img
              src={images[1]}
              alt="experience-2"
              className="
                h-full w-full object-cover
                grayscale transition duration-500
                hover:grayscale-0 hover:scale-105
              "
            />
          </div>

          {/* Bottom-right */}
          <div className="overflow-hidden rounded-2xl border border-slate-200 bg-slate-100 shadow-sm">
            <img
              src={images[2]}
              alt="experience-3"
              className="
                h-full w-full object-cover
                grayscale transition duration-500
                hover:grayscale-0 hover:scale-105
              "
            />
          </div>
        </div>
      </div>

      
    </section>
  );
}
