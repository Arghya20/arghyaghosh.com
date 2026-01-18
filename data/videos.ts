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
    thumbnail: "https://i.ytimg.com/vi/dQw4w9WgXcQ/hqdefault.jpg", // Popular video for testing
  },
  {
    id: 2,
    videoId: "8ee17hbvok",
    thumbnail: "https://i.ytimg.com/vi/9bZkp7q19f0/hqdefault.jpg", // Popular video for testing
  },
  {
    id: 3,
    videoId: "t39fb32elt",
    thumbnail: "https://i.ytimg.com/vi/kJQP7kiw5Fk/hqdefault.jpg", // Popular video for testing
  },
  {
    id: 4,
    videoId: "l0ynq2f6v4",
    thumbnail: "https://i.ytimg.com/vi/fJ9rUzIMcZQ/hqdefault.jpg", // Popular video for testing
  },
  {
    id: 5,
    videoId: "_yUGiQa6H54",
    youtubeId: "_yUGiQa6H54",
    thumbnail: "https://i.ytimg.com/vi/L_jWHffIx5E/hqdefault.jpg", // Popular video for testing
    type: "youtube",
  },
  {
    id: 6,
    videoId: "ZQXKp-ha89c",
    youtubeId: "ZQXKp-ha89c",
    thumbnail: "https://i.ytimg.com/vi/ScMzIvxBSi4/hqdefault.jpg", // Popular video for testing
    type: "youtube",
  },
];
