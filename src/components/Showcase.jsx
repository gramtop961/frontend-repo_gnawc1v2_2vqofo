import { Image, PlayCircle } from 'lucide-react';

export default function Showcase() {
  return (
    <section id="showcase" className="bg-neutral-100 py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-10 md:mb-14">
          <h2 className="inline-block rounded-2xl border-4 border-black bg-white px-4 py-2 text-2xl md:text-3xl font-extrabold shadow-[6px_6px_0_0_#000]">
            See the vibe
          </h2>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          <div className="rounded-2xl border-4 border-black bg-white p-4 shadow-[6px_6px_0_0_#000]">
            <div className="aspect-video w-full rounded-lg border-2 border-black bg-gradient-to-br from-neutral-200 to-neutral-50 grid place-items-center">
              <PlayCircle className="h-12 w-12" />
            </div>
            <p className="mt-3 text-sm font-semibold text-neutral-700">A hero that actually moves—your brand on a living canvas.</p>
          </div>
          <div className="rounded-2xl border-4 border-black bg-white p-4 shadow-[6px_6px_0_0_#000]">
            <div className="aspect-video w-full rounded-lg border-2 border-black bg-gradient-to-br from-neutral-200 to-neutral-50 grid place-items-center">
              <Image className="h-10 w-10" />
            </div>
            <p className="mt-3 text-sm font-semibold text-neutral-700">Cards with thick outlines and offset shadows for a bold, tactile feel.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
