"use client";

import Image from "next/image";
import { Button } from "../ui/button";
import { useInView, motion } from "framer-motion";
import Wrapper from "../wrapper/wrapper";
import { useRef } from "react";

const HeroSection = () => {
  return (
    <div id="hero" className="w-full relative">
      <Wrapper className="flex flex-col items-center pt-20 relative">
        <Image
          width={100}
          height={100}
          src="/hero-arrow.png"
          quality={100}
          className=" left-[35%] top-56 object-contain object-center absolute hidden md:block"
          alt="Arrow"
        />

        <Image
          id="reviews"
          width={50}
          height={50}
          src="/1.png"
          quality={100}
          className=" left-10 md:left-[20%] top-4 md:top-14 object-contain object-center absolute"
          alt="Happy students"
        />
        <Image
          id="reviews"
          width={50}
          height={50}
          src="/2.png"
          quality={100}
          className=" left-10 md:left-80 top-72 md:top-48 object-contain object-center absolute"
          alt="Happy students"
        />
        <Image
          id="reviews"
          width={50}
          height={50}
          src="/3.png"
          quality={100}
          className=" left-[25%] top-[25%] object-contain object-center absolute hidden md:block"
          alt="Happy students"
        />

        {/* Right */}
        <Image
          id="reviews"
          width={50}
          height={50}
          src="/1.png"
          quality={100}
          className=" right-[20%] top-14 object-contain object-center absolute"
          alt="Happy students"
        />
        <Image
          id="reviews"
          width={50}
          height={50}
          src="/2.png"
          quality={100}
          className=" right-4 md:right-80 top-48 object-contain object-center absolute"
          alt="Happy students"
        />
        <Image
          id="reviews"
          width={50}
          height={50}
          src="/3.png"
          quality={100}
          className=" right-[25%] top-[25%] object-contain object-center absolute hidden md:block"
          alt="Happy students"
        />
        <MaskText />
        <p className="text-lg font-normal text-[#131E42]/90 max-w-lg text-center mt-4">
          Receive an American degree. Play the sport you love. Create
          unforgettable memories.
        </p>
        <div className="flex items-center gap-4 mt-8">
          <Button>Contact Us</Button>
          <Button variant="outline">Learn More</Button>
        </div>

        <div className="flex flex-col md:flex-row items-center justify-center md:justify-between w-full gap-4 md:gap-14 py-20 md:px-20">
          <div className="w-full rounded-xl h-[37rem] relative group">
            <Image
              fill
              src="/hero-img-1.png"
              quality={100}
              className=" left-[35%] top-56 object-cover object-center absolute rounded-xl"
              alt="Basketball athelete"
            />
            <div className="w-full h-full absolute bg-black/50 backdrop-blur-sm rounded-xl hidden group-hover:block ease-in-out duration-500 transition-all">
              <div className="h-full w-full items-end flex flex-col">
                <div className="bg-white w-52 h-12 rounded-tr-xl rounded-bl-xl flex items-center justify-center">
                  <p className="text-black font-normal text-lg">
                    Get a scholarship
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="w-full border border-[#131E42] text-[#131E42] flex flex-col items-start rounded-xl h-[37rem]">
            <div className="flex flex-col px-10 mt-20">
              <h3 className="text-5xl font-semibold">34K+</h3>
              <h4 className=" text-3xl mt-2 font-medium">
                Success <br /> Stories
              </h4>
            </div>
            <div className=" w-full h-60 relative">
              <Image
                fill
                src="/hero-bg.png"
                quality={100}
                className="object-contain object-center rounded-xl"
                alt="Gradient pattern"
              />
            </div>
            <div className="flex flex-col px-10">
              <Button variant="outline">Learn more</Button>
            </div>
          </div>
          <div className="w-full rounded-xl h-[37rem] relative group">
            <Image
              fill
              src="/hero-img-2.png"
              quality={100}
              className=" left-[35%] top-56 object-cover object-center absolute rounded-xl"
              alt="Track athelete"
            />
            <div className="w-full h-full absolute bg-black/50 backdrop-blur-sm rounded-xl hidden group-hover:block ease-in-out duration-500 transition-all">
              <div className="h-full w-full items-end flex flex-col">
                <div className="bg-white w-52 h-12 rounded-tr-xl rounded-bl-xl flex items-center justify-center">
                  <p className="text-black font-normal text-lg">Play a sport</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Wrapper>
    </div>
  );
};

export default HeroSection;

export function MaskText() {
  const body = useRef(null);

  const isInView = useInView(body, { once: true, margin: "75%" });

  const animation = {
    initial: { y: "100%" },

    enter: (i: number) => ({
      y: "0",
      transition: {
        duration: 0.75,
        ease: [0.33, 1, 0.68, 1],
        delay: 1,
      },
    }),
  };

  return (
    <div ref={body}>
      <div className="lineMask z-50">
        <motion.h1
          className="text-[#131E42] font-semibold 2xl:font-semibold text-5xl xl:text-6xl 2xl:text-[4.8rem] md:-mt-0"
          variants={animation}
          initial="initial"
          animate={isInView ? "enter" : ""}
        >
          Saga Scholarship
        </motion.h1>
      </div>
    </div>
  );
}
