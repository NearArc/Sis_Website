import clouds from "../assets/clouds.webm"; // adjust the path

export default function Nav() {
  const jump = (id) =>
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });

  const links = [
    { id: "hero", label: "HOME", big: true },
    { id: "books", label: "BOOKS", big: false },
    { id: "about", label: "ABOUT", big: false },
  ];

  return (
    <header
      id="nav"
      className="fixed top-0 left-0 right-0 z-50 h-300 pointer-events-none"
    >
      {/* cloud layer wrapper */}
      <div className="absolute inset-0">
        <video
          src={clouds}
          autoPlay
          muted
          playsInline
          className="absolute top-[-1%] 
          left-[22%] 
          w-[100vw] 
          max-w-[600px] 
          object-cover 
          animate-fade delay-0"
        />
        <video
          src={clouds}
          autoPlay
          muted
          playsInline
          className="absolute top-[-1%]
           left-[10%] 
           w-[100vw] 
           max-w-[600px] 
           object-cover 
           animate-fade delay-500"
        />
        <video
          src={clouds}
          autoPlay
          muted
          playsInline
          className="absolute top-[-1%] 
          left-[-2%] 
          w-[100vw] 
          max-w-[600px] 
          object-cover 
          animate-fade delay-900"
        />
      </div>

      {/* nav text */}
      <nav
        className={`
          relative z-10 
          mx-auto flex 
          max-w-5xl 
          items-center 
          justify-center gap-32
          p-10 
          text-2xl 
          md:text-4xl 
          lg:text-6xl 
          xl:text-8xl
          translate-y-[10%] 
          -translate-x-[52%]
          font-skyCur text-black
          pointer-events-auto
        `}
      >
        {links.map((l) => (
          <button
            key={l.id}
            onClick={() => jump(l.id)}
            className={`
      hover:text-brandBlue transition-colors drop-shadow-lg
      ${l.big ? "text-5xl md:text-6xl lg:text-7xl xl:text-9xl" : ""}
    `}
          >
            {l.label}
          </button>
        ))}
      </nav>
    </header>
  );
}
