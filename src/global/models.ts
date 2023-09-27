export interface Event
{
    id: number
    sport: string,
    league: string,
    timeStart: string,
    teamHome: string,
    teamAway: string,
    riskRate: 'low' | 'medium' | 'high'
    status: 'waiting' | 'live' | 'ended'
}

export interface Offer extends Event
{}

export interface User
{
    id: number
    username: string
    barname?: string
    role: 'superadmin' | 'admin' | 'staff'
}

export interface Bar
{
    id: number
    name: string
    branches: number
}

export interface Branch
{
    id: number
    address: string
    tables: number
}

export interface HistoryRecord
{
    date: string
    sport: string
    league: string
    teamHome: string
    teamAway: string
    tableNumber: number
    riskRate: 'low' | 'medium' | 'high'
    result: 'won' | 'loose' | 'pending'
}