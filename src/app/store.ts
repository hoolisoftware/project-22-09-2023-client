import { configureStore } from '@reduxjs/toolkit'

import themeReducer from '../features/theme/themeReducer'
import modalsReducer from '../features/modals/modalsReducer'

export const store = configureStore({
  reducer: {
    theme: themeReducer,
    modals: modalsReducer
  },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
