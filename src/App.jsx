// src/App.jsx
import useLenis from "./lenis";

import Nav from "./components/Nav"; // sticky top bar
import Hero from "./sections/Hero"; // backdrop, hills, Emilee

export default function App() {
  useLenis(); // smooth scrolling everywhere

  return (
    <main className="text-white">
      {/* fixed translucent menu */}
      <Nav />

      {/* full-screen hero (backdrop + hills + Emilee) */}
      <Hero />

      {/* ---  placeholders for upcoming sections  --- */}

      <section
        id="books"
        className="h-screen flex items-center justify-center bg-brandBlue"
      >
        <p className="text-3xl font-bold">Book scenes coming soon…</p>
      </section>

      <section
        id="about"
        className="h-screen flex items-center justify-center bg-dirt"
      >
        <p className="text-3xl font-bold">
          About the author (down in the “dirt”)
        </p>
      </section>
    </main>
  );
}
