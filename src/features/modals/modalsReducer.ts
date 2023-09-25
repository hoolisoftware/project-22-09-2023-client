import { createSlice } from '@reduxjs/toolkit'

interface ModalsState {
    modalBar: boolean
    modalBranch: boolean
}

const initialState: ModalsState = {
    modalBar: false,
    modalBranch: false
}

export const modalSlice = createSlice({
    name: 'theme',
    initialState,
    reducers: {
        toggleModalBar: (state) => {
            state.modalBar = !state.modalBar
        },
        toggleModalBranch: (state) => {
            state.modalBranch = !state.modalBranch
        },
    },
})

export const { toggleModalBar, toggleModalBranch } = modalSlice.actions

export default modalSlice.reducer