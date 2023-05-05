/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { enableStaticRendering } from 'mobx-react-lite'
import React, { ReactNode } from 'react'

import RootStore from 'stores/RootStore'

import StoreContext from './StoreContext'

enableStaticRendering(typeof window === 'undefined')

let rootStore: RootStore

export function StoreProvider({ children, hydrationData }: { children: ReactNode; hydrationData?: any }): JSX.Element {
  const store = initializeStore(hydrationData)
  return <StoreContext.Provider value={store}>{children}</StoreContext.Provider>
}

function initializeStore(initialData?: any): RootStore {
  const _store = rootStore ?? new RootStore()

  // For SSG and SSR always create a new store
  if (typeof window === 'undefined') return _store
  // Create the store once in the client
  if (!rootStore) rootStore = _store

  return _store
}
