"use client"
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Playfair_Display } from "next/font/google";
import Image from "next/image";
import React, { useRef } from "react";
gsap.registerPlugin(ScrollTrigger);

const playfair = Playfair_Display ({
  subsets: ['latin'],
  weight: ['400', '700'], 
});


export const Hero = () => {
  
  const textRef = useRef(null)
  const contRef = useRef(null)
  const towerRef = useRef(null)

    useGSAP(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: contRef.current, 
          start:  '53% 50%',
          //markers: true,
          scrub: true
        }
      })

      tl.to(textRef.current, {
        y: -300
      }, "a")
      .to(towerRef.current, {
        scale: 1.2
      }, "a")
      .to(contRef.current, {
        y: 400
      }, "a")
    })


  return (
    <div ref={contRef}
      className="relative h-screen flex items-center justify-center bg-cover bg-center z-0"
      style={{ backgroundImage: "url('/globe.jpg')" }}
    >
      {/* H1 text behind the image */}
      <h1 ref={textRef} className={` text-3xl md:text-8xl font-extralight tracking-wider absoulute top-[5rem] text-white z-20 ${playfair.className}`}>
        Plan Your Travel Now.
      </h1>

      {/* CN Tower image */}
      <Image ref={towerRef}
        src={'/paris.png'}
        alt="cn tower"
        width={330}
        height={330}
        className="absolute bottom-0 z-30"
      />
    </div>
  );
};
