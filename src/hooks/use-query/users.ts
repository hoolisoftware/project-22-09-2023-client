import type { APIList } from "@/global/api"
import type { APIUser, APIUserMe } from "@/global/models"
import { usersInstance, useBaseGet, useBaseOptions } from "."


export const useMe = () => {
    return useBaseGet<APIUserMe>(
        'me/',
        ['me'],
        usersInstance
    )
}

export const useUsers = () => {
    return useBaseGet<APIList<APIUser>>(
        'users/',
        ['users'],
        usersInstance
    )
}

export const useUser = (id?: string) => {
    return useBaseGet<APIUser>(
        `users/${id}/`,
        ['user', id],
        usersInstance
    )
}

export const useUserOptions = () => {
    return useBaseOptions(
        'users/',
        ['user-options'],
        usersInstance
    )
}
