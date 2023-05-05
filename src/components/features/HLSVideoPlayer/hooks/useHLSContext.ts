import { useContext } from 'react'

import HLSContext from '../context/HLSContext'

export function useHLSContext() {
  const context = useContext(HLSContext)

  if (context === undefined) {
    throw new Error('useHLSContext must be used within HLSProvider')
  }

  return context
}
