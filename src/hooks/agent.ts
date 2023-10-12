import axios from "axios";
import { useQuery } from "@tanstack/react-query";
import type { APIListBranch, APIListOrganization } from "@/global/models";

import { AxiosError } from "axios";

const organizationsInstance = axios.create({
  baseURL: "http://localhost:8000/api/organizations",
  headers: {
    Authorization: `Bearer ${localStorage.getItem("JWTToken")}`,
  },
});

export const tokenInstance = axios.create({
  baseURL: "http://localhost:8000/api/token/",
});

type APIListReponse<O> = {
  count: number;
  next: string | null;
  previous: null | null;
  results: O[];
};

const onError = async (e: Error) => {
  console.log(e)
  if (e instanceof AxiosError) {
    switch (e.response?.status) {
        case 401: {
            try {
                const {data} = await tokenInstance.post('/refresh/', {refresh: localStorage.getItem('JWTTokenRefresh')})
                localStorage.setItem('JWTToken', data.access)
            } catch {
                break
            }
            break
        }
        default: {
            localStorage.setItem('JWTToken', '')
            localStorage.setItem('JWTTokenRefresh', '')
        }
    }
  }
};


export const useOrganizations = () => {
  return useQuery(["organizations"], {
    queryFn: async () => {
      const { data } = await organizationsInstance.get("organizations/");
      return data as APIListReponse<APIListOrganization>;
    },
    onError,
  });
};

export const useBranches = () => {
  return useQuery(["branches"], {
    queryFn: async () => {
      const { data } = await organizationsInstance.get("branches/");
      return data as APIListReponse<APIListBranch>;
    },
    onError,
  });
};
