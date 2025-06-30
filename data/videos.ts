export interface Video {
  id: number;
  videoId: string;
  thumbnail?: string;
  type?: "youtube" | "wistia";
  youtubeId?: string;
}

export const videos: Video[] = [
  {
    id: 1,
    videoId: "g6se1x2eam",
    thumbnail: "https://fast.wistia.com/embed/medias/g6se1x2eam/swatch",
  },
  {
    id: 2,
    videoId: "8ee17hbvok",
    thumbnail: "https://img.youtube.com/vi/u8e2HN-Z1-A/maxresdefault.jpg",
  },
  {
    id: 3,
    videoId: "l0ynq2f6v4",
    thumbnail: "https://fast.wistia.com/embed/medias/l0ynq2f6v4/swatch",
  },
  {
    id: 4,
    videoId: "g6se1x2eam",
    thumbnail: "https://fast.wistia.com/embed/medias/g6se1x2eam/swatch",
  },
  {
    id: 5,
    videoId: "_yUGiQa6H54",
    youtubeId: "_yUGiQa6H54",
    thumbnail: "https://img.youtube.com/vi/_yUGiQa6H54/maxresdefault.jpg",
    type: "youtube",
  },
  {
    id: 6,
    videoId: "ZQXKp-ha89c",
    youtubeId: "ZQXKp-ha89c",
    thumbnail: "https://img.youtube.com/vi/ZQXKp-ha89c/maxresdefault.jpg",
    type: "youtube",
  },
];
