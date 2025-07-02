import useLenis from "./lenis";
import useScrollAnim from "./scrollAnim";

export default function App() {
  useLenis();
  useScrollAnim();

  return (
    <main className="flex flex-col items-center bg-brandBlue text-white">
      {/* hero */}
      <section className="flex min-h-screen flex-col items-center justify-center gap-6">
        <h1
          id="heroTitle"
          className="text-red-500 text-5xl font-extrabold text-center"
        >
          Hello, Sis!
        </h1>
        <p className="text-xl">Scroll to see the magic</p>
      </section>

      {/* content cards */}
      <section className="flex flex-col items-center gap-10 py-20">
        {[1, 2, 3].map((i) => (
          <div
            key={i}
            className="card w-80 rounded-xl bg-white/10 p-6 text-center backdrop-blur-md"
          >
            <h2 className="mb-2 text-2xl font-bold">Card {i}</h2>
            <p>Some bubbly info for card {i}. Keep scrolling.</p>
          </div>
        ))}
      </section>
    </main>
  );
}
