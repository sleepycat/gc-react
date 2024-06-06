import LocaleSwitcher from './LocaleSwitcher.js'
import { Plural, Trans } from '@lingui/macro'
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
        <Signature>
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
      <hr />
      <footer className={footerClass}>
        <Wordmark width='10em' />
      </footer>
    </>
  )
}
