import { createSlice } from '@reduxjs/toolkit'
import type {
    APIListOrganization,
    APIListBranch
} from '@/global/models'
import localforage from 'localforage'


interface FiltersState {
    organization: APIListOrganization | null,
    branch: APIListBranch | null
}

const initialState: FiltersState = {
    organization: await localforage.getItem('organization') || null,
    branch: await localforage.getItem('branch') || null
}

export const modalSlice = createSlice({
    name: 'theme',
    initialState,
    reducers: {
        setOrganization: (state, action) => {
            localforage.setItem('organization', action.payload)
            state.organization = action.payload
        },
        setBranch: (state, action) => {
            localforage.setItem('branch', action.payload)
            state.branch = action.payload
        },
    },
})

export const { setOrganization, setBranch } = modalSlice.actions

export default modalSlice.reducer