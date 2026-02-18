import { useState, useEffect } from 'react'

const App = () => {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => clearInterval(timer);
  });

  const formatTime = (date) =>
    date.toLocaleTimeString("en-US", {
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",
    });

  return (
    <div className='relative min-h-screen flex items-center justify-center bg-linear-to-br from-black via-zinc-950 to-black overflow-hidden'>
      {/*Ambient Gradient Blobs*/}
      <div className='absolute -top-40 -left-40 w-125 h-125 bg-purple-600/30 rounded-full blur-[160px]'></div>

      <div className='absolute -bottom-40 -right-40 w-125 h-125 bg-cyan-500/30 rounded-full blur-[160px]'></div>

      {/* Clock Card*/}
      <div className='relative z-10 px-14 py-10 rounded-4xl bg-zinc-900/60 backdrop-blur-xl border border-white/10 shadow-[0_0_80px_rgba(168,85,247,0.35)]'>
        {/* Glow layer*/}
        <div className='absolute inset-0 rounded-4xl bg-linear-to-r from-purple-500/20 via-pink-500/20 to-cyan-500/20 blur-2xl -z-10'></div>
          <h1 className='text-6xl md:text-7xl font-mono tracking-[0.3em] text-transparent bg-clip-text bg-linear-to-r from-purple-400 via-pink-400 to-cyan-400 drop-shadow-[0_0_25px_rgba(236,72,153,0.6)]'>
            {formatTime(time)}
          </h1>
          <p className='mt-6 text-center text-xs uppercase tracking-widest text-zinc-400'>
            Devasish Digital Clock
          </p>
      </div>
    </div>
  );
};

export default App