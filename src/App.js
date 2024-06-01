import React from 'react'
import { PhacSignature } from './PhacSignature'

import LocaleSwitcher from './LocaleSwitcher.js'
import { Plural, Trans } from '@lingui/macro'
import { useLingui } from '@lingui/react'

function Signature({ language = 'en', children }) {
  return (
    <div>
      <svg
        width="65.668999"
        height="2em"
        role="img"
        style={{ paddingRight: "0.7em", float: "left" }}
        aria-label="Canadian flag"
        preserveAspectRatio="xMinYMin"
        viewBox="-15 0 58.091869 31.116"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fill="#ea2d37"
          d="m 15.675,6.467 2.223,-4.443 2.206,4.281 c 0.275,0.452 0.499,0.415 0.938,0.2 l 1.898,-0.921 -1.234,5.977 c -0.258,1.174 0.422,1.518 1.162,0.722 l 2.705,-2.837 0.718,1.605 c 0.241,0.485 0.605,0.415 1.086,0.328 l 2.794,-0.577 -0.938,3.464 v 0.074 c -0.11,0.453 -0.33,0.83 0.186,1.05 l 0.993,0.485 -5.782,4.783 c -0.587,0.593 -0.384,0.776 -0.164,1.444 l 0.532,1.605 -5.372,-0.954 c -0.663,-0.162 -1.124,-0.162 -1.14,0.361 l 0.219,6.048 h -1.614 l 0.22,-6.031 c 0,-0.594 -0.461,-0.577 -1.547,-0.357 l -4.983,0.937 0.642,-1.605 c 0.22,-0.614 0.279,-1.029 -0.22,-1.444 l -5.87,-4.716 1.086,-0.651 c 0.313,-0.237 0.33,-0.486 0.165,-1.013 L 5.48,10.777 8.311,11.37 c 0.79,0.183 1.01,0 1.213,-0.414 l 0.79,-1.59 2.799,3.07 c 0.494,0.577 1.196,0.2 0.976,-0.63 l -1.344,-6.48 2.08,1.174 c 0.329,0.2 0.68,0.253 0.883,-0.124 M 35.099,0 h 15.57 V 31.116 H 35.099 Z M -15,0 H 0.57 V 31.116 H -15 Z"
        />
      </svg>
      <span style={{ fontFamily: "Overused Grotesk", lineHeight: "1.1" }}>
        <p>{children}</p>
      </span >
    </div>
  )
}

export default function App() {
  const { i18n } = useLingui()
  return (
    <main>
      <div>
        <PhacSignature language={i18n.locale} />
      </div>
      <div>
        <LocaleSwitcher />
      </div>

      <Trans>Make changes to your account.</Trans>
      <br />
      <Signature>
        <Trans>Government<br />of Canada</Trans>
      </Signature>
      <Signature>
        <Trans>Public Health<br />Agency of Canada</Trans>
      </Signature>
      <br />Government of Canada
    </main>
  )
}
