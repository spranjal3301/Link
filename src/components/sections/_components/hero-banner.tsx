"use client"

import AnimatedShinyText from "@/components/ui/animated-shiny-text";
import { cn } from "@/lib/utils";
import { MessageCircleQuestion } from "lucide-react";
import { motion } from 'framer-motion';

export function Herobanner() {
  return (
    <motion.div
    className="flex justify-center"
    initial={{ opacity: 0, y: -20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.8, ease: "easeOut" }}
    >
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
    </motion.div>
  );
}