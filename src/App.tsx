import { ReactLenis } from 'lenis/react';
import { Preloader } from './components/Preloader';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Process } from './components/Process';
import { Menu } from './components/Menu';
import { Marquee } from './components/Marquee';
import { Testimonials } from './components/Testimonials';
import { Gallery } from './components/Gallery';
import { InfoBar } from './components/InfoBar';
import { Location } from './components/Location';
import { Footer } from './components/Footer';

function App() {
  return (
    <ReactLenis root options={{ lerp: 0.08, smoothWheel: true }}>
      <Preloader />
      <div className="bg-espresso min-h-screen selection:bg-caramel selection:text-espresso relative w-full">
        <Navbar />
        <main className="flex flex-col gap-0">
          <Hero />
          <About />
          <Process />
          <Menu />
          <Marquee />
          <Testimonials />
          <Gallery />
          <Location />
        </main>
        <InfoBar />
        <Footer />
      </div>
    </ReactLenis>
  );
}

export default App;
