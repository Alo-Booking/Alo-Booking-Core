import { render } from '@testing-library/react'

import SearchBar from './SearchBar'

describe('SearchBar', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<SearchBar />)
    expect(baseElement).toBeTruthy()
  })
})
