import { render } from '@testing-library/react'

import { App } from '.'

describe('App', () => {
  test('renders without crashing', () => {
    render(<App />)
  })
})
