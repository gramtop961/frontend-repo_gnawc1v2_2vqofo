import Spline from '@splinetool/react-spline';
import { ArrowRight, Sparkles } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="relative h-[70vh] md:h-[78vh]">
        <Spline scene="https://prod.spline.design/Gt5HUob8aGDxOUep/scene.splinecode" style={{ width: '100%', height: '100%' }} />
        {/* Dark gradient for readable foreground */}
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
      </div>

      {/* Foreground content */}
      <div className="absolute inset-0 flex items-end">
        <div className="mx-auto max-w-7xl w-full px-4 sm:px-6 lg:px-8 pb-12">
          <div className="inline-block rounded-2xl border-4 border-black bg-white px-4 py-2 shadow-[6px_6px_0_0_#000]">
            <div className="flex items-center gap-2 text-sm font-extrabold uppercase tracking-wider">
              <Sparkles className="h-4 w-4" />
              Neo‑brutalism, refined
            </div>
          </div>
          <h1 className="mt-6 max-w-3xl text-4xl md:text-6xl font-extrabold leading-[1.05] text-white drop-shadow-[0_4px_0_rgba(0,0,0,0.7)]">
            Grid of shifting metallic cubes, now your brand’s stage
          </h1>
          <p className="mt-4 max-w-2xl text-base md:text-lg font-semibold text-white/90 drop-shadow-[0_3px_0_rgba(0,0,0,0.7)]">
            A bold landing experience with big borders, chunky shadows, and just the right dose of attitude.
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-4">
            <a href="#cta" className="inline-flex items-center gap-2 rounded-xl border-4 border-black bg-lime-300 px-5 py-3 text-black font-extrabold shadow-[6px_6px_0_0_#000] transition-transform active:translate-x-[2px] active:translate-y-[2px] active:shadow-[4px_4px_0_0_#000]">
              Launch demo
              <ArrowRight className="h-5 w-5" />
            </a>
            <a href="#features" className="inline-flex items-center gap-2 rounded-xl border-4 border-black bg-white px-5 py-3 text-black font-extrabold shadow-[6px_6px_0_0_#000] transition-transform active:translate-x-[2px] active:translate-y-[2px] active:shadow-[4px_4px_0_0_#000]">
              Explore features
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
