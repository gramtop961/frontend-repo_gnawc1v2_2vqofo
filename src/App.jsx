import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/Features';
import Showcase from './components/Showcase';
import CTA from './components/CTA';

function App() {
  return (
    <div className="bg-neutral-900 text-black">
      <Navbar />
      <Hero />
      <Features />
      <Showcase />
      <CTA />
      <footer className="bg-neutral-900 py-10">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="rounded-2xl border-4 border-black bg-white p-6 shadow-[6px_6px_0_0_#000]">
            <p className="text-sm font-semibold">© {new Date().getFullYear()} Neocube. Built with bold lines and big energy.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App