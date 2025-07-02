import useLenis from "./lenis"; // smooth-scroll hook

export default function App() {
  useLenis(); // activate Lenis as soon as the app mounts

  return (
    <main className="flex flex-col items-center justify-center min-h-screen gap-10 bg-brandBlue">
      <h1 className="text-red-500 text-5xl font-extrabold text-center">
        Hello, Sis!
      </h1>

      {/* spacer so you have room to scroll and test the smooth feel */}
      <div className="h-[150vh]" />
    </main>
  );
}
