import { ChevronRight, MessageCircleQuestion } from "lucide-react";
import Link from "next/link";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
// import { ArrowRightIcon } from "@radix-ui/react-icons";
import AnimatedShinyText from "../ui/animated-shiny-text";
import AnimatedGridPattern from "../ui/animated-grid-pattern";
import HeroVideoDialog from "../ui/hero-video-dialog";
import GetStartedBtn from "../global/Landing/get-started-btn";


export default async function Hero() {
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

              <GetStartedBtn />
            </div>
          </AnimatedGridPatternDemo>

          <HeroVideoDialog
            className="md:max-w-5xl w-[90%] mx-auto"
            animationStyle="from-center"
            videoSrc="https://www.youtube.com/embed/qh3NGpYRG3I?si=4rb-zSdDkVK9qxxb"
            thumbnailSrc="https://startup-template-sage.vercel.app/hero-dark.png"
            thumbnailAlt="Hero Video"
          />
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

function Herobanner() {
  return (
    <div
      className={cn(
        "group rounded-full border border-black/5 bg-neutral-100 text-base text-white transition-all ease-in hover:cursor-pointer hover:bg-neutral-200 dark:border-white/5 dark:bg-neutral-900 dark:hover:bg-neutral-800",

        "backdrop-filter-[12px] inline-flex h-7 items-center justify-between  bg-white/10 text-xs"
      )}
    >
      <AnimatedShinyText className="inline-flex items-center justify-center px-4 py-1 transition ease-out hover:text-neutral-600 hover:duration-300 hover:dark:text-neutral-400">
        <span>✨ Introducing Link</span>
        <MessageCircleQuestion className="ml-1 size-4 transition-transform duration-300 ease-in-out group-hover:translate-x-0.5" />
      </AnimatedShinyText>
    </div>
  );
}

function Herotitle() {
  return (
    <div className="relative max-w-5xl flex flex-col gap-4 md:items-center lg:flex-row">
      <h1
        className={cn(
          "text-black dark:text-white",
          "relative mx-0   md:mx-auto md:px-4 md:py-2 py-0",
          "text-balance font-semibold tracking-tighter md:text-center",
          "text-5xl sm:text-7xl md:text-7xl lg:text-7xl"
        )}
      >
        Automate your Instagram DMs with{" "}
        <span className="inline-block bg-gradient-to-r from-main1 to-main2 bg-clip-text text-transparent [-webkit-background-clip:text] [-webkit-text-fill-color:transparent]">
          AI.
        </span>
      </h1>
    </div>
  );
}

function Herosubtitle() {
  return (
    <div className="max-w-5xl w-full text-balance text-base tracking-tight text-black dark:font-medium dark:text-white md:text-center md:text-lg ">
      {/* Deliver fast responses to Comments , DMs ,StoryReply, and Mention ,Automatically answer every reaction using AI power personal assistant that sounds 
exactly like you!  */}
      <span className="hidden md:inline">
        Deliver fast responses to <b>Comments</b>,<b> DMs</b>,{" "}
        <b> Story Reply</b> and <b>Mention</b> .
      </span>
      {/* <br /> */}
      Automatically answer every reaction using AI power personal assistant that
      sounds exactly like you!
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
