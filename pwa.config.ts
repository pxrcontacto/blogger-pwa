import type { Config } from './types';

export default {
  /* =====================
   * IDENTIDAD DE LA APP
   * ===================== */
  id: '/',
  name: 'PORXRAZON INFO',
  shortName: 'PORXRAZON',
  description: 'Noticias, actualidad y análisis – PORXRAZON INFO',
  direction: 'auto',
  language: 'es-ES',

  /* =====================
   * COLORES Y UI
   * ===================== */
  backgroundColor: '#7b2cff',
  themeColor: '#7b2cff',
  appleStatusBarStyle: 'black-translucent',

  /* =====================
   * COMPORTAMIENTO APP
   * ===================== */
  display: 'standalone',
  orientation: 'portrait',
  scope: '/',
  startUrl: '/?utm_source=homescreen',
  preferRelatedApplications: false,

  /* =====================
   * SHORTCUTS (ACCESOS RÁPIDOS)
   * ===================== */
  shortcuts: [
    {
      name: 'Últimas noticias',
      shortName: 'Noticias',
      description: 'Ver las últimas noticias',
      url: '/search/label/Noticias?utm_source=homescreen',
    },
    {
      name: 'Política',
      shortName: 'Política',
      description: 'Noticias de política',
      url: '/search/label/Política?utm_source=homescreen',
    },
    {
      name: 'Deportes',
      shortName: 'Deportes',
      description: 'Noticias deportivas',
      url: '/search/label/Deportes?utm_source=homescreen',
    },
  ],

  /* =====================
   * PWA FEATURES
   * ===================== */
  pwa: {
    logs: false, // poner true solo si estás debugueando

    // OneSignal SOLO funciona con dominio propio + Cloudflare
    oneSignalEnabled: false,

    oneSignalConfig: {
      appId: '', // dejar vacío si no usás OneSignal
      allowLocalhostAsSecureOrigin: false,
    },
  },

  /* =====================
   * URL REAL DEL BLOG
   * ===================== */
  origin: 'https://porxrazoninfo.blogspot.com',

} satisfies Config;
