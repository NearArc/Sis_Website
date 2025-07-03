import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import backdrop from "../assets/backdrop.png";
import midHill from "../assets/hill.png";
import foreHill from "../assets/smallhill.png";
import emilee from "../assets/emilee.png";

gsap.registerPlugin(ScrollTrigger);

export default function Hero() {
  const root = useRef(null);

  // tiny parallax so layers drift at different speeds
  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.to("#midHill", {
        y: 30,
        scrollTrigger: { trigger: root.current, start: "top top", scrub: true },
      });
      gsap.to("#foreHill", {
        y: 60,
        scrollTrigger: { trigger: root.current, start: "top top", scrub: true },
      });
    }, root);
    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={root}
      id="hero"
      className="scene bg-gradient-to-b from-skyStart to-skyEnd text-white"
    >
      {/* distant backdrop */}
      <img
        src={backdrop}
        alt=""
        className="layer object-cover"
        aria-hidden="true"
      />

      {/* mid-ground hill */}
      <img
        id="midHill"
        src={midHill}
        alt=""
        className="layer bottom-0 w-full object-cover"
        aria-hidden="true"
      />

      {/* fore-ground hill */}
      <img
        id="foreHill"
        src={foreHill}
        alt=""
        className="layer bottom-0 w-full object-cover"
        aria-hidden="true"
      />

      {/* Emilee front and center */}
      <img
        src={emilee}
        alt="Emilee – main character"
        className="layer bottom-[10%] left-1/2 w-60 -translate-x-1/2 drop-shadow-lg"
      />

      {/* Headline */}
      <h1 className="layer top-[20%] left-1/2 -translate-x-1/2 text-5xl font-extrabold drop-shadow-md">
        Welcome to <span className="text-brandPink">Emilee’s World</span>
      </h1>
    </section>
  );
}
