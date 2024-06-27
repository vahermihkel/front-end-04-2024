import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import { useRef } from "react";
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';

export default function Test() {
  const container = useRef();

  useGSAP(() => {
    gsap.to(container.current, {
      x: 100,
    });  
  
    gsap.fromTo(
      container.current,
      {
        opacity: 0,
        x: -100,
      },
      {
        opacity: 1,
        x: 0,
      }
    );

    gsap.registerPlugin(ScrollTrigger);

    // ScrollTrigger.create({
    //   trigger: container.current,
    //   start: 'center 90%',
    //   onEnter: () => anim.play(),
    // });
  });

  return (
    <div ref={container}>
      { /* Element to animate */ }
    </div>
  );
}