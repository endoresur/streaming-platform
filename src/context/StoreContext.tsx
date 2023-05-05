import { createContext } from 'react'

import RootStore from 'stores/RootStore'

const StoreContext = createContext<RootStore | undefined>(undefined)

export default StoreContext
