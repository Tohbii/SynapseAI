import  { useState, useRef, useEffect } from "react";
import gsap from "gsap";
import { Draggable } from "gsap/Draggable";

gsap.registerPlugin(Draggable);

const testimonials = [
  {
    name: "David Mensah",
    role: "Product Designer",
    text: "FlowPilot completely changed how I manage my day.",
    image: "https://i.pravatar.cc/100?img=1",
  },
  {
    name: "Sarah Johnson",
    role: "Founder",
    text: "The AI scheduling is insanely accurate.",
    image: "https://i.pravatar.cc/100?img=2",
  },
  {
    name: "Michael Lee",
    role: "Creator",
    text: "Everything is structured and clear now.",
    image: "https://i.pravatar.cc/100?img=3",
  }
];

export default function Testimonials() {
  const [index, setIndex] = useState(0);
  const cardRef = useRef(null);

  const prevIndex =
    (index - 1 + testimonials.length) % testimonials.length;

  const nextIndex =
    (index + 1) % testimonials.length;

  // 🔥 NEXT
  const next = () => {
    gsap.to(cardRef.current, {
      opacity: 0,
      x: -40,
      duration: 0.25,
      ease: "power2.out",
      onComplete: () => {
        setIndex((prev) => (prev + 1) % testimonials.length);

        gsap.fromTo(
          cardRef.current,
          { opacity: 0, x: 40 },
          { opacity: 1, x: 0, duration: 0.35, ease: "power2.out" }
        );
      },
    });
  };

  // 🔥 PREV
  const prev = () => {
    gsap.to(cardRef.current, {
      opacity: 0,
      x: 40,
      duration: 0.25,
      ease: "power2.out",
      onComplete: () => {
        setIndex((prev) =>
          (prev - 1 + testimonials.length) % testimonials.length
        );

        gsap.fromTo(
          cardRef.current,
          { opacity: 0, x: -40 },
          { opacity: 1, x: 0, duration: 0.35, ease: "power2.out" }
        );
      },
    });
  };

  // 🔥 SWIPE
  useEffect(() => {
    if (!cardRef.current) return;

    Draggable.create(cardRef.current, {
      type: "x",

      onDragEnd() {
        if (this.x < -50) next();
        else if (this.x > 50) prev();

        gsap.to(cardRef.current, {
          x: 0,
          duration: 0.3,
        });
      },
    });
  }, []);

  return (
    <section className="bg-slate-950 px-6 py-20">

      {/* HEADER */}
      <div className="text-center max-w-2xl mx-auto mb-12">
        <p className="text-cyan-400 text-sm mb-2">Testimonials</p>
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
          What people are saying
        </h2>
        <p className="text-slate-400 text-sm">
          Professionals using Synapse AI are seeing real results.
        </p>
      </div>

      {/* CAROUSEL */}
      <div className="flex items-center justify-center gap-6">

        {/* LEFT PREVIEW */}
        <div className="hidden md:block opacity-30 scale-90 blur-[2px] w-64">
          <Card data={testimonials[prevIndex]} />
        </div>

        {/* ACTIVE */}
        <div
          ref={cardRef}
          className="w-full max-w-md md:max-w-xl lg:max-w-2xl cursor-grab active:cursor-grabbing"
        >
          <Card data={testimonials[index]} active />
        </div>

        {/* RIGHT PREVIEW */}
        <div className="hidden md:block opacity-30 scale-90 blur-[2px] w-64">
          <Card data={testimonials[nextIndex]} />
        </div>

      </div>

      {/* NAV */}
      <div className="flex justify-center mt-6 gap-3">
        <button
          onClick={prev}
          className="w-10 h-10 rounded-full bg-slate-800 hover:bg-slate-700 transition text-white"
        >
          ←
        </button>

        <button
          onClick={next}
          className="w-10 h-10 rounded-full bg-slate-800 hover:bg-slate-700 transition text-white"
        >
          →
        </button>
      </div>

    </section>
  );
}

/* CARD */
function Card({ data, active }) {
  return (
    <div
      className={`rounded-xl border border-slate-800 bg-slate-900/80 backdrop-blur p-6 transition-all duration-300
      ${active ? "shadow-xl shadow-cyan-500/10 scale-100" : ""}
      `}
    >
      <p className="text-slate-300 mb-6 text-sm leading-relaxed">
        “{data.text}”
      </p>

      <div className="flex items-center gap-3">
        <img
          src={data.image}
          alt="user"
          className="w-10 h-10 rounded-full"
        />
        <div>
          <p className="text-white text-sm font-medium">
            {data.name}
          </p>
          <p className="text-slate-500 text-xs">
            {data.role}
          </p>
        </div>
      </div>
    </div>
  );
}