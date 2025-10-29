import React from "react";
import { Spotlight } from "./ui/spotlight-new";
import { cn } from "../lib/utils";
import { TextGenerateEffect } from "./ui/TextGenerateEffect";
import TailwindButton from "./ui/TailwindButton";
import { FaLocationArrow } from "react-icons/fa";

const Hero = () => {
  return (
    <div className="pb-20 pt-36">
      <div>
        <Spotlight
          className="-top-40 -left-10 md:-left-32 md:-top-20 h-screen"
          fill="white"
        />
        <Spotlight
          className="-top-10 left-full h-[-80vh] w-[50vh]"
          fill="purple"
        />
        <Spotlight className="top-28 left-80 h-[80vh] w-[50vh]" fill="blue" />
      </div>
      <div className=" flex h-screen w-full items-center justify-center bg-white dark:bg-black-100 absolute top-0 left-0">
        <div
          className={cn(
            "absolute inset-0",
            "[background-size:20px_20px]",
            "[background-image:radial-gradient(#d4d4d4_1px,transparent_1px)]",
            "dark:[background-image:radial-gradient(#404040_1px,transparent_1px)]"
          )}
        />
        {/* Radial gradient for the container to give a faded look */}
        <div className="pointer-events-none absolute inset-0 flex items-center justify-center bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)] dark:bg-black-100" />
      </div>
      <div className="flex justify-center relative my-20 z-10">
        <div className="max-w-[89vw] md:max-w-2xl lg:max-w-[60vw] flex flex-col items-center justify-center">
          <h2 className="uppercase tracking-widest text-xs text-center text-blue-100 max-w-80">
            Magic caster level 100!
          </h2>

          <TextGenerateEffect
            className="text-center text-[40px] md:text-5xl lg:text-6xl"
            words="I craft SaaS apps from Hotel MS to Property MS using Variety of technologies that are in my Arsenal."
          />

          <p className="text-blue-100 text-center md:tracking-wider mb-4 text-sm md:text-lg lg:text-2xl">
            Hi, I&apos;m Mohamed, a Fullstack developer based in Ethiopia.
          </p>
          <TailwindButton title="Show my work" icon={<FaLocationArrow />} />
        </div>
      </div>
    </div>
  );
};

export default Hero;
