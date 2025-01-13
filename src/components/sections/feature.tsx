import { NextPage } from "next";

import { CalendarIcon, FileTextIcon } from "@radix-ui/react-icons";
import { BellIcon, Share2Icon } from "lucide-react";

import { cn } from "@/lib/utils";
import { Calendar } from "@/components/ui/calendar";
import { BentoCard, BentoGrid } from "../ui/bento-grid";
import Marquee from "../ui/marquee";
import React from "react";
import { AnimatedBeamMultipleOutputDemo } from "../global/animated-beam-multiple-output-demo";
import { AnimatedListDemo } from "../global/animated-list-demo";
import ShinyText from "../ui/shiny-text";

const files = [
  {
    name: "automate_comments.json",
    body: "Automatically respond to comments in real-time, boosting engagement and visibility across Instagram posts.",
  },
  {
    name: "dm_responses.ai",
    body: "Deliver personalized, AI-powered responses to Instagram DMs and streamline lead generation effortlessly.",
  },
  {
    name: "story_mentions.md",
    body: "Handle every story mention and reaction automatically, ensuring no interaction goes unnoticed.",
  },
  {
    name: "analytics_dashboard.csv",
    body: "Track and analyze your engagement metrics with a real-time, intuitive analytics dashboard.",
  },
  {
    name: "lead_qualifier.xml",
    body: "Qualify leads with smart automation, guiding them through funnels directly from Instagram interactions.",
  },
];

const features = [
  {
    Icon: FileTextIcon,
    name: "Save your files",
    description: "We automatically save your files as you type.",
    href: "#",
    cta: "Learn more",
    className: "col-span-3 lg:col-span-1",
    background: (
      <Marquee
        pauseOnHover
        className="absolute top-10 [--duration:20s] [mask-image:linear-gradient(to_top,transparent_40%,#000_100%)] "
      >
        {files.map((f, idx) => (
          <figure
            key={idx}
            className={cn(
              "relative w-32 cursor-pointer overflow-hidden rounded-xl border p-4",
              "border-gray-950/[.1] bg-gray-950/[.01] hover:bg-gray-950/[.05]",
              "dark:border-gray-50/[.1] dark:bg-gray-50/[.10] dark:hover:bg-gray-50/[.15]",
              "transform-gpu blur-[1px] transition-all duration-300 ease-out hover:blur-none"
            )}
          >
            <div className="flex flex-row items-center gap-2">
              <div className="flex flex-col">
                <figcaption className="text-sm font-medium dark:text-white ">
                  {f.name}
                </figcaption>
              </div>
            </div>
            <blockquote className="mt-2 text-xs">{f.body}</blockquote>
          </figure>
        ))}
      </Marquee>
    ),
  },
  {
    Icon: BellIcon,
    name: "Notifications",
    description: "Enable instant notifications triggered by user interactions.",
    href: "#",
    cta: "Learn more",
    className: "col-span-3 lg:col-span-2",
    background: (
      <AnimatedListDemo className="absolute right-2 top-4 h-[300px] w-full border-none transition-all duration-300 ease-out [mask-image:linear-gradient(to_top,transparent_10%,#000_100%)] group-hover:scale-105" />
    ),
  },
  {
    Icon: Share2Icon,
    name: "Integrations",
    description: "Automatically like and respond to every comment.",
    href: "#",
    cta: "Learn more",
    className: "col-span-3 lg:col-span-2",
    background: (
      <AnimatedBeamMultipleOutputDemo className="absolute right-2 top-4 h-[300px] border-none transition-all duration-300 ease-out [mask-image:linear-gradient(to_top,transparent_10%,#000_100%)] group-hover:scale-105" />
    ),
  },
  {
    Icon: CalendarIcon,
    name: "24/7 support",
    description: "Deliver fast responses 24/7.",
    className: "col-span-3 lg:col-span-1",
    href: "#",
    cta: "Learn more",
    background: (
      <Calendar
        mode="single"
        selected={new Date(2022, 4, 11, 0, 0, 0)}
        className="absolute right-0 top-10 origin-top rounded-md border transition-all duration-300 ease-out [mask-image:linear-gradient(to_top,transparent_40%,#000_100%)] group-hover:scale-105"
      />
    ),
  },
];

interface Props {}

const Feature: NextPage<Props> = ({}) => {
  return (
    <div className="mx-auto flex max-w-screen-xl flex-col gap-8 px-4 md:px-8 py-10  md:py-28">
      <div className="mx-auto max-w-5xl text-center flex flex-col lg:flex-row items-center lg:items-end gap-3">
        <h2 className="text-3xl font-semibold tracking-tight text-black dark:text-white sm:text-4xl">
          What's in <span className="theme-gradient">LINK?</span>
        </h2>
        <div className="text-xl leading-8 text-black/80 dark:text-white/70">
          <ShinyText
            text="Everything you need to Automate your Instagram."
            disabled={false}
            speed={3}
            className="custom-class"
          />
        </div>
      </div>
      <BentoGrid className="md:max-w-5xl max-w-[95%] mx-auto">
        {features.map((feature, idx) => (
          <BentoCard key={idx} {...feature} />
        ))}
      </BentoGrid>
    </div>
  );
};

export default Feature;
