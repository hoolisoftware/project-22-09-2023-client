import axios from "axios"
import { useQuery } from "@tanstack/react-query"


const organizationsInstance = axios.create({
    baseURL: 'http://localhost:8000/api/organizations',
    headers: {
        "Authorization" : `Bearer ${localStorage.getItem("JWTToken")}`
    }
  });


type APIListReponse<O> = {
    count: number
    next: string | null
    previous: null | null
    results: O[]
}


interface Organization
{
    id: number
    name: string
}

export const useOrganizations = () => {
    return useQuery({
        queryFn: async () => {
            const { data } = await organizationsInstance.get('organizations/')
            return data as APIListReponse<Organization>
        }
    })
}