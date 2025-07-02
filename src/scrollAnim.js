import { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function useScrollAnim() {
  useEffect(() => {
    // zoom the headline
    gsap.fromTo(
      "#heroTitle",
      { scale: 1 },
      {
        scale: 2,
        scrollTrigger: {
          trigger: "#heroTitle",
          start: "top center",
          end: "bottom top",
          scrub: true,
        },
      }
    );

    // slide each .card up as it hits 75 percent of the viewport
    gsap.utils.toArray(".card").forEach((card) => {
      gsap.from(card, {
        y: 100,
        opacity: 0,
        duration: 0.6,
        scrollTrigger: {
          trigger: card,
          start: "top 75%",
        },
      });
    });
  }, []);
}
