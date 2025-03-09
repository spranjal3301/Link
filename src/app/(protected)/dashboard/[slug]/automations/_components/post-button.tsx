"use client";

import React from "react";
import TriggerButton from "./trigger-button";
import Image from "next/image";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import Loader from "@/components/global/loader";
import { useQueryGetProfilePosts } from "@/hooks/use-query";
import { useAutomationPosts } from "@/hooks/use-mutation";
import { Tpost } from "@/types";
import { CheckCircle } from "lucide-react";
import { Link } from "next-view-transitions";

type Props = {
  id: string;
};

export type InstagramPostProps = {
  id: string;
  media_type: "IMAGE" | "VIDEO" | "CAROSEL_ALBUM";
  media_url: string;
  timestamp: Date;
  caption?: string;
};

const PostButton = ({ id }: Props) => {
  const { data } = useQueryGetProfilePosts();
  const { posts, onSelectPost, mutate, isPending } = useAutomationPosts(id);
  

  return (
    <TriggerButton label="Attach a post">
      {(data?.status === 200 && data?.data?.data && data?.data?.data.length)? (
        <div className="flex flex-col gap-y-3 w-full">
          <div className="flex flex-wrap w-full gap-3 overflow-y-scroll max-h-56 justify-center">
            {data.data.data.map((post: InstagramPostProps) => (
              <div
                className="relative w-[25%] aspect-square rounded-lg cursor-pointer overflow-hidden"
                key={post.id}
                onClick={() =>
                  onSelectPost({
                    postid: post.id,
                    media: post.media_url,
                    mediaType: post.media_type,
                    caption: post.caption,
                  })
                }
              >
                {posts.find((p) => p.postid === post.id) && (
                  <CheckCircle
                    fill="white"
                    stroke="black"
                    className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-50"
                  />
                )}
                <Image
                  fill
                  sizes="100vw"
                  src={post.media_url}
                  alt="post image"
                  className={cn(
                    "hover:opacity-75 transition duration-100",
                    posts.find((p) => p.postid === post.id) && "opacity-75"
                  )}
                />
              </div>
            ))}
          </div>
          <Button
            onClick={()=>mutate({})}
            disabled={posts.length === 0}
            className="bg-gradient-to-br w-full from-[#3352CC] font-medium text-white to-[#1C2D70]"
          >
            <Loader state={isPending}>Attach Post</Loader>
          </Button>
        </div>
      ) : (
        //- UI update : add svg
        <p className="text-text-secondary text-center">
          No posts found!
          <Link className="text-[#3352CC]" href={"/integrations"}>
            (check you Integrations)
          </Link>
        </p>
      )}
    </TriggerButton>
  );
};

export default PostButton;
