import React from "react";
import { Buttons } from "./index.js";

const Hero = () => {
  return (
    <div className="flex">
      <div className="max-md:mt-[20px] mt-[60px]">
        <p className="text-[20px] font-bold uppercase text-[#30B0C7]">
          content creator | Dancer | choreographer
        </p>
        <div className="mt-[45px] max-w-[500px] flex flex-col gap-[30px]">
          <p className="font-playfair text-[64px] leading-[65px]">
            Hello, my name is Harini Gomez
          </p>
          <p className="leading-[26px]">
            I am a multi-talented creative with a passion for making waves in
            the digital realm. My journey began as a dancer, which evolved into
            content creation, where I discovered the power of short-form content
            to captivate audiences and spark conversations. <br /> In a world
            filled with noise, I strive to be a voice that resonates. Through my
            creative endeavours, I aim to uplift, inspire, and connect with
            others one day at a time!
          </p>

          <div className="flex gap-[12px]">
            <Buttons buttonType="teal" text="Personal accounts" />
            <Buttons buttonType="normal" text="Other accounts" />
          </div>
        </div>
      </div>

      <div>
        <img
          src="/images/heroImage.png"
          alt="svg design"
          className="absolute top-0 right-0 z-[-10] object-contain max-xl:hidden xl:h-[650px]"
        />
      </div>
    </div>
  );
};

export default Hero;
