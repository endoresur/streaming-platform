import { useContext } from 'react'

import StoreContext from 'context/StoreContext'

export function useRootStore() {
  const context = useContext(StoreContext)

  if (context === undefined) {
    throw new Error('useRootStore must be used within RootStoreProvider')
  }

  return context
}
