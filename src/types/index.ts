export type Tlistener = "MESSAGE" | "SMARTAI";

export type Ttrigger = "COMMENT" | "DM" | "REEL_REPLY";

export type Tpost = {
  postid: string;
  caption?: string;
  media: string;
  mediaType: "IMAGE" | "VIDEO" | "CAROSEL_ALBUM";
};

export type TintegrationStrategy = "INSTAGRAM" | "CRM";

// export type TreelReaction = 