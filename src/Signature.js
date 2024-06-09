import { string } from 'prop-types'
export function Signature({ ariaLabel, children }) {
  return (
    <div>
      <svg
        width="17.374922mm"
        height="8.2327747mm"
        // biome-ignore lint: alt text doesn't work on SVG. Doing aria-label and role="img"
        role="img"
        aria-label={ariaLabel}
        style={{ float: 'left' }}
        preserveAspectRatio="xMinYMin"
        xmlns="http://www.w3.org/2000/svg"
      >
        <title>{ariaLabel}</title>
        <path
          fill="#ea2d37"
          d="m 30.675,6.467 2.223,-4.443 2.206,4.281 c 0.275,0.452 0.499,0.415 0.938,0.2 l 1.898,-0.921 -1.234,5.977 c -0.258,1.174 0.422,1.518 1.162,0.722 l 2.705,-2.837 0.718,1.605 c 0.241,0.485 0.605,0.415 1.086,0.328 l 2.794,-0.577 -0.938,3.464 v 0.074 c -0.11,0.453 -0.33,0.83 0.186,1.05 l 0.993,0.485 -5.782,4.783 c -0.587,0.593 -0.384,0.776 -0.164,1.444 l 0.532,1.605 -5.372,-0.954 c -0.663,-0.162 -1.124,-0.162 -1.14,0.361 l 0.219,6.048 h -1.614 l 0.22,-6.031 c 0,-0.594 -0.461,-0.577 -1.547,-0.357 l -4.983,0.937 0.642,-1.605 c 0.22,-0.614 0.279,-1.029 -0.22,-1.444 l -5.87,-4.716 1.086,-0.651 c 0.313,-0.237 0.33,-0.486 0.165,-1.013 l -1.104,-3.505 2.831,0.593 c 0.79,0.183 1.01,0 1.213,-0.414 l 0.79,-1.59 2.799,3.07 c 0.494,0.577 1.196,0.2 0.976,-0.63 l -1.344,-6.48 2.08,1.174 c 0.329,0.2 0.68,0.253 0.883,-0.124 M 50.099,0 h 15.57 V 31.116 H 50.099 Z M 0,0 H 15.57 V 31.116 H 0 Z"
        />
      </svg>
      <span
        style={{
          paddingLeft: '1.0em',
          display: 'inline-block',
          fontFamily: 'Overused Grotesk',
          lineHeight: '1.1',
        }}
      >
        <p>{children}</p>
      </span>
    </div>
  )
}

Signature.propTypes = {
  ariaLabel: string.isRequired,
}
