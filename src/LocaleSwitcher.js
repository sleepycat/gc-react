import React from 'react'
import { useLingui } from '@lingui/react'
import Locale from './locales'
import { css } from '../styled-system/css'

const className = css`
  padding: 1em 2em;
  cursor: pointer;
  background: none;
  border: none;
  text-decoration: underline;
`

function LocaleSwitcher() {
  const { i18n } = useLingui()

  const handleLocaleChange = (newLocale) => {
    i18n.activate(newLocale)
  }

  if (i18n.locale === Locale.ENGLISH) {
    return (
      <button
        className={className}
        onClick={() => handleLocaleChange(Locale.FRENCH)}
      >
        Français
      </button>
    )
  } else if (i18n.locale === Locale.FRENCH) {
    return (
      <button
        className={className}
        onClick={() => handleLocaleChange(Locale.ENGLISH)}
      >
        English
      </button>
    )
  }
}

export default LocaleSwitcher
