import i18next from 'i18next'
import { initReactI18next } from 'react-i18next'

i18next
  .use(initReactI18next)
  .init(
    {
      interpolation: {
        // React already does escaping
        escapeValue: false,
      },
      lng: 'vi', // 'en' | 'vn'
      resources: {
        vi: {
          translation: {
            home_page: {
              about: 'Về tôi',
            }
          },
        },
      }
    },
    (err, t) => {
      if (err) {
        return console.error(err)
      }
    }
  )

export default i18next