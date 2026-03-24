import { Sparkles, Clock } from "lucide-react";

const App = () => {
  return (
    <div className="min-h-screen bg-slate-950 flex flex-col items-center justify-center relative overflow-hidden text-slate-200">
      {/* Subtle radial gradient background */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-slate-900 via-slate-950 to-slate-950 pointer-events-none" />
      
      {/* Decorative background blur blobs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-indigo-900/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-slate-800/20 rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10 flex flex-col items-center text-center px-6 max-w-3xl mx-auto">
        {/* Subtle Icon */}
        <div className="mb-10 p-4 rounded-2xl bg-slate-900/50 border border-slate-800/80 shadow-[0_0_40px_rgba(255,255,255,0.02)] backdrop-blur-md">
          <Sparkles className="w-8 h-8 text-slate-300" strokeWidth={1.5} />
        </div>
        
        {/* Main Brand Title */}
        <h1 className="text-5xl md:text-7xl font-light tracking-tighter text-white mb-6">
          eighty<span className="font-medium text-slate-400 drop-shadow-sm">five</span>.no
        </h1>
        
        {/* Coming Soon Text */}
        <p className="text-lg md:text-xl text-slate-400 font-light mb-14 max-w-xl leading-relaxed tracking-wide">
          Our new website is coming soon. Stay tuned.
        </p>
        
        {/* Minimal status indicator */}
        <div className="flex items-center gap-3 text-sm text-slate-400 bg-slate-900/40 px-6 py-3 rounded-full border border-slate-800/50 backdrop-blur-sm shadow-xl">
          <Clock className="w-4 h-4 text-slate-500" strokeWidth={2} />
          <span className="font-medium tracking-wide uppercase text-xs">More to come</span>
        </div>
      </div>
    </div>
  );
};

export default App;