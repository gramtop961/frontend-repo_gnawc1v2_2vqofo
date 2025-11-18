import { ArrowRight } from 'lucide-react';

export default function CTA() {
  return (
    <section id="cta" className="bg-white py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="rounded-2xl border-4 border-black bg-lime-300 p-8 shadow-[8px_8px_0_0_#000]">
          <div className="grid items-center gap-6 md:grid-cols-3">
            <div className="md:col-span-2">
              <h3 className="text-2xl md:text-3xl font-extrabold">Make it yours in minutes</h3>
              <p className="mt-2 text-sm font-semibold text-black/80">Swap text, tweak colors, and plug in your content. The heavy lifting is already done.</p>
            </div>
            <div className="flex md:justify-end">
              <a href="#" className="inline-flex items-center gap-2 rounded-xl border-4 border-black bg-white px-6 py-3 text-black font-extrabold shadow-[6px_6px_0_0_#000] transition-transform active:translate-x-[2px] active:translate-y-[2px] active:shadow-[4px_4px_0_0_#000]">
                Get started
                <ArrowRight className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
