
import ChatUI from "./ChatUI"

const Hero = () => {
  return (
  <section className="bg-linear-to-b from-slate-950 via-slate-900 to-slate-950 text-white py-24 px-6 md:px-12 md:py-32">
  
  
  <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">

    {/* LEFT TEXT */}
    <div>
      <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">
        Your AI. Your Workflow. <span className="text-cyan-400">One Conversation.</span>
      </h1>

      <p className="text-slate-400 mb-6 max-w-md">
        Write, code, and think faster with an AI that understands context and adapts to your workflow.
      </p>

      <div className="flex gap-4">
        <button className="bg-cyan-400 text-black px-6 py-3 rounded-lg font-medium hover:opacity-90 transition">
          Start Chatting
        </button>
        <button className="border border-slate-700 px-6 py-3 rounded-lg hover:bg-slate-800 transition">
          Try Demo
        </button>
      </div>
    </div>

    {/* RIGHT CHAT UI */}
    <div className="flex justify-center">
      <ChatUI />
    </div>

  </div>
</section>
  )
}

export default Hero
