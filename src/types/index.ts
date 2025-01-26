
export type Tlistener = "MESSAGE" | "SMARTAI";

export type Ttrigger = 'COMMENT' | 'DM';

export type Tpost =  {
    postid: string
    caption?: string
    media: string
    mediaType: 'IMAGE' | 'VIDEO' | 'CAROSEL_ALBUM'
}

