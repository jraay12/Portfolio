import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import clsx from "clsx";

const navItems = [
  { label: "Home", href: "#home" },
  { label: "Stack", href: "#stack" },
  { label: "Projects", href: "#projects" },
  { label: "Experience", href: "#experience" },
  { label: "Contact", href: "#contact" },
];

export default function FloatingNavbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* Floating Navbar */}
      <header
        className={clsx(
          "fixed left-1/2 top-6 z-50 w-[92%] max-w-5xl -translate-x-1/2 transition-all duration-300",
          scrolled
            ? "bg-white/80 shadow-2xl backdrop-blur-xl  rounded-2xl"
            : "bg-white/60 backdrop-blur-md "
        )}
      >
        <div className="flex items-center justify-between rounded-2xl border border-slate-200 px-6 py-4">
          {/* Logo */}
          <a
            href="#home"
            className="text-lg font-black tracking-tight text-slate-900"
          >
            JR.
          </a>

          {/* Desktop Nav */}
          <nav className="hidden items-center gap-2 md:flex">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="rounded-xl px-4 py-2 text-sm font-medium text-slate-600 transition-all duration-200 hover:bg-slate-100 hover:text-slate-900"
              >
                {item.label}
              </a>
            ))}
          </nav>

          {/* CTA */}
          <div className="hidden md:block">
            <a
              href="#contact"
              className="rounded-xl bg-slate-900 px-5 py-2.5 text-sm font-semibold text-white transition-all duration-200 hover:scale-105"
            >
              Hire Me
            </a>
          </div>

          {/* Mobile Button */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="flex h-10 w-10 items-center justify-center rounded-xl border border-slate-200 md:hidden"
          >
            {mobileOpen ? (
              <X className="h-5 w-5 text-slate-700" />
            ) : (
              <Menu className="h-5 w-5 text-slate-700" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        <div
          className={clsx(
            "overflow-hidden transition-all duration-300 md:hidden",
            mobileOpen ? "max-h-96 pt-3" : "max-h-0"
          )}
        >
          <div className="space-y-2 rounded-2xl border border-slate-200 bg-white/90 p-4 backdrop-blur-xl">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                onClick={() => setMobileOpen(false)}
                className="block rounded-xl px-4 py-3 text-sm font-medium text-slate-700 transition hover:bg-slate-100"
              >
                {item.label}
              </a>
            ))}

            <a
              href="#contact"
              className="mt-2 block rounded-xl bg-slate-900 px-4 py-3 text-center text-sm font-semibold text-white"
            >
              Hire Me
            </a>
          </div>
        </div>
      </header>

      {/* Spacer */}
      <div className="h-24" />
    </>
  );
}