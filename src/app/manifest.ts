import { MetadataRoute } from 'next'

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'Pizzata - Authentic Italian Pizza',
    short_name: 'Pizzata',
    description: 'Authentic Italian pizza restaurant. Born in Napoli, baked in Nitra.',
    start_url: '/',
    display: 'standalone',
    background_color: '#0c0a10',
    theme_color: '#0c0a10',
    icons: [
      {
        src: '/icon-192x192.png',
        sizes: '192x192',
        type: 'image/png',
      },
      {
        src: '/icon-512x512.png',
        sizes: '512x512',
        type: 'image/png',
      },
    ],
  }
}


