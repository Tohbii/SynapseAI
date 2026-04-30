import { Brain, Sparkles, Lightbulb, Layers } from "lucide-react";



const Trusted = () => {
  return (
    <section className="bg-slate-950 px-6 py-16">
  <div className="max-w-6xl mx-auto">

    {/* TRUST */}
    <p className="text-center text-slate-500 text-sm mb-8">
      Trusted by creators, developers, and teams worldwide
    </p>

   <div className="flex justify-center items-center mb-12">

        <div className="flex -space-x-4 opacity-70">

            <img src="\public\images\framer.svg" className="w-8 h-8 bg-slate-900 p-1 rounded-full border border-slate-800" />
            <img src="\public\images\stripe.svg" className="w-8 h-8 bg-slate-900 p-1 rounded-full border border-slate-800" />
            <img src="\public\images\vercel.svg" className="w-8 h-8 bg-slate-900 p-1 rounded-full border border-slate-800" />
            <img src="\public\images\framer.svg" className="w-8 h-8 bg-slate-900 p-1 rounded-full border border-slate-800" />

        </div>

    </div>

    {/* FEATURES */}
    <div className="grid md:grid-cols-2 gap-8 hover:shadow-cyan-500/10 hover:shadow-lg">
      {/* cards go here */}
        <div className="bg-slate-900/80 border border-slate-800 rounded-xl p-6 hover:border-cyan-400/40 transition">


            <div className="w-10 h-10 flex items-center justify-center rounded-lg bg-cyan-500/10 text-cyan-400 mb-4">
                <Brain size={18} />
            </div>

           <h3 className="text-white font-semibold mb-2">
                Context Awareness
            </h3>

            <p className="text-slate-400 text-sm">
                Understands your workflow and adapts responses based on your context.
            </p>

        </div>

         <div className="bg-slate-900/80 border border-slate-800 rounded-xl p-6 hover:border-cyan-400/40 transition">

            <div className="w-10 h-10 flex items-center justify-center rounded-lg bg-cyan-500/10 text-cyan-400 mb-4">
                <Sparkles size={18} />
            </div>
            
            <h3 className="text-white font-semibold mb-2">
                Real-Time Generation
            </h3>

            <p className="text-slate-400 text-sm">
                Generate content instantly with intelligent, context-aware AI responses.
            </p>

        </div>


         <div className="bg-slate-900/80 border border-slate-800 rounded-xl p-6 hover:border-cyan-400/40 transition">

            <div className="w-10 h-10 flex items-center justify-center rounded-lg bg-cyan-500/10 text-cyan-400 mb-4">
                <Lightbulb size={18} />
            </div>

            <h3 className="text-white font-semibold mb-2">
                Smart Suggestions
            </h3>

            <p className="text-slate-400 text-sm">
                Improve writing, structure, and clarity with AI-powered suggestions.
            </p>

        </div>


         <div className="bg-slate-900/80 border border-slate-800 rounded-xl p-6 hover:border-cyan-400/40 transition">

            <div className="w-10 h-10 flex items-center justify-center rounded-lg bg-cyan-500/10 text-cyan-400 mb-4">
                <Layers size={18} />
            </div>

            <h3 className="text-white font-semibold mb-2">
                Multi-Use AI
            </h3>

            <p className="text-slate-400 text-sm">
                From coding to writing to planning — one AI for everything.
            </p>

        </div>


    </div>

  </div>
</section>
  )
}

export default Trusted
