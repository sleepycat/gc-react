import { LinguiConfig } from '@lingui/conf'

const config = {
  locales: ['en', 'fr'],
  sourceLocale: 'en',
  catalogs: [
    {
      path: 'src/locales/{locale}/messages',
      include: ['src'],
    },
  ],
  format: 'po',
}

export default config
