import type { APIList } from "@/global/api"
import type { APIBet } from "@/global/models"
import { organizationsInstance, useBaseGet, useBaseOptions } from "."


export const useBets = () => {
    return useBaseGet<APIList<APIBet>>(
        'bets',
        ['bets'],
        organizationsInstance,
    )
}

export const useBet = (id?: string) => {
    return useBaseGet<APIBet>(
        `bets/${id}`,
        ['bet', id],
        organizationsInstance
    )
}

export const useBetOptions = () => {
    return useBaseOptions(
        'bets',
        ['bet-options'],
        organizationsInstance
    )
}
