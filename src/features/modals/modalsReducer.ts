import { createSlice } from '@reduxjs/toolkit'

interface ModalsState {
    modalBranch: boolean
}

const initialState: ModalsState = {
    modalBranch: false,
}

export const modalSlice = createSlice({
    name: 'theme',
    initialState,
    reducers: {
        toggleModalBranch: (state) => {
            state.modalBranch = !state.modalBranch
        },
    },
})

export const { toggleModalBranch } = modalSlice.actions

export default modalSlice.reducer