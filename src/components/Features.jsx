import { Cpu, Grid3X3, Layers, Shield, Palette, Zap } from 'lucide-react';

const items = [
  { icon: Grid3X3, title: 'Chunky Aesthetics', desc: 'Strong borders, bold shadows, unapologetic geometry.' },
  { icon: Layers, title: 'Layered Depth', desc: 'Cards stack with thick outlines and offset shadows.' },
  { icon: Palette, title: 'Vibrant Accents', desc: 'Lime pops on a crisp, black-and-white foundation.' },
  { icon: Cpu, title: 'Tech Texture', desc: 'Your hero sits on a live 3D grid of metallic cubes.' },
  { icon: Shield, title: 'Reliable Build', desc: 'Responsive, accessible, and performance‑minded.' },
  { icon: Zap, title: 'Instant Impact', desc: 'A look that grabs attention and sticks in memory.' },
];

export default function Features() {
  return (
    <section id="features" className="bg-white py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-10 md:mb-14">
          <h2 className="inline-block rounded-2xl border-4 border-black bg-yellow-200 px-4 py-2 text-2xl md:text-3xl font-extrabold shadow-[6px_6px_0_0_#000]">
            Why it works
          </h2>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {items.map(({ icon: Icon, title, desc }) => (
            <div key={title} className="rounded-2xl border-4 border-black bg-white p-6 shadow-[6px_6px_0_0_#000]">
              <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg border-2 border-black bg-lime-300">
                <Icon className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-extrabold">{title}</h3>
              <p className="mt-2 text-sm font-semibold text-neutral-700">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
