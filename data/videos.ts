export interface Video {
  id: string;
  title: string;
  description: string;
  thumbnail: string;
  videoUrl: string;
  duration: string;
}

export const videos: Video[] = [
  {
    id: '1',
    title: 'Ocean Waves',
    description: 'Relaxing ocean waves crashing on a pristine beach',
    thumbnail: '',
    videoUrl: 'https://sample-videos.com/zip/10/mp4/SampleVideo_1280x720_1mb.mp4',
    duration: '2:30'
  },
  {
    id: '2',
    title: 'Mountain Sunrise',
    description: 'Beautiful sunrise over snow-capped mountains',
    thumbnail: 'https://images.pexels.com/photos/933054/pexels-photo-933054.jpeg?auto=compress&cs=tinysrgb&w=800',
    videoUrl: 'https://sample-videos.com/zip/10/mp4/SampleVideo_1280x720_2mb.mp4',
    duration: '3:45'
  },
  {
    id: '3',
    title: 'City Lights',
    description: 'Vibrant city skyline illuminated at night',
    thumbnail: 'https://images.pexels.com/photos/374825/pexels-photo-374825.jpeg?auto=compress&cs=tinysrgb&w=800',
    videoUrl: 'https://sample-videos.com/zip/10/mp4/SampleVideo_1280x720_1mb.mp4',
    duration: '1:50'
  },
  {
    id: '4',
    title: 'Forest Path',
    description: 'Peaceful walk through an ancient forest',
    thumbnail: 'https://images.pexels.com/photos/1557238/pexels-photo-1557238.jpeg?auto=compress&cs=tinysrgb&w=800',
    videoUrl: 'https://sample-videos.com/zip/10/mp4/SampleVideo_1280x720_2mb.mp4',
    duration: '4:20'
  },
  {
    id: '5',
    title: 'Desert Dunes',
    description: 'Golden sand dunes shifting in the wind',
    thumbnail: 'https://images.pexels.com/photos/847402/pexels-photo-847402.jpeg?auto=compress&cs=tinysrgb&w=800',
    videoUrl: 'https://sample-videos.com/zip/10/mp4/SampleVideo_1280x720_1mb.mp4',
    duration: '2:15'
  }
];