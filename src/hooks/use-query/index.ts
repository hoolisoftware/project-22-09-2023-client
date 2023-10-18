import type { APIOptions } from '@/global/api';
import axios, { AxiosInstance, AxiosError } from 'axios';
import { useQuery } from '@tanstack/react-query';


export const API_URL = 'https://admin.savewithsports.com/'


export const organizationsInstance = axios.create({
    baseURL: `${API_URL}api/organizations`,
    headers: {
        Authorization: `Bearer ${localStorage.getItem('JWTToken')}`,
    },
});

export const usersInstance = axios.create({
    baseURL: `${API_URL}api/users`,
    headers: {
        Authorization: `Bearer ${localStorage.getItem('JWTToken')}`,
    },
})

export const tokenInstance = axios.create({
    baseURL: `${API_URL}api/token/`,
});


export const onError = async (e: Error) => {
    if (e instanceof AxiosError) {
        switch (e.response?.status) {
            case 401: {
                try {
                    const { data } = await tokenInstance.post('/refresh/', { refresh: localStorage.getItem('JWTTokenRefresh') })
                    if (data.access) {
                        localStorage.setItem('JWTToken', data.access)
                    } else {
                        localStorage.removeItem('JWTToken')
                        localStorage.removeItem('JWTTokenRefresh')
                    }
                    location.reload()
                } catch {
                    break
                }
                break
            }
            case 500: {
                break
            }
            case 404: {
                break
            }
            default: {
                localStorage.setItem('JWTToken', '')
                localStorage.setItem('JWTTokenRefresh', '')
                location.reload()
            }
        }
    }
};

export const useBaseGet = <Model>(
    path: string,
    keys: (string|number|undefined|{[key: string]: unknown})[],
    instance: AxiosInstance,
    params?: { [key: string]: unknown }
) => {
    return useQuery(keys, {
        queryFn: async () => {
            const { data } = await instance.get(path, {params: params});
            return data as Model
        },
        onError,
    })
}

export const useBaseOptions = (
    path: string,
    keys: string[],
    instance: AxiosInstance
) => {
    return useQuery(keys, {
        queryFn: async () => {
            const { data } = await instance.options(path);
            return data as APIOptions
        },
        onError,
    })
}


export {
    useUserOptions,
    useMe,
    useUsers,
    useUser,
} from './users'
export {
    useOrganizationOptions,
    useOrganizations,
    useOrganization
} from './organization'
export {
    useBranchOptions,
    useBranches,
    useBranch
} from './branch'
export {
    useOffers,
    useOffer,
    useOfferOptions
} from './offer'
export {
    useBets,
    useBet,
    useBetOptions
} from './bet'