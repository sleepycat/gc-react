import { expect, describe, it } from '@jest/globals'
import { render, screen } from '@testing-library/react'
import { Signature } from '../Signature'

describe('<Signature>', () => {
  it('renders an svg image', async () => {
    render(<Signature ariaLabel='Canadian flag'>
    test
    </Signature>)
    const image = await screen.findByRole('img')
    expect(image).toBeTruthy()
  })

  // it('includes the ariaLable text in the image', async () => {
  //   render(<Signature ariaLabel='Canadian flag'>
  //   test
  //   </Signature>)
  //   const image = await screen.findByRole('img')
  //   // can't test aria-label because JSDOM doesn't support this yet
  //   // https://github.com/jsdom/jsdom/issues/3323
  //   expect(image.ariaLabel).toEqual("Canadian flag")
  // })
})
