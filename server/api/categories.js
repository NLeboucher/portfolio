import { defineEventHandler } from 'h3'

export default defineEventHandler(() => {
  return [
    {
      id: 1,
      title: {
        en: 'Song',
        id_ID: 'Musique',
      },
    },
    {
      id: 2,
      title: {
        en: 'App',
        id_ID: 'Applications',
      },
    },
    {
      id: 3,
      title: {
        en: 'Web Design',
        id_ID: 'Conception Web',
      },
    },
  ]
})
