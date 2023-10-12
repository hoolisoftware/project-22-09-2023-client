import { configureStore } from '@reduxjs/toolkit'

import themeReducer from '../features/theme/themeReducer'
import modalsReducer from '../features/modals/modalsReducer'
import filtersReducer from '@/features/filters/filtersReducer'

export const store = configureStore({
  reducer: {
    theme: themeReducer,
    modals: modalsReducer,
    filters: filtersReducer
  },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
