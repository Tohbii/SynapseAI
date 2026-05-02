import { useState, useEffect } from "react";

function DemoUI() {

   const text = "Staying productive in today’s fast-paced world can be challenging...";
   const [displayed, setDisplayed] = useState("");

        useEffect(() => {
            let i = 0;
            const interval = setInterval(() => {
                setDisplayed(text.slice(0, i));
                i++;
                if (i > text.length) clearInterval(interval);
            }, 20);

            return () => clearInterval(interval);
                    }, []);

  return (


    <section className="bg-slate-950 flex mx-auto py-12 justify-center">
        
        <div className="mx-auto ">
            <div className="text-center">

                <p className="text-cyan-400 text-sm mb-2">Testimonials</p>

            </div>
             
             <div className="bg-slate-950 border border-slate-800 rounded-xl p-6 shadow-lg backdrop-blur max-w-md w-full">

            {/* INPUT */}
            <div className="mb-4">
                <p className="text-xs text-slate-500 mb-2">Your Prompt</p>
                <div className="bg-slate-800 p-3 rounded-lg text-sm text-slate-300">
                Write a LinkedIn post about staying productive with AI tools.
                </div>
            </div>

            {/* OUTPUT */}
            <div>
                <p className="text-xs text-cyan-400 mb-2">AI Output</p>
                <div className="bg-slate-800 p-3 rounded-lg text-sm text-slate-300 leading-relaxed">
                {displayed}
                </div>
            </div>

            </div>


        </div>

        
        
    </section>
    
  );
}
export default DemoUI 