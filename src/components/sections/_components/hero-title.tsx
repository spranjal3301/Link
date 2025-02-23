"use client";

import { cn } from "@/lib/utils";
import { motion } from "framer-motion";

export function Herotitle() {
  return (
    <div className="relative max-w-5xl flex flex-col gap-4 md:items-center lg:flex-row">
      <motion.h1
        className={cn(
          "text-black dark:text-white",
          "relative mx-0   md:mx-auto md:px-4 md:py-2 py-0",
          "text-balance font-semibold tracking-tighter md:text-center",
          "text-5xl sm:text-7xl md:text-7xl lg:text-7xl"
        )}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
      >
        {["Automate", "your", "Instagram", "DMs", "with", "AI."].map(
          (text, index) => (
            <motion.span
              key={index}
              className={cn("inline-block px-1",
                text == "AI." ?  "theme-gradient" : ""
              )}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.8,
                delay: 0.3 + index * 0.1,
                ease: "easeOut",
              }}
            >
              {text}
            </motion.span>
          )
        )}
      </motion.h1>
    </div>
  );
}


