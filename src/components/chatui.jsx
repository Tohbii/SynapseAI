
function ChatUI() {
  return (
    <div className="bg-slate-900/80 backdrop-blur border border-slate-700 rounded-xl p-6 w-full max-w-md shadow-lg">

      {/* AI message */}
      <div className="mb-4">
        <div className="bg-slate-800 p-3 rounded-lg text-sm text-slate-300">
          Generate a tweet about staying focused
        </div>
      </div>

      {/* User message */}
      <div className="mb-4 flex justify-end">
        <div className="bg-cyan-400 text-black p-3 rounded-lg text-sm max-w-[80%]">
          Stay locked in. Focus creates results. Let AI handle the rest.
        </div>
      </div>

      {/* Another AI reply */}
      <div className="mb-4">
        <div className="bg-slate-800 p-3 rounded-lg text-sm text-slate-300">
          Want me to make it more engaging or shorter?
        </div>
      </div>

      {/* Typing indicator */}
      <div className="text-xs text-slate-500">
        AI is typing<span className="animate-pulse">...</span>
      </div>

    </div>
  );
}

export default ChatUI