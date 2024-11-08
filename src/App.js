import LocaleSwitcher from './LocaleSwitcher.js'
import { Trans, t } from '@lingui/macro'
import { Wordmark } from './Wordmark.js'
import { Signature } from './Signature.js'
import { useLingui } from '@lingui/react'

import { css } from '../styled-system/css'

const headerClass = css`
  padding: 1em;
  display: flex;
  justify-content: space-between;
`
const mainClass = css`
  width: 80%;
  margin: auto auto;
  flex: 1 0 auto;
`

const footerClass = css`
  padding: 1em;
  display: flex;
  flex-shrink: 0;
  justify-content: flex-end;
  background-color: #f1f2f3;
`

export default function App() {
  const { i18n } = useLingui()
  return (
    <>
      <header className={headerClass}>
        {/* 
         No need for "skip to main content" links:
         "The main role is a non-obtrusive alternative for "skip to main content" links"
         https://www.w3.org/TR/wai-aria/#main
        */}
        <Signature ariaLabel={t`Canadian Flag`}>
          <Trans>
            Public Health
            <br />
            Agency of Canada
          </Trans>
        </Signature>
        <LocaleSwitcher />
      </header>
      <main className={mainClass}>
        <Trans>Some test content.</Trans>
      </main>
      <footer className={footerClass}>
        <Wordmark
          ariaLabel={t`Symbol of the Government of Canada`}
          width="10em"
        />
      </footer>
    </>
  )
}
