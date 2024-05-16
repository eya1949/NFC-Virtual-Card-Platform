import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import Shop from "../components/landingPage/Shop";
import AboutUs from "../components/landingPage/AboutUs";
import Scientist from "../components/landingPage/Scientist";
import Decor from "../components/landingPage/Decor";

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
