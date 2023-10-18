import { createSlice } from '@reduxjs/toolkit'

interface ThemeState {
    modeDark: boolean
}

const initialState: ThemeState = {
    modeDark: JSON.parse(localStorage.getItem('modeDark')||'true'),
}

export const modalSlice = createSlice({
    name: 'theme',
    initialState,
    reducers: {
        toggleTheme: (state) => {
            localStorage.setItem('modeDark', JSON.stringify(!state.modeDark))
            state.modeDark = !state.modeDark
        },
    },
})

export const { toggleTheme } = modalSlice.actions

export default modalSlice.reducer