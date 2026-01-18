// Audio Configuration
// Update this file with your song details

export interface SongDetails {
  src: string
  title: string
  artist?: string
  album?: string
  year?: number
}

export const audioConfig: SongDetails = {
  // Path to your audio file in public/audio/
  src: '/audio/wedding-music.mp3',
  
  // Song information (optional - for display purposes)
  title: 'Wedding Background Music',
  artist: 'Your Artist Name',
  album: 'Wedding Collection',
  year: 2026,
}

// Alternative: If you have multiple songs, you can use an array
export const playlist: SongDetails[] = [
  {
    src: '/audio/wedding-music.mp3',
    title: 'Wedding Background Music',
    artist: 'Your Artist Name',
  },
  // Add more songs if needed
  // {
  //   src: '/audio/song-2.mp3',
  //   title: 'Another Song',
  //   artist: 'Another Artist',
  // },
]

