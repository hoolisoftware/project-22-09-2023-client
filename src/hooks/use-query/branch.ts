import type { APIList } from "@/global/api"
import type { APIBranch } from "@/global/models"
import { organizationsInstance, useBaseGet, useBaseOptions } from "."


export const useBranches = (organization?: number) => {
    return useBaseGet<APIList<APIBranch>>(
        'branches',
        ['branches', {organization}],
        organizationsInstance,
        {
            organization: organization
        }
    )
}

export const useBranch = (id?: string) => {
    return useBaseGet<APIBranch>(
        `branches/${id}/`,
        ['branch', id],
        organizationsInstance
    )
}

export const useBranchOptions = () => {
    return useBaseOptions(
        `branches`,
        ['branch-options'],
        organizationsInstance
    )
}