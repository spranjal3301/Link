import { ChevronRight, MessageCircleQuestion } from "lucide-react";
import Link from "next/link";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
// import { ArrowRightIcon } from "@radix-ui/react-icons";
import AnimatedShinyText from "../ui/animated-shiny-text";
import AnimatedGridPattern from "../ui/animated-grid-pattern";
import HeroVideoDialog from "../ui/hero-video-dialog";
import GetStartedBtn from "../global/Landing/get-started-btn";
import { Herobanner } from "./_components/hero-banner";
import { Herotitle } from "./_components/hero-title";
import { Herosubtitle } from "./_components/hero-subtitle";
import HeroButton from "./_components/hero-button";
import HeroVideo from "./_components/hero-video";

export default function Hero() {
  return (
    <section id="hero">
      <div className="relative overflow-hidden py-5 md:py-14 ">
        <div className="z-10 flex flex-col">
          {/*//- for video  model on top*/}
          <AnimatedGridPatternDemo>
            <div
              className="flex flex-col flex-1 gap-6  px-7 pb-8 items-center md:px-10 mt-24
              md:mt-10"
            >
              <Herobanner />

              <Herotitle />

              <Herosubtitle />

              {/* <GetStartedBtn /> */}
              <HeroButton />
            </div>
          </AnimatedGridPatternDemo>

          <HeroVideo />
        </div>
      </div>
    </section>
  );
}

function AnimatedGridPatternDemo({ children }: { children: React.ReactNode }) {
  return (
    <div className="relative flex items-center justify-center overflow-hidden rounded-lg w-full bg-background md:p-16 md:shadow-xl">
      <div className="z-10 whitespace-pre-wrap text-center text-5xl font-medium  text-black dark:text-white">
        {children}
      </div>
      <AnimatedGridPattern
        numSquares={30}
        maxOpacity={0.1}
        duration={3}
        repeatDelay={1}
        className={cn(
          "[mask-image:radial-gradient(500px_circle_at_center,white,transparent)]",
          "inset-x-0 inset-y-[-30%] h-[200%] skew-y-12"
        )}
      />
    </div>
  );

  return (
    <div className="relative flex items-center justify-center overflow-hidden rounded-lg w-full bg-background p-16 md:shadow-xl">
      <div className="z-10 whitespace-pre-wrap text-center text-5xl font-medium  text-black dark:text-white">
        {children}
      </div>
      <AnimatedGridPattern
        numSquares={30}
        maxOpacity={0.1}
        duration={3}
        repeatDelay={1}
        className={cn(
          "[mask-image:radial-gradient(500px_circle_at_center,white,transparent)]",
          "inset-x-0 inset-y-[-30%] h-[200%] skew-y-12"
        )}
      />
    </div>
  );
}

function Herobtn() {
  return (
    <div className="mx-0 flex w-full max-w-full flex-col items-center justify-center gap-4 py-1 sm:max-w-lg sm:flex-row md:mx-auto">
      <Link
        href="/dashboard"
        className={cn(
          buttonVariants({
            size: "lg",
          }),
          "group w-full md:w-auto"
        )}
      >
        Get Started
        <ChevronRight className="ml-1 size-4 shrink-0 transition-all duration-300 ease-out group-hover:translate-x-1" />
      </Link>
    </div>
  );
}
