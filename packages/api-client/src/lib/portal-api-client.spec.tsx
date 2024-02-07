import { render } from '@testing-library/react'

import PortalApiClient from './portal-api-client'

describe('PortalApiClient', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<PortalApiClient />)
    expect(baseElement).toBeTruthy()
  })
})
