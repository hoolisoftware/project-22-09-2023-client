import { createSlice } from '@reduxjs/toolkit'

interface ThemeState {
    modeDark: boolean
}

const initialState: ThemeState = {
    modeDark: true,
}

export const modalSlice = createSlice({
    name: 'theme',
    initialState,
    reducers: {
        toggleTheme: (state) => {
            state.modeDark = !state.modeDark
        },
    },
})

export const { toggleTheme } = modalSlice.actions

export default modalSlice.reducer