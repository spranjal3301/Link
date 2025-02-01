"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Play, XIcon } from "lucide-react";

import { cn } from "@/lib/utils";
import { BorderBeam } from "./border-beam";
import Image from "next/image";

type AnimationStyle =
  | "from-bottom"
  | "from-center"
  | "from-top"
  | "from-left"
  | "from-right"
  | "fade"
  | "top-in-bottom-out"
  | "left-in-right-out";

interface HeroVideoProps {
  animationStyle?: AnimationStyle;
  videoSrc: string;
  thumbnailSrc: string;
  thumbnailAlt?: string;
  className?: string;
}

const animationVariants = {
  "from-bottom": {
    initial: { y: "100%", opacity: 0 },
    animate: { y: 0, opacity: 1 },
    exit: { y: "100%", opacity: 0 },
  },
  "from-center": {
    initial: { scale: 0.5, opacity: 0 },
    animate: { scale: 1, opacity: 1 },
    exit: { scale: 0.5, opacity: 0 },
  },
  "from-top": {
    initial: { y: "-100%", opacity: 0 },
    animate: { y: 0, opacity: 1 },
    exit: { y: "-100%", opacity: 0 },
  },
  "from-left": {
    initial: { x: "-100%", opacity: 0 },
    animate: { x: 0, opacity: 1 },
    exit: { x: "-100%", opacity: 0 },
  },
  "from-right": {
    initial: { x: "100%", opacity: 0 },
    animate: { x: 0, opacity: 1 },
    exit: { x: "100%", opacity: 0 },
  },
  fade: {
    initial: { opacity: 0 },
    animate: { opacity: 1 },
    exit: { opacity: 0 },
  },
  "top-in-bottom-out": {
    initial: { y: "-100%", opacity: 0 },
    animate: { y: 0, opacity: 1 },
    exit: { y: "100%", opacity: 0 },
  },
  "left-in-right-out": {
    initial: { x: "-100%", opacity: 0 },
    animate: { x: 0, opacity: 1 },
    exit: { x: "100%", opacity: 0 },
  },
};

export default function HeroVideoDialog({
  animationStyle = "from-center",
  videoSrc,
  thumbnailSrc,
  thumbnailAlt = "Video thumbnail",
  className,
}: HeroVideoProps) {
  const [isVideoOpen, setIsVideoOpen] = useState(false);
  const selectedAnimation = animationVariants[animationStyle];

  return (
    <div>
      <div className={cn("relative border rounded-xl shadow-lg", className)}>
        <div
          className={cn(
            "relative cursor-pointer group"
            //- bottom fade img : "[perspective:2000px] after:absolute after:inset-0 after:z-50 after:[background:linear-gradient(to_top,hsl(var(--background))_10%,transparent)]"
          )}
          onClick={() => setIsVideoOpen(true)}
        >
          <Image
            src={thumbnailSrc}
            alt={thumbnailAlt}
            width={1920}
            height={1080}
            className="w-full transition-all duration-200 group-hover:brightness-[0.8] ease-out rounded-md shadow-lg border"
          />
          <div className="absolute inset-0 flex items-center justify-center group-hover:scale-100 scale-[0.9] transition-all duration-200 ease-out rounded-2xl">
            <div className="bg-primary/10 flex items-center justify-center rounded-full backdrop-blur-md size-28">
              <div
                className={`flex items-center justify-center bg-gradient-to-r from-[#72C6EF] to-[#004E8F] shadow-md rounded-full size-20 transition-all ease-out duration-200 relative group-hover:scale-[1.2] scale-100`}
              >
                <Play
                  className="size-8 text-white fill-white group-hover:scale-105 scale-100 transition-transform duration-200 ease-out"
                  style={{
                    filter:
                      "drop-shadow(0 4px 3px rgb(0 0 0 / 0.07)) drop-shadow(0 2px 2px rgb(0 0 0 / 0.06))",
                  }}
                />
              </div>
            </div>
          </div>
        </div>
        <AnimatePresence>
          {isVideoOpen && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              onClick={() => setIsVideoOpen(false)}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-md"
            >
              <motion.div
                {...selectedAnimation}
                transition={{ type: "spring", damping: 30, stiffness: 300 }}
                className="relative w-full max-w-4xl aspect-video mx-4 md:mx-0"
              >
                <motion.button className="absolute -top-16 right-0 text-white text-xl bg-neutral-900/50 ring-1 backdrop-blur-md rounded-full p-2 dark:bg-neutral-100/50 dark:text-black">
                  <XIcon className="size-5" />
                </motion.button>
                <div className="size-full border-2 border-white rounded-2xl overflow-hidden isolate z-[1] relative">
                  <iframe
                    src={videoSrc}
                    className="size-full rounded-2xl"
                    allowFullScreen
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  ></iframe>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
        <BorderBeam size={250} duration={12} delay={9} />
      </div>
      {/* Faded Bootom */}
      <div className="pointer-events-none absolute inset-x-0 -bottom-12 h-1/6 bg-gradient-to-t from-background via-background to-transparent lg:h-1/4">
      </div>
    </div>
  );
}

/*
  <div class="relative mx-auto flex w-full items-center justify-center" style="opacity: 1; will-change: auto; transform: none;">
  <div class="relative border rounded-lg shadow-lg max-w-screen-lg mt-16">
  
  <div class="relative cursor-pointer group rounded-md p-2 ring-1 ring-slate-200/50 dark:bg-gray-900/70 dark:ring-white/10 backdrop-blur-md"><img alt="Hero Video" loading="lazy" width="1920" height="1080" decoding="async" data-nimg="1" class="transition-all duration-200 group-hover:brightness-[0.8] ease-out rounded-md border" style="color:transparent" srcset="/_next/image?url=%2Fdashboard.png&amp;w=1920&amp;q=75 1x, /_next/image?url=%2Fdashboard.png&amp;w=3840&amp;q=75 2x" src="/_next/image?url=%2Fdashboard.png&amp;w=3840&amp;q=75">
  
  <div class="absolute inset-0 flex items-center justify-center group-hover:scale-100 scale-[0.9] transition-all duration-200 ease-out rounded-2xl"><div class="z-30 bg-primary/10 flex items-center justify-center rounded-full backdrop-blur-md size-28">
  
  <div class="flex items-center justify-center bg-gradient-to-b from-primary/30 to-primary shadow-md rounded-full size-20 transition-all ease-out duration-200 relative group-hover:scale-[1.2] scale-100">
  
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-play size-8 text-white fill-white group-hover:scale-105 scale-100 transition-transform duration-200 ease-out" style="filter:drop-shadow(0 4px 3px rgb(0 0 0 / 0.07)) drop-shadow(0 2px 2px rgb(0 0 0 / 0.06))"><polygon points="6 3 20 12 6 21 6 3"></polygon></svg> 
  </div>
  </div>
   </div>
   </div>
   </div>
   </div>

*/

/* 
- bottom fade img

<div class="relative mt-[8rem] animate-fade-up opacity-0 [--animation-delay:400ms] [perspective:2000px] after:absolute after:inset-0 after:z-50 after:[background:linear-gradient(to_top,hsl(var(--background))_30%,transparent)]">

<div class="rounded-xl border border-white/10 bg-white bg-opacity-[0.01] before:absolute before:bottom-1/2 before:left-0 before:top-0 before:h-full before:w-full before:opacity-0 before:[filter:blur(180px)] before:[background-image:linear-gradient(to_bottom,var(--color-one),var(--color-one),transparent_40%)] before:animate-image-glow">

<div style="--size:200;--duration:12;--anchor:90;--border-width:1.5;--color-from:var(--color-one);--color-to:var(--color-two);--delay:-11s" class="absolute inset-[0] rounded-[inherit] [border:calc(var(--border-width)*1px)_solid_transparent] ![mask-clip:padding-box,border-box] ![mask-composite:intersect] [mask:linear-gradient(transparent,transparent),linear-gradient(white,white)] after:absolute after:aspect-square after:w-[calc(var(--size)*1px)] after:animate-border-beam after:[animation-delay:var(--delay)] after:[background:linear-gradient(to_left,var(--color-from),var(--color-to),transparent)] after:[offset-anchor:calc(var(--anchor)*1%)_50%] after:[offset-path:rect(0_auto_auto_0_round_calc(var(--size)*1px))]">

</div>

<img src="/hero-dark.png" alt="Hero Image" class="hidden relative w-full h-full rounded-[inherit] border object-contain dark:block">

<img src="/hero-light.png" alt="Hero Image" class="block relative w-full h-full  rounded-[inherit] border object-contain dark:hidden">

</div>

</div>

*/
