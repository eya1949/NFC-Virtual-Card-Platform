import React, { useEffect, useRef } from "react";
import Shop from "./Shop";
import AboutUs from "./AboutUs";
import Scientist from "./Scientist";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
// import Lenis from "lenis";
import Decor from "./Decor";

gsap.registerPlugin(ScrollTrigger);

export default function HeroSection() {
  const mainRef = useRef(null);
  const sections = [<Shop />, <AboutUs />, <Scientist />];

  useGSAP(
    () => {
      gsap.to(mainRef.current, {
        scrollTrigger: {
          trigger: mainRef.current,
          scrub: true,
          pin: true,
        },
        x: "-203%",
      });
    },
    { scope: mainRef.current }
  );

  return (
    <>
      <main ref={mainRef} className="flex">
        {sections.map((section, key) => (
          <section key={key}>{section}</section>
        ))}
      </main>
      <Decor />
    </>
  );
}
