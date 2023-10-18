import type { APIList } from "@/global/api"
import type { APIOffer } from "@/global/models"
import { organizationsInstance, useBaseGet, useBaseOptions } from "."


export const useOffers = () => {
    return useBaseGet<APIList<APIOffer>>(
        'offers',
        ['offers'],
        organizationsInstance,
    )
}

export const useOffer = (id?: string) => {
    return useBaseGet<APIOffer>(
        `offers/${id}`,
        ['offer', id],
        organizationsInstance
    )
}

export const useOfferOptions = () => {
    return useBaseOptions(
        'offers',
        ['offer-options'],
        organizationsInstance
    )
}
