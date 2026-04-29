import { useState } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed top-0 w-full z-50 bg-slate-950/80 backdrop-blur border-b border-slate-800">
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">

        {/* LOGO */}
        <h1 className="text-white font-bold text-lg cursor-pointer">
          Synapse<span className="text-cyan-400">AI</span>
        </h1>

        {/* DESKTOP LINKS */}
        <nav className="hidden md:flex gap-8 text-sm text-slate-300">
          <a href="#features" className="hover:text-cyan-400 transition">Features</a>
          <a href="#demo" className="hover:text-cyan-400 transition">Demo</a>
          <a href="#pricing" className="hover:text-cyan-400 transition">Pricing</a>
        </nav>

        {/* CTA */}
        <div className="hidden md:block">
          <button className="bg-cyan-400 text-black px-4 py-2 rounded-lg text-sm font-medium hover:opacity-90 transition">
            Get Started
          </button>
        </div>

        {/* MOBILE MENU BUTTON */}
        <button
          className="md:hidden text-white"
          onClick={() => setOpen(!open)}
        >
          ☰
        </button>

      </div>

      {/* MOBILE MENU */}
      {open && (
        <div className="md:hidden px-6 pb-4 flex flex-col gap-4 text-slate-300">
          <a href="#features" onClick={() => setOpen(false)}>Features</a>
          <a href="#demo" onClick={() => setOpen(false)}>Demo</a>
          <a href="#pricing" onClick={() => setOpen(false)}>Pricing</a>

          <button className="bg-cyan-400 text-black px-4 py-2 rounded-lg text-sm font-medium">
            Get Started
          </button>
        </div>
      )}
    </header>
  );
}