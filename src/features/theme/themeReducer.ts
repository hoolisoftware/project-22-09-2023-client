import { createSlice } from '@reduxjs/toolkit'

interface ModalState {
    modeDark: boolean
}

const initialState: ModalState = {
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