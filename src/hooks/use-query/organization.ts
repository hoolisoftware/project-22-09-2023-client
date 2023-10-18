import type { APIList } from "@/global/api"
import type { APIOrganization } from "@/global/models"
import { organizationsInstance, useBaseGet, useBaseOptions } from "."


export const useOrganizations = (filters?: {[key: string]: unknown}) => {
    return useBaseGet<APIList<APIOrganization>>(
      'organizations',
      ['organizations'],
      organizationsInstance,
      {
        ...filters
      }
    )
  }
  
  export const useOrganization = (id?: string) => {
    return useBaseGet<APIOrganization>(
      `organizations/${id}/`,
      ['organization', id],
      organizationsInstance
    )
  }
  
  export const useOrganizationOptions = () => {
    return useBaseOptions(
      'organizations/',
      ['organization-options'],
      organizationsInstance
    )
  }
  