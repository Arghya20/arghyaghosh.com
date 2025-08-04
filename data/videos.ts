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
    thumbnail: "https://img.youtube.com/vi/jZSQisglgZM/hqdefault.jpg", // Smaller image for better performance
  },
  {
    id: 2,
    videoId: "8ee17hbvok",
    thumbnail: "https://img.youtube.com/vi/u8e2HN-Z1-A/hqdefault.jpg", // Smaller image for better performance
  },
  {
    id: 3,
    videoId: "t39fb32elt",
    thumbnail: "https://img.youtube.com/vi/5MHLYfqdszg/hqdefault.jpg", // Smaller image for better performance
  },
  {
    id: 4,
    videoId: "l0ynq2f6v4",
    thumbnail: "https://img.youtube.com/vi/vpUZ3oNKRT0/hqdefault.jpg", // Smaller image for better performance
  },
  {
    id: 5,
    videoId: "_yUGiQa6H54",
    youtubeId: "_yUGiQa6H54",
    thumbnail: "https://img.youtube.com/vi/_yUGiQa6H54/hqdefault.jpg", // Smaller image for better performance
    type: "youtube",
  },
  {
    id: 6,
    videoId: "ZQXKp-ha89c",
    youtubeId: "ZQXKp-ha89c",
    thumbnail: "https://img.youtube.com/vi/ZQXKp-ha89c/hqdefault.jpg", // Smaller image for better performance
    type: "youtube",
  },
];
