"use client"
import { motion } from "framer-motion";

export function Herosubtitle() {
  return (
    <motion.div className="max-w-5xl w-full text-balance text-base tracking-tight text-black dark:font-medium dark:text-white md:text-center md:text-lg "
    initial={{ opacity: 0, y: 20 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ delay: 0.8, duration: 0.8, ease:"easeOut" }}
    >
      <span className="hidden md:inline">
        Deliver fast responses to <b>Comments</b>,<b> DMs</b>,{" "}
        <b> Story Reply</b> and <b>Mention</b> .
      </span>
      {/* <br /> */}
      Automatically answer every reaction using AI power personal assistant that
      sounds exactly like you!
    </motion.div>
  );
}

{
  /* Deliver fast responses to Comments , DMs ,StoryReply, and Mention ,Automatically answer every reaction using AI power personal assistant that sounds 
  exactly like you!  */
}
