import { expect, it, describe } from '@jest/globals'
import { render, screen } from '@testing-library/react'
import { Wordmark } from '../Wordmark.js'

describe('<Wordmark />', () => {
  it('renders an image', async () => {
    render(<Wordmark ariaLabel="foo" />)
    const image = await screen.findByRole('img')
    expect(image).toBeTruthy()
  })

  it('requires an aria-label', async () => {
    render(<Wordmark ariaLabel="foo" />)
    const image = await screen.findByRole('img')
    expect(image.getAttribute('aria-label')).toEqual('foo')
  })

  it('has preserve aspect ratio set', async () => {
    render(<Wordmark ariaLabel="" />)
    const image = await screen.findByRole('img')
    expect(image.getAttribute('preserveAspectRatio')).toEqual('xMinYMin meet')
  })

  // Width test section

  it('accepts a width prop', async () => {
    render(<Wordmark width={'10em'} ariaLabel="" />)
    const image = await screen.findByRole('img')
    expect(image.getAttribute('width')).toEqual('10em')
  })
  it('defaults to width of 20%', async () => {
    render(<Wordmark ariaLabel="" />)
    const image = await screen.findByRole('img')
    expect(image.getAttribute('width')).toEqual('20%')
  })

  // Color test section: this might be too coupled to the implementation, as we are testing the fill propoerty of the SVG path

  const TextColor = ['black', 'white']

  it.each(['black', 'white'])(
    'textColor sets the text color: %n',
    async (desiredTextColor) => {
      render(<Wordmark textColor={desiredTextColor} ariaLabel="" />)

      const image = await screen.findByRole('img')

      const textColor = image.querySelector('path.fip_text')
      expect(textColor).not.toBe(null)
      if (textColor !== null) {
        expect(textColor.getAttribute('fill')).toEqual(desiredTextColor)
      }
    },
  )

  // and now test the variant attribute affect the fill color of the flag
  it.each(['black', 'white'])(
    'monochrome variant renders flag same color as text: %n',
    async (desiredTextColor) => {
      render(
        <Wordmark
          textColor={desiredTextColor}
          variant="monochrome"
          ariaLabel=""
        />,
      )

      const image = await screen.findByRole('img')

      const flagColor = image.querySelector('path.fip_flag')
      expect(flagColor).not.toBe(null)
      if (flagColor !== null) {
        expect(flagColor.getAttribute('fill')).toEqual(desiredTextColor)
      }
    },
  )

  it.each(['black', 'white'])(
    'color variant always renders flag as red: %n',
    async (desiredTextColor) => {
      render(
        <Wordmark textColor={desiredTextColor} variant="color" ariaLabel="" />,
      )

      const image = await screen.findByRole('img')

      const canadaRed = '#EA2D37'

      const flagColor = image.querySelector('path.fip_flag')
      expect(flagColor).not.toBe(null)
      if (flagColor !== null) {
        expect(flagColor.getAttribute('fill')).toEqual(canadaRed)
      }
    },
  )
})
