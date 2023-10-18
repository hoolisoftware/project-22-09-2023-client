import { createSlice } from '@reduxjs/toolkit'
import type {
    APIOrganization,
    APIBranch
} from '@/global/models'

interface FiltersState {
    organization: APIOrganization,
    branch: APIBranch
}

const initialState: FiltersState = {
    organization: JSON.parse(localStorage.getItem('organization')||'false'),
    branch: JSON.parse(localStorage.getItem('branch')||'false')
}

export const modalSlice = createSlice({
    name: 'theme',
    initialState,
    reducers: {
        setOrganization: (state, action) => {
            localStorage.setItem('organization', JSON.stringify(action.payload))
            state.organization = action.payload
        },
        setBranch: (state, action) => {
            localStorage.setItem('branch', JSON.stringify(action.payload))
            state.branch = action.payload
        },
    },
})

export const { setOrganization, setBranch } = modalSlice.actions

export default modalSlice.reducer