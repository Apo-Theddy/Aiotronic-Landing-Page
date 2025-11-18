import { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function GsapClient() {
  useEffect(() => {
    gsap.fromTo(
      ".title",
      {
        xPercent: -100,
        opacity: 0,
      },
      {
        xPercent: 0,
        opacity: 1,
        scrollTrigger: {
          trigger: ".title",
          start: "top 80%",
          end: "top 40%",
          scrub: true,
        },
      }
    );
  }, []);
  return null;
}
