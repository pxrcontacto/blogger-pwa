import type { Config } from './types';

export default {
  id: '/',
  name: 'PORXRAZON INFO',
  shortName: 'PORXRAZON',
  description: '¡Te acompañamos en cualquier parte del mundo!',
  direction: 'auto',
  language: 'en-US',
  backgroundColor: '#ffffff',
  themeColor: '#ffffff',
  display: 'standalone',
  orientation: 'natural',
  scope: '/',
  startUrl: '/?utm_source=homescreen',
  appleStatusBarStyle: 'black-translucent',
  preferRelatedApplications: false,
  shortcuts: [
    {
      name: 'Inicio',
      shortName: 'Inicio',
      description: 'Página principal',
      url: '/?utm_source=homescreen',
    },
    {
      name: 'Noticias',
      shortName: 'Noticias',
      description: 'Últimas noticias',
      url: '/search?utm_source=homescreen',
    },
  ],
  pwa: {
    logs: true,
    oneSignalEnabled: false,
  },
  origin: 'https://porxrazoninfo.blogspot.com/',
} satisfies Config;
