"use client"
import HeroVideoDialog from "@/components/ui/hero-video-dialog";
import React from "react";
import { motion } from 'framer-motion';

type Props = {};

function HeroVideo({}: Props) {
  return (
    <motion.div
      className="flex flex-col items-center justify-center gap-4 text-center"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.8, duration: 0.8, ease:"easeOut" }}
    >
      <HeroVideoDialog
        className="md:max-w-5xl w-[90%] mx-auto"
        animationStyle="from-center"
        videoSrc="https://www.youtube.com/embed/qh3NGpYRG3I?si=4rb-zSdDkVK9qxxb"
        thumbnailSrc="https://startup-template-sage.vercel.app/hero-dark.png"
        thumbnailAlt="Hero Video"
      />
    </motion.div>
  );
}

export default HeroVideo;
