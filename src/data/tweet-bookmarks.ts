export type TweetMedia =
  | {
      type: "image";
      src: string;
      alt: string;
      thumbSrc?: string;
      aspectRatio?: "video" | "square" | "portrait";
    }
  | {
      type: "video";
      src: string;
      poster?: string;
      alt?: string;
      aspectRatio?: "video" | "square" | "portrait";
    };

export type TweetBookmark = {
  id: string;
  url: string;
  authorName: string;
  authorHandle: string;
  avatarUrl?: string;
  text: string;
  tags: Array<string>;
  postedAt?: string;
  media?: TweetMedia;
};

export const TWEET_BOOKMARKS: Array<TweetBookmark> = [
  {
    id: "tweet-1931827480073019740",
    url: "https://x.com/emirayaaz/status/1931827480073019740",
    authorName: "emir ayaz",
    authorHandle: "emirayaaz",
    avatarUrl: "https://pbs.twimg.com/profile_images/2035071397433942016/2e-_tUnn_normal.jpg",
    text: "A lot of people asked how I did this illustrations, it is actually pretty simple 🧵",
    tags: ["ASCII","Design","Generative AI"],
    postedAt: "2025-06-08",
  },
  {
    id: "tweet-2023341511375737291",
    url: "https://x.com/raul_dronca/status/2023341511375737291",
    authorName: "Raul",
    authorHandle: "raul_dronca",
    avatarUrl: "https://pbs.twimg.com/profile_images/1988509236691640320/8K6xbvXz_normal.jpg",
    text: "Agent Flow https://t.co/z8nzfNskqZ",
    tags: ["Design"],
    postedAt: "2026-02-16",
    media: {
      type: "video",
      src: "https://video.twimg.com/amplify_video/2023341444245692416/vid/avc1/358x270/2JrChVz5xhl0G8rR.mp4",
      poster: "https://pbs.twimg.com/amplify_video_thumb/2023341444245692416/img/9XFft3mILGSQMbj-.jpg",
      alt: "Raul video preview",
      aspectRatio: "video",
    },
  },
  {
    id: "tweet-2023466163234365667",
    url: "https://x.com/aaronmahlke/status/2023466163234365667",
    authorName: "Aaron",
    authorHandle: "aaronmahlke",
    avatarUrl: "https://pbs.twimg.com/profile_images/2001654841299369985/GcVYVPuU_normal.png",
    text: "everyone was asking me how I make these gradients... so i made a tiny tool 👀 https://t.co/QPDlUDov8G",
    tags: ["Shaders","WebGL"],
    postedAt: "2026-02-16",
    media: {
      type: "image",
      src: "https://pbs.twimg.com/media/HBS2yDZWoAEzi4l.jpg",
      alt: "Aaron image preview",
      thumbSrc: "https://pbs.twimg.com/media/HBS2yDZWoAEzi4l.jpg",
      aspectRatio: "video",
    },
  },
  {
    id: "tweet-2023416480759705888",
    url: "https://x.com/loseva_pro/status/2023416480759705888",
    authorName: "Kate Loseva",
    authorHandle: "loseva_pro",
    avatarUrl: "https://pbs.twimg.com/profile_images/1925206450499919872/j_t5vP4l_normal.jpg",
    text: "Hero section design https://t.co/9gpIVCnN30",
    tags: ["Design"],
    postedAt: "2026-02-16",
    media: {
      type: "video",
      src: "https://video.twimg.com/amplify_video/2023416073752883200/vid/avc1/380x270/yVIic4qG_r9cP3x0.mp4",
      poster: "https://pbs.twimg.com/amplify_video_thumb/2023416073752883200/img/AYTipH5VxE-RDVEe.jpg",
      alt: "Kate Loseva video preview",
      aspectRatio: "video",
    },
  },
  {
    id: "tweet-1973758534761521292",
    url: "https://x.com/jh3yy/status/1973758534761521292",
    authorName: "jhey ʕ•ᴥ•ʔ",
    authorHandle: "jh3yy",
    avatarUrl: "https://pbs.twimg.com/profile_images/1534700564810018816/anAuSfkp_normal.jpg",
    text: "extra tip when dealing with animation 🎞️ set `subtree: true` to wait for all child animations/transitions to finish 🤙 await Promise.allSettled( element.getAnimations({ subtree: true }).map( a => a finished ) ) please don't use setTimeout 🙏",
    tags: ["Animation"],
    postedAt: "2025-10-02",
  },
  {
    id: "tweet-2036367122117566674",
    url: "https://x.com/lifeofmansoor/status/2036367122117566674",
    authorName: "MANSOOR",
    authorHandle: "lifeofmansoor",
    avatarUrl: "https://pbs.twimg.com/profile_images/1998807524921978882/yaCXqzJV_normal.jpg",
    text: "Branding proposal. Made in less than a day. https://t.co/IbFQToV9po",
    tags: ["Design"],
    postedAt: "2026-03-24",
    media: {
      type: "image",
      src: "https://pbs.twimg.com/media/HEKhGgoaIAQ2CMP.jpg",
      alt: "MANSOOR image preview",
      thumbSrc: "https://pbs.twimg.com/media/HEKhGgoaIAQ2CMP.jpg",
      aspectRatio: "video",
    },
  },
  {
    id: "tweet-2036760002548138308",
    url: "https://x.com/DrapzDZN/status/2036760002548138308",
    authorName: "Drapz",
    authorHandle: "DrapzDZN",
    avatarUrl: "https://pbs.twimg.com/profile_images/1968704278446612480/ijkYnB8a_normal.jpg",
    text: "Charged $4,000 for a brand. The client made it back in the first week. They told me: 'We closed 3 deals we would have lost with the old branding.' This is why design isn't a cost. It's an investment https://t.co/nwQwfGnN0z",
    tags: ["Design"],
    postedAt: "2026-03-25",
    media: {
      type: "image",
      src: "https://pbs.twimg.com/media/HEQBoKUbUAEfCX2.jpg",
      alt: "Drapz image preview",
      thumbSrc: "https://pbs.twimg.com/media/HEQBoKUbUAEfCX2.jpg",
      aspectRatio: "video",
    },
  },
  {
    id: "tweet-2036775214160232717",
    url: "https://x.com/pdotcv/status/2036775214160232717",
    authorName: "Paul Macgregor",
    authorHandle: "pdotcv",
    avatarUrl: "https://pbs.twimg.com/profile_images/1862280749086294016/IuQHCw-k_normal.jpg",
    text: "Fucking about with Berkeley mono and 80s tv theme tunes. https://t.co/3XDAfBBpFo",
    tags: ["Design","ASCII"],
    postedAt: "2026-03-25",
    media: {
      type: "video",
      src: "https://video.twimg.com/amplify_video/2036775135899000832/vid/avc1/480x270/FLQh01PDQpLedPuY.mp4?tag=14",
      poster: "https://pbs.twimg.com/amplify_video_thumb/2036775135899000832/img/VGCSgk_6s9q4ENbZ.jpg",
      alt: "Paul Macgregor video preview",
      aspectRatio: "video",
    },
  },
  {
    id: "tweet-2037713766205608234",
    url: "https://x.com/_chenglou/status/2037713766205608234",
    authorName: "Cheng Lou",
    authorHandle: "_chenglou",
    avatarUrl: "https://pbs.twimg.com/profile_images/1769736308866613249/ddCXmG6-_normal.jpg",
    text: "My dear front-end developers (and anyone who’s interested in the future of interfaces): I have crawled through depths of hell to bring you, for the foreseeable years, one of the more important foundational pieces of UI engineering (if not in implementation then certainly at https://t.co/BKnwCDIp75",
    tags: ["Performance"],
    postedAt: "2026-03-28",
    media: {
      type: "video",
      src: "https://video.twimg.com/amplify_video/2037713657334042624/vid/avc1/416x270/qh_skljVrRo2wusf.mp4",
      poster: "https://pbs.twimg.com/amplify_video_thumb/2037713657334042624/img/XfCSjcN7-iX8b_fJ.jpg",
      alt: "Cheng Lou video preview",
      aspectRatio: "video",
    },
  },
  {
    id: "tweet-2015930122776564113",
    url: "https://x.com/rincidium/status/2015930122776564113",
    authorName: "Ray",
    authorHandle: "rincidium",
    avatarUrl: "https://pbs.twimg.com/profile_images/1725951239370719232/JrBNTdhv_normal.jpg",
    text: "Create an OG image for your website with Nano Banana Pro: Create a premium open-graph hero image for [BRAND]: A wide horizontal layout (16:9 ratio) designed for social sharing, website headers, and marketing collateral. This is a high-end designer mockup presentation suitable https://t.co/lukbEV8uUf",
    tags: ["Design","Generative AI"],
    postedAt: "2026-01-26",
    media: {
      type: "image",
      src: "https://pbs.twimg.com/media/G_oFrWmbAAIrFjK.jpg",
      alt: "Ray image preview",
      thumbSrc: "https://pbs.twimg.com/media/G_oFrWmbAAIrFjK.jpg",
      aspectRatio: "video",
    },
  },
  {
    id: "tweet-2018354238867591321",
    url: "https://x.com/ctnicholasdev/status/2018354238867591321",
    authorName: "Chris Nicholas",
    authorHandle: "ctnicholasdev",
    avatarUrl: "https://pbs.twimg.com/profile_images/1401194362927816708/0c3yTtri_normal.jpg",
    text: "Interactive article: How to animate multiplayer cursors. Rendering smooth cursors always needs interpolation, as network conditions are never perfect—here's how to do it. I wrote this a few years back, techniques still apply! Link ↓ https://t.co/hrhb3jHqQA",
    tags: ["Animation"],
    postedAt: "2026-02-02",
    media: {
      type: "video",
      src: "https://video.twimg.com/amplify_video/2018354217266864128/vid/avc1/398x270/3e-3qcNktDTdU81u.mp4?tag=14",
      poster: "https://pbs.twimg.com/amplify_video_thumb/2018354217266864128/img/a5FEKvd4IZJigVcc.jpg",
      alt: "Chris Nicholas video preview",
      aspectRatio: "video",
    },
  },
  {
    id: "tweet-2018645043909939419",
    url: "https://x.com/viktoroddy/status/2018645043909939419",
    authorName: "Viktor Oddy",
    authorHandle: "viktoroddy",
    avatarUrl: "https://pbs.twimg.com/profile_images/1941325782829113344/buT3DYqx_normal.jpg",
    text: "Google Flow is so freaking good at animating backgrounds for landing pages. https://t.co/plkl9JEbxR",
    tags: ["Design","Generative AI"],
    postedAt: "2026-02-03",
    media: {
      type: "video",
      src: "https://video.twimg.com/amplify_video/2018644939614396416/vid/avc1/380x270/3dDaoD3gGE2lz50P.mp4",
      poster: "https://pbs.twimg.com/amplify_video_thumb/2018644939614396416/img/5TVBCqPNyfMPubOX.jpg",
      alt: "Viktor Oddy video preview",
      aspectRatio: "video",
    },
  },
  {
    id: "tweet-2018725322712027255",
    url: "https://x.com/viktorhofte/status/2018725322712027255",
    authorName: "Viktor Hofte",
    authorHandle: "viktorhofte",
    avatarUrl: "https://pbs.twimg.com/profile_images/2016541488801300480/Kfzg_cVM_normal.jpg",
    text: "Midday onboarding https://t.co/7tx97Dl7zp",
    tags: ["Design","Onboarding"],
    postedAt: "2026-02-03",
    media: {
      type: "video",
      src: "https://video.twimg.com/amplify_video/2018725062115770370/vid/avc1/404x270/lVJpAe7hExBig5mI.mp4",
      poster: "https://pbs.twimg.com/amplify_video_thumb/2018725062115770370/img/l3lwQqGM8Xoxh65i.jpg",
      alt: "Viktor Hofte video preview",
      aspectRatio: "video",
    },
  },
  {
    id: "tweet-2019751466169229542",
    url: "https://x.com/diegohaz/status/2019751466169229542",
    authorName: "Haz",
    authorHandle: "diegohaz",
    avatarUrl: "https://pbs.twimg.com/profile_images/1964797260597772288/uQG557we_normal.jpg",
    text: "Modern CSS capabilities. https://t.co/mfltY8fF8v",
    tags: ["CSS"],
    postedAt: "2026-02-06",
    media: {
      type: "image",
      src: "https://pbs.twimg.com/media/HAeYH2ka0AArVkA.jpg",
      alt: "Haz image preview",
      thumbSrc: "https://pbs.twimg.com/media/HAeYH2ka0AArVkA.jpg",
      aspectRatio: "square",
    },
  },
  {
    id: "tweet-2021671940646482267",
    url: "https://x.com/sorenblank/status/2021671940646482267",
    authorName: "Soren",
    authorHandle: "sorenblank",
    avatarUrl: "https://pbs.twimg.com/profile_images/1966223633124306948/z6mSaCz7_normal.jpg",
    text: "here's how I optimized video assets on my site and improved perceived performance: - added a tiny ( ~30px wide ) `base64` encoded blurred inline image for each snippet, rendered as an <img> underneath the video ( renders instantly! ) - moved all the videos to @Cloudflare CDN. https://t.co/Hq1H6XZqOd",
    tags: ["Performance"],
    postedAt: "2026-02-11",
    media: {
      type: "video",
      src: "https://video.twimg.com/amplify_video/2021662742655250433/vid/avc1/432x270/7nysLaEjeLb1gizD.mp4",
      poster: "https://pbs.twimg.com/amplify_video_thumb/2021662742655250433/img/3sUGNAFLfw1e7DD4.jpg",
      alt: "Soren video preview",
      aspectRatio: "video",
    },
  },
  {
    id: "tweet-2024146610398130486",
    url: "https://x.com/jh3yy/status/2024146610398130486",
    authorName: "jhey ʕ•ᴥ•ʔ",
    authorHandle: "jh3yy",
    avatarUrl: "https://pbs.twimg.com/profile_images/1534700564810018816/anAuSfkp_normal.jpg",
    text: "the trick to this css card glow/shine effect is blurring a duplicated layer that moves around 👨‍🍳 the og post mentions feGaussianBlur but you can use css filter blur too (there's a toggle 👇) filter: blur(28px) saturate(5) brightness(1.3) jus' need to test what plays best! https://t.co/t9L3Br8GlV",
    tags: ["Design"],
    postedAt: "2026-02-18",
    media: {
      type: "video",
      src: "https://video.twimg.com/amplify_video/2024145312747524097/vid/avc1/320x320/APtuP2ovWnoIKGfx.mp4",
      poster: "https://pbs.twimg.com/amplify_video_thumb/2024145312747524097/img/zEj6I3NCgC5wZYhq.jpg",
      alt: "jhey ʕ•ᴥ•ʔ video preview",
      aspectRatio: "square",
    },
  },
];
