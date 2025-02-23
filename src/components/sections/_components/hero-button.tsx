"use client";
import React from "react";
import { motion } from "framer-motion";
import GetStartedBtn from "@/components/global/Landing/get-started-btn";

type Props = {};

function HeroButton({}: Props) {
  return (
    <motion.div
      className="mt-8 flex flex-col items-center justify-center gap-3 md:flex-row"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 1.2, duration: 0.8, ease: "easeOut" }}
    >
      <GetStartedBtn />
    </motion.div>
  );
}

export default HeroButton;
