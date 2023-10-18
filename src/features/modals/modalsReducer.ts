import { createSlice } from '@reduxjs/toolkit'

interface ModalsState {
    modalBar: boolean
    modalBranch: boolean
}

const initialState: ModalsState = {
    modalBar: JSON.parse(localStorage.getItem('modalBar')||'false'),
    modalBranch: JSON.parse(localStorage.getItem('modalBranch')||'false')
}

export const modalSlice = createSlice({
    name: 'theme',
    initialState,
    reducers: {
        toggleModalBar: (state) => {
            localStorage.setItem('modalBar', JSON.stringify(!state.modalBar))
            state.modalBar = !state.modalBar
        },
        toggleModalBranch: (state) => {
            localStorage.setItem('modalBranch', JSON.stringify(!state.modalBranch))
            state.modalBranch = !state.modalBranch
        },
    },
})

export const { toggleModalBar, toggleModalBranch } = modalSlice.actions

export default modalSlice.reducer