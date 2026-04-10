import type { MetadataRoute } from 'next';

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'Asif Contracting Corp',
    short_name: 'Asif Contracting',
    description: "NYC's #1 Construction Company — 21+ Years of Excellence",
    start_url: '/',
    display: 'standalone',
    background_color: '#ffffff',
    theme_color: '#0F2A4A',
    icons: [
      {
        src: '/icon-192.png',
        sizes: '192x192',
        type: 'image/png',
      },
      {
        src: '/icon-512.png',
        sizes: '512x512',
        type: 'image/png',
      },
    ],
  };
}
