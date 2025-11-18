import { Menu, Zap } from "lucide-react";

export default function Navbar() {
  return (
    <header className="w-full sticky top-0 z-30">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mt-6 mb-4 rounded-2xl border-4 border-black bg-white text-black shadow-[6px_6px_0_0_#000]">
          <div className="flex items-center justify-between px-4 py-3 sm:px-6">
            <div className="flex items-center gap-3">
              <div className="inline-flex h-10 w-10 items-center justify-center rounded-md border-2 border-black bg-lime-300">
                <Zap className="h-5 w-5" />
              </div>
              <span className="text-xl font-extrabold tracking-tight">Neocube</span>
            </div>
            <nav className="hidden md:flex items-center gap-6 font-semibold">
              <a href="#features" className="hover:underline underline-offset-4">Features</a>
              <a href="#showcase" className="hover:underline underline-offset-4">Showcase</a>
              <a href="#cta" className="hover:underline underline-offset-4">Get started</a>
            </nav>
            <button className="md:hidden inline-flex items-center justify-center rounded-md border-2 border-black bg-white px-3 py-2 shadow-[4px_4px_0_0_#000] active:translate-x-[2px] active:translate-y-[2px] active:shadow-[2px_2px_0_0_#000]">
              <Menu className="h-5 w-5" />
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}
